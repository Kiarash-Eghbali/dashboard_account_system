import HomeDashboards from "@/src/components/Home/HomeDashboards";

const HomeLabel = () => {
	return (
		<>
			<div className="pt-25 text-center">
				<h1 className="text-4xl text-white font-black max-sm:text-xl lg:text-5xl">
					! به صفحه اصلی خوش آمدید
				</h1>
				<p className="w-[65%] text-[#263E8C] font-black pt-10 mx-auto max-sm:text-sm lg:w-[50%]">
					این پروژه برای ساخت صفحات و سیستم
					داشبورد اکانت کاربری است برای دیدن
					داشبورد زبان مورد نظر رو انتخاب کنید
				</p>
				<HomeDashboards />
				<div className="flex items-center justify-center md:pt-38">
					<h1 className="text-lg font-bold text-white  md:text-2xl">
						Produced by Kiarash Eghbali
					</h1>
				</div>
			</div>
		</>
	);
};

export default HomeLabel;
