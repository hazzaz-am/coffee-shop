export const ReuseableForm = () => {
	return (
		<form className="mx-auto mt-8">
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
						name="chef"
						id="chef"
						placeholder="Enter Coffee Chef"
						className="w-full px-4 py-2 rounded-md"
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
						name="supplier"
						id="supplier"
						placeholder="Enter Coffee Supplier"
						className="w-full px-4 py-2 rounded-md"
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
					/>
				</div>
			</div>
			{/* fourth row */}
			<div className="flex flex-col w-full gap-4 mb-6">
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
			</div>
			{/* button */}
			<input
				type="submit"
				value="Add Coffee"
				className="font-rancho text-2xl border-2 border-[#331A15] bg-[#E3B577] text-[#331A15] px-4 py-2 drop-shadow-2xl mt-4 [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] w-full cursor-pointer"
			/>
		</form>
	);
};
