'use client'

import { useEffect } from 'react'
import { useMyContext } from '@/context/Allcontext'
import { apiFunctions } from '@/apis/apiFunction'
import API from '@/apis/Apis'
import Menu from './menu'
import First from './first'

type MenuItem = {
  id: number
  name: string
  slug?: string
}

type LinkItem = {
  to: string
  name: string
  slug?: string
  title?:string
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
      const dynamicMenu: LinkItem[] = cmsData.map((list) => ({
        to: `our-board/${list.id}`,
        name: list.name,
        slug: list.slug,
      }))

      const staticItem: LinkItem[] = [
        {
          to: '/cms/reporter-sign-up',
          name: 'Reporter Login',
          slug: 'reporter-sign-up',
        },
      ]
      setMenu2([...staticItem, ...dynamicMenu])
    }
  }

  const allMenu3 = async () => {
    const response = await apiGet(API.cms)
    if (response.status) {
      const cmsExtraData: MenuItem[] = response.data
      const dynamicMenu: LinkItem[] = cmsExtraData.map((list) => ({
        to: `cms/${list.id}`,
        name: list.title,
        slug: list.slug,
      }))
      setMenu2((prev: LinkItem[]) => [...prev, ...dynamicMenu])
    }
  }

  useEffect(() => {
    allMenu()
    allMenu2()
    allMenu3()
  }, [])

  return (
    <>
      <Menu menu={menu2} />
      <First />
      {children}
    </>
  )
}
