import image from "../assets/4.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row w-full h-screen bg-amber-800"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt="about us"
          className="object-cover rounded-tr-full rounded-bl-full"
        />
      </div>
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center p-4 md:p-8">
        <div className="text-center md:text-left">
          <h2 className="text-amber-800 text-3xl md:text-5xl font-bold mb-4 capitalize">about us</h2>
          <p className="text-gray-500 mb-4 md:mb-8 text-lg md:text-xl">
            Welcome to my premier real estate agency, where our mission is to
            provide exceptional service and expertise to help our clients
            achieve their real estate goals. With years of experience in the
            industry, our team of dedicated professionals has built a reputation
						for excellence and integrity.
						<br />
						<br />
						We are committed to staying up-to-date
            with the latest trends and technologies in the real estate market,
            and we use our knowledge and expertise to guide our clients through
            the buying and selling process with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
