import Intro from "./components/Intro"
import Header from "./components/Header"
import Curriculo from "./components/Curriculo"
import Projetos from "./components/Projetos"
import Eventos from "./components/Eventos"

export default function App() {
    return (
        <div className="min-h-screen bg-base-100">
            <Header />
            <main>
                <Intro />

                {/* Divisor sutil */}
                <div className="max-w-5xl mx-auto px-6">
                    <div className="border-t border-base-300" />
                </div>

                <Curriculo />

                <div className="max-w-5xl mx-auto px-6">
                    <div className="border-t border-base-300" />
                </div>

                <Projetos />

                <div className="max-w-5xl mx-auto px-6">
                    <div className="border-t border-base-300" />
                </div>

                <Eventos />
            </main>

            <footer className="border-t border-base-300 py-10 px-6">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-xs text-base-content/40">
                        © {new Date().getFullYear()} Gustavo Rosa
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/gustasvos" target="_blank" className="font-mono text-xs text-base-content/40 hover:text-primary transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/gustavo-rosa-46a251180/" target="_blank" className="font-mono text-xs text-base-content/40 hover:text-primary transition-colors">LinkedIn</a>
                        <p className="font-mono text-xs text-base-content/40 hover:text-primary transition-colors cursor-default">gustavorib.rosa@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
