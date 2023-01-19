import React from 'react';

export default function NavBar() {
  return (
    <div className="w-full h-16 bg-zinc-900 text-white absolute top-0 shadow-lg">
      <div className="h-16 mx-auto px-3 w-[90%] flex flex-row items-center">
        <h1 className="text-2xl font-bold">DND.Local</h1>
      </div>
    </div>
  )
}
