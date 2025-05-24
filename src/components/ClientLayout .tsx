'use client'

import { useEffect } from 'react'
import { useMyContext } from '@/context/Allcontext'
import { apiFunctions } from '@/apis/apiFunction'
import API from '@/apis/Apis'
import Hero from '@/components/hero'
import Menu from './menu'

type MenuItem = {
  id: number
  name: string
  slug?: string
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { setMenu, setMenu2, menu2 } = useMyContext()
  const { apiGet } = apiFunctions()

  const allMenu = async () => {
    const response = await apiGet(API.category)
    if (response.status) {
      const menuData: MenuItem[] = response.data
      setMenu(
        menuData.map((list) => ({
          to: list.id,
          name: list.name,
        }))
      )
    }
  }

  const allMenu2 = async () => {
    const response = await apiGet(API.cmsMenu)
    if (response.status) {
      const cmsData: MenuItem[] = response.data
      const dynamicMenu = cmsData.map((list) => ({
        to: `our-board/${list.id}`,
        name: list.name,
        slug: list.slug,
      }))

      const staticItem = [
        {
          to: '/cms/reporter-sign-up',
          name: 'Reporter Login',
          slug: 'reporter-sign-up',
        },
      ]
      setMenu2([...staticItem, ...dynamicMenu])
    }
  }

  useEffect(() => {
    allMenu()
    allMenu2()
  }, [])

  return (
    <>
      <Menu menu={menu2} />
      <Hero />
      {children}
    </>
  )
}
