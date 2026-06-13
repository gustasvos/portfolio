const skills = {
    "Linguagens": ["Java", "Python", "TypeScript", "Ruby", "HTML5", "CSS3"],
    "Frameworks": ["Spring Boot", "React", "Node.js", "Ruby on Rails"],
    "Banco de Dados": ["MySQL", "PostgreSQL", "MongoDB"],
    "Ferramentas": ["Git", "Docker", "Linux", "Scrum"],
    "Idiomas": ["Inglês intermediário"],
}

function SectionEyebrow({ children }: { children: string }) {
    return (
        <p className="font-mono text-xs tracking-widest text-primary uppercase opacity-70 mb-6">
            // {children}
        </p>
    )
}

function TimelineItem({
    title,
    subtitle,
    period,
    last = false,
}: {
    title: string
    subtitle: string
    period: string
    last?: boolean
}) {
    return (
        <div className={`relative pl-6 ${!last ? "pb-8" : ""}`}>
            {/* Linha vertical */}
            {!last && (
                <div className="absolute left-[7px] top-2 bottom-0 w-px bg-base-300" />
            )}
            {/* Dot */}
            <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-base-100" />

            <h3 className="font-semibold text-base-content">{title}</h3>
            <p className="text-base-content/70 text-sm mt-0.5">{subtitle}</p>
            <p className="font-mono text-xs text-primary/60 mt-1">{period}</p>
        </div>
    )
}

export default function Curriculo() {
    return (
        <section id="curriculo" className="py-20 px-6 max-w-5xl mx-auto">
            <SectionEyebrow>currículo</SectionEyebrow>

            <div className="grid lg:grid-cols-2 gap-16">

                {/* Coluna esquerda: Formação + Experiência */}
                <div className="space-y-12">
                    {/* Formação */}
                    <div>
                        <h2 className="text-xl font-bold mb-6">Formação Acadêmica</h2>
                        <TimelineItem
                            title="Desenvolvimento de Software Multiplataforma"
                            subtitle="Fatec São José dos Campos"
                            period="2025 - 2027 · Em andamento"
                        />
                    </div>

                    {/* Experiência */}
                    <div>
                        <h2 className="text-xl font-bold mb-6">Experiência Profissional</h2>
                        <TimelineItem
                            title="Estagiário de Desenvolvimento Backend"
                            subtitle="nave.rs · Ruby on Rails"
                            period="Jan - Ago 2022"
                            last
                        />
                    </div>

                    {/* currículo */}
                    <a
                        className="btn btn-outline btn-primary btn-sm font-mono gap-2 w-fit"
                        href="/gustavo-curriculo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Ver currículo completo
                    </a>
                </div>

                {/* Coluna direita: Habilidades */}
                <div>
                    <h2 className="text-xl font-bold mb-6">Habilidades</h2>
                    <div className="space-y-5">
                        {Object.entries(skills).map(([categoria, techs]) => (
                            <div key={categoria}>
                                <p className="font-mono text-xs text-primary/70 mb-2 tracking-wide uppercase">
                                    {categoria}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {techs.map(tech => (
                                        <span
                                            key={tech}
                                            className="badge badge-outline font-mono text-xs py-3 px-3"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}