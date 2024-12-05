import React from 'react'
import Firstpage from '../components/Firstpage'
import Description from '../components/Description'
import Teacher from '../components/Teacher'
import Syllabus from '../components/Syllabus'
import Reviews from '../components/Reviews'
import Customers from '../components/Customers'
import MoreCourse from '../components/MoreCourse'
import Tabs from '../components/Tabs'



const CourseDetails = () => {
  return (
    <>
      <Firstpage />
      <Tabs />
      <Description />
      <Teacher />
      <Syllabus />
      <Reviews />
      <Customers />
      <MoreCourse />
    </>
  )
}

export default CourseDetails