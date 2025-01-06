import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { ReuseableForm } from "../../components/shared/ReuseableForm";

export const AddCoffee = () => {
	return (
		<div className=" px-6 xl:px-0 max-w-7xl mx-auto mt-10">
			<Link
				to="/"
				className="font-rancho inline-flex items-center gap-2 text-[#374151] text-3xl [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)]"
			>
				<FaArrowLeft />
				Back to home
			</Link>
			<div className="bg-[#f4f3f0] py-8 px-12 md:py-16 md:px-24 mt-8">
				<h2 className="text-[#374151] text-3xl md:text-4xl lg:text-[45px] font-rancho [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] mb-6 text-center">
					Add New Coffee
				</h2>
				<p className="text-center  md:w-3/4 mx-auto">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using Content here.
				</p>
				<ReuseableForm />
			</div>
		</div>
	);
};
