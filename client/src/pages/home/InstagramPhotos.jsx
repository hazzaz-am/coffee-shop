import coffeeCup from '../../assets/images/insta/Rectangle 10.png'

export const InstagramPhotos = () => {
  return (
		<div className="px-6 xl:px-0 max-w-7xl mx-auto mt-24">
			<div className="text-center">
				<h4 className="text-[#1B1A1A] text-xl mb-2">Follow Us Now</h4>
				<h2 className="text-[#331A15] text-[55px] font-rancho [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)]">
					Follow on Instagram
				</h2>
			</div>

			{/* photos */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
				<img src={coffeeCup} alt="" />
			</div>
		</div>
	);
}