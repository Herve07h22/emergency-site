import Post from '/admin/templates/post.js'
//import {fr} from 'https://unpkg.com/netlify-cms-locales@1.10.0/dist/esm/fr/index.js?module'

CMS.registerPreviewTemplate('posts', Post)
CMS.registerPreviewStyle('/assets/css/style.css')

//CMS.registerLocale('fr', fr);