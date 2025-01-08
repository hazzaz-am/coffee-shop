import logo from "../../assets/images/more/nav_logo.png";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaPhone,
	FaLocationDot,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import footerBG from '../../assets/images/more/footer_bg.jpg'

export const Footer = () => {
	return (
		<div style={{
			backgroundImage: `url(${footerBG})`
		}} className="py-10 mt-28">
			<img
				className="ml-6 w-10 sm:w-[75px] sm:h-[90px] cursor-pointer mb-6"
				src={logo}
				alt="logo"
			/>
			<div className="px-6 xl:px-0 max-w-7xl mx-auto flex justify-between gap-6">
				<div className="w-1/2">
					<h2 className="text-[#331A15] text-3xl md:text-5xl 2xl:text-[55px] font-rancho [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] mb-8">
						Espresso Emporium
					</h2>
					<p className="mb-8 md:text-xl text-[#1B1A1A]">
						Always ready to be your friend. Come & Contact with us to share your
						memorable moments, to share with your best companion.
					</p>
					<div className="flex items-center gap-3 mb-8">
						<FaFacebook color="#331A15" size={28} />
						<FaTwitter color="#331A15" size={28} />
						<FaInstagram color="#331A15" size={28} />
						<FaLinkedin color="#331A15" size={28} />
					</div>
					<h2 className="text-[#331A15] text-3xl md:text-5xl 2xl:text-[55px] font-rancho [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] mb-8">
						Get in Touch
					</h2>
					<div className="space-y-3">
						<div className="flex items-center gap-3">
							<FaPhone color="#331A15" size={18} />
							<p className="text-[#1B1A1A] md:text-xl">
								+88 01533 333 333
							</p>
						</div>
						<div className="flex items-center gap-3">
							<IoMdMail color="#331A15" size={18} />
							<p className="text-[#1B1A1A] md:text-xl">
								info@gmail.com
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaLocationDot color="#331A15" size={18} />
							<p className="text-[#1B1A1A] md:text-xl">
								72, Wall street, King Road, Dhaka
							</p>
						</div>
					</div>
				</div>

				{/* contact */}
				<div className="w-1/2">
					<h2 className="text-[#331A15] text-3xl md:text-5xl lg:text-[55px] font-rancho [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] mb-8">
						Connect with Us
					</h2>
					<form className="w-full md:w-2/3 space-y-4">
						<div>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								className="w-full py-2 px-4"
							/>
						</div>
						<div>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className="w-full py-2 px-4"
							/>
						</div>
						<div>
							<textarea
								name="message"
								id="message"
								placeholder="Message"
								className="w-full py-2 px-4"
							></textarea>
						</div>
						<input
							type="submit"
							value="Send Message"
							className="border-2 border-[#331A15] px-4 py-2 text-[#331A15] font-rancho text-xl rounded-full"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
