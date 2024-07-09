# FROM node:20-slim AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

# FROM base AS gul-market-pro
# COPY . /src/
# WORKDIR /src/apps/gul-market-pro
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
# EXPOSE 4251
# CMD [ "pnpm", "start" ]

# FROM base AS gul-market-plantation
# COPY . /src/
# WORKDIR /src/apps/gul-market-plantation
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
# EXPOSE 4250
# CMD [ "pnpm", "start" ]
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
WORKDIR /src
COPY . .

FROM base AS gul-market-pro
COPY --from=builder /src /src
WORKDIR /src/apps/gul-market-pro
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
EXPOSE 4251
CMD ["pnpm", "start"]

FROM base AS gul-market-plantation
COPY --from=builder /src /src
WORKDIR /src/apps/gul-market-plantation
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
EXPOSE 4250
CMD ["pnpm", "start"]
