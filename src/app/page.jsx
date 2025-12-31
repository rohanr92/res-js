import LoggedData from "@/components/LoggedData";
import LoginBtn from "@/components/LoginBtn";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div style={{textAlign: 'center', backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', height: '100vh', color: 'white'}}>
        <div className="h-full place-content-center text-center"> 
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-xl mb-8">Experience the best dining with us.</p>
         <LoginBtn></LoginBtn></div>
        </div>
        <LoggedData></LoggedData>
      </main>
    </div>
  );
}
