/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

export const MenuLink = ({ path, route }) => {
	return (
		<NavLink
			className={({ isActive }) => (isActive ? "text-white border-b" : "text-white")}
			to={path}
		>
			{route}
		</NavLink>
	);
};
