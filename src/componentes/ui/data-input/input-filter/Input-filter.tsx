import {InputHTMLAttributes} from "react";
import {IoSearchOutline} from "react-icons/io5";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}
export function InputFilter({ value, onChange, placeholder }: Props) {
    return (
        <div className={`
            flex
            gap-4
            m-2
            px-3
            items-center
            border-base-300
            text-xs
            h-10
            focus-within:border-primary
        `}>
            <IoSearchOutline size={16} />
            <input
                className="border-none outline-none w-full h-full"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}