import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { Navbar } from "./components/shared/Navbar";
import { AddCoffee } from "./pages/coffee/AddCoffee";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { MyOrders } from "./pages/orders/MyOrders";
import { Footer } from "./components/shared/Footer";
import { CoffeeDetails } from "./pages/coffee/CoffeeDetails";
import { UpdateCoffee } from "./pages/coffee/UpdateCoffee";
import { Toaster } from "react-hot-toast";


export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add-coffee" element={<AddCoffee />} />
				<Route path="/coffee-details/:id" element={<CoffeeDetails />} />
				<Route path="/coffee-edit/:id" element={<UpdateCoffee />} />
				<Route path="/my-orders" element={<MyOrders />} />
				<Route path="/signin" element={<LoginPage />} />
				<Route path="/signup" element={<RegisterPage />} />
			</Routes>
			<Footer />
			<Toaster/>
		</>
	);
};
