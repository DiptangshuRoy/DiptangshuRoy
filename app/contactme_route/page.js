import React from 'react'
import HaveIdeaAboutProject from '../HaveIdeaAboutProject/HaveIdeaAboutProject'
import ImageComponent from '../HaveIdeaAboutProject/ImageComponent'

export const metadata = {
  title: "Contact me",
  description: "Contact me",
};

const page = () => {
  return (
    <div className='flex justify-between items-center mx-36 mb-28 h-[70vh]'>
      <HaveIdeaAboutProject />
      <ImageComponent />
    </div>
  )
}

export default page
