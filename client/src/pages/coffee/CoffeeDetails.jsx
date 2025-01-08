import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import coffeeImg from "../../assets/images/cups/1.png";
import { useEffect, useState } from "react";

export const CoffeeDetails = () => {
	const [coffee, setCoffee] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:5000/coffees/${id}`)
			.then((res) => res.json())
			.then((data) => setCoffee(data))
			.catch((error) => console.log(error.message));
	}, [id]);
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
						{coffee.company_name}
					</h2>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Name:</span>{" "}
						{coffee.coffee_name}
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Chef:</span>{" "}
						{coffee.chef_name}
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Supplier:</span>{" "}
						{coffee.supplier_name}
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Taste:</span>{" "}
						{coffee.taste}
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Category:</span>{" "}
						{coffee.category}
					</p>
					<p className="text-[#5C5B5B] text-xl mb-4">
						<span className="text-[#1B1A1A] font-semibold">Details:</span>{" "}
						{coffee.details}
					</p>
				</div>
			</div>
		</div>
	);
};
