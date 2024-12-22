import SignedInTemplate from "@/components/shared/SignedInLayout";

export default function Dashboard() {
  return (
    <SignedInTemplate customerName="Grupo Elcatex">
      <div className="grid grid-cols-3 gap-4">
        <section className="bg-white p-4 shadow rounded">
          <h2 className="font-bold">Seambits</h2>
          <p>Retrieve and observe metrics for a given worker or station.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Go
          </button>
        </section>
        <section className="bg-white p-4 shadow rounded">
          <h2 className="font-bold">Styles</h2>
          <p>Retrieve and observe metrics for a given style variant.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Go
          </button>
        </section>
        <section className="bg-white p-4 shadow rounded">
          <h2 className="font-bold">Cycles</h2>
          <p>
            Retrieve and observe metrics for the cross-sectional dimension of
            planned cycles.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Go
          </button>
        </section>
      </div>
    </SignedInTemplate>
  );
}