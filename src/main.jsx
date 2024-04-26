import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Content from './Content.jsx'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
   <Content>
      <React.StrictMode> 
    <App />
    </React.StrictMode> 
   </Content>
  </QueryClientProvider> 
  ,
)
