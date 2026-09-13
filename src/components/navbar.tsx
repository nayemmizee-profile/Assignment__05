



import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <>
      <div className=" flex bg-emerald-50 justify-between items-center px-40 py-3">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-[15px] text-[14px]   ">
            <li className="hover:transition-all duration-[1s] hover:text-[#D91B7E] text-[#475569] font-extrabold ">
              Home
            </li>
            <li className="hover:transition-all duration-[1s] hover:text-[#D91B7E] text-[#475569] font-extrabold ">
              Technologies
            </li>
            <li className="hover:transition-all duration-[1s] hover:text-[#D91B7E] text-[#475569] font-extrabold ">
              Projects
            </li>
            <li className="hover:transition-all duration-[1s] hover:text-[#D91B7E] text-[#475569] font-extrabold ">
              About
            </li>
            <li className="hover:transition-all duration-[1s] hover:text-[#D91B7E] text-[#475569] font-extrabold ">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-1.5">
          <button className="bg-emerald-50 text-[12px] p-[8px] rounded-[60px] margin hover:scale-120 hover:cursor-pointer font-bold  ">
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
