import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header/>
      <main className='w-full max-w-[1024px] px-3 mx-auto'>
        <section id='home' className="flex flex-col items-center justify-center">
          <img src='/primetrims-logo.png' className='' />
          <h1 className='text-white'>Haircuts for Everyone!</h1>
          <h2 className='text-white'>Transform your look with us!</h2>
        </section>
        <section id='services' className='text-center flex flex-col'>
          <h1 className='text-white mb-4'>Services</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <h5>Service Name</h5>
              <p>Service desc.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <h5>Service Name</h5>
              <p>Service desc.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <h5>Service Name</h5>
              <p>Service desc.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <h5>Service Name</h5>
              <p>Service desc.</p>
            </div>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default App
