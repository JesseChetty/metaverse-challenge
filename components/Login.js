import Image from "next/image";
import { useMoralis } from "react-moralis";
import jessecc from "../public/images/jessecc.jpg"
import background from "../public/images/metaverse background.jpg"

function Login() {
    const { authenticate} = useMoralis();

    return (
        <div className="bg-black relative">
            <h1>i am a loginscreen</h1>

            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center
            w-full space-y-4">
                <Image
                className="object-cover rounded-full"
                    src={jessecc} height={200} width={200}
                 />

                 <button onClick={authenticate} className="bg-purple-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
            </div>

            <div className="w-full h-screen">
                <Image src={background} layout="fill" objectFit="cover"/>
            </div>
        </div>
    )
}

export default Login
