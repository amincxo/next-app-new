import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <p>header</p>
    <Component {...pageProps} />
    <p>footer</p>
    </>
    )

}

export default MyApp
