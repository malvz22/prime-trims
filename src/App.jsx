import { Brush, Droplets, Scissors, Thermometer } from 'lucide-react'
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
        <section id='services' className='text-center flex flex-col justify-center'>
          <h1 className='text-white mb-4'>Services</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <Scissors size={48} />
              <h3>Haircut</h3>
              <p>Precision haircuts tailored to your style. Whether it's a classic taper, modern fade, or trendy crop, our barbers ensure you walk out sharp and confident.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <Droplets size={48} />
              <h3>Hairwash</h3>
              <p>A relaxing hair wash using premium shampoo and scalp massage techniques to cleanse and refresh your hair before or after your haircut.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <Thermometer size={48} />
              <h3>Hot Towel</h3>
              <p>Experience a soothing hot towel treatment that opens pores, softens facial hair, and preps your skin for the ultimate shave or relaxation.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full aspect-square justify-center items-center flex flex-col gap-3'>
              <Scissors size={48} />
              <h3>Shaving</h3>
              <p>A clean, smooth shave using traditional straight razors and warm lather for precision and comfort. Includes post-shave balm for refreshed skin.</p>
            </div>
            <div className='border-2 border-white p-6 w-full max-w-full md:max-w-[476px] mx-auto aspect-square justify-center items-center flex flex-col gap-3 col-span-1 md:col-span-2'>
              <Brush size={48} />
              <h3>Basic Coloring</h3>
              <p>Enhance or refresh your look with basic hair coloring services. Ideal for covering grays or trying subtle tones without full dye jobs.</p>
            </div>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default App
