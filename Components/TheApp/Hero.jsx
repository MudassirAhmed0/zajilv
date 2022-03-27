import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css'
import styles from '../../styles2/media.module.css'
import HeroImg from '../../assets/NewImages/app-page/banner/Zajil-Mobile-Application-bannle.jpg'
import ImgLoader from '../ImgLoader'

const Hero = () => {
    return (
        <section className={styles.heroSection} >
            <span className='absolute img_container top-0 left-0 h-full w-full'> 
                <ImgLoader src={HeroImg} alt="App Banner"/>
            </span>
            <span className={`absolute top-0 left-0 w-full h-full  ${overlays.theappOverlay}`}></span>
            <span className={`absolute  ${overlays.secondAppOverlay}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white uppercase">
                <h1 className='md:text-4xl medium-font lg:mb-2 text-xl'>
                    ZAJIL MOBILE APPLICATION
                </h1>
            </div>
        </section>
    )
}

export default Hero