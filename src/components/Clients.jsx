import Client1 from "../assets/client1.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";

const Clients = () => {
	return (
		<section id="clients" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center">
				<h2 className="text-gray-900 mb-4 text-3xl font-bold">Our Clients</h2>
				<p className="mb-8 text-gray-700 text-lg">See what our clients have to say about us.</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div>
					<img src={Client1} alt="client image" className="w-24 h-24 rounded-full object-cover" />
						<div className="bg-white p-8 shadow-md rounded-lg">
							<p className="mb-4 text-gray-700 text-lg">
								&quot;Working with this real estate agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily.&quot;
							</p>
							<p className="text-gray-500">Adam Johnson, Homebuyer</p>
					</div>
				</div>
				<div>
					<img src={Client4} alt="client image" className="w-24 h-24 rounded-full object-cover" />
						<div className="bg-white p-8 shadow-md rounded-lg">
							<p className="mb-4 text-gray-700 text-lg">
								&quot;I was impressed with this agency&apos;s marketing strategy when we were selling our home. They really went above and beyond to showcase my home and attract potential buyers.&quot;
							</p>
							<p className="text-gray-500">Michael Smith, Home Seller</p>
					</div>
				</div>
				<div>
					<img src={Client5} alt="client image" className="w-24 h-24 rounded-full object-cover" />
						<div className="bg-white p-8 shadow-md rounded-lg">
							<p className="mb-4 text-gray-700 text-lg">
								&quot;I&apos;ve been working with this agency for several years now for property management services, and they&apos;ve been fantastic. They handle everything really well.&quot;
							</p>
							<p className="text-gray-500">David Brown, Property Owner</p>
					</div>
				</div>
			</div>
			</div>
		</section>
	);
}
 
export default Clients;