import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
   <main className="flex-grow">
   
{/* Section: HERO */}

<section className="bg-orange-50 py-12">
  <div className="container mx-auto flex flex-col items-center gap-6 text-center">
  <h1 className="text-5xl font-blod">Receitas deliciosas</h1>
  <p className="text-xl">Descubra receitas simples e saborosas para todas as ocasiões</p>
  <Link className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2 hover:bg-orange-600 transition-colors" href="/receitas">Ver todas as receitas</Link>
  </div>
</section>

{/* Section: featured recipes */}
<section className="py-12">
<div className="flex flex-col items-center container mx-auto">
  <h2 className="text-lg font-bold">Receitas em destaque</h2>
  {/* Cards de receita */}
  <Link className="flex text-orange-400 hover:text-orange-700 transition-colors"  href="/receitas">
  Ver todas as receitas
  <ChevronRight />
  </Link>
</div>
</section>
   
   </main>
  );
}
