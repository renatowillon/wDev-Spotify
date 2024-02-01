import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
        
        <div className="flex flex-1 p-2 gap-3">
          <div className="w-64 gap-3">
            <div className="bg-zinc-900 rounded-md">Menu</div>
            <aside>Aside</aside>
          </div>
          <main className="flex-1 bg-zinc-900 rounded-md">Conteudo</main>
        </div>
        
        <footer>Footer</footer>

    </div>
  );
}
