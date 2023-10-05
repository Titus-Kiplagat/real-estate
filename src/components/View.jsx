import video from "../assets/video.mp4";
import houseIcon from "../assets/house.png";
import locationIcon from "../assets/location.png";
import moneyIcon from "../assets/money.png";

const View = () => {
	return (
		<section id="view" className="w-full h-screen flex flex-col md:flex-row bg-amber-800">
			<div className="flex justify-center items-center w-full md:w-1/2 bg-gray-100 p-4 md:p-8">
				<div className="text-center">
					<h1 className="font-bold capitalize text-4xl">real <span className="text-amber-800">estate</span> video</h1>
					<div className="w-full h-full">
						<video src={video} type="video/mp4" controls></video>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full md:w-1/2">
				<div className="text-white">
					<h2 className="capitalize font-bold text-3xl mb-4">real estate</h2>
					<h3 className="font-bold text-2xl mb-4">Why Choose Our Properties?</h3>
					<ul className="list-none">
						<li className="flex space-x-4 cursor-pointer px-4 mb-10 items-center">
							<img src={houseIcon} alt="House Icon" className="w-8 h-8" />
							<span>Spacious and comfortable living spaces</span>
						</li>
						<li className="flex space-x-4 cursor-pointer px-4 mb-10 items-center">
							<img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
							<span>Located in prime areas with excellent infrastructure</span>
						</li>
						<li className="flex space-x-4 cursor-pointer px-4 mb-10 items-center">
							<img src={moneyIcon} alt="Money Icon" className="w-8 h-8" />
							<span>Affordable prices and flexible payment plans</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
 
export default View;