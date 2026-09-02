import About from "@/Componnets/HomPage/About/About";
import Header from "@/Componnets/HomPage/Header/Header";
import Programes from "@/Componnets/HomPage/Programes/Programes";
import LivingProof from "@/Componnets/HomPage/LivingProof/LivingProof";
import MemberShip from "@/Componnets/HomPage/MemberShip/MemberShip";
import Plans from "@/Componnets/HomPage/Plans/Plans";
export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Programes />
      <LivingProof />
      <Plans />
      <MemberShip />
    </main>
  );
}
