import React from "react";

const App = () => {
  return (
    <div
      className="h-min-content w-full min-h-screen flex flex-col items-center justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4">
        <div className="w-[50px] h-[35px] sm:w-[61px] sm:h-[43px] rounded-md flex items-center justify-center">
          {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <button className="w-8 h-8 flex flex-col justify-around items-center focus:outline-none">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Big Logo */}
      <div className="mt-[100px] relative flex w-full h-auto pl-[30px] md:justify-center">
        <img
          src="/logo.svg"
          alt="Big Logo"
          className="w-[50%] max-w-[300px] sm:w-[40%] md:w-[30%] lg:w-[20%] h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="text-left mt-[50px] px-[50px] text-[#00E6E6] flex-grow">
        <h1 className="text-4xl font-bold mb-4 leading-[55px] tracking-[3px]">Trade on the Outcome of Global Events</h1>
        <p className="text-2xl mb-6 text-white leading-[40px] text-left">
        &quot;Use leverage to bet on real-world events and shape your portfolio in a new way.&quot;
        </p>

        <button
          className="text-2xl mt-[40px] w-[50%] md:w-[30%] h-[60px] bg-gradient-to-r from-[#00e6e6] to-[#00a9a9] text-gray-800 text-center font-semibold rounded-full"
          style={{
            background: "linear-gradient(-133deg, #00e6e6 0%, #00a9a9 100%)",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      <div className="mt-[100px] flex justify-center flex-col items-center text-center py-6 text-sm text-white">
        <div className="w-[50px] h-[35px] sm:w-[61px] sm:h-[43px] rounded-md flex items-center justify-center">
          {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <p className="mt-6 text-white text-xl tracking-[4px] leading-[30px] text-center">Where every event is an <br/>
        opportunity</p>
      </div>
    </div>
  );
};

export default App;