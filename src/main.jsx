import { createRoot } from 'react-dom/client'
import App from './App'
import './main.scss'
import heropyImage from './assets/heropy.png'

const imgEl = document.createElement('img')
imgEl.src = heropyImage
document.body.append(imgEl)

const app = document.querySelector('#app')
const root = createRoot(app)
root.render(<App />)
