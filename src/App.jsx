import './App.css'
import Navbar from './components/Navbar'
import TicketBooking from './components/TicketBooking'
import { ImageProvider } from './components/ImageContext'

function App() {

  return (
    <div>
      <Navbar/>
      <ImageProvider>
        <TicketBooking/>
      </ImageProvider>
    </div>
  )
}

export default App