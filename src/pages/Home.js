import Layout from '@/components/shared/Layout';
import Stopwatch from '@/components/stopwatch/Stopwatch';

export default function Home() {
  return (
    <Layout>
      <section className="bg-gray-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Discover our powerful stopwatch tool designed for precise timing and accuracy.
        </p>
        <div className="bg-white shadow rounded p-6">
          <Stopwatch />
        </div>
      </section>
    </Layout>
  );
}