import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'

const name = 'CYGC'
export const siteTitle = 'CYGC'

const Layout = ({ children, home }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("User: ", user)
        setUser(user)
      })
      .catch(err => setUser(null))
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/Cheshire.jpg" />
        <meta
          name="description"
          content="CYGC App"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/Cheshire.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        {user && <p>Hi {user.username}, welcome to the CYGC app.</p>}
      </header>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Layout)