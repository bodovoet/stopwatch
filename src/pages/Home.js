import Layout from '@/components/shared/Layout';
import Stopwatch from "@/components/stopwatch/Stopwatch";

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <Stopwatch />
    </Layout>
  );
}