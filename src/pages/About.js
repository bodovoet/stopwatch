import Layout from '@/components/shared/Layout';

export default function About() {
  return (
    <Layout>
      <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Welcome to the About page. This page adjusts beautifully to all screen sizes, ensuring the best user experience.
        </p>
      </section>
    </Layout>
  );
}