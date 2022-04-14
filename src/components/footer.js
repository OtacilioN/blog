import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Feito com <a href="https://contentful.com/">Contentful</a> e{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/OtacilioN/blog">Código Fonte</a>
    </div>
  </Container>
)

export default Footer
