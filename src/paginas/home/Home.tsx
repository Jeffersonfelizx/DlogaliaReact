import './Home.css';


function Home() {
    return (
        <>
        <div className="flex justify-center dark:bg-gray-900">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col items-center justify-center gap-4 py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindos</h2>
              <p className='text-xl'>Crie, Colabore e Divulgue suas postagens</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='px-4 py-2 bg-white rounded dark:bg-gray-900'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://th.bing.com/th/id/OIG1.WTPambL0xAwtUf8SnrNa?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;