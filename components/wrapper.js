import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/common.scss'

export default function Wrapper({ lang, url, availableLangs, back, children }) {
    if (!url) url = ''

    return (
        <React.Fragment>
            <Header lang={lang} />
            {children}
            <Footer lang={lang} url={url} availableLangs={availableLangs} />
        </React.Fragment>
    )
}
