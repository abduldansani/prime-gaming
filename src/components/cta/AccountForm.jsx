import { email, google, user } from "../../assets";

const AccountForm = () => {
  return (
    <div className="flex shrink-0 flex-col gap-2 rounded-xl bg-bg2 p-2 md:justify-around lg:w-1/2 xl:gap-4 xl:p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="text-xl font-bold text-primary xl:text-2xl">
              Signup
            </div>
            <div className="h-1 w-full bg-primary"></div>
          </div>
          <div className="text-primaryLight font-semibold xl:text-xl">
            Login
          </div>
        </div>
        <label className="space-y-2 font-medium">
          Name
          <div className="flex items-center gap-1 rounded border-2 border-white px-1 py-2">
            <img src={user} alt="-" />
            <input
              type="text"
              className="flex-1 bg-transparent px-2 text-[10px] outline-none"
              placeholder="Enter Your Name"
            />
          </div>
        </label>
        <label className="space-y-2 font-medium">
          Email
          <div className="flex items-center gap-1 rounded border-2 border-white px-1 py-2">
            <img src={email} alt="-" />
            <input
              type="text"
              className="flex-1 bg-transparent px-2 text-[10px] outline-none"
              placeholder="Enter Your E-Mail"
            />
          </div>
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-full rounded bg-primary p-3 font-medium">
          Sign Up
        </button>
        <div className="flex items-center gap-1.5">
          <div className="h-px flex-1 bg-white" />
          <div className="font-medium">Or</div>
          <div className="h-px flex-1 bg-white" />
        </div>
        <button className="flex w-full justify-center gap-2 rounded border border-white p-2 font-medium">
          <img src={google} alt="-" />
          <div className="">Sign Up With Google</div>
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
