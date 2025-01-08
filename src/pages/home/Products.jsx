import cupBG from "../../assets/images/more/cupBG.png";
import restaurantBG from "../../assets/images/more/restaurantBG.png";
import { Link } from "react-router";
import { CiCoffeeCup } from "react-icons/ci";
import { SingleCoffee } from "./SingleCoffee";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Products = () => {
	const [coffees, setCoffees] = useState([]);

	useEffect(() => {
		fetch("https://coffee-shop-server-two-steel.vercel.app/coffees")
			.then((res) => res.json())
			.then((data) => setCoffees(data))
			.catch((error) => console.log(error.message));
	}, []);

	const handleCoffeeDelete = (id) => {
		fetch(`https://coffee-shop-server-two-steel.vercel.app/coffees/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then(() => {
				const newCoffees = coffees.filter((coffee) => coffee._id !== id);
				setCoffees(newCoffees);
				toast.success("Deleted Successfully");
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div className="relative mt-28">
			<img className="absolute top-0 left-0 z-0" src={cupBG} alt="" />
			<img
				className="absolute bottom-0 right-0 z-0"
				src={restaurantBG}
				alt=""
			/>
			<div className="px-6 xl:px-0 max-w-7xl mx-auto z-10">
				<div className="text-center z-10">
					<h4 className="text-[#1B1A1A] text-xl mb-2">--- Sip & Savor ---</h4>
					<h2 className="text-[#331A15] text-[55px] font-rancho [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] z-10">
						Our Popular Products
					</h2>
					<Link
						to="/add-coffee"
						className="inline-flex items-center gap-2 font-rancho text-2xl border-2 border-[#331A15] bg-[#E3B577] text-white px-4 py-2 drop-shadow-2xl mt-4 [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)]"
					>
						Add Coffee
						<CiCoffeeCup className="text-[#331A15]" />
					</Link>
				</div>

				{/* coffees */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 z-10">
					{coffees.slice(0, 6).map((coffee) => (
						<SingleCoffee
							key={coffee._id}
							coffee={coffee}
							onDelete={handleCoffeeDelete}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
