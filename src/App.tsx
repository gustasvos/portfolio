import Intro from "./components/Intro"
import Header from "./components/Header"
import Curriculo from "./components/Curriculo"
import Projetos from "./components/Projetos"

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
            </main>

            <footer className="border-t border-base-300 py-8 px-6 text-center">
                <p className="font-mono text-xs text-base-content/40">
                    © {new Date().getFullYear()} Gustavo Rosa · feito com React + TailwindCSS + DaisyUI
                </p>
            </footer>
        </div>
    )
}