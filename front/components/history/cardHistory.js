export default function CardHistory({index, number, result}) {
  return (
      <section>
        <div className="grid grid-cols-2 border-2 border-black rounded-md">
          <div className="ml-2 text-center py-2">{number}</div>
          <div className="border-l-2 px-2 py-2 border-black text-center">{result}</div>
        </div>
      </section>
    )
}