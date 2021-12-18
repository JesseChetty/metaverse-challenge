import Image from "next/image";
import { useMoralis } from "react-moralis";


function Avatar({username, logoutOnPress}) {
    const {user, logout} = useMoralis();

    return <Image 
        className="rounded-full bg-gradient-to-tr from-blue-900 to bg-fuchsia-900 cursor-pointer hover:opacity-80"
        src={`https://avatars.dicebear.com/api/gridy/${username || user.get("username")}.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"
    />;
}

export default Avatar;