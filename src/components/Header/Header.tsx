import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Navbar } from "../Navbar/Navbar";
import { LogIn } from "../LogIn/LogIn";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="container mx-auto px-3 py-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between">
          <div className="p-3">
            <img src={logo} alt="" width={44} height={44} />
          </div>
          <OverlayScrollbarsComponent defer>
            <Navbar />
          </OverlayScrollbarsComponent>
        </div>
        <LogIn />
      </div>
    </header>
  );
};
