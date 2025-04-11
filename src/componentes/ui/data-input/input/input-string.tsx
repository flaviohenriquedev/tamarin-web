'use client'

import React, {InputHTMLAttributes} from "react";
import {inputStyle} from "@/componentes/ui/data-input/input/style";
import {useValorAtributo} from "@/componentes/ui/data-input/input/hook/useValorAtributo";
import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export const InputString = ({
                                id,
                                type,
                                placeholder,
                                name,
                                maxLength,
                                disabled,
                                entidade,
                                atributo,
                                onBlur,
                                autoComplete,
                                onKeyDown,
                                required = false,
                                value,
                                onChange
                            }: Props<any>) => {

    const {valorAtributo, atribuirValor} = useValorAtributo(entidade, atributo);

    return (
        <input
            className={inputStyle}
            id={id}
            placeholder={placeholder}
            name={name}
            maxLength={maxLength}
            type={type ? type : "text"}
            autoComplete={autoComplete}
            disabled={disabled}
            value={value ? value : valorAtributo}
            onChange={onChange ? onChange : (e) => atribuirValor(e.target.value)}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            required={required}
        />
    );
};
