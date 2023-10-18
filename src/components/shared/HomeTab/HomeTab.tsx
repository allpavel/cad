import { BiCopy, BiPaste } from "react-icons/bi";

export const HomeTab = () => {
  return (
    <div className="flex h-16 w-screen divide-gray-600 border-b-2">
      <div className="flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiCopy />
        </div>
        Copy
      </div>
      <div className="mx-3 flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiPaste />
        </div>
        Paste
      </div>
    </div>
  );
};
