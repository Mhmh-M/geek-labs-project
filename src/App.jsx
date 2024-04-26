import './styls/App.css'
import './styls/all.min.css'
import './all.min.js'
import NabBar from './components/NabBar.jsx'
import Content from './components/Content.jsx'

function App() {

  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#202020] flex relative'>
        <NabBar />
        <Content />
      </div>
    </>
  )
}

export default App
