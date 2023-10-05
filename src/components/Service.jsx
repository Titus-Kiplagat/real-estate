import serviceImageOne from "../assets/service1.png";
import serviceImageTwo from "../assets/service2.png";
import serviceImageThree from "../assets/service3.png";

const Service = () => {
	return (
		<section id="service" className="w-full min-h-screen flex items-center bg-gradient-to-b from-white to-gray-400">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-gray-800 text-4xl font-bold mb-6 capitalize">our <span className="text-amber-800">services</span></h2>
				<p className="text-gray-700 text-xl mb-8">We offer many services for our clients, Here are some of our services:</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div className="bg-white rounded-lg hover:shadow-lg">
						<img src={serviceImageOne} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-bold text-lg text-gray-800 mb-2">Home Buying</h3>
							<p className="text-gray-700 leading-relaxed mb-4">We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem.</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">learn more</button>
						</div>
					</div>
					<div className="bg-white rounded-lg hover:shadow-lg">
						<img src={serviceImageTwo} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-bold text-lg text-gray-800 mb-2">Home Selling</h3>
							<p className="text-gray-700 leading-relaxed mb-4">We help you sell your home quickly and for the best price. Our team of experts will provide you with a customized marketing strategy to attract potential buyers and maximize your home&apos;s value.</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">learn more</button>
						</div>
					</div>
					<div className="bg-white rounded-lg hover:shadow-lg">
						<img src={serviceImageThree} alt="property image" className="w-full max-h-64 h-1/3 md:h-64 rounded-lg" />
						<div className="py-6 px-4">
							<h3 className="font-bold text-lg text-gray-800 mb-2">Property Management</h3>
							<p className="text-gray-700 leading-relaxed mb-4">We provide comprehensive property management services to help you manage your rental properties. Our team of experts will handle everything from tenant screening to maintenance and repairs.</p>
							<button className="text-white capitalize bg-amber-800 mt-6 px-4 py-2 rounded-md hover:bg-amber-700">learn more</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
 
export default Service;