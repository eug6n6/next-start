import Link from 'next/link'
import { getPosts } from '../../../utils'
import config from '../../../config'
import Wrapper from '../../../components/wrapper'
import Head from 'next/head'

export async function getStaticPaths() {
  const paths = config.langs.map(lang => ({ params: { lang } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const lang = params.lang || config.defaultLang
  const posts = getPosts(lang)
  return { props: { posts, lang } }
}

export default function Posts({ posts, lang }) {
  return (
    <Wrapper lang={lang} url="/posts">
      <Head>
        <title>{config.siteName}</title>
      </Head>
      <div className="container">
        <div className="row">
          {posts.map((post, i) =>
            <div className="col-12 col-md-6 my-2 px-1" key={i}>
              <div className="card clickable" style={{ backgroundImage: `url(${post.image})` }}>
                <Link href="/[lang]/post/[name]" as={`/${post.lang}/post/${post.name}`}>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </Wrapper >
  )
}
