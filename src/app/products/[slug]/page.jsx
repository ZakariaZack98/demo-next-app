"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const productDetails = () => {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug;

  const redirectToReview = () => {
    router.push(`/products/${slug}/reviews/`)
  }

  
  return (
    <div>
      <div className="text-2xl">details about product: {slug}</div>
      <p onClick={redirectToReview}>Click here to see the reviews</p>
    </div>
  )
}

export default productDetails