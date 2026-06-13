import { useState } from "react"

interface Projeto {
    titulo: string
    descricao: string
    desafio: string
    solucao?: string
    hardSkills: string[]
    softSkills?: string[]
    repo: string
    media?: string
}

const projetos: Projeto[] = [
    {
        titulo: "Controle de Projetos e Apontamentos de Horas - GSW",
        descricao:
            `Plataforma para gerenciamento de equipes de desenvolvimento, inspirada no PSOffice e Jira. 
            Suporta níveis de acesso para gestores, área financeira e desenvolvedores, com criação de tasks e apontamento de horas.
            O trabalho foi realizado para solucionar um problema apresentado pela empresa de Software GSW. 
            
            Minha participação neste projeto foi principalmente no desenvolvimento Backend com Spring, com a criação do microsserviço de apontamentos,
            a implementação das filas de mensageria dos 3 serviços com RabbitMQ, e na criação do ambiente de desenvolvimento
            Docker Compose com todos os serviços e bancos de dados do projeto.

            Também desenvolvi desenvolvi telas relacionadas a visualização e edição dos projetos pelo gestor,
            e a integração dessas e de outras telas no Frontend.`,
        desafio:
            "Implementação da arquitetura em microsserviços; Comunicação entre serviços por mensageria; Autenticação via Keycloak.",
        hardSkills: ["Java", "Spring Boot", "RabbitMQ", "MySQL", "MongoDB", "Docker", "React", "TailwindCSS", "DaisyUI"],
        softSkills: ["SCRUM", "Metodologia Agíl", "Gestão de projeto em equipe", "Gestão de tempo", "Comunicação"],
        repo: "https://github.com/fatec-api/java-the-hutt",
        media: "/api-gsw.gif"
    },
    {
        titulo: "Plataforma de Gestão Integrada — CRM Newe Logística",
        descricao:
            "Sistema Web CRM para gestão dos processos em uma empresa de logística (Newe). O site contempla seções para gerenciar os setores administrativo, comercial e operacional.",
        desafio:
            "Gerenciamento de sessões de usuários simultaneamente; triggers para ações em tempo real no banco; Geração de relatórios em PDF e CSV a partir de dados do próprio sistema.",
        hardSkills: ["Node.js", "MySQL", "TypeORM", "React", "TailwindCSS"],
        softSkills: ["SCRUM", "Metodologia Agíl", "Gestão de projeto em equipe", "Gestão de tempo"],
        repo: "https://github.com/gustasvos/kingfisher-fatec-api",
        media: "/api-newe.png"
    },
    {
        titulo: "Visualização de Dados do ComexStat",
        descricao:
            "Site com visualização dos dados do comércio exterior dos municípios paulistas. Apresenta dados tratados e filtrados em gráficos para facilitar a análise por período.",
        desafio:
            "Tratamento e processamento de grandes volumes de dados sem comprometer a performance do site.",
        hardSkills: ["Python", "Pandas", "Flask", "HTML5", "CSS3"],
        softSkills: ["SCRUM", "Metodologia Agíl", "Gestão de projeto em equipe", "Gestão de tempo"],
        repo: "https://github.com/gustasvos/API-Crows",
        media: "/api-comex.gif"
    },
]

function GitHubIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    )
}

function MediaPlaceholder({ src, titulo }: { src?: string; titulo: string }) {
    if (!src) {
        return (
            <div className="w-full h-full min-h-64 bg-base-300 rounded-xl flex flex-col items-center justify-center gap-3 border border-dashed border-base-content/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-base-content/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <p className="font-mono text-xs text-base-content/30">demo em breve</p>
            </div>
        )
    }

    // video (.mp4, .webm)
    if (src.match(/\.(mp4|webm)$/i)) {
        return (
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
                title={titulo}
            />
        )
    }

    // imagem ou gif
    return (
        <img
            src={src}
            alt={`Demo: ${titulo}`}
            className="w-full h-full object-contain rounded-xl"
        />
    )
}

export default function Projetos() {
    const [atual, setAtual] = useState(0)

    const anterior = () => setAtual(i => (i - 1 + projetos.length) % projetos.length)
    const proximo = () => setAtual(i => (i + 1) % projetos.length)

    const projeto = projetos[atual]

    return (
        <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-primary uppercase opacity-70 mb-10">
                // projetos
            </p>

            {/* Card principal */}
            <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-0">
                    <div className="grid lg:grid-cols-2 gap-0">

                        {/* Lado esquerdo: mídia */}
                        <div className="p-6 lg:p-8 lg:border-r border-base-300">
                            <MediaPlaceholder src={projeto.media} titulo={projeto.titulo} />
                        </div>

                        {/* Lado direito: conteúdo */}
                        <div className="p-6 lg:p-8 flex flex-col justify-between gap-6">
                            <div className="space-y-5">
                                {/* Número + título */}
                                <div className="flex items-start gap-3">
                                    <span className="font-mono text-2xl font-bold text-primary/25 select-none leading-none mt-0.5 shrink-0">
                                        {String(atual + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-lg font-semibold leading-snug">
                                        {projeto.titulo}
                                    </h3>
                                </div>

                                {/* Descrição */}
                                <div className="text-sm text-base-content/70 leading-relaxed space-y-2">
                                    {projeto.descricao.split(/\n\s*\n/).map((paragrafo, i) => (
                                        <p key={i}>{paragrafo.replace(/\s+/g, " ").trim()}</p>
                                    ))}
                                </div>


                                {/* Desafio técnico */}
                                <div className="border-l-2 border-primary/30 pl-3">
                                    <p className="font-mono text-xs text-primary/60 uppercase tracking-wide mb-1">
                                        desafios técnicos
                                    </p>
                                    <p className="text-sm text-base-content/60 leading-relaxed">
                                        {projeto.desafio}
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="space-y-2">
                                    <p className="font-mono text-xs text-base-content/40 uppercase tracking-wide">
                                        hard skills
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projeto.hardSkills.map(tech => (
                                            <span key={tech} className="badge badge-outline badge-sm font-mono text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {projeto.softSkills && projeto.softSkills.length > 0 && (
                                        <>
                                            <p className="font-mono text-xs text-base-content/40 uppercase tracking-wide pt-1">
                                                soft skills
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {projeto.softSkills.map(skill => (
                                                    <span key={skill} className="badge badge-outline badge-sm font-mono text-xs">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Rodapé do card: repo + navegação */}
                            <div className="flex items-center justify-between pt-2 border-t border-base-300">
                                <a
                                    href={projeto.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost btn-xs font-mono gap-1.5 -ml-2 hover:text-primary"
                                >
                                    <GitHubIcon />
                                    ver repositório
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>

                                {/* Setas de navegação */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={anterior}
                                        className="btn btn-ghost btn-sm btn-square"
                                        aria-label="Projeto anterior"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    {/* Indicadores de posição */}
                                    <div className="flex gap-1.5">
                                        {projetos.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setAtual(i)}
                                                aria-label={`Ir para projeto ${i + 1}`}
                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === atual
                                                    ? "bg-primary w-4"
                                                    : "bg-base-content/25 hover:bg-base-content/50"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={proximo}
                                        className="btn btn-ghost btn-sm btn-square"
                                        aria-label="Próximo projeto"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}