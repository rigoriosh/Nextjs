import { MainLayout } from "@/components/layouts/MainLayout";
import styles from '@/styles/Home.module.css'
import Link from "next/link";



export default function index (){
    return (
      <MainLayout>
        <h1>Pricing</h1>
        <h2 className={styles.title}>
          Ir a 
          {/* <a href="/about">About</a> */}
          <Link href="/"> Home</Link>
        </h2>
      </MainLayout>   
  
    )
  }
