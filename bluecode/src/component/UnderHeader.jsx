function UnderHeader() {
  return (
    <div className="under grid grid-cols md:grid-cols-2 flex justify-end items-center bg-black ">
      {/* Left Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start h-full ">
      <div className="header  justify-between flex items-center w-full  px-4">
      {/* Left Content */}
      <div>
        <h1 className="text-[18px] font-[800] text-white text-left">
          Listen to ABR Live Radio
        </h1>
        <h1 className="text-white text-[13px] font-[800] flex justifiy-start">
          On Air
        </h1>
      </div>
      {/* Right Content */}
      <div className="flex justify-end">
        <h1 className="text-white text-[13px] font-[600]">
        View schedules
        </h1>
      </div>
    </div>
      </div>

      {/* Right Side (optional content) */}
      <div className="py-4 bg-black flex justify-end items-center h-full">
        <ul className="text-[15px]  text-white flex gap-4 font-bold text-blac font-[700] font-montserrat">
            <li className="font-montserrat">Latest new</li>
            <li>New Episode</li>
            <li>Our Services</li>
            <li>All Podcast</li>
        </ul>
      </div>
    </div>
  );
}

export default UnderHeader;
