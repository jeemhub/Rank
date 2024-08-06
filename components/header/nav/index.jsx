import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "حسابك",
    href: "/work",
  },
  {
    title: "المنتجات",
    href: "/about",
  },
  {
    title: "العالمية",
    href: "/contact",
  },
  {
    title: "حول",
    href: "/contact",
  },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                 
                    {
                      navItems.map( (data, index) => {
                        return <h2 className='text-white'>{data.title}</h2>
                      })
                    }
            </div>
          
        </div>
        <Curve />
    </motion.div>
  )
}