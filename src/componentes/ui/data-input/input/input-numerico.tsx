'use client'

import React, {InputHTMLAttributes} from "react";
import {inputStyle} from "@/componentes/ui/data-input/input/style";
import {useValorAtributo} from "@/componentes/ui/data-input/input/hook/useValorAtributo";
import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export function InputNumerico<E extends EntidadePadrao>({
                                                            id,
                                                            placeholder,
                                                            name,
                                                            disabled,
                                                            entidade,
                                                            atributo,
                                                            onBlur,
                                                            onKeyDown,
                                                            required = false,
                                                            value,
                                                            onChange
                                                        }: Props<E>) {

    const {valorAtributo, atribuirValor} = useValorAtributo(entidade, atributo);

    return (
        <input
            className={inputStyle}
            id={id}
            placeholder={placeholder}
            type={`number`}
            name={name}
            disabled={disabled}
            value={value ? value : valorAtributo}
            onChange={onChange ? onChange : (e) => atribuirValor(parseInt(e.target.value))}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            required={required}
        />
    );
};
