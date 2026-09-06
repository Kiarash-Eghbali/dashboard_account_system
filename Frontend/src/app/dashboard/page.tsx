"use client";

import LoadingBox from "@/src/components/Shared/LoadingBox";
import useLoggedIn from "@/src/hooks/useLoggedIn";
import { JSX } from "react/jsx-runtime";

interface LoggedIn {
    isLoggedIn: boolean | null;
    loading: boolean;
}

const EnglishDashboardPage: React.FC = (): JSX.Element => {
	const { isLoggedIn, loading } : LoggedIn = useLoggedIn();

	if (loading) {
		return (
            <>
                <LoadingBox />
            </>
        );
	}

    if (! isLoggedIn) {
        return (
            <>
                <h1>your first </h1>
            </>
        )
    }

    return (
        <>
        
        </>
    )
};

export default EnglishDashboardPage;
