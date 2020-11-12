import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'

const VideoContainer = styled.div`
  margin-bottom: 3rem;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const VideoPost = styled.div`
  margin-bottom: 2rem;
`

const VideoBanner = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <>
      <VideoContainer>
        <Slider {...settings}>
          {posts.map(post => (
            <VideoPost key={post.id}>
              <VideoWrapper
                dangerouslySetInnerHTML={{
                  __html: post.node.videoLink.videoLink,
                }}
              ></VideoWrapper>
            </VideoPost>
          ))}
        </Slider>
      </VideoContainer>
    </>
  )
}

export default VideoBanner
