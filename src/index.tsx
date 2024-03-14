import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import '../src/styles/globals.css'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// ReactDOM.render(<App />, document.getElementById("root"));
