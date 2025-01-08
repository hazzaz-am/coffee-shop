/* eslint-disable react/prop-types */
import coffeeIMG from "../../assets/images/cups/1.png";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

export const SingleCoffee = ({ coffee }) => {
	return (
		<div className="bg-[#F5F4F1] flex items-center justify-between gap-4 p-12 rounded-lg  z-10">
			<div className="flex items-center">
				<img className="w-24 sm:w-40" src={coffeeIMG} alt="" />

				<div className="space-y-4">
					<p className="capitalize text-xl text-[#5C5B5B]">
						<span className="font-semibold text-[#1B1A1A]">Name:</span>{" "}
						{coffee.coffee_name}
					</p>
					<p className="capitalize text-xl text-[#5C5B5B]">
						<span className="font-semibold text-[#1B1A1A]">Chef:</span>{" "}
						{coffee.chef_name}
					</p>
					<p className="capitalize text-xl text-[#5C5B5B]">
						<span className="font-semibold text-[#1B1A1A]">Price:</span>{" "}
						{coffee.price} Taka
					</p>
				</div>
			</div>

			{/* icons */}
			<div className="flex flex-col gap-4">
				<Link
					to={`/coffee-details/${coffee._id}`}
					className="rounded inline-block bg-[#D2B48C] p-2"
				>
					<FaEye size={"20px"} color="white" />
				</Link>
				<Link
					to="/coffee-edit"
					className="rounded inline-block bg-[#3C393B] p-2"
				>
					<HiPencil size={"20px"} color="white" />
				</Link>
				<Link className="rounded inline-block bg-[#EA4744] p-2">
					<MdDelete size={"20px"} color="white" />
				</Link>
			</div>
		</div>
	);
};
