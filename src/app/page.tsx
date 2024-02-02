import { Home as HomeIcon, Search, LibraryBig, ArrowRight, Plus, List, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from "next/image";


export default function Home() {
  return (
    
    //INICIO DO PROJETO
    <div className="h-screen flex flex-col">
     
        {/* INICIO PAGE TOTAL */}
        <div className="flex flex-1 p-2 gap-3">
          {/* INICIO ASIDE TOTAL */}    
     
          <div className="w-96 gap-3 grid grid-rows-5">
           
            {/* INICIO MENU PRIMARIO */}    
            <div className="bg-zinc-900 rounded-md row-span-1 p-3 flex flex-col justify-center">
              <a href="#" className="flex items-center gap-3 pb-3 text-zinc-400 font-semibold hover:text-zinc-200"><HomeIcon /> Inicio</a>
              <a href="#" className="flex items-center gap-3 pb-3 text-zinc-400 font-semibold hover:text-zinc-200" ><Search /> Buscar</a>
            </div>
            {/* FIM MENU PRIMARIO */}        
            
            {/* INICIO MENU SECUNDARIO */}        
            <aside className="bg-zinc-900 rounded-md  row-span-4 p-3">
              <div className='flex flex-cols-2 justify-between'>
                <a href="#" className='flex items-center gap-3 pb-3 text-zinc-400 font-semibold hover:text-zinc-200'><LibraryBig />Sua Biblioteca</a>
                <div className='flex gap-3'>
                  <a href='#' className='text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 flex items-center justify-center rounded-full h-8 w-8'><Plus /></a>
                  <a href='#' className='text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 flex items-center justify-center rounded-full h-8 w-8'><ArrowRight /></a>
                </div>
              </div>

              <div className='flex grid-cols-4 justify-between p-2'>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Playlist</a>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Artista</a>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Álbum</a>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Podcasts</a>
              </div>

              <div className='flex flex-cols-2 justify-between'>
              <a href='#' className='text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 flex items-center justify-center rounded-full h-8 w-8'><Search size={18} /></a>
              <a href='#' className='flex items-center gap-2 text-sm text-zinc-400 font-semibold hover:scale-105 hover:text-zinc-200'>Recentes <List size={18}/></a>
              
              </div>

            </aside>
            {/* FIM MENU SECUNDARIO */}          
          
          </div>
          
          {/* INICIO CONTEUDO */}
          <main className="flex-1 bg-zinc-900 rounded-md p-3">
            <div className='flex items-center gap-3 p-3'>
              <button className='rounded-full bg-black/40 w-8 h-8 flex items-center justify-center pr-1'><ChevronLeft /></button>
              <button className='rounded-full bg-black/30 w-8 h-8 flex items-center justify-center pl-1'><ChevronRight /></button>
            </div>
            <h1 className='font-bold text-3xl mt-5 mb-3'>Olá, Boa tarde</h1>

             {/* INICIO GRID */}
             <div className='grid grid-cols-4 gap-4'>
              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

              <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src="/Believer.jpg" alt="Believer" width={50} height={50} />
                Believer
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
              </div>

             </div>
             {/* FIM GRID */}
          </main>
          {/* FIM CONTEUDO */}
        
        </div>
        {/* FIM PAGE TOTAL */}

        {/* INICIO FOOTER */}
        <footer className="bg-zinc-950 p-6">
          Footer
        </footer>
        {/* FIM FOOTER */}
    
    </div>
    
  );
}
