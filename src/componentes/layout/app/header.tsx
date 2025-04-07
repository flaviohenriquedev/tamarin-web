type Props = {
    nomePagina: string
}

export function HeaderApp({nomePagina}: Props) {
    return (
        <header className={`navbar-app card-app flex items-center justify-start px-5 bg-base-200 text-lg font-bold`}>
            {nomePagina}
        </header>
    )
}