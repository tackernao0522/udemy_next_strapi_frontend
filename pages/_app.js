import React from "react"
import App from "next/app"
import Head from "next/Head"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head></Head>
        <Component {...pageProps} />
      </>
    )
  }
}
