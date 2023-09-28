import {
  BiSave,
  BiExport,
  BiShare,
  BiPrinter,
  BiCopy,
  BiPaste,
} from "react-icons/bi";

export const FileTab = () => {
  return (
    <div className="flex h-16 w-screen divide-gray-600 border-b-2">
      <div className="flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiSave />
        </div>
        <p>Save</p>
      </div>
      <div className="mx-3 flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiExport />
        </div>
        Export
      </div>
      <div className="flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiShare />
        </div>
        Share
      </div>
      <div className="mx-3 flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiPrinter />
        </div>
        Print
      </div>
      <div className="flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiCopy />
        </div>
        Copy
      </div>
      <div className="flex w-14 cursor-pointer flex-col items-center justify-center hover:bg-gray-50">
        <div>
          <BiPaste />
        </div>
        Paste
      </div>
    </div>
  );
};
