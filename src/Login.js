import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState({ name: "", password: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dataUser = { name: "Arjun", password: "arjunbaik" };

  const buttonLogin = () => {
    if (dataUser.name !== value.name || dataUser.password !== value.password) {
      setError(true);
      return;
    }
    navigate(`/landing-page/${value.name}`);
  };
  return (
    <div className="flex w-full h-full justify-center mt-[80px]">
      <div className="flex flex-col rounded-lg w-[400px] h-[260px] bg-slate-300 m-10 px-[40px] py-[30px]">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="my-3">Username :</p>
            <p>Password :</p>
          </div>
          <div className="flex flex-col ml-5">
            <input
              className="bg-slate-300 my-3 border border-black p-1"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
            <input
              type="password"
              className="bg-slate-300 border border-black p-1"
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
          </div>
        </div>
        <div className="flex w-full justify-center ">
          <button
            className=" mt-[30px] border border-black rounded-lg p-3"
            onClick={buttonLogin}
            disabled={value.name.length === 0 || value.password.length === 0}
          >
            Login
          </button>
        </div>
        {error ? <span>Username atau password anda salah! </span> : null}
      </div>
    </div>
  );
};
export default Login;
