import Link from 'next/link'
import Layout from '../components/Layout'
import { useGet } from 'restful-react'
import MyApp from './_app'  

const IndexPage = () => {
  const { error, loading, data } = useGet({path: "/cover/aToxNjE4NDs.jpg"})

  return(
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    {error && <h1>{error.message}</h1>}
    {loading && <h2>Loading...</h2>}
    {data && <img alt="Doggy!" src={data.message} />}
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
  )
}

export default IndexPage
