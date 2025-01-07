import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import coffeeImg from "../../assets/images/cups/1.png";

export const CoffeeDetails = () => {
	return (
		<div className="px-6 xl:px-0 max-w-7xl mx-auto mt-10">
			<Link
				to="/"
				className="font-rancho inline-flex items-center gap-2 text-[#374151] text-3xl [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)]"
			>
				<FaArrowLeft />
				Back to home
			</Link>
			<div className="bg-[#f4f3f0] py-8 px-12 md:py-16 md:px-24 mt-8 flex flex-col md:flex-row items-center justify-center gap-20">
				{/* left side */}
				<div>
					<img src={coffeeImg} alt="" />
				</div>
				{/* right side */}
				<div>
					<h2 className="font-rancho inline-flex items-center gap-2 text-[#331A15] text-4xl [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] mb-8">
						Niceties
					</h2>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Name:</span>{" "}
						Americano Coffee
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Chef:</span> Mr.
						Matin Paul
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Supplier:</span>{" "}
						Cappu Authorizer
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Taste:</span> Sweet
						and hot
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Category:</span>{" "}
						Americano
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Details:</span>{" "}
						Espresso with hot water
					</p>
				</div>
			</div>
		</div>
	);
};
