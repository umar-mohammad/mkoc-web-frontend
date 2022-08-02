import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My Kind of Cruise</title>
                <meta name="My Kind of Cruise" content="Demo for My Kind of Cruise" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
