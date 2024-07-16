import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <main className="min-h-screen p-5 bg-yellow-700">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-4">Feel free to reach out to us with any questions or concerns.</p>
          <form>
            <div className="mb-4">
              <label className="block text-xl mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-yellow-700 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-xl mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-yellow-700 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-xl mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 border border-yellow-700 rounded"></textarea>
            </div>
            <button type="submit" className="bg-yellow-700 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
