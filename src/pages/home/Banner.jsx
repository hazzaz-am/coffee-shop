import bannerImg from "../../assets/images/more/banner.png";

export const Banner = () => {
	return (
		<div
			className="bg-cover bg-no-repeat bg-center object-cover"
			style={{
				backgroundImage: `url(${bannerImg})`,
			}}
		>
			<div className="px-6 xl:px-0 max-w-7xl mx-auto h-screen relative">
				<div className="text-white absolute top-1/2 sm:left-1/2 -translate-y-1/2">
					<h3 className="font-rancho text-4xl md:text-5xl">
						Would you like a Cup of Delicious Coffee?
					</h3>
					<p className="text-xs md:text-base font-raleway mt-4 mb-8">
						It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
						the nostalgia back!! Your companion of every moment!!! Enjoy the
						beautiful moments and make them memorable.
					</p>
					<button className="bg-[#E3B577] border-2 border-[#E3B577] text-[#242222] font-rancho md:text-2xl py-2 px-10 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};
