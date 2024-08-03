import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const PageNavigation = (props) => {
  return (
    <Wrapper>
        <NavLink to='/' > Home  </NavLink>/  {props.name}
    </Wrapper>
  )
}


const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 3.2rem;
  }
`;
