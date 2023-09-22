import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="mx-auto px-3 py-6 xl:container">
      <div className="flex flex-row items-center justify-between">
        <div className="p-3">
          <img src={logo} alt="" width={44} height={44} />
        </div>
        <nav className="flex flex-row items-center overflow-x-auto overflow-y-hidden">
          <a className="cursor-pointer px-6 py-3 font-semibold hover:bg-gray-50">
            File
          </a>
          <a className="cursor-pointer px-6 py-3 font-semibold hover:bg-gray-50">
            Home
          </a>
          <a className="cursor-pointer px-6 py-3 font-semibold hover:bg-gray-50">
            View
          </a>
          <a className="cursor-pointer px-6 py-3 font-semibold hover:bg-gray-50">
            Support
          </a>
        </nav>
        <div>
          <a className="cursor-pointer px-6 py-3 font-semibold hover:bg-gray-50">
            Log in
          </a>
        </div>
      </div>
    </header>
  );
};
