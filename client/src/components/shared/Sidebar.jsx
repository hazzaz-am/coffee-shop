import { MenuLink } from "../ui/MenuLink";

// nav links
const navLinks = [
	{ path: "/", route: "Home" },
	{ path: "/add-coffee", route: "Add Coffee" },
	{ path: "/my-orders", route: "My Orders" },
];

export const Sidebar = () => {
	const menuLinks = navLinks.map((link) => (
		<MenuLink key={link.route} path={link.path} route={link.route} />
	));
	return (
		<div className="flex flex-col gap-8 h-[calc(100vh-130px)] text-right">{menuLinks}</div>
	);
};
