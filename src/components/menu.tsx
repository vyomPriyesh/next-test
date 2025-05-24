'use client'

import { useMyContext } from '@/context/Allcontext'
import Link from 'next/link'
import React from 'react'

interface MenuItem {
    name: string
    to: string | number
}

interface MenuProps {
    menu: MenuItem[]
    first?: boolean
}

const Menu: React.FC<MenuProps> = ({ menu, first }) => {
    const { setOurdata, setReporterdata, setActive, active } = useMyContext()

    const handleClick = (list: MenuItem) => {
        setActive(list)
        setOurdata()
        setReporterdata()
    }

    return (
        <div className={`flex flex-row gap-1 overflow-x-auto text-nowrap heading pt-1.5 ps-1 pb-1`}>
            {first && (
                <Link
                    href="/"
                    onClick={() => handleClick({ name: 'Home', to: 0 })}
                    className={`${active?.to === 0 ? 'text-black border-black' : 'text-red-500 border-red-500'
                        } px-3 border-2 rounded-md font-medium text-sm md:text-base`}
                >
                    Home
                </Link>
            )}
            {menu.map((list, i) => (
                <Link
                    key={i}
                    href={`${list.to}`}
                    onClick={() => handleClick(list)}
                    className={`${active?.to !== list.to ? 'text-red-500 border-red-500' : 'border-black'
                        } px-3 border-2 rounded-md font-medium text-sm md:text-base`}
                >
                    {list.name}
                </Link>
            ))}
        </div>
    )
}

export default Menu
