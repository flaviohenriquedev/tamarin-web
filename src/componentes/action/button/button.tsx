'use client'

import {ButtonHTMLAttributes, useEffect, useState} from "react";

type TipoClasseBotao =
    'btn-neutral' |
    'btn-primary' |
    'btn-secondary' |
    'btn-accent' |
    'btn-info' |
    'btn-success' |
    'btn-warning' |
    'btn-error'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    descricao?: string
    tipoClasse?: TipoClasseBotao
}

export function Button({
                           descricao,
                           type,
                           tipoClasse = 'btn-primary',
                           onClick
                       }: ButtonProps) {

    return (
        <button type={type}
                className={`
                        btn
                        btn-active
                        ${tipoClasse}
                        btn-sm`}
                onClick={onClick}>
            {descricao}
        </button>
    )
}