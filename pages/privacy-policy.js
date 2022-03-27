import Head from 'next/head'
import Layout from '../Components/Layout/Layout'
import Hero from '../Components/Privacy/Hero'
import PrivacyDetail from '../Components/Privacy/PrivacyDetail'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

const Privacy = () => {
    const blue = useRef()
    const white = useRef()
    useEffect(() => {
        setTimeout(() => {

            let toBeSubtracted = 248
            let height = white.current.clientHeight - toBeSubtracted
            blue.current.style.height = height + "px"

        }, 500)
    }, [])
    return (
        <>
            <Head>
                <title>Privacy & Policy || Zajil</title>
                <meta name="description" content="" />

            </Head>
            <Layout>
                <Hero />
                <section ref={blue} className={`relative    ${styles.blueBack}`}>

                    <div ref={white} className={`   overflow-visible   ${styles.ph}    ${styles.whiteCard}`}>
                        <PrivacyDetail />
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Privacy