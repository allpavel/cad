import { useState } from "react";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("file");

  const handleActiveTabChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (target.dataset.name) {
      setActiveTab(target.dataset.name);
    }
  };

  return (
    <nav onClick={handleActiveTabChange}>
      <ul className="flex flex-row items-center">
        <li>
          <button
            data-name="file"
            className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
              activeTab === "file" ? " active" : ""
            }`}
          >
            File
          </button>
        </li>
        <li>
          <button
            data-name="home"
            className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
              activeTab === "home" ? " active" : ""
            }`}
          >
            Home
          </button>
        </li>
        <li>
          <button
            data-name="view"
            className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
              activeTab === "view" ? " active" : ""
            }`}
          >
            View
          </button>
        </li>
        <li>
          <button
            data-name="support"
            className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
              activeTab === "support" ? " active" : ""
            }`}
          >
            Support
          </button>
        </li>
      </ul>
    </nav>
  );
};
