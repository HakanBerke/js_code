import React from 'react'
import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    console.log("mount Landing page ");
    return () => console.log("unmount Landing page")
  },[])
  return (
    <h2>Welcome to Student Manager</h2>
  )
}

export default LandingPage
