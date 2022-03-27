import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import media from '../../styles2/media.module.css'
import arrow from '../../assets/images/svg/right-arrow.svg'
import ImgLoader from '../ImgLoader'

const CarouselCard = ({content}) => {
    let {para,date,alt,img} = content
  return (
    <div className={`${styles.carouselCard} ${media.heightCard}`}>
        <div className={`${styles.carouselCardImg}`}> 
            <ImgLoader  src={img} alt={alt}/>
        </div>
        <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
            <span className="text-xs text-grey">
            {date}
            </span>
            <span className="mt-3 text-grey light-text">
               {para}
            </span>
            <Link href="/newsdetail">
            <a className='relative mt-3 flex' >
                Read More
                <span className='  ml-1 mb-2'>
                <Image  src={arrow} alt="Arrow" />

                </span>
            </a>
            </Link>
        </div>
    </div>
  )
}

export default CarouselCard