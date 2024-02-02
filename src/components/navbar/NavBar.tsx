import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {

  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://th.bing.com/th/id/OIG1.WTPambL0xAwtUf8SnrNa?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dlogalia</span>
            </a>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">Cham no ZAP (55) 7070-7070</a>
                <a href="#" className="text-sm text-white dark:text-white hover:underline">Login</a>
            </div>
        </div>
    </nav>
    <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
                <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium rtl:space-x-reverse">
                    <li>
                    <Link to='/' className='text-white uppercase hover:underline'>Home</Link>
                    </li>
                    <li>
                    <Link to='/categorias' className='text-white uppercase hover:underline'>Categorias</Link>
                    </li>
                    <li>
                    <Link to='/cadastrarCategoria' className='text-white uppercase hover:underline'>CADASTRAR CATEGORIA</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar