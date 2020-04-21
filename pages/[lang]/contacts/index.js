import Link from 'next/link'
import Head from 'next/head'
import config from '../../../config'
import Wrapper from '../../../components/wrapper'
import T from '../../../t'

export async function getStaticPaths() {
  const paths = config.langs.map(lang => ({ params: { lang } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const lang = params.lang || config.defaultLang
  return { props: { lang } }
}


export default function Contacts({ lang }) {
  const t = T(lang)

  return (
    <Wrapper lang={lang} url="/contacts">
      <Head>
        <title>{config.siteName} - {t('contacts')}</title>
      </Head>
      <div className="container contacts">
        <h1 className="my-5">{t('contacts')}</h1>
        <div className="jumbotron">
          <h1 className="display-4">{t('contact-us')}</h1>
          <hr className="my-4" />
          <a href="tel:+380991166611">+380991166611</a>
        </div>

      </div>

    </Wrapper>
  )
}
