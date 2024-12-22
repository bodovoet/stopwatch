import Layout from '@/components/shared/Layout';

export default function Login() {
  return (
    <Layout>
      <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Login</h1>
        <form className="max-w-sm mx-auto space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </section>
    </Layout>
  );
}