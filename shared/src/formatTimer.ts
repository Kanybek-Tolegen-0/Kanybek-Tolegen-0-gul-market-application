export const formatTimer = (defaultSeconds: number) => {
  const minutes = Math.floor(defaultSeconds / 60)
  const seconds = defaultSeconds % 60

  return {
    minutes: `${minutes < 10 ? `0${minutes}` : minutes}`,
    seconds: `${seconds < 10 ? `0${seconds}` : seconds}`
  }
}
