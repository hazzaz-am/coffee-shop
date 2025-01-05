import cupBG from "../../assets/images/more/cupBG.png";
import restaurantBG from "../../assets/images/more/restaurantBG.png";
import { Link } from "react-router";
import { CiCoffeeCup } from "react-icons/ci";
import { SingleCoffee } from "./SingleCoffee";

const coffees = [
	{
		_id: "65cf0145623dd80bc69885ea",
		coffee_name: "Americano Coffee",
		chef_name: "Mr. Matin Paul",
		price: 890,
		added_by: "hazzazabdul111@gmail.com",
	},
	{
		_id: "65cf0145623dd80bc69885eb",
		coffee_name: "Cappuccino",
		chef_name: "Ms. Sarah Johnson",
		price: 750,
		added_by: "hazzazabdul111@gmail.com",
	},
	{
		_id: "65cf0145623dd80bc69885ec",
		coffee_name: "Espresso Shot",
		chef_name: "Mr. David Chen",
		price: 550,
		added_by: "hazzazabdul111@gmail.com",
	},
	{
		_id: "65cf0145623dd80bc69885ed",
		coffee_name: "Caramel Latte",
		chef_name: "Mrs. Emma Wilson",
		price: 920,
		added_by: "hazzazabdul111@gmail.com",
	},
	{
		_id: "65cf0145623dd80bc69885ee",
		coffee_name: "Mocha Frappe",
		chef_name: "Mr. James Rodriguez",
		price: 980,
		added_by: "hazzazabdul111@gmail.com",
	},
	{
		_id: "65cf0145623dd80bc69885ef",
		coffee_name: "Turkish Coffee",
		chef_name: "Ms. Sophia Lee",
		price: 850,
		added_by: "hazzazabdul111@gmail.com",
	},
];

export const Products = () => {
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
					{coffees.map((coffee) => (
						<SingleCoffee key={coffee._id} coffee={coffee} />
					))}
				</div>
			</div>
		</div>
	);
};
