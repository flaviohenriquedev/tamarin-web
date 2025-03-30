'use client'

import React, {InputHTMLAttributes, useEffect} from "react";

import {set} from "lodash";
import {EntidadePadrao} from "@/entidades/root/EntidadePadrao";
import {inputStyle} from "@/componentes/data-input/input/style";
import {useValorAtributo} from "@/componentes/data-input/input/hook/useValorAtributo";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export const InputString = ({
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
                      }: Props<any>) => {

    const { valorAtributo, atribuirValor } = useValorAtributo(entidade, atributo);

    return (
        <input
            className={inputStyle}
            id={id}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            value={value ? value : valorAtributo}
            onChange={onChange ? onChange : (e) => atribuirValor(e.target.value)}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            required={required}
        />
    );
};
