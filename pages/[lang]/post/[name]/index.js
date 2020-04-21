import Head from 'next/head'
import Link from 'next/link'
import Wrapper from '../../../../components/wrapper'
import config from '../../../../config'
import utils from '../../../../utils'
import T from '../../../../t'


export async function getStaticPaths() {
  let paths = []
  config.langs.forEach(lang => {
    paths = paths.concat(utils.getPosts(lang)
      .map(post => ({ params: { name: post.name, lang } }))
    )
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = utils.getPost(params.name, params.lang)
  return { props: { post, lang: params.lang } }
}


export default function Post({ post, lang }) {
  const t = T(lang)

  return (
    <Wrapper lang={lang} url={'/post/' + post.name} availableLangs={post.availableLangs} back={'/posts'}>
      <div className="container">
        <Head>
          <title>{config.siteName} - {post.title}</title>
        </Head>
        <Link href={"/[lang]/posts"} as={`/${lang}/posts`}>
          <button className="my-5 btn btn-primary">{t('to-list')}</button>
        </Link>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        {post.image &&
          <img src={post.image} className="img-fluid" />
        }
        <hr />
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Wrapper>
  )
}
