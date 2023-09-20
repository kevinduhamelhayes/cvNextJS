"use client"
import React, { use } from 'react';
import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Body from '@/components/Body';
import Cards from '@/components/Cards';
import Section from '@/components/Section';
import Swipper2 from '@/components/Swipper2';
import Swipper from '@/components/Swipper';
import Services from '@/components/Services';
import Transparency from '@/components/Transparencia';
import CallToAction from '@/components/CallToAction';
import PaymentMethods from '@/components/PaymentMethods';
import CardsPrices from '@/components/CardsPrices';


export default function Home() {
  return (
    <NextUIProvider>
      <main className="max-w-full relative flex flex-col items-center h-full bg-black ">
        <Navbar />
        <Hero />
        <Services />
        <Transparency />
        <PaymentMethods />
        <CardsPrices />
        <CallToAction />
        {/*
        <Cards />
        <Body />
        <Swipper/>
        <Swipper2/>
        <Section />
        */}
        <Footer />
      </main>
    </NextUIProvider>
  )
}
