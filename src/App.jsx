import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='container'>
      <header className="py-4 border-b-2">
        <Header></Header>
      </header>
      <main className='md:flex'>
        <div className='md:w-2/3'>
          <Blogs></Blogs>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-3xl">Sidebar</h1>
        </div>
      </main>
    </div>
  )
}

export default App
