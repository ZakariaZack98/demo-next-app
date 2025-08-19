"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const productDetails = () => {
  const params = useParams();
  const productId = params.productId;
  return (
    <div>
      <div className="text-2xl">details about product: {productId}</div>
    </div>
  )
}

export default productDetails