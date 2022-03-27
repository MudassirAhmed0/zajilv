import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css'
import styles from '../../styles2/media.module.css'
import HeroImg from '../../assets/NewImages/media-center/banner/banner.jpg'
import ImgLoader from '../ImgLoader'


const Hero = () => {
    return (
        <section className={styles.heroSection} >
            <span className='absolute top-0 left-0 w-full h-full img_container'> 
                <ImgLoader  src={HeroImg} alt="Hero Image"/>
            </span>
            <span className={`absolute  ${overlays.mediaOverlay}`}></span> 
            <span className={`absolute  ${overlays.ecommercesecond}`}></span> 
            <span className="bottomOverlay "></span>
            <div className="container  relative text-white uppercase">
                <h1 className='md:text-4xl text-xl medium-font mb-2'>
                    MEDIA CENTER
                </h1>
            </div>
        </section>
    )
}

export default Hero