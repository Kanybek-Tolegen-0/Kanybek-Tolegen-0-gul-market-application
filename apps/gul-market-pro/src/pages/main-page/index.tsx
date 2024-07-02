import React, { FC } from 'react'
import { Layout } from '@design-system/ui'
import './style.css'
import CatalogCard from './parts/catalog-card'
import data from './constants'
import CategoryCard from './parts/category-card'
import { Typography } from '@material-tailwind/react'
import PlantationSection from './parts/plantation-section'
import { useNavigate } from 'react-router-dom'

export const MainPage: FC = props => {
  const { catalogs, categories, plantationsSections } = data
  const navigate = useNavigate()

  const handlers: { [key: string]: () => void } = {
    Эквадор: () => navigate('/catalog'),
    Голландия: () => navigate('/catalog'),
    Коллумбия: () => navigate('/catalog'),
    Кения: () => navigate('/catalog')
  }

  return (
    <Layout fullHeader isLogged>
      <Layout.Content className="flex flex-col mt-10 gap-12 justify-center items-center !px-0 w-[1200px] mx-auto">
        <div className="flex gap-5 w-[1200px]">
          {catalogs.map((catalog, idx) => (
            <CatalogCard catalog={catalog} key={idx} onClick={handlers[catalog.categoryName]} />
          ))}
        </div>
        <div>
          <Typography children="Популярные категории" className="font-normal text-3xl mb-8" />
          <div className="flex flex-wrap gap-x-5 gap-y-6 ">
            {categories.map((category, idx) => (
              <CategoryCard category={category} key={idx} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[1200px] justify-center">
          {plantationsSections.map((sectionData, idx) => (
            <PlantationSection sectionData={sectionData} key={idx} />
          ))}
        </div>
      </Layout.Content>
    </Layout>
  )
}
