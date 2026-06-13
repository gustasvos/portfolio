import { useEffect, useState } from "react"

const navLinks = [
    { label: "Intro", href: "#intro" },
    { label: "Currículo e Habilidades", href: "#curriculo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Eventos", href: "#eventos" }
]

const themes = [
    { label: "Padrão", value: "halloween" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme)
        }
    }, [])

    return (
        <header
            className={`navbar fixed top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-base-100/80 backdrop-blur-md shadow-md"
                : "bg-transparent"
                }`}
        >
            {/* Mobile: hamburger */}
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-44 p-2 shadow-xl border border-base-300">
                        {navLinks.map(l => (
                            <li key={l.href}><a href={l.href}>{l.label}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Nome como "logo" em monospace */}
                <a href="#intro" className="font-mono text-base font-bold tracking-tight text-primary hidden sm:flex items-center gap-1">
                    <span className="opacity-50">~/</span>gustavo-rosa
                </a>
            </div>

            {/* Desktop nav */}
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-0">
                    {navLinks.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="font-mono text-sm tracking-wide rounded-btn hover:text-primary transition-colors"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Theme switcher */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm font-mono text-xs gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        Temas
                    </div>
                    <ul tabIndex={-1} className="dropdown-content bg-base-200 rounded-box z-50 w-40 p-2 shadow-xl border border-base-300 mt-2">
                        {themes.map(t => (
                            <li key={t.value}>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start font-mono text-xs"
                                    aria-label={t.label}
                                    value={t.value}
                                    onChange={() => localStorage.setItem("theme", t.value)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}