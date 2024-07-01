import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import client from './ApolloClient.js'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from './context/auContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>
)
