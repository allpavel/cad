import { BiLogIn } from "react-icons/bi";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="mx-auto px-3 py-6 xl:container">
      <div className="flex flex-row items-center justify-between">
        <div className="p-3">
          <img src={logo} alt="" width={44} height={44} />
        </div>
        <OverlayScrollbarsComponent defer>
          <nav className="flex flex-row items-center">
            <a className="cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50">
              File
            </a>
            <a className="cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50">
              Home
            </a>
            <a className="cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50">
              View
            </a>
            <a className="cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50">
              Support
            </a>
          </nav>
        </OverlayScrollbarsComponent>
        <div className="cursor-pointer rounded-xl px-6 py-3 hover:bg-gray-50">
          <BiLogIn className=" text-xl md:hidden" />
          <a className="hidden font-semibold md:block">Log in</a>
        </div>
      </div>
    </header>
  );
};
