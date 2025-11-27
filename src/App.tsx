import { useState } from 'react'
import HomePage from './pages/HomePage'
import BlogListPage from './pages/BlogListPage'
import BlogPage from './pages/BlogPage'
import NavMenu from './components/NavMenu'

function App() {
  const [page, setPage] = useState("home")

  const changePage = (newPage: string) => {
    setPage(newPage)
    return true
  }

  return (
    <main className="bg-gray-900 h-screen text-white">
      <div id="banner" className="flex flex-col items-center">
        <h1 className="">Coming soon:</h1>
        <h1>jasmincarmona.com/blog</h1>
        <p className='text-center'>
          This web app is being developed with Vite and React by <i>RafinDev.io</i>
        </p>
      </div>
      <NavMenu onLinkClick={changePage} />
      {/* Page to Navigate */}      
      {(page === 'home') && (<HomePage />)}
      {(page === 'blog') && (<BlogListPage />)}
      {(page === 'write') && (<BlogPage />)}
    </main>
  )
}

export default App
