import { BrandButton, Container, Layout, PlusIcon } from '@design-system/ui'
import { Button, Typography } from '@material-tailwind/react'
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'
import FullName from '../individual-page/forms/FullName/FullName'
import Shop from '../entity-page/Forms/Shop/Shop'
import { useActionData, useLoaderData, useSubmit } from 'react-router-dom'
import { FormErrors, FormValues } from '../entity-page/entity-page'
import { Bounce, Flip, Slide, toast, ToastContainer, Zoom } from 'react-toastify'

const newValues = {
  name: '',
  description: '',
  addresses: [''],
  work_schedule: {
    days: {
      Mon: {
        start: '',
        end: ''
      },
      Tue: {
        start: '',
        end: ''
      },
      Wed: {
        start: '',
        end: ''
      },
      Thu: {
        start: '',
        end: ''
      },
      Fri: {
        start: '',
        end: ''
      },
      Sat: {
        start: '',
        end: ''
      }
    }
  }
}

const newErrors = {
  name: '',
  description: '',
  addresses: [''],
  work_schedule: {
    days: {
      Mon: {
        start: '',
        end: ''
      },
      Tue: {
        start: '',
        end: ''
      },
      Wed: {
        start: '',
        end: ''
      },
      Thu: {
        start: '',
        end: ''
      },
      Fri: {
        start: '',
        end: ''
      },
      Sat: {
        start: '',
        end: ''
      }
    }
  }
}

