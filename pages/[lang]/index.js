import config from '../../config'
import Index from '../index'
import { getPosts } from '../../utils'

export async function getStaticProps(ctx) {
  const lang = ctx.params.lang || config.defaultLang
  const posts = getPosts(lang)
  return { props: { lang, posts }}
}

export async function getStaticPaths() {
  const paths = config.langs.map(lang => ({ params: { lang }}))
  return { paths, fallback: false }
}

export default Index