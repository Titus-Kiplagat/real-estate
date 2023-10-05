const Footer = () => {
	return (
		<footer className="bg-amber-800">
			<div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 text-white">
				<nav className="my-2 mx-5 flex flex-wrap justify-center" aria-label="Footer">
					<div className="px-5 py-2">
						<div className="font-bold text-xl hover:text-gray-300 cursor-pointer">
							Real Estate Agency
						</div>
					</div>
					<div className="px-5 py-2 cursor-pointer">
						<a href="#home" className="hover:text-gray-300">Home</a>
					</div>
					<div className="px-5 py-2 cursor-pointer">
						<a href="#features" className="hover:text-gray-300">Features</a>
					</div>
					<div className="px-5 py-2 cursor-pointer">
						<a href="#clients" className="hover:text-gray-300">Clients</a>
					</div>
					<div className="px-5 py-2 cursor-pointer">
						<a href="#about" className="hover:text-gray-300">About Us</a>
					</div>
					<div className="px-5 py-2 cursor-pointer">
						<a href="#contact" className="hover:text-gray-300">Contact Us</a>
					</div>
				</nav>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
					<div className="grid-cols-1">
						<h3 className="text-lg font-medium mb-4">About Us</h3>
						<p className="mb-4">Real Estate Company is a leading provider of real estate services, with a focus on delivering exceptional value to our clients. Our team of experts has deep industry knowledge and a proven track record of success.</p>
					</div>
					<div className="grid-cols-1">
						<h3 className="text-lg font-medium mb-4">Services</h3>
						<ul>
							<li className="mb-2">Residential Real Estate</li>
							<li className="mb-2">Commercial Real Estate</li>
							<li className="mb-2">Property Management</li>
							<li className="mb-2">Real Estate Investing</li>
						</ul>
					</div>
					<div className="grid-cols-1">
						<h3 className="text-lg font-medium mb-4">Social Links</h3>
						<ul>
							<li className="mb-2">Facebook</li>
							<li className="mb-2">Instagram</li>
							<li className="mb-2">LinkedIn</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-center mt-8">
					<p className="text-base">&copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
 
export default Footer;