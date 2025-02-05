import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import img1 from '../assets/Outreach_imgs/Safai Mitra Suraksha Shivirs 1oct2024.jpg'
import img2 from '../assets/Outreach_imgs/outreach 27sept2024.jpg'
import img3 from '../assets/Outreach_imgs/outreach 6may2024.jpg'
import img4 from '../assets/Outreach_imgs/blooddonationcamp april2024.jpg'
import img5 from '../assets/Outreach_imgs/outreach 22april2024.jpg'
import img6 from '../assets/Outreach_imgs/outreach28march2024.jpg'
import img7 from '../assets/Outreach_imgs/img 16march2024.jpeg'
import img8 from '../assets/Outreach_imgs/img6march2024.jpg'
import img9 from '../assets/Outreach_imgs/School Visit.jpg'
import img10 from '../assets/Outreach_imgs/outreach7mar2024.jpg'
import img11 from '../assets/Outreach_imgs/SPIEmushtfund.jpg'
import img12 from '../assets/Outreach_imgs/SPIEdamodarschool.png'
import img13 from '../assets/Outreach_imgs/swachhata.jpg'
import img14 from '../assets/Outreach_imgs/UBA1.png'
import img142 from '../assets/Outreach_imgs/UBA2.jpg'
import img15 from '../assets/Outreach_imgs/SHRAMDHAAN1.jpg'
import img152 from '../assets/Outreach_imgs/SHRAMDHAAN2.jpg'
import img16 from '../assets/Outreach_imgs/GUIRDOLIM_GRAMSABHA.jpg'
import img17 from '../assets/Outreach_imgs/KALAY_GRAMSABHA.jpg'
import img18 from '../assets/Outreach_imgs/SURVEY IN KALAY1.jpg'
import img182 from '../assets/Outreach_imgs/SURVEY IN KALAY2.jpg'
import img19 from '../assets/Outreach_imgs/RAA.jpg'
import img20 from '../assets/Outreach_imgs/SCIENCE FAIR.jpg'

