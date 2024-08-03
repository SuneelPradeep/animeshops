import React from 'react'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'> 
      <h1> 404</h1>
<h3> I guess , you're lost </h3>
 <p> The page you are looking for does not exist. Please click the button below to get back to the Home page</p>
    <NavLink to ='/'><Button > HOME </Button> </NavLink>
    
    </div></Wrapper>
  )
}
const Wrapper = styled.section`
.container {
  padding: 9rem 0;
  text-align : center;
}
  h1 {
    font-size: 10rem;

  }
  p {
    margin : 2rem 0;
  }
`;
export default ErrorPage