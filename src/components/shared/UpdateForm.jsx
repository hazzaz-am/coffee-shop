import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";

export const UpdateForm = () => {
	const { id } = useParams();
	const [coffee, setCoffee] = useState({});

	const handleFormData = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		const company_name = formData.get("company_name");
		const coffee_name = formData.get("coffee_name");
		const price = formData.get("price");
		const chef_name = formData.get("chef_name");
		const supplier_name = formData.get("supplier_name");
		const taste = formData.get("taste");
		const category = formData.get("category");
		const details = formData.get("details");

		const formDetails = {
			company_name,
			coffee_name,
			chef_name,
			supplier_name,
			taste,
			category,
			details,
			price,
			added_by: "hazzazabdul111@gmail.com",
		};

		fetch(`https://coffee-server-umber.vercel.app/coffees/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formDetails),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Updated Successfully");
					setCoffee(formDetails);
				}
			})
			.catch((error) => console.log(error.message));
	};

	useEffect(() => {
		fetch(`https://coffee-server-umber.vercel.app/coffees/${id}`)
			.then((res) => res.json())
			.then((data) => setCoffee(data))
			.catch((err) => console.log(err.message));
	}, [id]);

	return (
		<form onSubmit={handleFormData} className="mx-auto mt-8">
			{/* first row */}
			<div className="flex justify-between gap-6 mb-6">
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="coffee_name"
					>
						Coffee Name
					</label>
					<input
						type="text"
						name="coffee_name"
						id="coffee_name"
						placeholder="Enter Coffee Name"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.coffee_name}
					/>
				</div>
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="chef"
					>
						Chef
					</label>
					<input
						type="text"
						name="chef_name"
						id="chef"
						placeholder="Enter Coffee Chef"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.chef_name}
					/>
				</div>
			</div>
			{/* second row */}
			<div className="flex justify-between gap-6 mb-6">
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="supplier"
					>
						Supplier
					</label>
					<input
						type="text"
						name="supplier_name"
						id="supplier"
						placeholder="Enter Coffee Supplier"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.supplier_name}
					/>
				</div>
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="taste"
					>
						Taste
					</label>
					<input
						type="text"
						name="taste"
						id="taste"
						placeholder="Enter Coffee Taste"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.taste}
					/>
				</div>
			</div>
			{/* third row */}
			<div className="flex justify-between gap-6 mb-6">
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="category"
					>
						Category
					</label>
					<input
						type="text"
						name="category"
						id="category"
						placeholder="Enter Coffee Category"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.category}
					/>
				</div>
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="details"
					>
						Details
					</label>
					<input
						type="text"
						name="details"
						id="details"
						placeholder="Enter Coffee Details"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.details}
					/>
				</div>
			</div>
			{/* fourth row */}
			<div className="flex justify-between gap-6 mb-6">
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="company"
					>
						Company
					</label>
					<input
						type="text"
						name="company_name"
						id="company"
						placeholder="Enter Coffee Company"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.company_name}
					/>
				</div>
				<div className="flex flex-col w-1/2 gap-4">
					<label
						className="font-semibold text-[#1B1A1A] text-xl"
						htmlFor="price"
					>
						Price
					</label>
					<input
						type="number"
						name="price"
						id="price"
						placeholder="Enter Coffee Price"
						className="w-full px-4 py-2 rounded-md"
						defaultValue={coffee.price}
					/>
				</div>
			</div>
			{/* five row */}
			{/* <div className="flex flex-col w-full gap-4 mb-6">
				<label className="font-semibold text-[#1B1A1A] text-xl" htmlFor="photo">
					Photo Url
				</label>
				<input
					type="text"
					name="photo"
					id="photo"
					placeholder="Enter Coffee Photo"
					className="w-full px-4 py-2 rounded-md"
				/>
			</div> */}
			{/* button */}
			<input
				type="submit"
				value="Update Coffee Details"
				className="font-rancho text-2xl border-2 border-[#331A15] bg-[#E3B577] text-[#331A15] px-4 py-2 drop-shadow-2xl mt-4 [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] w-full cursor-pointer"
			/>
		</form>
	);
};
