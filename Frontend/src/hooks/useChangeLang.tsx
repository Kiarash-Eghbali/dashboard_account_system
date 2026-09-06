"use client";

import { useState, useCallback } from "react";

enum Lang {
    English = "english",
    Persian = "persian",
}

const useChangeLang = (): { lang: Lang; toggleLang: () => void } => {
    const [lang, setLang] = useState<Lang>(Lang.English);

    const toggleLang = useCallback(() => {
        setLang((prev) =>
            prev === Lang.English ? Lang.Persian : Lang.English
        );
    }, []);

    return { lang, toggleLang };
};

export default useChangeLang;
