import Layout from '@/components/shared/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Feel free to reach out to us using the form below.
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded col-span-1 sm:col-span-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 col-span-1 sm:col-span-2"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}