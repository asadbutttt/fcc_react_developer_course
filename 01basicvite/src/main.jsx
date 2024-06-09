import React from 'react'
import ReactDOM from 'react-dom/client'

const areactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: "_blank" },
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  areactElement
)
