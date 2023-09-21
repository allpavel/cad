import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="mx-auto p-6 xl:container">
      <div className="flex flex-row items-center justify-between">
        <div>
          <img src={logo} alt="" width={44} height={44} />
        </div>
        <div className="cursor-pointer xl:hidden" onClick={openMenu}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>
      <nav className={`${isOpen ? "flex" : "hidden"} mt-3 flex-col`}>
        <a>File</a>
        <a>Home</a>
        <a>Design</a>
        <a>Insert</a>
        <a>Page</a>
        <a>Options</a>
        <a>Support</a>
      </nav>
    </header>
  );
};
