import * as React from "react"
import * as styles from "./styles.module.scss"
import Header from "./Header"
import "normalize.css"
import '../../styles/fonts.scss'
import "../../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header/>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className='container'>
          <div className={styles.footerWrap}>
            <a href="https://github.com/ark1700">Github</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
