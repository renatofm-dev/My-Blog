import Head from "next/head";


const posts = [
  {  title: 'Titulo 01', excerpt: 'Resumo Titulo 01' },
  {  title: 'Titulo 02', excerpt: 'Resumo Titulo 02' },
]

export default function Home () {
  return (
    <div className="mx-aut px-10 mb-8">
      <Head>
        <title> My Blog</title>
        <link ref='icon' href="/favicon.ico"/>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}

      </div>
    </div>
  )
}