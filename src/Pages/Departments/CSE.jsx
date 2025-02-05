import { useState, useContext, useEffect } from "react";
import dropdownIcon from "../../assets/icon/baseline-arrow_drop_down-24px.svg";
import backIcon from "../../assets/icon/navigation/arrow_back_24px_outlined.svg";
import locationIcon from "../../assets/icon/outline-location_on-24px.svg";
import editIcon from "../../assets/icon/baseline-edit-24px.svg";
import errorIcon from "../../assets/icon/baseline-error_outline-24px.svg";
import closeIcon from "../../assets/icon/baseline-cancel-24px.svg";
import "./departments.css";
import Navbar from "../../Components/Navbar.jsx";
import { Link, useParams } from "react-router-dom";
import facpic from "../../assets/facepic.png";
import { AppContext } from "../../Components/AppContext";
import Footer from "../../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFacultyProfile } from "../../features/Department/departmentSlice.js";



const MyComponent = () => {
  const { name } = useParams();
  const { theme } = useContext(AppContext);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openSignup = () => setSignupModalOpen(true);
  const closeSignup = () => setSignupModalOpen(false);

  const openLogin = () => setLoginModalOpen(true);
  const closeLogin = () => setLoginModalOpen(false);
  const [currentSelection, setCurrentSelection] = useState("All");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.department.department);
  const [currentDepartment, setCurrentDepartment] = useState("Computer Science and Engineering");
  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(fetchAllFacultyProfile());
  }, []);
  useEffect(() => {
    // console.log(faculties[0].profile);
    console.log(name);
    if (name === "Computer_Science_and_Engineering") {
      setCurrentDepartment("Computer Science and Engineering");
    }
    else if (name === "Electrical_and_Electronics_Engineering") {
      setCurrentDepartment("Electrical and Electronics Engineering");
    }
    else if (name === "Electronics_and_Communication_Engineering") {
      setCurrentDepartment("Electronics and Communication Engineering");
    }
    else if (name === "Civil_Engineering") {
      setCurrentDepartment("Civil Engineering");
    }
    else if (name === "Applied_Sciences") {
      setCurrentDepartment("Applied Science");
    }
    else if (name === "Humanities_and_Social_Sciences") {
      setCurrentDepartment("Humanities and Social Sciences");
    }
    else if (name === "Mechanical_Engineering") {
      setCurrentDepartment("Mechanical Engineering");
    }
  }, [name]);




  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      type: "Article",
      content: "I’ve worked in UX for the better part of a decade...",


    },
    {
      id: 2,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      type: "Article",
      content: "I’ve worked in UX for the better part of a decade...",
    },
  ]);

  const departments = {
    "Computer Science and Engineering": {
      name: "Computer Science and Engineering",
      summary: [
        "The Department of Computer Science and Engineering (CSE) of NIT Goa is one of the founding departments of the institute, started in 2010. It offers 4 years full time B. Tech. degree program, 2 years full time M. Tech. degree program and Ph.D. program in Computer Science and Engineering.",
        "The faculty members of CSE department have expertise in the following areas: mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, pervasive health, community healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content based information retrieval, pattern recognition, kernel methods for pattern analysis, machine learning, artificial neural networks, computer vision, speech technology, algorithms, computational intelligence, privacy and security, network protocols and wireless networks. The faculty members have published several research papers in these areas in national and international conferences and journals.",
        "The department invites R & D organizations, public and private sector units to enhance and develop research and teaching interface with faculty and students.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
        "Congratulations to Mr. Anand Singh and Mr. Varan Shukla for achieving 2nd place in Trivium 2016",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani, 1st place winners in Technival Sports Quiz (Prize: Vouchers + Rs. 2,000)",
        "Congratulations to Mr. Tanay Gahlot and Mr. Amey Kamat for publishing a paper in the International Conference ICIT-2016, Taipei, Taiwan",
        "Congratulations to Ms. Neha Bisht, runner-up in the Goa Idea and Innovation Competition (Gi2C) for the project 'Non-surgical Brain Controlled 3D Printed Prostheses'",
        "Congratulations to Ms. Neha Bisht, 1st place winner at 'SAVISHKAR 2015' National Symposium at NIT Bhopal",
        "Congratulations to Mr. Chandrashekhar Kuruba for securing a Bronze medal in the Webism Worldquant contest, ranking 85th nationally",
        "Congratulations to Ms. Kamtchi for publishing a paper in the International Conference ICIN-2016, Paris",
        "Congratulations to Mr. Siddharth for selection in the Lok Sabha Internship Program, New Delhi",
        "Congratulations to Ms. Sruthy for completing an internship at Qatar Computing Research Institute, Qatar",
        "Congratulations to Mr. Evander for completing an internship at ALBA, Bahrain",
        "Congratulations to Mr. Pankaj Kharwal for completing a two-month Summer Internship at CERN Geneva in 2015",
        "Congratulations to Ms. Reshma Sagar for completing an internship at CERN, Geneva"
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/CSE1.jpeg"],
      alumni: {
        2016: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
        2017: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
        2018: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
        2019: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
        2020: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
        2021: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
      }
    },
    "Electrical and Electronics Engineering": {
      name: "Electrical and Electronics Engineering",
      summary: [
        "The department of Electrical and Electrical Engineering was established during the inception of the institute in 2010. It offers undergraduate (B. Tech.), postgraduate (M. Tech in Power Electrical and Power Systems), and research programmes in the various fields of Electrical and Electrical Engineering. The faculty members are committed to provide the finest possible education for both graduate and undergraduate students. The major areas of faculty expertise include Power Systems, Power Electrical, Power Electronic Drives, HVDC Transmission, FACTS Controllers, Electrical Machines, Control Systems, Smart Grid, Signal Processing, Energy Management, Fuzzy Logic, Neural Networks, and Application of Signal Processing in Power Systems and Power Electrical. The Faculty members are actively engaged in various research areas ranging from practical implementation to theoretical investigations. Their research is being published in leading international journals and conferences. The lab facilities and the infrastructure are regularly upgraded and are well supported by the institute and the industry. Department has MoU with Power Research and Development Consultancy, Bangalore to carry out the collaborative projects.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
        "Congratulations to Mr. Anand Singh and Mr. Varan Shukla for achieving 2nd place in Trivium 2016",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani, 1st place winners in Technival Sports Quiz (Prize: Vouchers + Rs. 2,000)",
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/ECE1.jpeg"],
      Facilities: [],
      alumni: {
        2016: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],
        2017: [
          {
            "Mr. Anand Singh": "20CSE1001",
          },
          {
            "Mr. Varan Shukla": "20CSE1002",
          },
          {
            "Mr. Tanay Gahlot": "20CSE1003",
          },
          {
            "Mr. Amey Kamat": "20CSE1004",
          },
          {
            "Ms. Neha Bisht": "20CSE1005",
          },
          {
            "Ms. Kamtchi": "20CSE1006",
          },
          {
            "Mr. Siddharth": "20CSE1007",
          },
          {
            "Ms. Sruthy": "20CSE1008",
          },
          {
            "Mr. Evander": "20CSE1009",
          },
          {
            "Mr. Pankaj Kharwal": "20CSE1010",
          },
          {
            "Ms. Reshma Sagar": "20CSE1011",
          },
          {
            "Mr. Chandrashekhar Kuruba": "20CSE1012",
          },
          {
            "Mr. Shoeb Patel": "20CSE1013",
          },
          {
            "Mr. Shriraj Sawant": "20CSE1014",
          },
          {
            "Mr. Sahil Ramchandani": "20CSE1015",
          },
          {
            "Mr. Tejan Naresh Naik Karmali": "20CSE1016",
          },
          {
            "Mr. Suchith Prabhu": "20CSE1017",
          },
          {
            "Mr. Keyur Rohit": "20CSE1018",
          },
          {
            "Mr. Harsha Hegde": "20CSE1019",
          },
          {
            "Mr. Soham Kamat": "20CSE1020",
          },
          {
            "Mr. Tejan Karmali": "20CSE1021",
          },
          {
            "Ms. Yamini Preethi": "20CSE1022",
          },
        ],

      },
    },
    "Mechanical Engineering": {
      name: "Mechanical Engineering",
      summary: [
        "The Department of Mechanical Engineering is one of the founding departments of NIT Goa. The department offers a 4-year B. Tech. program in Mechanical Engineering. The department has well-equipped laboratories and workshops to provide practical training to the students. The faculty members are actively involved in research and have published papers in national and international conferences and journals. The department has MoUs with industries and R&D organizations to enhance the research and teaching interface with faculty and students.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/MCE1.jpeg"],
      alumni: {
        2016: [
          { "Mr. Anand Singh": "20MCE1001" },
          { "Mr. Varan Shukla": "20MCE1002" },
          { "Mr. Tanay Gahlot": "20MCE1003" },
          { "Mr. Amey Kamat": "20MCE1004" },
          { "Ms. Neha Bisht": "20MCE1005" },
        ]
      },
    },
    "Civil Engineering": {
      name: "Civil Engineering",
      summary: [
        "The Department of Civil Engineering at NIT Goa was established in 2010. The department offers a 4-year B. Tech. program in Civil Engineering. The department has well-equipped laboratories and workshops to provide practical training to the students. The faculty members are actively involved in research and have published papers in national and international conferences and journals. The department has MoUs with industries and R&D organizations to enhance the research and teaching interface with faculty and students.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/DJI_20240503162513_0060_D.jpg"],
      alumni: {
        2016: [
          { "Mr. Anand Singh": "20MCE1001" },
          { "Mr. Varan Shukla": "20MCE1002" },
          { "Mr. Tanay Gahlot": "20MCE1003" },
          { "Mr. Amey Kamat": "20MCE1004" },
          { "Ms. Neha Bisht": "20MCE1005" },
        ]
      },
    },
    "Applied Sciences": {
      name: "Applied Sciences",
      summary: [
        "The Department of Applied Sciences of NIT Goa is multidisciplinary in its orientation and at present it includes three disciplines: Physics, Chemistry and Mathematics. The department has efficient faculty members, who are dedicated to teaching, research and other co-curricular activities. The objective of the department is not limited to providing only sound understanding of the Basic Sciences and Language needed for engineering graduates, but also to make them realize their potential to become successful engineers. Imparting value-based liberal education to would-be engineers is the ultimate aim of the department and grooming them to take up the emerging global challenges is the vision of the department.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/DJI_20240503162513_0060_D.jpg"],
      alumni: {
        2016: [
          { "Mr. Anand Singh": "20MCE1001" },
          { "Mr. Varan Shukla": "20MCE1002" },
          { "Mr. Tanay Gahlot": "20MCE1003" },
          { "Mr. Amey Kamat": "20MCE1004" },
          { "Ms. Neha Bisht": "20MCE1005" },
        ]
      },
    },
    "Electronics and Communication Engineering": {
      name: "Electronics and Communication Engineering",
      summary: [
        "The Electronics and Communication Department of NIT Goa was formed in 2010. It offers B. Tech., M.Tech. in VLSI and Ph.D. program in Electronics and Communication Engineering. The goal of the department is to impart both theoretical and practical knowledge in Electronics and Communication Engineering to students so as to enable them for technology and research. The department covers following major areas in Electronics and Communication Engineering through its courses and projects : VLSI,Communication and Networking, Signal Processing, Microelectronics and Electronics Design, Electromagnetics. Faculty members in ECE department are committed towards teaching and research. They try to cultivate interest in students for research and technology. The Department has well equipped laboratories.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/ECE1.jpeg"],
      alumni: {
        2016: [
          { "Mr. Anand Singh": "20MCE1001" },
          { "Mr. Varan Shukla": "20MCE1002" },
          { "Mr. Tanay Gahlot": "20MCE1003" },
          { "Mr. Amey Kamat": "20MCE1004" },
          { "Ms. Neha Bisht": "20MCE1005" },
        ]
      },
    },
    "Humanities and Social Sciences": {
      name: "Humanities and Social Sciences",
      summary: [
        "The Department of Humanities and Social Sciences of NIT Goa is multidisciplinary in its orientation and at present it includes two principal disciplines: Economics and English. Apart from these, two new sub-disciplines have been introduced under Humanities.They are Dramaturgy and Health and Happiness. The aim is to offer a contra-disciplinary model, \"art-science\" education, which is in line with nation-wide epistemic reforms: NEP 2020 and introduction to the Indian Knowledge System.",
        "The department has efficient faculty members, who are dedicated to teaching, research and other co-curricular activities. The objective of the department is not limited to providing only sound understanding of the Social Sciences and English Language needed for engineering graduates, but also to make them realize their potential to become successful engineers. Imparting value-based liberal education to would-be engineers is the ultimate aim of the department and grooming them to take up the emerging global challenges is the vision of the department.",
      ],
      achievements: [
        "Congratulations to Mr. Tejan Naresh Naik Karmali for securing 3rd place in the Sweden India Nobel Memorial Quiz, Pune Round 2017",
        "Congratulations to Mr. Tejan Naresh Naik Karmali for selection in Google Summer of Code 2018",
        "Congratulations to Mr. Tejan Naresh Naik Karmali, runner-up in the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Congratulations to Mr. Shoeb Patel for achieving a top 8 position for the project 'Volumetric Estimation by Multi-view Pictures of Objects' for ISRO, India",
        "Selected by Google for the prestigious Summer of Code 2018",
        "Appointed campus ambassador by Directi, Codechef, HackerEarth, InterviewBit",
        "Congratulations to Mr. Shriraj Sawant for completing Google Summer of Code 2017",
        "Congratulations to Mr. Sahil Ramchandani, winner of the Tata Crucible Campus Quiz, Goa regional round 2018",
        "Achieved Tata Crucible Campus Quiz, Mumbai zonal round 2018",
        "National Finalist in Tata Crucible Campus Quiz 2018",
        "Congratulations to Ms. Yamini Preethi for representing India and NIT Goa in Russia as part of the India Youth Delegation 2017",
        "Congratulations to Mr. Shriraj Sawant for selection in Google Summer of Code 2017 Internship",
        "Congratulations to Mr. Suchith Prabhu for selection in the R.C. Bose Internship 2017 at ISI Kolkata",
        "Congratulations to Mr. Keyur Rohit for selection in the SRISTI Summer Innovation School on Inclusive Innovation by the National Innovation Foundation",
        "Congratulations to Mr. Tejan Karmali, winner of the Tata Crucible Campus Quiz, Goa regionals 2017",
        "Congratulations to Mr. Tejan Karmali, winner of Dempo BizQuest 2017 (Prize: Rs. 10,000)",
        "Congratulations to Mr. Harsha Hegde, winner of the GIM Happenings 2017 Quiz (Prize: Rs. 10,000)",
        "Congratulations to Mr. Soham Kamat for achieving 3rd place in Rite of Passage 2016 (Prize: Rs. 1,200)",
        "Congratulations to Mr. Harsha Hegde and Mr. Sahil Ramchandani for securing 2nd place in the GEC General Quiz 2016 (Prize: Rs. 7,000)",
      ],
      research: [
        "Faculty expertise includes mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content-based information retrieval, pattern recognition, kernel methods, artificial neural networks, computer vision, speech technology, computational intelligence, privacy and security, network protocols, and wireless networks.",
        "Faculty members have published numerous research papers in national and international conferences and journals.",
        "The department welcomes partnerships with R&D organizations, public and private sector units to develop a research and teaching interface with faculty and students."
      ],
      events: [
        "FDP on Software Engineering, April 1-6, 2016",
        "National Workshop on Security and Privacy: Theory and Practice (SAP:TAP 2016), May 16-21, 2016",
        "Summer School on Privacy Preserving Mining (RAPPM-2016), May 23-28, 2016",
        "Conference on Enhancing Information Technology Education (EITE-2016), January 4-8, 2016",
        "Certificate Course on Pattern Analysis and Information Security",
        "IBM-NIT Goa Workshop on Cloud Computing",
        "Data Mining Training Programme: Research Challenges & Innovations, July 6-9, 2015",
        "National Workshop on Research Project Writing",
        "Training Programme on Artificial Intelligence for Big Data, August 7-9, 2015",
        "National Workshop on LaTeX for Technical Documentation, August 21-22, 2015",
        "Workshop on Cryptography and Foundations of Data Science, October 26-30, 2015"
      ],
      imageLink: ["https://nitgoa1.vercel.app/static/Slideshow/DJI_20240503162513_0060_D.jpg"],
      alumni: {
        2016: [
          { "Mr. Anand Singh": "20MCE1001" },
          { "Mr. Varan Shukla": "20MCE1002" },
          { "Mr. Tanay Gahlot": "20MCE1003" },
          { "Mr. Amey Kamat": "20MCE1004" },
          { "Ms. Neha Bisht": "20MCE1006" },
        ]
      },
    },

  };

  const department = departments[currentDepartment];
  const alumniYears = (department?.alumni) ? Object.keys(department?.alumni) : "2019";


  //   const faculties=[
  //     {
  //         id: 1,
  //         name: "Dr. Keshavamurthy B N",
  //         designation: "Associate Professor, Department of Computer Science and Engineering",
  //         email: "keshavamurthy@nitgoa.ac.in",
  //         contact: "xxxxx", 
  //         image: "",
  //     },
  //     {
  //         id: 2,
  //         name: "Dr. Veena Thenkanidiyoor",
  //         designation: "Associate Professor, Department of Computer Science and Engineering",
  //         email: "veena@nitgoa.ac.in",
  //         contact: "xxxxx",
  //         image: "",
  //     },
  //     {
  //         id: 3,
  //         name: "Dr. S Mini",
  //         designation: "Associate Professor, Department of Computer Science and Engineering",
  //         email: "mini@nitgoa.ac.in",
  //         contact: "xxxxx",
  //         image: "",
  //     },
  //     {
  //         id: 4,
  //         name: "Dr. Pravati Swain",
  //         designation: "Assistant Professor, Department of Computer Science and Engineering",
  //         email: "pravati@nitgoa.ac.in",
  //         contact: "xxxxx", 
  //         image: "",
  //     },
  //     {
  //         id: 5,
  //         name: "Dr. Venkatanareshbabu Kuppili",
  //         designation: "Assistant Professor, Department of Computer Science and Engineering",
  //         email: "venkat@nitgoa.ac.in",
  //         contact: "xxxxx", 
  //         image: "",
  //     },
  //     {
  //         id: 6,
  //         name: "Dr. Purushothama B R",
  //         designation: "Assistant Professor, Department of Computer Science and Engineering",
  //         email: "purushothama@nitgoa.ac.in",
  //         contact: "xxxxx",
  //         image: "",
  //     },
  //     {
  //         id: 7,
  //         name: "Ms. Samrudhi Bhausaheb Desai",
  //         designation: "Assistant Professor, Department of Computer Science and Engineering",
  //         email: "samrudhi@nitgoa.ac.in",
  //         contact: "xxxxx", 
  //         image: "",
  //     },
  //     {
  //         id: 8,
  //         name: "Mrs. Sreedivya I",
  //         designation: "Assistant Professor, Department of Computer Science and Engineering",
  //         email: "sreedivya@nitgoa.ac.in",
  //         contact: "xxxxx",
  //         image: "",
  //     },
  // ];
  const [menu, setMenu] = useState("All");
  const [menuItems, setMenuItems] = useState(["All", "Faculty", "Facilities", "Research", "Achievements", "Alumni", "E-Downloads", "Gallery", "Events", ""]);




  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navbar></Navbar>
      {/* <div className="header"></div>
      <div className="header-lg shadow-lg flex items-center justify-between p-4">
        <img className="h-8" src={logo} alt="logo" />
        <div className="search-top flex items-center bg-gray-200 p-2 rounded">
          <img src={searchIcon} alt="search" />
          <input
            className="bg-transparent border-none ml-2 outline-none"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="profile-top flex items-center">
          <img className="h-8 w-8 rounded-full" src={profileImg} alt="profile img" />
          <p className="mb-0 ml-2">Siddharth Goyal</p>
          <img className="ml-2" src={dropdownIcon} alt="dropdown" />
        </div>
      </div> */}

      {/* Main Section */}
      <div className={`main-section-cse ${name} main-section relative bg-cover bg-center h-48 `}>
        <Link to="/"><img className="absolute top-3 left-3" src={backIcon} alt="back" /></Link>
        {/* <button
          className="border border-white text-white bg-transparent p-2 rounded border-2 absolute right-3 top-3"
          id="join-group-btn"
        >
          Join Group
        </button> */}
        <h1 className="topic-heading absolute left-3 bottom-6 text-white text-4xl">{currentDepartment}</h1>
        <p className="topic-subtitle absolute left-3 bottom-3 text-white text-sm">NIT Goa</p>
      </div>

      {/* Navbar */}
      <div className="navbar-sm p-4">
        <h6 className="mb-4"></h6>
        <div className="filter flex items-center p-2 bg-gray-200 rounded">
          <h6 className="mb-0">Filter:

          </h6>

          <select className="focus:outline-none" name={menu} id="" onChange={(e) => { setMenu(e.target.value); }}>
            {menuItems?.map((menuItem, index) => (<option key={index} value={menuItem}>{menuItem}
            </option>))}
          </select>
          {/* <img className="ml-2" src={dropdownIcon} alt="bottom-arrow" /> */}
        </div>
      </div>

      <main className={`main-container !bg-${theme}bg !text-${theme}bgtxt`}>
        {/* Navbar */}
        <div className="navbar flex justify-between p-4">
          <div className="relative flex space-x-4">
            <div className="relative flex space-x-4">
              <div
                className={`absolute bg-black rounded-xl h-full w-20 transition-transform duration-300 ease-in-out ${menu === "All" ? "translate-x-0" :
                  menu === "Faculty" ? "translate-x-[86px]" :
                    menu === "Facilities" ? "translate-x-[183px] w-24" :
                      menu === "Research" ? "translate-x-[297px] w-24" :
                        menu === "Achievements" ? "translate-x-[415px] w-32" :
                          menu === "Alumni" ? " translate-x-[550px] w-24" :
                            menu === "E-Downloads" ? " translate-x-[658px] w-32" :
                              menu === "Gallery" ? "translate-x-[795px] w-24" :
                                "translate-x-[892px] w-24"
                  }`}
              ></div>
              {menuItems?.map((item) => (
                <p
                  key={item}
                  className={`relative z-10 px-4 py-2 cursor-pointer rounded-lg ${menu === item ? "font-bold text-white" : "text-gray-800"
                    }`}
                  // onMouseEnter={() => setMenu(item)}
                  onClick={() => setMenu(item)}
                >
                  {item}
                </p>
              ))}
            </div>

          </div>

          <div className="flex">
            {/* <div className="post-btn flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              Write a Post
              <img className="ml-2" src={dropdownIcon} alt="dropdown" />
            </div>
            <button className="btn-primary btn bg-blue-500 text-white px-4 py-2 rounded ml-4">
              Join Group
            </button> */}
          </div>
        </div>

        {/*  Section */}
        <section className={`posts-section flex `}>
          <div className={`posts-section-left w-3/4`}>
            {/* {posts.map((post)=>(
              <div className="w-full rounded-t mt-1 bg-white border p-4">
              <img className="w-full rounded-t" src={mountainsImg} alt="post" /> 
              <h6 className="mt-3">{post.type}</h6>
              <div className="flex items-center justify-between">
                <h5 className="text-lg">{post.title}</h5>
                <div className="relative">
                  <img className="cursor-pointer" src={moreOptionsIcon} alt="more options" />
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg p-2 rounded">
                    <p className="hover:bg-gray-200 p-2">Edit</p>
                    <p className="hover:bg-gray-200 p-2">Report</p>
                    <p className="hover:bg-gray-200 p-2">Option 3</p>
                  </div>
                </div>
              </div>
              <p className="font-light text-sm mt-2">{post.content}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <img className="h-8 w-8 rounded-full" src={profileImg} alt="profile" />
                  <div className="ml-2">
                    <p className="mb-0 text-sm font-semibold">Sarthak Kamra</p>
                    <p className="text-xs text-gray-500">1.4k views</p>
                  </div>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img className="h-5 w-5" src={shareIcon} alt="share" />
                  <p className="ml-2">Share</p>
                </div>
              </div>
            </div>
            )} */}



            {/* Example raj's post  */}
            {/* <div className="w-full rounded-t mt-1 bg-white border p-4">
              <img className="w-full rounded-t" src={mountainsImg} alt="post" />
              <h6 className="mt-3">✍️ Article</h6>
              <div className="flex items-center justify-between">
                <h5 className="text-lg">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                <div className="relative">
                  <img className="cursor-pointer" src={moreOptionsIcon} alt="more options" />
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg p-2 rounded">
                    <p className="hover:bg-gray-200 p-2">Edit</p>
                    <p className="hover:bg-gray-200 p-2">Report</p>
                    <p className="hover:bg-gray-200 p-2">Option 3</p>
                  </div>
                </div>
              </div>

              <p className="font-light text-sm mt-2">I’ve worked in UX for the better part of a decade...</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <img className="h-8 w-8 rounded-full" src={profileImg} alt="profile" />
                  <div className="ml-2">
                    <p className="mb-0 text-sm font-semibold">Sarthak Kamra</p>
                    <p className="text-xs text-gray-500">1.4k views</p>
                  </div>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img className="h-5 w-5" src={shareIcon} alt="share" />
                  <p className="ml-2">Share</p>
                </div>
              </div>
            </div> */}


            {menu === "All" && <div className="py-2 ">
              <h1 className="text-center text-gray-800 text-lg font-bold">Welcome to the Department of {currentDepartment}</h1>
              <div className="font-dosis">
                {department?.summary?.map((summary, index) => (<p key={index} className="p-2 ">{summary}</p>))}
              </div>
            </div>
            }

            {(menu === "Faculty") &&
              <>
                <h1 className="p-2 text-lg font-bold text-center">Faculties</h1>
                <div className="grid lg:grid-cols-2 gap-4 my-4  lg:m-4">
                  {/* Faculty Card */}
                  {faculties && faculties?.map((faculty, index) => {
                    if (faculty?.profile?.staff === false && faculty?.profile?.department === currentDepartment) {
                      return (
                        <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                          <div className="shadow-md shadow-gray-500/50 rounded-xl">
                            {console.log(faculty)}
                            <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                              <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
                            </div>
                            <div className="px-2">
                              <h3 className="text-sm lg:text-xl mb-[13px] font-semibold text-center">{faculty?.profile?.name}</h3>
                              <p className="text-xs lg:text-lg text-center mb-[13px]">
                                {faculty?.profile?.designation}
                              </p>
                              <div className="text-[10px] lg:text-lg flex items-center justify-center mb-[13px]">
                                <h4>
                                  {faculty?.profile?.email} | {faculty?.profile?.contact}
                                </h4>
                              </div>
                            </div>
                            <div className={`text-sm py-[5px] text-white bg-${theme}th rounded-br-xl rounded-bl-xl py-4 text-center`}>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </Link>
                      );
                    }

                  }
                  )}
                </div>

                <h1 className="p-2 text-lg font-bold text-center">Staff</h1>
                <div className="grid lg:grid-cols-2 gap-4 my-4  lg:m-4">
                  {/* Faculty Card */}
                  {faculties && faculties?.map((faculty, index) => {
                    if (faculty?.profile?.staff === true && faculty?.profile?.department === currentDepartment) {
                      return (
                        <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                          <div className="shadow-md shadow-gray-500/50 rounded-xl">
                            {console.log(faculty)}
                            <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                              <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
                            </div>
                            <div className="px-2">
                              <h3 className="text-sm lg:text-xl mb-[13px] font-semibold text-center">{faculty?.profile?.name}</h3>
                              <p className="text-xs lg:text-lg text-center mb-[13px]">
                                {faculty?.profile?.designation}
                              </p>
                              <div className="text-[10px] lg:text-lg flex items-center justify-center mb-[13px]">
                                <h4>
                                  {faculty?.profile?.email} | {faculty?.profile?.contact}
                                </h4>
                              </div>
                            </div>

                            <div className={`text-sm py-[5px] text-white bg-${theme}th rounded-br-xl rounded-bl-xl py-4 text-center`}>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </Link>
                      );
                    }

                  }
                  )}
                </div>
              </>
            }

            {(menu === "Facilities") && <div>
              <h1 className="text-center font-bold">Facilities</h1>
            </div>
            }
            {(menu === "Research") && <div>
              <h1 className="text-center font-bold">Research</h1>
              <div className="font-dosis">
                <p className="p-2">The faculty members of CSE department have expertise in the following areas: mobile computing, context-aware computing, machine learning, mobile virtual communities, e-Health, pervasive health, community healthcare informatics, data mining, wireless sensor networks, information security, network security, cryptography, cloud security, key management, content based information retrieval, pattern recognition, kernel methods for pattern analysis, machine learning, artificial neural networks, computer vision, speech technology, algorithms, computational intelligence, privacy and security, network protocols and wireless networks. The faculty members have published several research papers in these areas in national and international conferences and journals.</p>
                <p className="p-2">The department invites R & D organizations, public and private sector units to enhance and develop research and Teaching interface with faculty and students.
                </p>
              </div>
            </div>
            }
            {(menu === "Achievements") && <div>
              <h1 className="text-center font-bold">Achievements</h1>
              {department?.achievements?.map((item, index) => (<p key={index} className="p-2">
                <p className="p-2">{item}</p>
              </p>))}
            </div>
            }
            {(menu === "Alumni") && <div>
              <h1 className="text-center font-bold">Alumni of {department.name}</h1>
              {alumniYears?.map((item, index) => (<p key={index} className="p-2">
                <p className="p-2">{item}</p>
                {department?.alumni[item]?.map((i, index1) => {
                  return (
                    <div key={index1}>
                      {Object.keys(i).map((key, index2) => (
                        <p key={index2} className="p-2">{key} : {i[key]}</p>
                      ))}
                    </div>
                  );
                })}
              </p>))}
            </div>
            }

            {(menu === "E-Downloads") && <div>
              <h1 className="text-center font-bold">E-Downloads</h1>

            </div>
            }
            {(menu === "Gallery") && <div>
              <h1 className="text-center font-bold">Gallery</h1>
            </div>
            }
            {(menu === "Events") && <div>
              <h1 className="text-center font-bold">Events</h1>
              {department?.events?.map((item, index) => (<div key={index} className="p-2">
                <p className="p-2">{item}</p>
              </div>))}
            </div>
            }






          </div>


          {/* Right Sidebar */}
          <div className="right w-1/4 p-4 border-l">
            <div className="flex justify-between items-center border-b pb-2">
              <img className="h-5 w-5" src={locationIcon} alt="location" />
              <input type="text" disabled={edit ? "" : "disabled"} onBlur={() => setEdit(false)} placeholder="Goa, India" className="text-sm flex items-center focus:outline-none">

              </input>
              <img className="cursor-pointer h-5 w-5" src={editIcon} alt="edit" onClick={() => { setEdit(true); }} />
            </div>
            <div className="text-xs text-gray-500 mt-2 flex items-center">
              <img className="h-5 w-5" src={errorIcon} alt="info" />
              Your location will help us serve better and extend a personalized experience.
            </div>
          </div>



        </section>
      </main>

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-6 w-full max-w-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg">Create Account</h2>
              <img
                className="cursor-pointer"
                src={closeIcon}
                alt="close"
                onClick={closeSignup}
              />
            </div>
            <form>
              <div className="flex mb-4">
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control rounded-none border p-2 flex-1"
                  placeholder="First name"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control rounded-none border p-2 flex-1 ml-2"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  aria-label="Email"
                  className="form-control rounded-none border p-2 w-full"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  aria-label="Password"
                  className="form-control rounded-none border p-2 w-full"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  aria-label="Confirm Password"
                  className="form-control rounded-none border p-2 w-full"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Create Account
                </button>
                <span className="text-xs text-gray-500 cursor-pointer" onClick={openLogin}>
                  or, Sign In
                </span>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MyComponent;