const OutreachActivities = () => {
  return (
    <>
   <Navbar/>
    <section id="other-page" className="inner-content mt-10 container mx-auto px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="md:col-span-9 col-span-12">
          <div>
            <p className="text-lg font-bold text-4xl ">OUTREACH ACTIVITIES</p>
            <hr className="my-4" />

            {/* Safai Mitra Suraksha Shivirs */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">Safai Mitra Suraksha Shivirs</span><br />
              </p>
              <p className="text-justify">
                Under the initiative of "Safai Mitra Suraksha Shivirs," the National Institute of Technology Goa (NITG) organized a special counseling session for institute workers, including outsourced and sanitation workers during 25-30th September 2024. The primary focus of the session was to raise awareness about the importance of hygiene, personal cleanliness, and overall well-being. Dr Vijeta Naik Desai Medical Officer Sushruta Health Center (NIT Goa) led the counseling program, educating the workers on various aspects of maintaining hygiene in their daily lives, both at work and at home. They emphasized the significance of personal hygiene practices, not only for safeguarding individual health but also for preventing the spread of infections within the community. Following the counseling, a comprehensive health checkup was conducted for workers. The medical team assessed their general health conditions, addressing any concerns and providing relevant treatments where necessary. This proactive step by NIT Goa highlights the institute’s commitment to the health and safety of its workers, contributing to a healthier, cleaner, and more sustainable working environment.
              </p>
              <img src={img1} alt="Safai Mitra Suraksha Shivirs" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* Our Lady of Fatima High School Visit */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">Our Lady of Fatima High School students Visit to NIT Goa Campus</span><br />
              </p>
              <p>
                Our Lady of Fatima High School, Rivona - Goa, IX & X Standard Students (60) and faculty members (1) visited our NIT Goa campus.
                Our Faculty Members taught lectures on Experimental Physics, Experimental Chemistry, and Mathematics Subjects. They also showed Physics, Chemistry, and EEE Department Laboratories.
              </p>
              <img src={img2} alt="Fatima High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* Perpetual Succour Convent High School Visit */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">Perpetual Succour Convent High School Navelim, Goa Students Visit to NIT Goa Campus</span><br />
              </p>
              <p>
                Perpetual Succour Convent High School Navelim, Goa, X Standard Students (40) and faculty members (2) visited our NIT Goa campus on 3rd May 2024. Our Faculty Members taught Experimental Physics, Experimental Chemistry, and Mathematics subjects and showed Physics & Chemistry Laboratories.
              </p>
              <img src={img3} alt="Perpetual Succour Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* Blood Donation Camp */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">NIT Goa Organised a Blood Donation Camp in Collaboration with Goa Medical College</span><br />
              </p>
              <p>
                NIT Goa Organised a Blood Donation Camp in Collaboration with Goa Medical College on 26th April 2024. A total of 100 plus students and employees of NIT Goa actively participated and donated blood. NIT Goa SPIE Student Chapter student members volunteered for the event.
              </p>
              <img src={img4} alt="Blood Donation Camp" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* PM SHRI Govt. School Visit */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">PM SHRI Govt. School, Gaval Khol, Canacona, Goa, Students Visit to NIT Goa Campus</span><br />
              </p>
              <p>
                PM SHRI Govt. School, Gaval Khol, Canacona, Goa, IX Standard Students (27) and faculty members (3) visited our NIT Goa campus on 18th April 2024. Our Faculty Members taught Experimental Physics, Experimental Chemistry, and Mathematics subjects and showed Physics & Chemistry Laboratories.
              </p>
              <img src={img5} alt="PM SHRI Govt School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* New English High School Visit */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">New English High School, Digas Panchawadi, Goa, Students Visit to NIT Goa Campus</span><br />
              </p>
              <p>
                New English High school, Digas Panchawadi, Goa, IX Standard Students (30) and faculty members (3) visited our NIT Goa campus today. Honorable Director, NIT Goa, Prof. O R Jaiswal addressed the students gathering. Dr. Saidi Reddy Parne, Associate Professor of Physics, delivered a lecture on Experimental Physics and SPIE Student Chapter Student members demonstrated Physics experiments.
              </p>
              <img src={img6} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* PM Shri Govt. HS Morpirla Visit */}
            <div className="mb-4">
              <p>
                <span className="underline font-bold">PM Shri Govt. HS Morpirla Students Visit NIT Goa</span><br />
              </p>
              <img src={img7} alt="PM Shri Govt. HS Morpirla Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Maria Bambina Convent High School, Cuncolim, Goa Students Visit to NIT Goa Campus:
                </span><br />
            </p>
            <p>
            Maria Bambina Convent High School, Cuncolim, Goa, X Standard Students (100) and faculty members (5) visited our NIT Goa campus 6 March, 2024.
            </p>
            <p>
            Honorable Director, NIT Goa, Prof. O R Jaiswal addressed the students gathering. Our Faculty Members taught Experimental Physics & Chemistry Subjects and showed Physics & Chemistry Laboratories.
            </p>
            <img src={img8} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">PM SHRI Govt. School,  Morpirla, Cuncolim, Goa Students Visit to NIT Goa Campus:

                </span><br />
            </p>
            <p>

            PM SHRI Govt. School,  Morpirla, Cuncolim, Goa, X Standard Students (30) and faculty members (5) visited our NIT Goa campus. Honorable Director, NIT Goa, Prof. O R Jaiswal addressed the students gathering. Our Faculty Members taught Physics, Chemistry, Mathematics and Professional Communication subjects and showed Physics & Chemistry Laboratories.           
            
            </p>
            <img src={img9} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">A Workshop on “Experimental Science: Light and its Applications” at Cuncolim United Higher Secondary School:

                </span><br />
            </p>
            <p>
            NIT Goa organized a Workshop on “Experimental Science: Light and its Applications” at Cuncolim United Higher Secondary School for Class XI & XII students at Cuncolim, South Goa, on 21st December 2023. Total around 200 students were participated. The theme of the Workshop is “Light and its applications”. The sole purpose of this event was to create awareness among students and motivate them towards science and Technology.            </p>
            <p>
            Honorable Director, Prof. O R Jaiswal inaugurated the workshop and addressed the students gathering. Prof. Shashidhar Kudari, Registrar, Dr. Saidi Reddy Parne, Organizer, Mr. Dessai, Chairperson and Mrs. Yvette Caiero, Principal from the school participated. Dr. Saidi Reddy Parne, Associate Professor delivered a motivational lecture on Light and Its applications, Physics Research Scholars and SPIE NIT Goa Student chapter students conducted the experimental session.            </p>
            <img src={img10} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* New English High School Visit */}
            <div className="mb-4">
            <p>
                <span className="underline font-bold">SPIE Student Chapter Workshop:

                </span><br />
            </p>
            <p>
            SPIE student chapter, NIT Goa organized a Workshop in Mustifund High School for Class 10 students, at Panjim, Goa on 02 September 2023. The theme of the Workshop was “Light”. The sole purpose of this event was to create awareness among students and motivate them about light. A Quiz was conducted to check the knowledge of the students.. About 60 students participated in the event.
            </p>
            <img src={img11} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* New English High School Visit */}
            <div className="mb-4">
            <p>
                <span className="underline font-bold">SPIE Student Chapter Workshop:

                </span><br />
            </p>
            <p>
            SPIE student chapter, NIT Goa, organized a Workshop at Damodar Higher Secondary School for 11th and 12th Class students at Margao, Goa, on 09th September 2023. The theme of the Workshop was “Introduction to Light”. The sole purpose of this event was to create awareness among students and motivate them about light. The first session had about 55 pupils in attendance, and the second had about 40.
            </p>
            <img src={img12}  alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            {/* New English High School Visit */}
            <div className="mb-4">
            <p>
                <span className="underline font-bold">Swachh Bharat Abhiyaan Activities (2023-24)

                </span><br />
            </p>
            <p>
            NIT Goa is actively participating in Swachha Bharat Abhiyaan (SBA) activities since its inception. The Institute has organized the following activities.
            <br />
            <li>
            Swachhata Hi Seva_Ek Tareek Ek Ghanta (National Initiative_1st October 2023): Despite of heavy rain, event was very successful and a total of around 150 members participated. Bandora Sarpanch, Secretary, and ward members also participated in our drive. We have cleaned Shri. Shivaji Maharaj Fort and the roadsides of Farmagudi Circle to Nageshi temple. NIT Goa Employees and students have actively participated in our program.
            </li>
            <br />
            <li>
            Ek Tareek Ek Ghanta (National Initiative_1st November 2023): NIT Goa organized a Cleanliness drive on 1st November 2023 under the “Swachhata Hi Seva-2023” campaign every month 1st (Ek Taeek Ek Ghanta). As part of this campaign, we have cleaned the roadsides from our campus to the Shree Katamgal Dada Shrine temple.
            </li>
            <br />
            <li>
            Swachhata Pakhwada, Swachhata Hi Seva – 2023: As per the MoE, Govt. of India instructions, we have conducted a series of events under Swacha Bharat Abhiyaan from 20th September to 2nd October 2023.
            </li>
            <br />
            <li>
            Cleanliness Drive: Cleanliness Drive conducted at NIT Goa Permanent Campus on 15th August 2023. We have cleaned the premises of permanent campus.
            </li>
            </p>
            <img src={img13} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Plastic free village campaign:

                </span><br />
            </p>
            <p>
            The UBA (Unnat Bharat Abhiyaan) cell of NIT Goa has conducted a plastic-free village campaign in the adopted village as part of Swachhata Hi Sewa Campaign. The campaign was funded by the institute and was conducted in Kalay village. A team of 52 members comprising of 9 faculty members, 6 non-teaching staff, and remaining students visited the village and created awareness in the village. Pamphlets and cloth bags were distributed in each household.
            </p>
            <img src={img14} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            <img src={img142} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>
            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Plastic waste Shramdaan:

                </span><br />
            </p>
            <p>
            A massive plastic waste Shramdaan was conducted, where every member of the Institute had collected plastic waste. Besides, a special plastic collection drive was conducted around the institute. The collected waste has been given to the panchayat for recycling.
            </p>
            <img src={img15} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            <img src={img152} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>
            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Guirdolim Gramsabha:

                </span><br />
            </p>
            <p>
            The representatives from Unnat Bharat Abhiyaan cell of NIT Goa attended the Gramsabha in Guirdolim village that was represented by the people of the village and the various officials. All panch members, representatives from various departments including Agriculture; public health; police, Convenor of the Committee for preparation of DPVP, Mr. Savo Antao, representatives from UBA Cell of NIT Goa (2 faculty members), and members of Self Help Groups in the village were present at the Gramsabha.           
            </p>
            <img src={img16} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>
            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Gramsabha participation in Kalay Village:

                </span><br />
            </p>
            <p>
            The members of Unnat Bharat Abhiyaan cell of NIT Goa attended the Gramsabha in Kalay village. The Gramsabha was represented by the people of the village and the various officials. All panch members, representatives from 9 departments including Irrigation, Agriculture, Election Commission, Forestry, representatives from UBA Cell of NIT Goa, and members of Self Help Groups in the village were present for the Gramsabha. The major issues faced by the village were identified after the Gramsabha and the House hold survey.
            </p>
            <img src={img17} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>
            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Village level and Household level Survey in Kalay:

                </span><br />
            </p>
            <p>
            The UBA team members from NIT Goa visited Kalay village panchayat. A team of around 80 members comprising of 10 staff members and students participated in the field visit to Kalay village panchayat and did a detailed house hold and village level survey. The village level survey and the house hold survey is uploaded in the UBA portal. The report generated out of the household survey is given to the panchayat members which will be useful for the development of Detailed Village Development Plan.            </p>
            <img src={img18} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            <img src={img182} alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>


            <div className="mb-4">
            <p>
                <span className="underline font-bold">Understanding Science through Experiments: An Initiative of RAA:

                </span><br />
            </p>
            <p>
            NIT Goa has organised two day workshop on “Understanding Science through Experiments” under Rashtriya Avishkar Abhiyan (RAA), a Govt. of India initiative for school teachers and the students of secondary and higher secondary levels.
            </p><br />
            <p>Under this initiative, a workshop was conducted, where in Dr. Ajay Mahajan, Dayanand Science College, Latur and Dr. Jitendra Singh, DRDO, Hyderabad, had been invited as experts, who have earlier organised more than 100 of such workshops across India.
            </p><br />
            <p>About 150 participants across the state attended the workshop, out of which 30 participants were teachers and 120 participants were students between 8th to 11th standards. The workshop has been well appreciated by the students as well as the teachers.
            </p>
            <img src={img19}  alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>

            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Make A Change:

                </span><br />
            </p>
            <p>
            Make a change is an initiative initiated by the students of NIT Goa as a part of the cultural festival Raag. This initiative is supported by Rashtriya Avishkar Abhiyan and Unnat Bharat Abhiyan. It is also supported by SPIE Student Chapter and Lm10x. Lm10x is an association to inspire students and increase their interest in science and technology. Students of NIT Goa visited the following schools:
            </p><br />
            <ul>
              <li className='underline font-bold'>1) Government High School Sadar
                </li>
                <li className='underline font-bold'>
                2) Government High School Porvorim
                </li>
                <li className='underline font-bold'>
                3) Government High School Kundaim</li>
            </ul>
            <br />
            </div>

            <hr />
            <div className="mb-4">
            <p>
                <span className="underline font-bold">All Goa Science Fair:

                </span><br />
            </p>
            <p>
            The first All Goa Science Fair was orgainsed for inculating research and innovative qualities into young school minds. Teams consisting of 3 students from grades 8,9 and 10 came up with projects on the topic of the event “Science and technology for a clean and green tomorrow”. A total of 42 teams participated in this fair. Along with the competition, there were college projects that were put up by the students of NIT Goa. These projects were seen with much interest by visiting schools. Earlier that day, the exhibition was inaugurated by, Director of NIT Goa, who spoke to the school children on the importance of research and how it could bring India into a superpower in technology. The event saw a huge turnout and was praised by the teachers and professors.
            </p>
            <img src={img20}  alt="New English High School Visit" className="w-3/4 h-auto mx-auto my-4 mt-4" />
            </div>
            <hr />

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Teacher Training Programme:

                </span><br />
            </p>
            <p>
            NIT Goa in association with SCERT (State Council of Educational Research and Training, Government of Goa) has organized Teacher Training Programme (TTP) in mathematics and sciences under RAA. It has been conducted as two different programmes with title “Advanced Training in Mathematics” and “Training in Basic Science”. NIT Goa has successfully trained high school teachers of the state through three such workshops in mathematics and three in science.
            </p><br />
            <p>The training program for mathematics teacher had been conducted in three different phases. Each phase of the programme has been conducted for a duration of five days and about 180 teachers were trained by Faculty of Mathematics, NIT Goa. The course was designed to give concrete base for the topics like, Number theory, Geometry, algebra, introduction to linear algebra, counting and probability, basic calculus, trigonometry, etc. which covers the syllabus of state and central board.
            </p><br />
            <p>Similar to the mathematics program, the science training program was conducted in three phases. About two hundred teachers were trained in all branches of science which includes chemistry, physics, botany, and zoology.  
            </p><br />
            </div>

            <div className="mb-4">
            <p>
                <span className="underline font-bold">Teacher Training Programme (5 Days Teachers Training and E-Inaugration of ICT Labs):
                 </span><br />
            </p>
            <p>
            Smt. Mridula Sinha, Hon’ble Governor of Goa, inaugurated a 5 Days Teachers Training Workshop under Rashtriya Avishkar Abhiyan (RAA) program of MHRD, Government of India, organized by National Institute of Technology Goa in collaboration with UNISED, programmed by Samagra Shiksha, Goa. On this auspicious occasion, the Hon’ble Governor also e-inaugurated Information Communication Technology (ICT) labs established in government schools of Goa.            
            </p><br />
            <p>
            Hon’ble Governor had an interactive session with students of Government Primary Middle School, MAPUSA through the equipments made available to the school as part of ICT lab. Governor complimented the school on getting ICT labs and shared that the students and teachers should make maximum use of ICT Labs. These Labs have been established to promote usage of ICT in government schools of Goa.            
            </p><br />
            <p>
            A total of 120 teachers and principal/Head masters participated in the event. The teachers will be trained on how make teaching mathematics and basic science more effective and exciting for the school students. The aim is to enable children become more inclined and motivated towards these subjects.
            </p><br />
            <p>
            During the programme, Dr. Gopal Mugeraya Director NIT Goa, Smt. Nila Mohanan, Secretary Education Goa, Shr. Nagaraj Honnekeri Director education Goa, Smt. Neetal Amonkar, State Project Director Samagra Shiksha Goa, State Education department officials, Dr. Saidi Reddy Parne, Nodal Officer RAA, Shr. Avaneesh Tripathi, National programme advisor RAA, Dr Sandeep Shahi National Convener NASB and Javed Ali Khan Programme Director UNISED were present.
            </p><br />
            </div>

          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default OutreachActivities;
