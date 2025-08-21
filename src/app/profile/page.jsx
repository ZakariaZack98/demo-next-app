'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const profile = () => {
  const {name} = useRouter();
  return (
    <div>
      This is a profile page for {name}
    </div>
  )
}

export default profile