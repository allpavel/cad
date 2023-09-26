import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Navbar } from "../Navbar/Navbar";
import { LogIn } from "../LogIn/LogIn";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="mx-auto px-3 py-6 xl:container">
      <div className="flex flex-row items-center justify-between">
        <div className="p-3">
          <img src={logo} alt="" width={44} height={44} />
        </div>
        <OverlayScrollbarsComponent defer>
          <Navbar />
        </OverlayScrollbarsComponent>
        <LogIn />
      </div>
    </header>
  );
};
