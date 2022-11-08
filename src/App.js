import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, Home, ImageUpload, WebCapture } from './components'

const App = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/selfie' element={<WebCapture />} />
          <Route exact path='/upload' element={<ImageUpload />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  )
}

export const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default App
