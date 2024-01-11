import { ClickCounter } from './ClickCounter'
import './styles.css'

export const App = () => {
  const name = 'hi'
  return (
    <div>
      <h1>
        Hi React Typescript Webpack - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClickCounter />
    </div>
  )
}
