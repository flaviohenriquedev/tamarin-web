'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react";

import {get, set} from "lodash";
import {EntidadePadrao} from "@/root/entidades/EntidadePadrao";
import {inputStyle} from "@/componentes/data-input/input/style";
import {useValorAtributo} from "@/componentes/data-input/input/hook/useValorAtributo";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export const InputNumerico = ({
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
