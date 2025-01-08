import { SingleInformation } from "./SingleInformation";
import aroma from "../../assets/images/icons/1.png";
import quality from "../../assets/images/icons/2.png";
import grades from "../../assets/images/icons/3.png";
import roasting from "../../assets/images/icons/4.png";


const aboutUs = [
	{
		title: "Awesome Aroma",
		desc: "You will definitely be a fan of the design & aroma of your coffee",
		img: aroma,
	},
	{
		title: "High Quality",
		desc: "You will definitely be a fan of the design & aroma of your coffee",
		img: quality,
	},
	{
		title: "Pure Grades",
		desc: "The coffee is made of the green coffee beans which you will love",
		img: grades,
	},
	{
		title: "Proper Roasting",
		desc: "Your coffee is brewed by first roasting the green coffee beans",
		img: roasting,
	},
];

export const AboutUs = () => {
	return (
		<section className="bg-[#ECEAE3] py-14">
			<div className="px-6 xl:px-0 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{aboutUs.map((information) => (
					<SingleInformation
						key={information.title}
						img={information.img}
						title={information.title}
						desc={information.desc}
					/>
				))}
			</div>
		</section>
	);
};
