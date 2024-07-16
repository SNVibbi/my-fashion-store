import Layout from '../components/Layout';

const FAQ = () => {
  return (
    <Layout>
      <main className="min-h-screen p-5 bg-yellow-700">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <div className="mb-4">
            <h2 className="text-xl font-bold">What is your return policy?</h2>
            <p>We offer a 30-day return policy. Please contact us for more details.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Do you offer international shipping?</h2>
            <p>Yes, we offer international shipping to most countries.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">How can I track my order?</h2>
            <p>Once your order has shipped, we will send you a tracking number via email.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FAQ;
