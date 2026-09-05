const RegisterInput = () => {
	return (
		<>
			<div className="py-4">
				<div className="grid py-2 w-full ">
					<label
						htmlFor="username"
						className="text-gray-600"
					>
						Username
					</label>
					<input
						type="text"
						placeholder="Enter your username"
						name="username"
						className="w-full outline-none pt-2 py-1.25 text-[15px] px-3 border border-gray-300  rounded-lg focus:bg-blue-500 focus:font-bold focus:text-white focus:shadow-blue-400 focus:shadow-lg focus:border-none  transition-all duration-400   "
					/>
				</div>
				<div className="grid py-2 w-full">
					<label
						htmlFor="email"
						className="text-gray-600"
					>
						Email
					</label>
					<input
						type="email"
						placeholder="your@email.com"
						name="email"
						className="w-full outline-none pt-2 py-1.25 text-[15px] px-3 border border-gray-300  rounded-lg focus:bg-blue-500 focus:font-bold focus:text-white focus:shadow-blue-400 focus:shadow-lg focus:border-none  transition-all duration-400  "
					/>
				</div>
				<div className="grid py-2 w-full">
					<label
						htmlFor="password"
						className="text-gray-600"
					>
						Password
					</label>
					<input
						type="password"
						placeholder="Enter your password"
						name="password"
						className="w-full outline-none pt-2 py-1.25 text-[15px] px-3 border border-gray-300  rounded-lg focus:bg-blue-500 focus:font-bold focus:text-white focus:shadow-blue-400 focus:shadow-lg focus:border-none  transition-all duration-400  "
					/>
				</div>
				<div className="grid py-2 w-full">
					<label
						htmlFor="confirmPassword"
						className="text-gray-600"
					>
						Confirm password
					</label>
					<input
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						className="w-full outline-none pt-2 py-1.25 text-[15px] px-3 border border-gray-300  rounded-lg focus:bg-blue-500 focus:font-bold focus:text-white focus:shadow-blue-400 focus:shadow-lg focus:border-none  transition-all duration-400  "
					/>
				</div>
				<div className="grid py-2 w-full">
					<label
						htmlFor="phone"
						className="text-gray-600"
					>
						Phone Number
					</label>
					<input
						type="number"
						placeholder="09123456789"
						name="phone"
						className="w-full outline-none pt-2 py-1.25 text-[15px] px-3 border border-gray-300  rounded-lg focus:bg-blue-500 focus:font-bold focus:text-white focus:shadow-blue-400 focus:shadow-lg focus:border-none  transition-all duration-400  "
					/>
				</div>
			</div>
		</>
	);
};

export default RegisterInput;
