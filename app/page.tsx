"use client"
import React, { use } from 'react';
import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Stack from '@/components/Stack';
import Body1 from '@/components/Body1';
import CallToAction from '@/components/CallToAction';
import Section from '@/components/Section';
import Transparency from '@/components/Transparencia';
import NewContent1 from '@/components/NewContent1';
import NewContent2 from '@/components/NewContent2';
import NewContent3 from '@/components/NewContent3';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="max-w-full relative flex flex-col items-center h-full bg-black ">
        <Navbar />
        <Hero />
        <Stack/>
        <div className='m-4 md:m-10 scroll-smooth'>
        <NewContent2 />
        <NewContent1 />
        <NewContent3 />
        </div>
        
        
        <Transparency />
        <Body1 />
        <CallToAction />
        <Section />
        <Footer />
      </main>
    </NextUIProvider>
  )
}
