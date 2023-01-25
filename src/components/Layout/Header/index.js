import * as React from "react"
import * as styles from "./styles.module.scss"

import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <Link to="/" className={styles.logo}>Logo</Link>
      </div>
    </header>
  )
}

export default Header
