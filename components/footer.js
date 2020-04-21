import React from 'react'
import Link from 'next/link'
import config from '../config'
import T from '../t'
import '../styles/common.scss'

export default function Wrapper({ lang, availableLangs, url }) {
    if (!url) url = ''
    const t = T(lang)

    return (
        <footer className="text-muted mt-5">
            <div className="container">
                <p className="float-right">
                    <a href="#">{t('to-top')}</a>
                </p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    {config.langs.filter(l => !availableLangs || !availableLangs.length || availableLangs.includes(l)).map(l =>
                        <Link href={"/[lang]" + url} as={`/${l}${url}`} key={l}>
                            <a type="button" className={l === lang ? "btn btn-primary" : "btn btn-secondary"}>
                                {t(l)}
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    )
}
