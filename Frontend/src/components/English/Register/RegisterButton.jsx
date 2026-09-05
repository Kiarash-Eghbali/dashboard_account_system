import Link from "next/link";

const RegisterButton = () => {
	return (
		<>
			<div className="w-full">
				<button className="flex w-[90%] py-2 font-bold text-white text-lg shadow-md  rounded-xl mx-auto hover:shadow-blue-500 hover:opacity-90 transition-all duration-300 items-center justify-center bg-blue-500">
					Sign up
				</button>
				<div className="w-full text-center pt-5">
					<Link
						href="/login"
						className="text-[15px] text-gray-800 underline"
					>
						Have account ? Login
					</Link>
				</div>
			</div>
		</>
	);
};

export default RegisterButton;
