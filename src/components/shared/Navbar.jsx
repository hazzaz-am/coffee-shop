import logo from "../../assets/images/more/nav_logo.png";
import navbarBG from "../../assets/images/components/navbar.png";
import { Link } from "react-router";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<nav
			className="py-4 bg-cover bg-no-repeat bg-center relative"
			style={{
				backgroundImage: `url(${navbarBG})`,
			}}
		>
			<div className="px-6 xl:px-0 max-w-7xl mx-auto flex items-center justify-between">
				{/* logo */}
				<div className="flex items-center gap-1 font-rancho">
					<img
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						className="w-10 sm:w-[75px] sm:h-[90px] cursor-pointer"
						src={logo}
						alt="logo"
					/>
					<Link to="/">
						<h1 className="text-white text-xl sm:text-3xl md:text-4xl">
							Espresso Emporium
						</h1>
					</Link>
				</div>

				{/* authentication */}
				<div className="flex items-center gap-4">
					<Link
						to="/signin"
						className="font-rancho text-2xl border-2 border-[#331A15] bg-[#E3B577] text-[#331A15] px-4 py-2 drop-shadow-2xl mt-4 [text-shadow:_0_4px_8px_rgb(51_26_21_/_0.8)] cursor-pointer"
					>
						Signin
					</Link>
				</div>
			</div>
			{/* side menu */}
			{isSidebarOpen && (
				<div className="absolute top-0 left-0 bg-[#3d2929] transition-all w-48 p-8">
					<button
						onClick={() => setIsSidebarOpen(false)}
						className="text-white border py-1 px-4 w-full mb-8 hover:bg-[#382929]"
					>
						X
					</button>
					{/* <div className="flex items-start justify-between"> */}
					<Sidebar />
					{/* </div> */}
				</div>
			)}
		</nav>
	);
};
