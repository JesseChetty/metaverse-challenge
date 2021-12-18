import { useState } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Newname({ open, onClose }) {
  if (!open) return null;

  const { setUserData, user } = useMoralis();
  const [username, setUsernames] = useState("");

  const setUsername = (e) => {
    e.preventDefault();

    if (!username) return;
    setUserData({ username });
    onClose();
  };

  return (
    <form className="flex flex-col text-center bg-black opacity-90 w-80 h-48 px-6 py-4 max-w-2xl shadow-2xl rounded-lg border-4 border-blue-400 fixed left-1/2 bottom=1/2 ">
      <div
        className="text-gray-500 absolute top-3 right-5 text-lg cursor-pointer"
        onClick={onClose}
      >
        x
      </div>
      <div className="flex items-center ">
        <div className={`relative h-9 w-9 pr-6 `}>
          <Avatar />
        </div>
        <div className="pl-5 text-lg"> {user.getUsername()}</div>
      </div>

      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 text-lg"
        type="text"
        value={username}
        onChange={(e) => setUsernames(e.target.value)}
        placeholder={`Enter a new User Name  ...`}
      ></input>
      <button
        type="submit"
        onClick={setUsername}
        className="font-bold text-pink-500"
      >
        Change user name
      </button>
    </form>
  );
}

export default Newname;