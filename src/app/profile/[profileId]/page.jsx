'use client'
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const SingleProfile = () => {
  const params = useParams();
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/about')
  }

  return (
    <div>
      This page shows info about {params.profileId}
      <p onClick={handleRedirect}>Click here to see about section</p>
      <p onClick={() => router.back()}>Click here to go back</p>
    </div>
  )
}

export default SingleProfile