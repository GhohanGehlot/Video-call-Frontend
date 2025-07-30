import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SocketProvider } from './context/socketContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <SocketProvider>
   <App />
 </SocketProvider>
  </BrowserRouter>
 
   
)
