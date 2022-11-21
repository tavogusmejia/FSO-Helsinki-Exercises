import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const Names = [
]

const result = Names.map(name => name.id)
//console.log(result)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App names={Names} />
)