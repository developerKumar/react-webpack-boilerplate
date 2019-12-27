import React from 'react'

import { render } from 'react-dom'

import MyComponent from '../../lib/index'

import MyComponent2 from '../../lib/index2'

const App = () => (
  <div>
    <MyComponent />
    <MyComponent2 />
  </div>
)
render(<App />, document.getElementById('root'))
