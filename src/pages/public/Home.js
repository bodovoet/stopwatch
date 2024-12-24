import Layout from "@/components/shared/public/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-lg sm:text-xl leading-relaxed">
          Welcome to the Home page.
        </p>
      </section>
    </Layout>
  );
}