import { Fragment } from 'react'
import './App.css'
import SendMoney from './components/SendMoney'

function App() {

  return (
    <>
      <div className='m-4'>
        Send TT the Simple Way
      </div>
      <div class='container'>
        <SendMoney />
      </div>
    </>
  )
}

export default App
