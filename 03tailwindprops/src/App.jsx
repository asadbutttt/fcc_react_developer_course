import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
      <Card username="Asadullah" />
      <Card />
      <Card />
    </>
  )
}

export default App
