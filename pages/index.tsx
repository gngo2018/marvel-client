import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeCss from '../styles/home.module.css'

export default function Home(){
  return(
    <div className={homeCss.home_container}>Home Page!</div>
  );
}
