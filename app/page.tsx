import About from "@/Componnets/About/About";
import Header from "@/Componnets/Header/Header";
import Programes from "@/Componnets/Programes/Programes";
import LivingProof from "@/Componnets/LivingProof/LivingProof";
import MemberShip from "@/Componnets/MemberShip/MemberShip";
export default function Home() {
  return (
      <main className="">
       <Header />
       <About />
       <Programes />
       <LivingProof />
       <MemberShip />
      </main>
  );
}
