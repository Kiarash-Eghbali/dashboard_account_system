import Link from "next/link";

const HomeDashboards = () => {
	return (
		<>
			<div className="flex py-10 flex-col items-center justify-center gap-10 md:flex-row-reverse md:gap-5">
				<Link
					href="/Persian/dashboard"
					className="w-[50%] py-15  border-2 border-[#148DFF] bg-[linear-gradient(110deg,#0033B5,#0F152D)] rounded-3xl text-white font-black text-2xl max-sm:text-lg max-sm:w-[70%] md:w-[44%] md:py-20 md:text-3xl mx-auto "
				>
					<h1>داشبورد فارسی</h1>
				</Link>

				<Link
					href="/English/dashboard"
					className="w-[50%] py-15  border-2 border-[#148DFF] bg-[linear-gradient(250deg,#0033B5_1.15%,#0F152D_100%)] rounded-3xl text-white font-black text-2xl max-sm:text-lg max-sm:w-[70%] md:w-[44%] md:py-20 md:text-3xl mx-auto "
				>
					<h1>English Dashboard</h1>
				</Link>
			</div>
		</>
	);
};

export default HomeDashboards;
