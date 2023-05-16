import React from 'react'

const fullYear = new Date();
const year = fullYear.getFullYear();

export default function Footer() {
  return (
    <footer className='min-w-screen mx-auto'>
        <div>
            <p>&#169;{year} Untitled Band</p>
        </div>
    </footer>
  )
}
