'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const review = () => {
  const {slug} = useParams();
  const router = useRouter();

  const redirectToReview = () => {
    router.push(`/products/${slug}/reviews/review-1`)
  }

  return (
    <div>
      <p>This is the review page for product: {slug}</p>
      <p onClick={redirectToReview}>Click here to read the full review</p>
    </div>
    
  )
}

export default review