import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './src/components/App'

import config from './config'
import axios from 'axios'

// Render to server
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/clubs`)
    .then(resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={resp.data.clubs} />
        ),
        initialData: resp.data.clubs
      }
    })

export default serverRender
