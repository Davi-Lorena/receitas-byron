import Link from "next/link"

export default function Header() {
    return(
        <header className="w-full bg-white text-black py-4 border-b border-slate-200 drop-shadow-lg">
        <div className="container mx-auto max-w-[80%] flex justify-between">
                <Link className="sm:text-xl font-bold hover:scale-105 transition-all" href="/">Receitas deliciosas</Link>
<nav className="flex gap-6">
    <Link className="hover:text-orange-500 transition-colors duration-250" href="/">
    Inicio 
    </Link>

    <Link className="hover:text-orange-500 transition-colors duration-250" href="/receitas">
    Receitas
    </Link>
</nav>
        </div>
        </header>
    )
}