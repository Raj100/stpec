import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Strengths = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6 font-dosis">
      <h1 className="text-3xl font-bold text-center mb-6">Strengths of NIT Goa</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dedicated Faculty</h2>
        <p className="text-lg">
          NIT Goa has devoted and dynamic faculty members holding Ph.D. degrees from IISc, IITs, NITs, and reputed universities. They are committed to providing the finest possible education for both graduate and undergraduate students.
        </p>
        <p className="text-lg">
          The faculty members are actively engaged in various research areas ranging from practical implementation to theoretical investigations, with their research published in leading international SCI/SCI-E journals and conferences.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Impressive Placement Records (2023)</h2>
        <ul className="list-disc list-inside">
          <li>More than 160 companies visited NIT Goa for campus recruitment.</li>
          <li><strong>Placement percentage of circuit branches (CSE, EEE & ECE):</strong> 100%</li>
          <li><strong>Maximum Pay Package:</strong> ₹26 LPA</li>
          <li><strong>Average Pay Package:</strong> ₹10.87 LPA</li>
          <li><strong>Minimum Pay Package:</strong> ₹6 LPA</li>
        </ul>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">NIRF Ranking</h2>
        <p className="text-lg">
          In 2023, NIT Goa is ranked second among the new NITs established in 2010, with an NIRF Rank of 90 in the Engineering category.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Infrastructure and Facilities</h2>
        <p className="text-lg">
          The lab facilities and infrastructure are regularly upgraded and are well supported by the institute and the industry.
        </p>
        <p className="text-lg">
          Every faculty member has executed at least one DST Funded Project worth a minimum of ₹30 Lakhs, with several faculty working on additional projects.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Library Resources</h2>
        <p className="text-lg">
          The NIT Goa Library houses qualitative books, magazines, and journals across various subjects, including Science, Technology, Engineering, Economics & Finance, Management, and Professional Communication.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research and Development</h2>
        <p className="text-lg">
          Every year, NIT Goa awards a significant number of Ph.D. degrees, alongside quality publications.
        </p>
        <p className="text-lg">
          All classrooms are modernized with projectors and the necessary electronic equipment.
        </p>
        <p className="text-lg">
          NIT Goa conducts several workshops in respective departments to enlighten its students and aims to continue this in the future.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research Opportunities</h2>
        <p className="text-lg">
          A few of our B.Tech. students have been selected for the Prime Minister&apos;s Research Fellowship.
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hostel Facilities</h2>
        <p className="text-lg">
          NIT Goa provides hostel facilities to outstation students on a shared accommodation basis with 24x7 Internet connectivity.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Strengths;
