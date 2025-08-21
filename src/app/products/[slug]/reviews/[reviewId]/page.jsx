'use client'

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const singleReview = () => {
  const params = useParams();
  const router = useRouter();

  console.log(params)

  return (
    <div>
      <p>This is review {params.reviewId} for product</p>
      <p>The slug is {JSON.stringify(params.slug)}</p>
    </div>
  )
}

export default singleReview