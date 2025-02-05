import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Facilities = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6 font-dosis">
      <h1 className="text-3xl font-bold text-center mb-6">Facilities at NIT Goa</h1>

      <img src="https://www.nitgoa.ac.in/uploads/tutorialblock.jpg" className="w-full object-cover mx-auto m-8" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comprehensive Facilities</h2>
        <p className="text-lg">
          At the National Institute of Technology Goa (NIT Goa), we strive to provide our students with a comprehensive array of facilities and services to ensure a holistic learning and living experience.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Advanced Laboratories</h3>
        <p>
          Our campus boasts advanced department laboratories equipped with cutting-edge technology, fostering an environment conducive to hands-on learning and research exploration.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Sports and Wellness</h3>
        <p>
          We offer state-of-the-art sports facilities and equipment, promoting physical well-being and athletic development among our students.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Health and Safety</h3>
        <p>
          The safety and health of our students are paramount, with round-the-clock medical facilities and ambulance services, ensuring a secure learning environment.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Support and Guidance</h3>
        <p>
          Our student mentorship program and dedicated counselors offer personalized support, while faculty advisors monitor academic progress through regular communication.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
        <p>
          We prioritize student well-being through regular events, workshops, and a nutritious cafeteria to ensure a well-rounded experience.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Cultural and Technical Fests</h3>
        <p>
          Annual technical and cultural fests provide opportunities for recreation and creative expression, enriching campus life.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Library Resources</h3>
        <p>
          Our well-stocked library features a vast collection of books and journals, including esteemed publications like IEEE and ScienceDirect.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Placement Success</h3>
        <p>
          We take pride in our strong placement record, with graduates securing positions in top companies worldwide.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Inclusive Environment</h3>
        <p>
          Our campus is strictly ragging-free, fostering a culture of respect and inclusivity, with grievance redressal mechanisms in place for prompt concerns.
        </p>
      </section>

      <div className="text-center mt-8">
        <p className="text-lg font-semibold">
          At NIT Goa, we are committed to providing a nurturing environment that fosters academic excellence, personal growth, and holistic development.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Facilities;
