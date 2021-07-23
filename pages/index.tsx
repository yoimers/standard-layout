import Head from 'next/head'
import { prependOnceListener } from 'process'
import Layout from '../components/layout'


export default function Home() {
  return (
    <Layout title="">
      <Head>
        <title>standard-layout</title>
      </Head>
      <div className={" text-5xl text-blue-800"}>aaa</div>
    </Layout>
  )
}
