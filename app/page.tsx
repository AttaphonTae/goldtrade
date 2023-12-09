import CalculateRiskFromCash from "@/components/CalculateLotFromRisk";
import DreamScene from "@/components/DreamScene";

export default function Home() {
  return (
    <main className=" p-12">
        <p className="text-lg underline">Your Stratregy</p>
        {/* <DreamScene /> */}
        <CalculateRiskFromCash />
    </main>
  )
}
