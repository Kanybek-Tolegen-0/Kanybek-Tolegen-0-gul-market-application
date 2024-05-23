import { FC } from 'react'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import Individual from 'assets/images/individual.png'
import Entity from 'assets/images/entity.png'
import './ChooseRole.style.css'
import { Container } from '@design-system/ui'
import { Link } from 'react-router-dom'
const ChooseRoleLayout: FC = props => {
  return (
    <div className="flex flex-col items-center gap-6 mt-24 ">
      <Typography children="Выберите вашу роль" className="font-bold text-3xl" />

      <div className="flex gap-5">
        <Link to={'individual'}>
          <Container>
            <div className="role_type">
              <Typography children="Физ. Лицо" className="role_type_name" />
              <Typography children="Если вы собираетесь делать заказы как физ. лицо" className="role_type_desc" />
            </div>
            <img alt="individual" src={Individual} />
          </Container>
        </Link>
        <Link to={'entity'}>
          <Container>
            <div className="role_type">
              <Typography children="Магазин" className="role_type_name" />
              <Typography children="Если вы собираетесь делать заказы как юр. лицо" className="role_type_desc" />
            </div>
            <img alt="entity" src={Entity} />
          </Container>
        </Link>
      </div>
      <Link
        className={
          'text-base font-medium text-tip bg-secondary rounded-lg py-[21px] px-[13px] h-12 flex justify-center items-center self-end'
        }
        to={''}
      >
        Пропустить
      </Link>
    </div>
  )
}

export default ChooseRoleLayout
