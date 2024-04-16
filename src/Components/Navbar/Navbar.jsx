const Navbar = () => {
  return (
    <div className="navbar bg-[#5A1BFF] my-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Event</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contract</a>
            </li>
          </ul>
        </div>
        <h1 className="text-white text-2xl">
          Event<span className="font-bold">Host</span>{" "}
        </h1>
      </div>
      <div className="navbar-center hidden text-xl text-white lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Event</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contract</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://i.ibb.co/zX0Zjp0/mehedi-picture.jpg"
          alt=""
        />

        <img src="/src/assets/icon/Group 7.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
