const Navbar = () => {
  return (
    <div className="w-full bg-[#1B2333] p-4 rounded-2xl flex justify-between items-center">
      <h2 className="text-white text-xl font-semibold">
        Dashboard
      </h2>

      <div className="bg-violet-500 text-white px-4 py-2 rounded-xl">
        Welcome Back
      </div>
    </div>
  );
};

export default Navbar;