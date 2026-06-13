import { useEffect, useState } from "react"

const navLinks = [
    { label: "Intro", href: "#intro" },
    { label: "Currículo", href: "#curriculo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
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

    return (
        <header
            className={`navbar fixed top-0 z-50 transition-all duration-300 ${
                scrolled
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3" />
                        </svg>
                        tema
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
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}