import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'


export default function AboutPage() {
  return (
    <>
      
        <h1>About</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>{/* <a href="/">Home</a> */}
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}          
          <code className={styles.code}>pages/about.jsx</code>
        </p>
      
    </>

  )
}

//  https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern
AboutPage.getLayout = (page: JSX.Element[]) => {
  return (
    <MainLayout>
      <DarkLayout>
        
        {page} {/* este page es lo que esta en la parte superior */}
      </DarkLayout>
    </MainLayout>
  )
}