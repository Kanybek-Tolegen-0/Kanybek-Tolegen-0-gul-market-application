import { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import Individual from 'assets/images/individual.png'
import Entity from 'assets/images/entity.png'
import './ChooseRole.style.css'
import { Container } from '@design-system/ui'
const ChooseRoleLayout: FC = props => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Typography children="Выберите вашу роль" className="font-bold text-3xl" />

      <div className="flex gap-5">
        <Container>
          <div className="role_type">
            <Typography children="Физ. Лицо" className="role_type_name" />
            <Typography children="Если вы собираетесь делать заказы как физ. лицо" className="role_type_desc" />
          </div>
          <img alt="individual" src={Individual} />
        </Container>

        <Container>
          <div className="role_type">
            <Typography children="Магазин" className="role_type_name" />
            <Typography children="Если вы собираетесь делать заказы как юр. лицо" className="role_type_desc" />
          </div>
          <img alt="entity" src={Entity} />
        </Container>
      </div>
    </div>
  )
}

export default ChooseRoleLayout
