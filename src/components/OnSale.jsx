import cardImageOne from "../assets/1.png";
import cardImageTwo from "../assets/2.png";
import cardImageThree from "../assets/3.png";

const OnSale = () => {
	return (
		<section id="sale" className="w-full min-h-screen flex items-center bg-gray-100">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-gray-800 text-4xl font-bold mb-6 capitalize">on sale <span className="text-amber-800">properties</span></h2>
				<p className="text-gray-700 text-xl mb-8">We offer a wide selection of on-sale properties that cater to different preferences and budgets. Here are some of our featured properties:</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div className="bg-white rounded-lg hover:shadow-lg">
						<img src={cardImageOne} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-medium text-lg text-gray-900">12<span className="align-text-top">3</span> Main St</h3>
							<p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
							<p className="text-lg font-bold text-gray-700 mt-4"><del>$500,000</del> on sale now: $250,000</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">view details</button>
						</div>
					</div>
					<div className="bg-white rounded-lg hover:shadow-lg">
						<img src={cardImageTwo} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-medium text-lg text-gray-900">45<span className="align-text-bottom">6</span> Oak St</h3>
							<p className="text-sm text-gray-500">4 bd | 3 ba | 2,000 sqft</p>
							<p className="text-lg font-bold text-gray-700 mt-4 capitalize"><del>$750,000</del> on sale now: $500,000</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">view details</button>
						</div>
					</div>
					<div className="bg-white rounded-lg hover:shadow-lg">
						<img src={cardImageThree} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-medium text-lg text-gray-900"><span className="align-middle">7</span>8<span className="align-middle">9</span> Mapple Ave</h3>
							<p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
							<p className="text-lg font-bold text-gray-700 mt-4"><del>$500,000</del> on sale now: $200,000</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">view details</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
 
export default OnSale;