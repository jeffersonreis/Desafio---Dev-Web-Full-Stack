import Calculator  from "../components/calculator"
import History  from "../components/history"
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <section className="w-screen h-screen">
      <div className="bg-black p-10">
        <div className="text-5xl font-bold text-center text-white">Encontre o múltiplo Duodigito!</div>
      </div>
      
      <div className="flex h-screen w-screen justify-center bg-gray-400">
          <div className="flex flex-col w-full items-center max-w-7xl bg-white">
            <Calculator/>
            {/* <History/> */}
          </div>
      </div>
    </section>
  )
}