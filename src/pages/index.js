import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Flyer from '../images/event-flyer.jpeg'

import SEO from '~/components/seo'

const Wrapper = styled.div``
const EventFlyer = styled.img`
  display: block;
  max-width: 640px;
  margin: auto;
  width: 100%;
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`Hanz`, `Gran Santo`, `Lake side vagabond`]} />
    <Wrapper>
      <p style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Click flyer below to get tickets!
      </p>
      <a
        href="https://www.eventbrite.com/e/vagabond-musuem-the-score-art-installation-tickets-128073977715"
        target="_blank"
      >
        <EventFlyer src={Flyer} />
      </a>
    </Wrapper>
  </>
)

export default IndexPage
