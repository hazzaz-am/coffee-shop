import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { Navbar } from "./components/shared/Navbar";
import { AddCoffee } from "./pages/coffee/AddCoffee";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { MyOrders } from "./pages/orders/MyOrders";

export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add-coffee" element={<AddCoffee />} />
				<Route path="/my-orders" element={<MyOrders />} />
				<Route path="/signin" element={<LoginPage />} />
				<Route path="/signup" element={<RegisterPage />} />
			</Routes>
		</>
	);
};
