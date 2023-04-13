import { createRoot } from 'react-dom/client'
import App from '~/App.jsx'
import '~/main.scss'

const app = document.querySelector('#app')
const root = createRoot(app)
root.render(<App />)
