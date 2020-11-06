import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>
      For all business inquiries:{' '}
      <a href="mailto:mgmt@gransanto.com">MGMT@GRANSANTO.COM</a>
    </p>
  </>
)

export default ContactPage
