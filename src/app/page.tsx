"use client"
import { useMyContext } from '@/context/Allcontext'
import React from 'react'

const page = () => {

  const { firstRefresh } = useMyContext();

  return (
    <div>
      <h1>{firstRefresh}</h1>
    </div>
  )
}

export default page