import Head from "next/head";
import {  PostCard, Categoires, PostWidget, Categories } from '../components'


const posts = [
  {  title: 'Titulo 01', excerpt: 'Resumo Titulo 01' },
  {  title: 'Titulo 02', excerpt: 'Resumo Titulo 02' },
]

export default function Home () {
  return (
    <div className="mx-auto px-10 mb-8">
      <Head>
        <title> My Blog</title>
        <link ref='icon' href="/favicon.ico"/>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) =>  <PostCard post={post} key={post.title}/>)}
        </div>
        
        <div className="lg:col-sapn-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}