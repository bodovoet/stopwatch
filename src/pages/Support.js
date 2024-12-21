import Layout from '@/components/shared/Layout';

export default function Support() {
  return (
    <Layout>
      <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Here are some common questions and answers to help you out.
        </p>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-bold">How do I reset my password?</h2>
            <p className="text-gray-700">To reset your password, go to the login page and click "Forgot Password."</p>
          </div>
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-bold">How do I contact support?</h2>
            <p className="text-gray-700">You can contact us via the form on the Contact page.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}