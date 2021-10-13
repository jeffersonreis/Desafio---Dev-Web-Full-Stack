import CardHistory from "./cardHistory";

export default function History() {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="mt-10 text-2xl font-bold text-center">Histórico de Buscas</div>

      <div>
        <div className="grid grid-cols-2 text-2xl font-bold my-2">
          <div className="text-center">Número</div>
          <div className="text-center">Resultado</div>
        </div>
        <CardHistory
          index={1}
          number={100}
          result={999}
        />
      </div>
    </div>
  )
}