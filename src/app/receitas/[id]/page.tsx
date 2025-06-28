import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReceitaPage() {
  return (
    <main className="flex-grow py-18">
        <div className="container mx-auto">
            <Link className="flex text-orange-500 hover:text-orange-700 transition-colors" href="receitas">
            <ChevronLeft />
            Voltar para receitas
            </Link>

<section> 
<div className="realtive h-96 w-full">
    <Image src="" alt="Titulo da receita"/>
</div>

<div>
    {/* Descrição da receita */}

<h1>Título da receita</h1>    
<p>Descrição</p>

{/* Infos do preparo */}
<div>
    {/*TODO: componentes de info */}
</div>

{/* Colunas */}

<div>
    {/* Ingredientes */}

<div>

</div>

{/* Preparo */}

<div>
{/* TODO: componente de preparo */}
</div>

</div>


</div>
        </section>

        </div>
        </main>
  )
}