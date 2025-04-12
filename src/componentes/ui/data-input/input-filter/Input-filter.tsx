import {InputHTMLAttributes} from "react";
import {inputStyle} from "@/componentes/ui/data-input/input/style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export function InputFilter({value, onChange, placeholder, className}: Props) {
    return (
        <input value={value}
               onChange={onChange}
               placeholder={placeholder}
               className={`${inputStyle} ${className}`}/>
    )
}
