import express from 'express'
import path from 'path'

const port = process.env.PORT || 3000
const server = express()

const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

// serve file from a given root directory
const staticMiddleware = express.static('dist')
server.use(staticMiddleware)

server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
