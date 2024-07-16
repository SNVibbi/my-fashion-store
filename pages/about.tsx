import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <main className="min-h-screen p-5 bg-yellow-700">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-4">We are an online fashion store committed to bringing you the latest trends in clothing and accessories at affordable prices.</p>
        </div>
      </main>
    </Layout>
  );
};

export default About;
