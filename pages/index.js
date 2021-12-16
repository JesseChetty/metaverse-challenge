import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from "react-moralis";
 
export default function Home() {
  const { isAuthenticated, logout} = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse-challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className= 'bg-green-500 rounded-lg p-5 font-bold animate-pulse flex z-1 h-1/1 items-center justify-center w-full space-y-4 align-text-bottom'>welcome</h1>
      <button onClick={logout} className="bg-red-500 rounded-lg p-5 font-bold animate-pulse flex z-1 h-1/1 items-center justify-center
            w-full space-y-4 align-text-bottom" >logout of metaverse</button>

    </div>
  )
}
