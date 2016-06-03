import Metalsmith from 'metalsmith'
//import smithWatch from 'metalsmith-watch'
import smithMarkdown from 'metalsmith-markdown'
import smithSass from 'metalsmith-sass'
import smithAutoprefixer from 'metalsmith-autoprefixer'
import smithImageMin from 'metalsmith-imagemin'
import smithInclude from 'metalsmith-include'
import smithLayouts from 'metalsmith-layouts'
//import smithLinkCheck from 'metalsmith-linkcheck'
import smithGzip from 'metalsmith-gzip'
//import smithBrowserSync from 'metalsmith-browser-sync'

const smith = new Metalsmith(__dirname)
smith.source('src/site')
// smith.use(smithWatch({'src/**/*': true, livereload: true}))
smith.use(smithMarkdown({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
}))
smith.use(smithSass({outputStyle: 'expanded', sourceMap: true}))
smith.use(smithAutoprefixer({}))
smith.use(smithImageMin({
  optimizationLevel: 3,
  svgoPlugins: [{removeViewBox: false}],
}))
smith.use(smithInclude({}))
smith.use(smithLayouts({
  engine: 'handlebars',
  directory: 'src/layouts',
}))
// smith.use(smithLinkCheck({}))
smith.use(smithGzip({}))
// smith.use(smithBrowserSync({
//   server: 'build/',
//   files: ['src/layouts/*.html'],
// }))

export default smith
