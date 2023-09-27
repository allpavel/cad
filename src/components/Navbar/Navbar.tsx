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
          <ul className={`${activeTab === "file" ? "block" : "hidden"}`}>
            <li>
              <button>Open</button>
            </li>
            <li>
              <button>Save</button>
            </li>
            <li>
              <button>Export</button>
            </li>
          </ul>
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
          <ul className={`${activeTab === "home" ? "block" : "hidden"}`}>
            <li>
              <button>Open2</button>
            </li>
            <li>
              <button>Save2</button>
            </li>
            <li>
              <button>Export2</button>
            </li>
          </ul>
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
          <ul className={`${activeTab === "view" ? "block" : "hidden"}`}>
            <li>
              <button>Open3</button>
            </li>
            <li>
              <button>Save3</button>
            </li>
            <li>
              <button>Export3</button>
            </li>
          </ul>
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
          <ul className={`${activeTab === "support" ? "block" : "hidden"}`}>
            <li>
              <button>Open4</button>
            </li>
            <li>
              <button>Save4</button>
            </li>
            <li>
              <button>Export4</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
