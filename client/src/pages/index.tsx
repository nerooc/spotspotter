import type { NextPage } from 'next'
import { Map } from '@/components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Map />
    </div>
  )
}

export default Home
