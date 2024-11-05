import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/form");
  };

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-[#111] fixed top-0 left-0 z-10">
      <h1 className="text-xl font-bold text-lime-400">LearnHub</h1>
      <button
        className="text-white border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black"
        onClick={handleAdminClick}
      >
        Admin
      </button>
    </header>
  );
};

export default Navbar;
