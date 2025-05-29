import { Brush, Droplets, Scissors, Thermometer } from 'lucide-react'
import './App.css'
import Header from './components/Header/Header'
import { TbRazorElectric } from 'react-icons/tb'

function App() {

  return (
    <>
      <Header/>
      <main className='w-full max-w-[1024px] px-4 mx-auto'>
        <section id='home' className="flex flex-col items-center justify-center min-h-screen text-center">
          <img src='/primetrims-logo.png' className='' />
          <h1>Haircuts for Everyone!</h1>
          <h2 className='text-white mb-4'>Transform your look with us!</h2>
          <button>Book Now!</button>
        </section>
        <section id='about' className='text-center flex flex-col justify-center scroll-mt-22 py-4 min-h-screen'>
          <h1>Welcome to PRIME TRIMS</h1>
          <p>Step into your new story. Prime Trims is more than just a barbershop — it's a space to relax, recharge, and transform your style. Located in the heart of the city, we bring quality grooming and a personal touch to every visit.</p>
        </section>
        <section id='services' className='text-center flex flex-col justify-center scroll-mt-22'>
          <h1>Services</h1>
          <p className='text-white mb-4'>At Prime Trims, we believe in providing top-notch grooming services that cater to your unique style and preferences. Our skilled barbers are dedicated to delivering exceptional haircuts, shaves, and grooming experiences that leave you looking sharp and feeling confident.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
            <div className='w-full max-w-full aspect-[2/1] justify-center items-center flex flex-col gap-3'>
              <Scissors size={48} />
              <h3>Haircut</h3>
              <p>Precision haircuts tailored to your style. Whether it's a classic taper, modern fade, or trendy crop, our barbers ensure you walk out sharp and confident.</p>
            </div>
            <div className='w-full max-w-full aspect-[2/1] justify-center items-center flex flex-col gap-3'>
              <Droplets size={48} />
              <h3>Hairwash</h3>
              <p>A relaxing hair wash using premium shampoo and scalp massage techniques to cleanse and refresh your hair before or after your haircut.</p>
            </div>
            <div className='w-full max-w-full aspect-[2/1] justify-center items-center flex flex-col gap-3'>
              <Thermometer size={48} />
              <h3>Hot Towel</h3>
              <p>Experience a soothing hot towel treatment that opens pores, softens facial hair, and preps your skin for the ultimate shave or relaxation.</p>
            </div>
            <div className='w-full max-w-full aspect-[2/1] justify-center items-center flex flex-col gap-3'>
              <TbRazorElectric size={48} />
              <h3>Shaving</h3>
              <p>A clean, smooth shave using traditional straight razors and warm lather for precision and comfort. Includes post-shave balm for refreshed skin.</p>
            </div>
            <div className='w-full max-w-full md:max-w-[476px] mx-auto aspect-[2/1] justify-center items-center flex flex-col gap-3 col-span-1 md:col-span-2'>
              <Brush size={48} />
              <h3>Basic Coloring</h3>
              <p>Enhance or refresh your look with basic hair coloring services. Ideal for covering grays or trying subtle tones without full dye jobs.</p>
            </div>
          </div>
        </section>
        <section id='inspiration' className='text-center flex flex-col justify-center scroll-mt-22'>
          <h1>Inspiration</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
            <img src='/result1.webp' />
            <img src='/result2.webp' />
            <img src='/result3.webp' />
            <img src='/result4.webp' />
          </div>
        </section>
      </main>
    
    </>
  )
}

export default App
