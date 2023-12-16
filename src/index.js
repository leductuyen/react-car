import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { SearchContextProvider } from './context/SearchContext'
import Footer from './pages/car/Footer'
import Navbar from './components/navbar/Navbar'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <SearchContextProvider>
                <Navbar />
                <App />
                <Footer />
            </SearchContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
)
