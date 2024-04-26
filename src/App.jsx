
import './App.css'
import InputForm from './Components/InputForm'
import Navbar from './Components/Navbar'
import WeatherDetails from './Components/WeatherDetails'
import { UseGlobalContent } from './Content'

function App() {
  const {checked} = UseGlobalContent()
  return (
    <main className='main'>
      <Navbar />
      <section className={checked ? 'divsection' : 'sections'}>
      <InputForm/>
       <WeatherDetails />
      </section>
    
    </main>
  )
}

export default App
