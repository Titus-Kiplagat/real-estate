const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center p-2 bg-white"
    >
      <div className="max-w-7xl py-16 px-4">
        <div className="max-w-lg md:max-w-none mx-auto md:grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold text-2xl text-gray-900 mb-4 capitalize">
              contact us
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions or would like to schedule a consultation
              with one of our real estate experts, please don&apos;t hesitate to
              contact us
            </p>
            <ul className="list-none text-gray-700 text-lg">
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                1234 Main St, Anytown USA 12345
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                (123) 456-7890
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                info@example.com
              </li>
            </ul>
          </div>
          <div>
						<form action="#" method="POST">
							<div className="mb-4">
								<label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2">Name</label>
								<input type="text" name="name" id="name" className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
								<input type="email" name="email" id="email" className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
							</div>
							<div className="mb-4">
								<label htmlFor="phone" className="block text-gray-700 text-lg font-bold mb-2">Phone</label>
								<input type="tel" name="phone" id="phone" className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
							</div>
							<div className="mb-4">
								<label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2">Message</label>
								<textarea name="message" id="message" cols="30" rows="10" className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
							</div>
							<div className="mb-4 inline-flex justify-center w-full">
								<button type="submit" className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded">Send Message</button>
							</div>
						</form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
