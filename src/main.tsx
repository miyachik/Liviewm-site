import * as React from 'react'
import { Provider } from 'react-redux'
import * as ReactDOM from 'react-dom'
import store from './store'
import App from './components/App'

const root = document.querySelector('.main')

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<Provider store={store}><App /></Provider>, root)
} else {
  const render = async () => {
    const { default: App } = (await import('./components/App'))
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root
    )
  }
  render()
}