const ProfilePage: FunctionComponent = () => {
  const loaderData = useLoaderData() as {
    pro_user_info: {
      pro_user: { name: string; surname: string; patronym: string; role: string; city: string }
      shops: {
        id: number
        name: 'string'
        description: 'string'
        addresses: string[]
        shop_logo: 'string'
        work_schedule: {
          days: {
            Mon: {
              start: 'string'
              end: 'string'
            }
            Tue: {
              start: 'string'
              end: 'string'
            }
          }
        }
      }
    }
  }

  const {
    pro_user_info: { pro_user, shops }
  } = loaderData
  const [userInfo, setUserInfo] = useState<any>(
    {
      name: pro_user?.name,
      surname: pro_user?.surname,
      patronym: pro_user?.patronym
    } || {}
  )

  const actionData = useActionData()

  const [isUserInfoChanged, setIsUserInfoChanged] = useState<boolean>(false)
  const [isShopsChanged, setIsShopsChanged] = useState<boolean>(false)
  const [userShops, setUserShops] = useState<any>(shops || [])

  const resetWorkSchedule = {
    days: {
      Mon: { start: '', end: '' },
      Tue: { start: '', end: '' },
      Wed: { start: '', end: '' },
      Thu: { start: '', end: '' },
      Fri: { start: '', end: '' },
      Sat: { start: '', end: '' }
    }
  }

  const submit = useSubmit()

  const resetShop = shop => ({
    name: '',
    description: '',
    addresses: shop.addresses?.map(() => ''),
    work_schedule: { ...resetWorkSchedule }
  })

  const cloneWithResetFields = originalArray => {
    return originalArray?.map(shop => resetShop(shop))
  }

  const [userShopsErrors, setUserShopsErrors] = useState<any>(cloneWithResetFields(shops || []))
  const [userInfoErrors, setUserInfoErrors] = useState<any>({ name: '', surname: '', patronym: '' })

  const handleHardValChange = (vals: FormValues, shopIndex: number) => {
    setUserShops(prev => {
      const ShopValues = [...prev] as FormValues[]
      ShopValues[shopIndex] = vals
      setIsShopsChanged(true)
      return ShopValues
    })
  }

  const handleHardErrorChange = (errs: FormErrors, shopIndex: number) => {
    setUserShopsErrors(prev => {
      const ShopErrors = [...prev] as FormErrors[]
      ShopErrors[shopIndex] = errs
      return ShopErrors
    })
  }

  const addShop = () => {
    setUserShops(prev => {
      const newFormValues = [...(prev as FormValues[])]
      newFormValues.push(newValues)
      return newFormValues
    })
    setUserShopsErrors(prev => {
      const newFormErrors = [...(prev as FormErrors[])]
      newFormErrors.push(newErrors)
      return newFormErrors
    })
  }
  const handleUserFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
    setIsUserInfoChanged(true)
  }
  const handleUserFormErrors = ({ name, errorMessage }: { name: string; errorMessage: string }) => {
    setUserInfoErrors(prev => ({ ...prev, [name]: errorMessage }))
  }

  const handleChangeUserRole = () => {
    const toRole = pro_user.role === 'individual' ? 'shop' : 'individual'
    submit({ type: 'update_role', submitData: { role: toRole } }, { method: 'post', encType: 'application/json' })
  }
  const handleSaveNewInitials = () => {
    submit({ type: 'update_initials', submitData: userInfo }, { method: 'put', encType: 'application/json' })
    setIsUserInfoChanged(false)
  }
  const prepareShopsData = shops => {
    return shops?.map(({ pro_user_id, shop_logo, ...rest }) => rest)
  }
  const handleSaveNewShops = () => {
    if (isShopsChanged) {
      const cleanedShops = prepareShopsData(userShops)
      submit({ type: 'update_shops', submitData: cleanedShops }, { method: 'put', encType: 'application/json' })
      setIsShopsChanged(false) // Сбрасываем флаг изменения магазинов после сохранения
    }
  }

  useEffect(() => {
    if (actionData) {
      if (actionData.success) {
        toast.success(actionData.message)
      } else {
        toast.error(actionData.message)
      }
    }
  }, [actionData])
  return (
    <Layout fullHeader isLogged className="bg-gray-50">
      <Layout.Content className="flex flex-col mt-10 gap-10 !px-0 w-[1200px] mx-auto ">
        <Typography children={'Мои данные'} className="font-normal text-5xl text-gray-900" />
        <div className={'flex flex-col gap-8'}>
          <div className={'flex items-center justify-between bg-primary py-5 px-8'}>
            <div className={'flex flex-col gap-5'}>
              <Typography children={'Магазин'} className={'font-bold text-3xl text-gray-900'} />
              <Typography children={'Роль'} className="font-normal text-base text-gray-700" />
            </div>
            <BrandButton
              onClick={handleChangeUserRole}
              className={'bg-gray-100 flex justify-center items-center rounded-lg font-medium text-base text-gray-700'}
            >
              Сменить роль на {pro_user.role === 'individual' ? 'юр.лицо' : 'физ.лицо'}
            </BrandButton>
          </div>
          <div className={'flex justify-between gap-9'}>
            <div className={'flex flex-col gap-5 max-w-[534px]'}>
              <Typography children={'ФИО'} className={'font-bold text-3xl text-gray-900'} />
              <Typography
                children={
                  'Введите полностью Ваши ФИО, они будут использованы для оформления заказов и дальнейшего взаимодействия с Вами.'
                }
                className="font-normal text-base text-gray-700"
              />
            </div>
            <Container className={'flex-col mb-6 min-w-[630px]'}>
              <FullName
                formValues={userInfo}
                handleFormChange={handleUserFormChange}
                formErrors={userInfoErrors}
                handleError={handleUserFormErrors}
              />
              {isUserInfoChanged && (
                <Button className={'w-[127px] h-[50px] rounded-md bg-gray-800'} onClick={handleSaveNewInitials}>
                  Сохранить
                </Button>
              )}
            </Container>
          </div>
          <div className={'flex justify-between gap-9'}>
            <div className={'flex flex-col gap-5 max-w-[534px]'}>
              <Typography children={'Информация о магазине'} className={'font-bold text-3xl text-gray-900'} />
              <Typography
                children={
                  'Предоставьте информацию о магазине, чтобы покупателям и поставщикам было понятно с кем они коммуницируют и у кого покупают товар'
                }
                className="font-normal text-base text-gray-700"
              />
            </div>
            <div>
              {userShops?.map((shop, index) => (
                <Container className={'flex-col mb-6 min-w-[630px]'}>
                  <Shop
                    key={index}
                    handleHardErrorChange={handleHardErrorChange}
                    handleHardValChange={handleHardValChange}
                    shopFormErrors={userShopsErrors[index]}
                    shopFormValues={shop}
                    shopIndex={index}
                  />
                </Container>
              ))}
              <Button
                onClick={addShop}
                className="normal-case flex justify-center items-center mb-6 gap-6 w-full !rounded-base px-[32px] py-[20px] bg-gray-800 h-16 "
              >
                <PlusIcon alt="add shop" className="bg-primary rounded-full" />
                <Typography children="Добавить еще магазин" className="font-bold text-base text-primary" />
              </Button>
              {isShopsChanged && (
                <Button
                  className={
                    'normal-case flex justify-center items-center mb-6 gap-6 w-full !rounded-base px-[32px] py-[20px] bg-gray-800'
                  }
                  onClick={handleSaveNewShops}
                >
                  <Typography
                    children="Сохранить информацию о магазинах"
                    className="font-bold text-base text-primary"
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
        <ToastContainer transition={Slide} autoClose={1500} limit={2} />
      </Layout.Content>
    </Layout>
  )
}

export default ProfilePage
