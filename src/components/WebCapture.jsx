import React, { useState, useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import styled from 'styled-components'
import Button from './Button'

const videoConstraints = {
  width: 240,
  height: 240,
  facingMode: 'user',
}

const WebCapture = () => {
  const webcamRef = useRef(null)
  const [image, setImage] = useState('')

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  }, [webcamRef])

  const handleCapture = (e) => {
    e.preventDefault()
    capture()
  }

  const handleRetake = (e) => {
    e.preventDefault()
    setImage('')
  }

  return (
    <Container>
      {image === '' ? (
        <Webcam
          audio={false}
          height={240}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={240}
          videoConstraints={videoConstraints}
        />
      ) : (
        <img src={image} />
      )}

      <Wrapper>
        {image !== '' ? (
          <Button text='Retake Selfie' handleClick={handleRetake} />
        ) : (
          <Button text='Capture Selfie' handleClick={handleCapture} />
        )}
      </Wrapper>
    </Container>
  )
}

export const Container = styled.div`
  width: 90%;
  //border: 2px solid black ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover ;
  }
`
export const Wrapper = styled.div`
  //border: 2px solid red ;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  margin: 1rem;
`
export default WebCapture
