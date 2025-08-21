'use client'
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const docs = () => {

  const params = useParams();
  const router = useRouter();
  console.log(params.slug)

  

  return (
    <div>
      {
        params.slug.length === 1 ? (
          <h3>Showing feature {params.slug[0]}</h3>
        ) : (
          <h3>
            Showing concept {params.slug[1]} for feature {params.slug[0]}
          </h3>
        )
      }
      <Link href='/docs/laptops/lenovo'>Click here to check laptops</Link>
    </div>
  )
}

export default docs