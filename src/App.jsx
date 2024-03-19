import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import View from './Pages/View'
import QuillEditor from './Pages/QuillEditor'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/quilleditor' element={<QuillEditor />} />

      </Routes>

    </>
  )
}

export default App
