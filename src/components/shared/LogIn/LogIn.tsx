import { BiLogIn } from "react-icons/bi";

export const LogIn = () => {
  return (
    <div className="cursor-pointer rounded-xl px-6 py-3 hover:bg-gray-50">
      <BiLogIn className=" text-xl md:hidden" />
      <a className="hidden font-semibold md:block">Log in</a>
    </div>
  );
};
