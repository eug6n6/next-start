import React from 'react'
import config from '../../config'
import T from '../../t'
import Link from 'next/link'
import { getPosts } from '../../utils'
import Wrapper from '../../components/wrapper'
import './index.scss'

// export

export async function getStaticProps() {
    const posts = getPosts(config.defaultLang)
    return { props: { posts } }
}


export default class Index extends React.Component {

    state = {
        proposedLang: null
    }

    componentDidMount() {
        const { lang } = this.props
        if (lang) return
        const proposedLang = (navigator.language || navigator.userLanguage).substr(0, 2)
        const propose = config.defaultLang !== proposedLang
            && config.langs.includes(proposedLang)
        if (propose) this.setState({ proposedLang })
    }

    render() {
        const lang = this.props.lang || config.defaultLang
        const posts = this.props.posts.slice(0, 2)
        const t = T(lang)

        return (
            <Wrapper lang={lang}>
                <div className="container">

                    { !this.props.lang && this.state.proposedLang &&
                        <div class="alert alert-primary my-5" role="alert">
                            <Link href="/[lang]" as={'/' + this.state.proposedLang} >
                                <a>
                                    {t('change-to-' + this.state.proposedLang)}
                                </a>

                            </Link>
                        </div>
                    }

                    <div className="jumbotron my-5" id="welcome">
                        <h1 className="display-4">{t('welcome')}</h1>
                        <pre><code>{`
Edit this page: /pages/index.js, /pages/index.scss
Edit header and footer: /components/header.js and /components/footer.js
Set langs list and other settings: /configs.js
Use translations: add to /t/translations.js and use t('term')
Add post: add <name> folder in /posts/ containing <lang>.md files
                        `}</code></pre>
                    </div>

                    <div className="jumbotron my-5" id="about">
                        <h1 className="display-4">{t('about')}</h1>
                        <p className="lead">{t('about-text')}</p>
                    </div>

                    <img id="photo" src="https://images.unsplash.com/photo-1543340036-4d687b18b66e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1344&q=80" className="img-fluid" alt="That's me" />

                    <div className="row mt-5">
                        <div className="col clickable">
                            <Link href="/[lang]/posts" as={`/${lang}/posts`} >
                                <h2>{t('learn-more')}</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        {posts.map((post, i) =>
                            <div className="col" key={i}>
                                <div className="card m-3 clickable" style={{ backgroundImage: `url(${post.image})` }}>
                                    <Link href="/[lang]/post/[name]" as={`/${lang}/post/${post.name}`} >
                                        <div className="card-body">
                                            <h3 className="card-title">{post.title}</h3>
                                            <p className="card-text">{post.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </Wrapper>
        )
    }
}