import type { JSX } from "react/jsx-runtime"

interface Evento {
    titulo: string
    descricao?: string
    data: string
    local?: string
    tipo: "competição" | "feira" | "hackathon" | "workshop" | "outro"
}

const eventos: Evento[] = [
    {
        titulo: "Maratona de Programação Interna 2025-2",
        descricao: "Resolução de exercícios-problema de computação em equipe, terminando em 25º lugar.",
        data: "2025",
        local: "Fatec São José dos Campos",
        tipo: "competição",
    },
    {
        titulo: "Feira de Soluções 2025-1",
        descricao: "Apresentação da solução do projeto realizado no 1º Semestre do curso de DSM com a equipe Crows para o público.",
        data: "2025",
        local: "Fatec São José dos Campos",
        tipo: "feira",
    },
    {
        titulo: "Feira de Soluções 2025-2",
        descricao: "Apresentação da solução do projeto realizado no 2º Semestre do curso de DSM com a equipe Kingfisher para o público.",
        data: "2025",
        local: "Fatec São José dos Campos",
        tipo: "feira",
    },
]

const tipoIcon: Record<Evento["tipo"], JSX.Element> = {
    competição: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ),
    feira: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    hackathon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    workshop: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    outro: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
}

function EventoCard({ evento }: { evento: Evento }) {
    return (
        <article className="card bg-base-200 border border-base-300">
            <div className="card-body p-5 gap-3">
                {/* Tipo badge + ícone */}
                <div className="flex items-center gap-1.5 text-primary/60">
                    {tipoIcon[evento.tipo]}
                    <span className="font-mono text-xs uppercase tracking-wide">
                        {evento.tipo}
                    </span>
                </div>

                {/* Título */}
                <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                    {evento.titulo}
                </h3>

                {/* Descrição */}
                {evento.descricao && (
                    <p className="text-xs text-base-content/60 leading-relaxed">
                        {evento.descricao}
                    </p>
                )}

                {/* Rodapé: local + data */}
                <div className="flex flex-col gap-1 pt-1 mt-auto border-t border-base-300">
                    {evento.local && (
                        <div className="flex items-center gap-1.5 text-base-content/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-mono text-xs">{evento.local}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1.5 text-base-content/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-mono text-xs">{evento.data}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default function Eventos() {
    return (
        <section id="eventos" className="py-20 px-6 max-w-5xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-primary uppercase opacity-70 mb-10">
                // eventos que participei
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventos.map((evento, i) => (
                    <EventoCard key={i} evento={evento} />
                ))}
            </div>
        </section>
    )
}