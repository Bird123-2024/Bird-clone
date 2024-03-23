'use client'
import React from 'react'
import Carousel from '~/app/src/components/Carousel/Carousel'
import { default as classNames } from 'embla-carousel-class-names'
import Image from 'next/image'

const ClassNames = () => {
  const images = [
    '/images/carousel/1.jpg',
    '/images/carousel/2.jpg',
    '/images/carousel/3.jpg',
    '/images/carousel/4.jpg',
    '/images/carousel/5.jpg',
  ]

  const slides = images.map((src, idx) => (
    <div className="b relative h-[400px] w-full overflow-hidden rounded-lg" key={idx}>
      <Image fill src={src} alt={'img' + idx} className="w-full object-cover" />
    </div>
  ))
  return (
    <Carousel
      slides={slides}
      options={{ loop: true }}
      slideClass="flex-[0_0_70%]  [&:not(.is-snapped)]:opacity-[0.16]"
      carouselPlugins={[classNames()]}
    />
  )
}

const ClassNamesCode = `
'use client'
import React from 'react'
import Carousel from '~/app/src/components/Carousel/Carousel'
import { default as classNames } from 'embla-carousel-class-names'
import Image from 'next/image'

const ClassNames = () => {
  const images = [
    '/images/carousel/1.jpg',
    '/images/carousel/2.jpg',
    '/images/carousel/3.jpg',
    '/images/carousel/4.jpg',
    '/images/carousel/5.jpg',
  ]

  const slides = images.map((src, idx) => (
    <div className="b relative h-[400px] w-full overflow-hidden rounded-lg" key={idx}>
      <Image fill src={src} alt={'img' + idx} className="w-full object-cover" />
    </div>
  ))
  return (
    <Carousel slides={slides} options={{ loop: true }} slideClass="flex-[0_0_70%]" carouselPlugins={[classNames()]} />
  )
}
`

export { ClassNames, ClassNamesCode }
