import React from 'react'
import styled from '@emotion/styled'
import Logo from '../../images/hero-logo.png'
import Background from '../../images/hero-image.jpg'

const Wrapper = styled.div`
  background-image: url(${Background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  z-index: 0;
`
const Title = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  max-width: 260px;
`

const Banner = () => {
  return (
    <Wrapper>
      <Title src={Logo} />
    </Wrapper>
  )
}

export default Banner
