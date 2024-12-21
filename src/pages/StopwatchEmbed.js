import Stopwatch from '@/components/stopwatch/Stopwatch';
import '@/layout/globals.css';

export default function StopwatchEmbed() {
  return (
    <div className="background-secondary">
      <div className="mx-auto w-[90%] max-w-[400px] py-4">
        <Stopwatch />
      </div>
    </div>
  );
}