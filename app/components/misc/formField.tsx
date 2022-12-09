import { useEffect, useState } from "react";

interface FormFieldProps {
    label: string;
    htmlFor: string;
    value: any;
    length: {
        min: number;
        max: number;
    };
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: "email" | "text" | "password";
    error?: string;
}

export function FormField({ htmlFor, label, value, error, onChange, type, length }: FormFieldProps) {
    const [errorValue, setErrorValue] = useState(error);
    useEffect(() => {
        setErrorValue(error);
    }, [errorValue])
    return <>
        <div className="apply-now-div">
            <label className="apply-now-label" htmlFor={htmlFor}>{label}</label>
            <input type={type} id={htmlFor} name={htmlFor}
                value={value}
                className="apply-now-input"
                minLength={length.min}
                maxLength={length.max}
                onChange={(e) => {
                    onChange(e)
                    setErrorValue("");
                }}
            />
            {errorValue && <p className="error_p">{errorValue}</p>}
        </div>
    </>
}