---
title: Quick start
description:  Multilanguage starter based on Next.js, SASS and MD files.
---

# Next start

Starter configured for exporting headless static site. Includes:

- Next.js
- SCSS stylings
- Importing posts in .md files

# Site structure

- Index page
- Contacts page
- Posts page
    - [Post page]

# Quick start

```
yarn
yarn dev
```

To export static file:

```
yarn export
```

### Edit index page

```
/pages/index/index.js
/pages/index/index.scss
```

### Edit header and footer

```
/components/wrapper.js
/components/header.js
/components/footer.js
```

### Set languages list and other settings:

```
/configs.js
```

### Use translation in react components

Add to

```
/t/translations.js
```

Import T

```
import T from '../t'
```

Use t

```
const t = T(lang)

<a>{t('term')}</a>
```

### Add posts

Create <name> folder in

```
/posts
```

containing <lang>.md files