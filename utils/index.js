const fs = require('fs')
const { join } = require('path')
const parseMD = require('parse-md').default
const { Remarkable } = require('remarkable')
const md = new Remarkable()


const postsSource = join(process.cwd(), '/posts')


const getPost = (name, lang, extended = true) => {
    const data = fs.readFileSync(join(postsSource, name, lang + '.md'), 'utf8')
    const { metadata, content } = parseMD(data)
    const availableLangs = fs.readdirSync(join(postsSource, name))
        .filter(filename => fs.lstatSync(join(postsSource, name, filename)).isFile)
        .map(filename => filename.substr(0, filename.length - 3))
    if (!extended)
        return {
            name, title: metadata.title, description: metadata.description,
            image: metadata.image || null, lang
        }
    return {
        name,
        title: metadata.title,
        description: metadata.description,
        image: metadata.image || null,
        lang, availableLangs,
        html: md.render(content)
    }
}

const getPosts = (lang) => {
    // Find all posts names: all dirs names in '/posts' with <lang>.md file
    const names = fs.readdirSync(postsSource)
        .filter(name => fs.lstatSync(join(postsSource, name)).isDirectory)
        .filter(name => fs.readdirSync(join(postsSource, name))
            .some(name => name === lang + '.md')
        )
        .sort((a, b) =>
            fs.statSync(join(postsSource, b)).mtime.getTime() -
            fs.statSync(join(postsSource, a)).mtime.getTime()
        )
    return names.map(name => getPost(name, lang, false))
}

exports.getPost = getPost
exports.getPosts = getPosts