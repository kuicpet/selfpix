import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Button from './Button'

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Link to='/selfie'>Take Selfie</Link>
        <Link to='/upload'>Upload Photo</Link>
      </Wrapper>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
 
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 2px solid black;
  height: 25rem;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: black;
    margin: 1rem;
    border: 2px solid black;
    padding: 0.125rem 0.5rem;
    border-radius: 8px;
    background-color: rgb(255, 171, 76);
    cursor: pointer;
    left: -2px;
    top: -2px;
    z-index: 20;
    box-shadow: 2px 2px black;
    transition: 0.1s ease-in-out;
    &:hover {
     
      transform: translateY(2px);
      box-shadow: 0 0 0;
    }
  }
  @media screen and (max-width: 400px) {
    width: 90% ;
  }
`
export default Home
