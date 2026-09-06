"use client";
import { JSX } from "react/jsx-runtime";
import useChangeLang from "../hooks/useChangeLang";



const ChangeLangButton: React.FC = (): JSX.Element => {
    const { lang, toggleLang } = useChangeLang();

    return (
        <>
            <div onClick={toggleLang} className="w-10 h-10 text-xl rounded-full  flex items-center justify-center fixed  bottom-5 right-5 bg-blue-500 border-2 border-blue-300 hover:shadow-[0px_0px_10px] hover:shadow-blue-300 transition-all duration-300">
                <h1 className="pt-1 select-none font-bold ">{ lang == "english" ? "FA" : "EN" }</h1>
            </div>
        </>
    )
}

export default ChangeLangButton;