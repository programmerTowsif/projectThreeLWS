import React from 'react'
import Nav from './nav/Nav'
import NavSearch from './nav/NavSearch'
import NavCard from './nav/NavCard'

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
    <div className="container mx-auto flex items-center justify-between">
      <a href="#" className="text-2xl font-bold">LWS.SHOP</a>

      <Nav />

      <div className="flex items-center space-x-4">
       <NavSearch />

      <NavCard />
      </div>
    </div>
  </header>
  )
}
