import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import logo from './logo.png'

import './resets.css'
import styles from './styles.module.styl'


const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="Main Logo" />
      </Link>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div className={styles.main}>
    <Helmet
      title="Yo"
      meta={[
        { name: 'description', content: 'My portfolio' },
        { name: 'keywords', content: 'portfolio, cubbk, job' },
      ]}
    />
    <Sidebar />
    <div>
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
