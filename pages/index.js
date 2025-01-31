import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const clickHandler = () => {
        router.replace('/students');
    }
  return (
    <div className={styles.container}>
        <h1>aminborvayeh</h1>
        <ul>
            <li>
                <Link href='/courses' replace >Go to courses</Link> 
            </li>
            <li>
                <Link href='/users' >Go to users</Link> 
            </li>
            <li>
                <button onClick={clickHandler} >LogIn</button>
            </li>
        </ul>
    </div>
  )
}
