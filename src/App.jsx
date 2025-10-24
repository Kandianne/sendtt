import './App.css'
import SendMoney from './components/SendMoney'

function App() {

  return (
    <>
      <div className='m-10'>
        <img src='sendtt/assets/sendttlogo.png' alt='SendTT Logo' className='m-auto mt-6 mb-6 w-300 h-10' />
        Send TT the Simple Way
      </div>
      <div className='container'>
        <SendMoney />
      </div>
    </>
  )
}

export default App
