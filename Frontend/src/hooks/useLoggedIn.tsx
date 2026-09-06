"use client";
import { useState, useEffect } from "react";

const useLoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch("http://localhost:5000/api/auth/", { credentials: "include" });

				setIsLoggedIn(res.ok);
			} catch (error) {
				setIsLoggedIn(false);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			}
		};

		checkAuth();
	}, []);

	return { isLoggedIn, loading };
};

export default useLoggedIn;
