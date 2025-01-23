import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4'>

    <div className="flex items-center justify-between">
      <h1 className="text-2xl">Blog Platform</h1>
      <nav >
        <ul className='flex space-x-4'>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/create" className="hover:underline">Create Post</a></li>
        </ul>
      </nav>

    </div>
      
    </header>
  )
}

export default Header

