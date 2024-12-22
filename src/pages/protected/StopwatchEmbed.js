import SignedInLayout from "@/components/shared/SignedInLayout";
import Stopwatch from "@/components/stopwatch/Stopwatch";

export default function StopwatchEmbed() {
  return (
    <SignedInLayout>
      <div className="background-secondary">
        <div className="mx-auto w-[90%] max-w-[400px] py-4">
          <Stopwatch />
        </div>
      </div>
    </SignedInLayout>
  );
}