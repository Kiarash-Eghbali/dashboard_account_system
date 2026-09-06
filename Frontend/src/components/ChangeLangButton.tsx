"use client";
import { JSX } from "react/jsx-runtime";
import useChangeLang from "../hooks/useChangeLang";



const ChangeLangButton: React.FC = (): JSX.Element => {
    const { lang, toggleLang } = useChangeLang();

    return (
        <>
            
        </>
    )
}

export default ChangeLangButton;