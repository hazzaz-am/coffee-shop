/* eslint-disable react/prop-types */
export const SingleInformation = ({img, title, desc}) => {
  return (
		<div className="space-y-4">
			<img src={img} alt="" />
			<h4 className="font-rancho text-2xl md:text-3xl 2xl:text-4xl">{title}</h4>
			<p className="text-sm md:text-base text-[#1B1A1A]">{desc}</p>
		</div>
	);
}