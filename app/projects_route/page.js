import React from 'react'
import SomeFeaturedProjects from '../SomeFeaturedProjects'
import LaptopsContainer from '../Laptops/LaptopsContainer'

export const metadata = {
  title: "My Projects",
  description: "Tech Projects created by me",
};

const page = () => {
  return (
    <div>
      <SomeFeaturedProjects />
      <LaptopsContainer  />
    </div>
  )
}

export default page
