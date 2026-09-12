import logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <>

        <div className=" flex bg-white-100 justify-around items-center p-3">
            <div>
                <img src={logo} alt="" />
            </div>
            <div >
            <ul className="flex gap-[10px] text-[14px]   ">
                <li className=" hover:text-[#D91B7E] text-[#475569] font-bold ">Home</li>
                <li className=" hover:text-[#D91B7E] text-[#475569] font-bold ">Technologies</li>
                <li className=" hover:text-[#D91B7E] text-[#475569] font-bold ">Projects</li>
                <li className=" hover:text-[#D91B7E] text-[#475569] font-bold ">About</li>
                <li className=" hover:text-[#D91B7E] text-[#475569] font-bold ">Contact</li>
            </ul>
        </div>
        <div className="flex gap-1.5">
            <button className="bg-white text-[12px] p-[8px] rounded-[60px] margin hover:scale-120 hover:cursor-pointer font-bold ">Sign In</button>
            <button className="bg-[#D91B7E] text-[12px] text-amber-100 py-[8px] px-[12px] rounded-[60px]  hover:bg-amber-500  hover:cursor-pointer  font-bold ">Sign Up</button>
        </div>
            </div>
        </>
    );
};

export default Navbar;