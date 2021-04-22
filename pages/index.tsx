import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NextJs Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
    </div>
  )
}
