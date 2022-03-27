import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css'
import styles from '../../styles2/media.module.css'
import HeroImg from '../../assets/NewImages/term-of-use/banner/banner.jpg'
import ImgLoader from '../ImgLoader'


const Hero = () => {
    return (
        <section className={styles.heroSection} >
            <span className='absolute top-0 left-0 h-full w-full img_container'> 
                <ImgLoader src={HeroImg} alt="Term Banner"/>
            </span>
            <span className={`absolute  ${overlays.theappOverlay}`}></span>
            <span className={`absolute  ${overlays.secondAppOverlay}`}></span>
            <span className="bottomOverlay"></span>
            <div className="w-full px-[50px]  relative text-white uppercase">
                <h1 className='md:text-4xl medium-font lg:mb-2 text-xl'>
                    FIND THE NEAREST BRANCH
                </h1>
            </div>
        </section>
    )
}

export default Hero
