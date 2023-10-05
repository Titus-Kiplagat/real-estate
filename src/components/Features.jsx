import cardImageOne from "../assets/1.png";
import cardImageTwo from "../assets/2.png";
import cardImageThree from "../assets/3.png";

const Features = () => {
	return (
		<section id="features" className="w-full min-h-screen flex items-center bg-gradient-to-b from-white to-gray-400">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-gray-800 text-4xl font-bold mb-6 capitalize">feature <span className="text-amber-800">properties</span></h2>
				<p className="text-gray-700 text-xl mb-8">Here are some of our featured properties:</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div className="bg-white rounded-lg shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
						<img src={cardImageOne} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-medium text-lg text-gray-900">12<span className="align-text-top">3</span> Main St</h3>
							<p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
							<p className="text-lg font-bold text-gray-700 mt-4">$500,000</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">view details</button>
						</div>
					</div>
					<div className="bg-white rounded-lg shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
						<img src={cardImageTwo} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-medium text-lg text-gray-900">45<span className="align-text-bottom">6</span> Oak St</h3>
							<p className="text-sm text-gray-500">4 bd | 3 ba | 2,000 sqft</p>
							<p className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">view details</button>
						</div>
					</div>
					<div className="bg-white rounded-lg shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
						<img src={cardImageThree} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-medium text-lg text-gray-900"><span className="align-middle">7</span>8<span className="align-middle">9</span> Mapple Ave</h3>
							<p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
							<p className="text-lg font-bold text-gray-700 mt-4">$500,000</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">view details</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
 
export default Features;