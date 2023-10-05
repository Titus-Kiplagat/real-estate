import image from "../assets/main.png";
const Home = () => {
	return (  
		<section id="home" className="w-full min-h-screen flex items-center p-8 mt-20 md:mt-0 bg-gradient-to-b from-white to-gray-500">
			<div className="max-w-7xl mx-auto md:flex justify-center items-center">
				<div className="md:w-1/2 md:pl-8">
					<div className="text-center md:text-left">
						<h1 className="capitalize text-gray-800 font-bold text-4xl mb-6">find your <span className="text-amber-800">dream home</span></h1>
						<p className="text-gray-700 text-lg mb-8">Welcome to our real estate agency, where finding your dream home is our top priority. Our team of experienced agents is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a property</p>
						<form className="flex flex-col md:flex-row gap-4">
							<input type="email" name="email" id="email" autoComplete="email" placeholder="Your Email" className="rounded-full bg-white px-4 py-2 focus:outline-none border" />
							<button type="submit" className="capitalize rounded-full bg-amber-800 text-white hover:bg-amber-900 py-3 px-6">get started</button>
						</form>
					</div>
				</div>
				<div className="md:w-1/2 md:pr-8 my-11">
					<img src={image} alt="homepage image" className="w-full h-auto rounded-tr-full rounded-bl-full" />
				</div>
			</div>
		</section>
	);
}
 
export default Home;