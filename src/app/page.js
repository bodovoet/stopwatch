import PastaStopwatch from '@/components/PastaStopwatch';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-[#f6f6f6]">
      <PastaStopwatch seambitId="test-123" />
    </main>
  );
}