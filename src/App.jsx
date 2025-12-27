
import './App.css'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
   <>
   <Navbar />
   <ErrorBoundary>
   <AppRoutes/>
   </ErrorBoundary>
   </>
  )
}

export default App
