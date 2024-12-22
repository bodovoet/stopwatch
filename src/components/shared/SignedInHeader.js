export default function SignedInHeader({ customerName }) {
  return (
    <header className="bg-gray-100 p-4">
      <h1 className="text-xl font-bold">{customerName}</h1>
    </header>
  );
}