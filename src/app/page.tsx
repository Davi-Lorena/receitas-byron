import Link from "next/link";

export default function Home() {
  return (
   <main className="flex-grow">
   
{/* Section HERO */}

<section className="bg-orange-50 py-12">
  <div className="container mx-auto flex flex-col items-center gap-6 text-center">
  <h1 className="text-5xl font-blod">Receitas deliciosas</h1>
  <p className="text-xl">Descubra receitas simples e saborosas para todas as ocasiões</p>
  <Link className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2" href="/receitas">Ver todas as receitas</Link>
  </div>
</section>

   
   </main>
  );
}
