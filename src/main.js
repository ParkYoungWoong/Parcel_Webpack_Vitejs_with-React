import { createRoot } from 'react-dom/client'
import App from '~/src/App.jsx'

const app = document.querySelector('#app')
const root = createRoot(app)
root.render(<App />)
