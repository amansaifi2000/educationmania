import React from "react"; // Import React
import abstract1 from "../../../../public/images/abstract1.jpg"

const Form = () => {
  const backgroundStyle = {
    position: "relative",
    backgroundImage: `url(${abstract1})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  };

  return (
    <>
      <div className="p-4 md:p-0 flex flex-col md:flex-row bg-white rounded-lg mt-5" style={{...backgroundStyle, position: "relative"}}>
        <div className="w-full md:w-1/2">
          <div className="p-6 relative">
            <h2 className="text-xl text-black text-th-background font-semibold uppercase pl-2 border-l-4 border-th-background">Opening Hours</h2>
            <ul className="list-none m-0 p-0 mt-4">
              <li className="text-gray-600 border-b border-gray-800 py-2 px-1">
                <span>Sun</span><span className="float-right">Closed</span>
              </li>
              <li className="text-black border-b border-black py-2 px-1 font-semibold">
                <span>Mon</span><span className="float-right">10:00 AM - 5:00 PM</span>
              </li>
              <li className="text-gray-600 border-b border-gray-800 py-2 px-1">
                <span>Tue</span><span className="float-right">10:00 AM - 5:00 PM</span>
              </li>
              <li className="text-gray-600 border-b border-gray-800 py-2 px-1">
                <span>Wed</span><span className="float-right">10:00 AM - 5:00 PM</span>
              </li> 
              <li className="text-gray-600 border-b border-gray-800 py-2 px-1">
                <span>Thurs</span><span className="float-right">10:00 AM - 5:00 PM</span>
              </li>
              <li className="text-gray-600 border-b border-gray-800 py-2 px-1">
                <span>Fri</span><span className="float-right">10:00 AM - 5:00 PM</span>
              </li>
              <li className="text-gray-600 border-b border-gray-800 py-2 px-1">
                <span>Sat</span><span className="float-right">10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-6 relative">
            <h2 className="text-xl text-black text-th-background font-semibold uppercase pl-2 border-l-4 border-th-background">Your Questions, Our Answers</h2>
            
          
            <div className="pt-8">
      <form data-gtm-form-interact-id="0">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="fullName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="(?:\0)?[789]\d{9}"
            name="mobile"
            id="mobile"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="mobile"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
          >
            Mobile (0123456789)
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="message"
            id="message"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
              value=""
              data-gtm-form-interact-field-id="0"
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="https://vosovyapar.com/terms-and-conditions"
              target="_blank"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions.
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-th-background hover:bg-th-primary focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow"
        >
          Submit
        </button>
      </form>
    </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
