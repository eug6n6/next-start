import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import config from '../config'
import T from '../t'

export default function Wrapper({ lang }) {
    const t = T(lang)

    return (
        <React.Fragment>
            <Head>
                <title>{config.siteName} - {t('site-description')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header id="#">
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <Link href={"/[lang]"} as={`/${lang}`}>
                        <h5 className="my-0 mr-md-auto clickable">{config.siteName}</h5>
                    </Link>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link href={"/[lang]"} as={`/${lang}#about`} >
                            <a className="p-2 text-dark">{t('about')}</a>
                        </Link>
                        <Link href={"/[lang]"} as={`/${lang}#photo`} >
                            <a className="p-2 text-dark">{t('photo')}</a>
                        </Link>
                    </nav>
                    <Link href={"/[lang]/contacts"} as={`/${lang}/contacts`} >
                        <a className="btn btn-outline-primary">{t('contacts')}</a>
                    </Link>
                </div>
            </header>
        </React.Fragment>
    )
}
