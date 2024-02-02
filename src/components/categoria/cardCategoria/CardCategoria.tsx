import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardTemas({categoria}: CardCategoriaProps) {
  return (
    <div className='flex flex-col justify-between overflow-hidden border rounded-2xl'>
      <header className='px-6 py-2 text-2xl font-bold text-white dark:bg-gray-900'>Categoria</header>
      <p className='h-full p-8 text-3xl bg-slate-200'>{categoria.nome}</p>
      <p className='h-full p-8 text-3xl bg-slate-200'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='flex items-center justify-center w-full py-2 bg-indigo-800 text-slate-100 hover:bg-indigo-800'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='flex items-center justify-center w-full bg-red-900 text-slate-100 hover:bg-red-700'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas