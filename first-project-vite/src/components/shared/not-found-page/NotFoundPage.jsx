import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

  const navigate = useNavigate()
  const [count, setCount] = useState(5)
  
  useEffect(() => {
    if (count === 0){
      navigate("/")
    }
    const time = setTimeout(() => {
      setCount(count - 1)
    },1000)
  },[count])

  return (
    <div>
      <h1>Ooops...</h1>
      <h2>There is nothing here</h2>
      <p>You will be redirected in {count} second to home page...</p>
    </div>
  );
};

export default NotFoundPage;
