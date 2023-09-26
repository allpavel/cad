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
    <nav className="flex flex-row items-center" onClick={handleActiveTabChange}>
      <a
        data-name="file"
        className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
          activeTab === "file" ? " active" : ""
        }`}
      >
        File
      </a>
      <a
        data-name="home"
        className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
          activeTab === "home" ? " active" : ""
        }`}
      >
        Home
      </a>
      <a
        data-name="view"
        className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
          activeTab === "view" ? " active" : ""
        }`}
      >
        View
      </a>
      <a
        data-name="support"
        className={`cursor-pointer rounded-xl px-6 py-3 font-semibold hover:bg-gray-50${
          activeTab === "support" ? " active" : ""
        }`}
      >
        Support
      </a>
    </nav>
  );
};
