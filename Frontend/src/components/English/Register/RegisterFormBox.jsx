import RegisterButton from "./RegisterButton";
import RegisterInput from "./RegisterInput";

const RegisterFormBox = () => {
	return (
		<>
			<div className="h-screen flex items-center justify-center">
				<form className=" w-[85%] py-8 px-5 border rounded-xl shadow-lg shadow-gray-300 border-gray-300 ">
					<h1 className="text-4xl font-bold  text-gray-800">
						Sign up
					</h1>
					<RegisterInput />
					<RegisterButton />
				</form>
			</div>
		</>
	);
};

export default RegisterFormBox;
