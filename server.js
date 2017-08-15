import config from './config'
import apiRouter from './api'
import express from 'express'
import serverRender from './serverRender'

// create server
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  serverRender()
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      })
    })
    .catch(console.error)
})


server.use('/api', apiRouter)
server.use(express.static('public')) // rendering static files from public

// look for this port and host say when running
server.listen(config.port, config.host, () => {
  console.info('Express is running on port: ', config.port)
})
