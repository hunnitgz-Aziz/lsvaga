import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import styled from '@emotion/styled'

const VideoContainer = styled.div``

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

const RapsPage = ({ data }) => {
  const videoPosts = data.allContentfulVideo.edges
  return (
    <>
      <SEO title="Cinema" />
      <VideoContainer>
        {videoPosts.map(({ node: post }) => (
          <VideoPost key={post.id}>
            <VideoWrapper
              dangerouslySetInnerHTML={{
                __html: post.videoLink.childMarkdownRemark.rawMarkdownBody,
              }}
            ></VideoWrapper>
          </VideoPost>
        ))}
      </VideoContainer>
    </>
  )
}

export default RapsPage

export const query = graphql`
  query VideoPostsPageQuery {
    allContentfulVideo(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          videoLink {
            childMarkdownRemark {
              id
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`
