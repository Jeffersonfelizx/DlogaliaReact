import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from './paginas/home/Home.tsx';
import ListaCategorias from './components/categoria/listaCategoria/ListaCategoria.tsx';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria.tsx';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:'/categorias',
        element: <ListaCategorias/>
      },
      {
        path:'/cadastrarCategoria',
        element: <FormularioCategoria/>
      },
      {
        path:'/editarCategoria/:id',
        element: <FormularioCategoria/>
      },
      {
        path:'/deletarCategoria/:id',
        element: <DeletarCategoria/>
      }
      

    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
