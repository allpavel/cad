import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Navbar } from "../Navbar/Navbar";
import { LogIn } from "../LogIn/LogIn";
import { FileTab } from "../FileTab/FileTab";
import { HomeTab } from "../HomeTab/HomeTab";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="w-screen px-3 py-6">
      <div className="flex flex-row items-center justify-between divide-gray-600 border-b-2">
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
      <FileTab />
      <HomeTab />
    </header>
  );
};
