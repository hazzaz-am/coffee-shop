import { AboutUs } from "./AboutUs";
import { Banner } from "./Banner";
import { InstagramPhotos } from "./InstagramPhotos";
import { Products } from "./Products";

export const HomePage = () => {
	return (
		<>
			<Banner />
			<AboutUs />
			<Products />
			<InstagramPhotos/>
		</>
	);
};
