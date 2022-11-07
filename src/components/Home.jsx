import React from 'react'
import styled from 'styled-components'
import WebCapture from './WebCapture'

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <WebCapture />
      </Wrapper>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  //border: 2px solid black;
  height: 25rem;
`
export default Home
