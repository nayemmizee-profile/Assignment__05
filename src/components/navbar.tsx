import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <>
      <div className=" flex bg-white-100 justify-around items-center px-6 py-3">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-[15px] text-[14px]   ">
            <li className="hover:transition-all duration-[2s] hover:text-[#D91B7E] text-[#475569] font-bold ">
              Home
            </li>
            <li className="hover:transition-all duration-[2s] hover:text-[#D91B7E] text-[#475569] font-bold ">
              Technologies
            </li>
            <li className="hover:transition-all duration-[2s] hover:text-[#D91B7E] text-[#475569] font-bold ">
              Projects
            </li>
            <li className="hover:transition-all duration-[2s] hover:text-[#D91B7E] text-[#475569] font-bold ">
              About
            </li>
            <li className="hover:transition-all duration-[2s] hover:text-[#D91B7E] text-[#475569] font-bold ">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-1.5">
          <button className="bg-white text-[12px] p-[8px] rounded-[60px] margin hover:scale-120 hover:cursor-pointer font-bold  ">
            Sign In
          </button>
          <button className="bg-[#D91B7E] text-[12px] text-amber-100 px-6 py-1 rounded-[60px]  hover:bg-amber-500  hover:cursor-pointer hover:transition-all duration-[2s] font-bold ">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
