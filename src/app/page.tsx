import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
        
        <div className="flex flex-1 p-2 gap-3">
          <div className="w-96 gap-3">
            <div className="bg-zinc-900 rounded-md mb-3 h-28">Menu</div>
            <aside className="bg-zinc-900 rounded-md mb-3">Aside</aside>
          </div>
          <main className="flex-1 bg-zinc-900 rounded-md">Conteudo</main>
        </div>
        
        <footer className="bg-zinc-950 p-6">Footer</footer>

    </div>
  );
}
