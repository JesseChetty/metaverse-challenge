import Image from "next/image";
import { useMoralis } from "react-moralis";
import jessecc from "../public/images/jessecc.jpg";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const {user} = useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-gradient-to-tr from-blue-900 to bg-fuchsia-900   shadow-sm border-b-2 border-pink-700 
         text-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:item-center">
                <div className="relative h-20 w-20 mx-auto hidden lg:inline-grid">
                    <Image layout="fill" 
                    objectFit="cover"
                    className=" rounded-full" 
                    src={jessecc}/>
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500
                    border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>

                    <h1>Welcome to the PAPAFAM Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate"> {user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    );
}

export default Header;