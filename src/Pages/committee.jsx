import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './bod.css';
import React from 'react';
import { AppContext } from "../Components/AppContext";
import { useContext } from "react";

const Committee = () => {
  

  const commit = [
    {
      comm: "Training & Placement Cell",
      members: [
        { name: "Dr. Lalat Indu Giri (Chairman)", email: "lig@nitgoa.ac.in", number: "" },
        { name: "Dr. Venkatanareshbabu Kuppili (Convener)", email: "venkatanaresh@nitgoa.ac.in", number: "" },
        { name: "Dr. Prasenjit Dey (Member)", email: "prasenjit.dey@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "RTI-Act",
      members: [
        { name: "Dr. Velavan Kathirvelu (Central Public Information Officer)", email: "pio@nitgoa.ac.in", number: "" },
        { name: "Dr. Shangerganesh L. (Assistant Public Information Officer)", email: "shangerganesh@nitgoa.ac.in", number: "" },
        { name: "Dr. C. Vyjayanthi (First Appellate Authority)", email: "faa@nitgoa.ac.in", number: "" },
        { name: "Dr. Velavan Kathirvelu (Chief Vigilance Officer)", email: "cvo@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Public Relations Officer",
      members: [
        { name: "Dr. Sarani Ghosal Mondal", email: "sarani@nitgoa.ac.in", number: "8404528880" },
      ]
    },
    {
      comm: "Library Committee",
      members: [
        { name: "Dr. Pravati Swain (Chairperson)", email: "pravati@nitgoa.ac.in", number: "" },
        { name: "Dr. Amol Rahulkar (Member)", email: "amol.rahulkar@nitgoa.ac.in", number: "" },
        { name: "Dr. Shangerganesh L. (Member)", email: "shangerganesh@nitgoa.ac.in", number: "" },
        { name: "Dr. Harikumar M (Member)", email: "harikumar@nitgoa.ac.in", number: "" },
        { name: "Dr. Prasenjit Dey (Member)", email: "prasenjit.dey@nitgoa.ac.in", number: "" },
        { name: "Dr. Lokesh Kumar Bramhane (Member)", email: "lokesh.bramhane@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Admissions",
      members: [
        { name: "Dr. Ravi Ragoju (Centre Incharge - JoSAA/CSAB)", email: "ugadmissions@nitgoa.ac.in", number: "" },
        { name: "Dr. Sreeraj E.S. (Dy. Centre Incharge)", email: "ugadmissions@nitgoa.ac.in", number: "" },
        { name: "Dr. Venkatanareshbabu Kuppili (Centre Incharge - CCMT)", email: "pgadmissions@nitgoa.ac.in", number: "" },
        { name: "Dr. Raviprasad K.J (Dy. Centre Incharge)", email: "pgadmissions@nitgoa.ac.in", number: "" },
        { name: "Dr. Shivnarayan Patidar (Dy. Centre Incharge)", email: "pgadmissions@nitgoa.ac.in", number: "" },
        { name: "Dr. L. Shangerganesh (Centre Incharge - DASA)", email: "dasa@nitgoa.ac.in", number: "" },
        { name: "Dr. Pragati Patel (Dy. Centre Incharge)", email: "dasa@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Examination Cell In-Charge",
      members: [
        { name: "Dr. S. Shivnarayan Patidar", email: "examcell@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Disciplinary Committee",
      members: [
        { name: "Dr. Damodar Reddy Edla (Chairperson)", email: "dr.reddy@nitgoa.ac.in", number: "" },
        { name: "Dr. T. Veerakumar (Convener)", email: "tveerakumar@nitgoa.ac.in", number: "" },
        { name: "Dr. Saidi Reddy Parne (Member)", email: "psreddy@nitgoa.ac.in", number: "" },
        { name: "Dr. Suresh Mikkili (Member)", email: "mikkili.suresh@nitgoa.ac.in", number: "" },
        { name: "Dr. Sarani Ghosal Mondal (Member)", email: "sarani@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Research Committee",
      members: [
        { name: "Dr. Nithin Kumar Y.B. (Chairman)", email: "nithin.shastri@nitgoa.ac.in", number: "" },
        { name: "Dr. B. Venugopal Reddy (Member)", email: "bvenugopal_reddy@nitgoa.ac.in", number: "" },
        { name: "Dr. Saidi Reddy Parne (Member)", email: "psreddy@nitgoa.ac.in", number: "" },
        { name: "Dr. Pravati Swain (Member)", email: "pravati@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Hostel Wardens",
      members: [
        { name: "Dr. Mallikarjun Erramshetty (Chief Warden / II Year B.Tech Warden - Boys Hostel)", email: "emallikarjuna@nitgoa.ac.in", number: "" },
        { name: "Dr. Venkatanareshbabu K (III Year B.Tech Warden - Boys Hostel)", email: "venkatanaresh@nitgoa.ac.in", number: "" },
        { name: "Dr. Lokesh Kumar Bramhane (IV Year B.Tech Warden - Boys Hostel)", email: "lokesh.bramhane@nitgoa.ac.in", number: "" },
        { name: "Dr. Sunil Kumar A. (I Year B.Tech, M.Tech., Ph.D. Warden & Guests Warden- Boys Hostel)", email: "sunilkumar@nitgoa.ac.in", number: "" },
        { name: "Dr. Pravati Swain (III & IV Year B.Tech, II year M.Tech., Ph.D & Guests Warden - Girls Hostel)", email: "pravati@nitgoa.ac.in", number: "" },
        { name: "Dr. B. Santhi (I & II Year B.Tech, I M.Tech Warden - Girls Hostel)", email: "santhi@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Community Outreach Cell",
      members: [
        { name: "Dr. Prashanth G.R (Coordinator)", email: "grprashanth@nitgoa.ac.in", number: "" },
        { name: "Dr. Sreeraj E.S. (Nodal Officer, Unnat Bharat Abhiyan)", email: "sreeraj@nitgoa.ac.in", number: "" },
        { name: "Dr. Saidi Reddy Parne (Nodal Officer, Rashtriya Avishkar Abhiyan)", email: "psreddy@nitgoa.ac.in", number: "" },
        { name: "Dr. Venkatanareshbabu Kuppili (Nodal Officer, PMM Scheme)", email: "venkatanaresh@nitgoa.ac.in", number: "" },
        { name: "Dr. Purushothama B.R. (Nodal Officer, Digital India)", email: "puru@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "GIAN Scheme",
      members: [
        { name: "Dr. Mini S. (Local Coordinator)", email: "gian@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Ek Bharat Shreshtha Bharat",
      members: [
        { name: "Dr. Sunil Kumar Ambrammal (Nodal Officer)", email: "sunilkumar@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "SC/ST Cell & PWD",
      members: [
        { name: "Dr. T Veerakumar (Liaison Officer)", email: "scstcell@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "OBC & EWS",
      members: [
        { name: "Dr. Ragoju Ravi (Liaison Officer)", email: "ravi@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Legal Cell",
      members: [
        { name: "Dr. Venkatanareshbabu Kuppili", email: "venkatanaresh@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Minority Cell",
      members: [
        { name: "Dr. Lokesh Kumar Bramhane (Liaison Officer)", email: "lokesh.bramhane@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Women's Cell",
      members: [
        { name: "Dr. Santhi B. (Chairperson)", email: "santhi@nitgoa.ac.in", number: "" },
        { name: "Dr. Mini S. (Member)", email: "mini@nitgoa.ac.in", number: "" },
        { name: "Dr. Rina Ghose (Member)", email: "rina@nitgoa.ac.in", number: "" },
        { name: "Dr. Pravati Swain (Member)", email: "pravati@nitgoa.ac.in", number: "" },
      ]
    },
    {
      comm: "Alumni Cell",
      members: [
        { name: "Dr. Rina Ghose (Coordinator)", email: "alumni@nitgoa.ac.in", number: "" },
      ]
    },
  ];
  const { theme } = useContext(AppContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className={`page font-dosis bg-${theme}bg text-${theme}txt pb-4`}>
        <div className="cont mt-5">
          <h2 className="text-xl font-bold text-center">Committees</h2>
          <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th h-1`}></div>
          <div className="p-2 lg:px-20 mt-4">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
              <thead className={`bg-${theme}th text-white`}>
                <tr>
                  <th className="border text-center p-1 lg:p-4 font-semibold">Committee</th>
                  <th className="border text-center p-1 lg:p-4 font-semibold">Name</th>
                  <th className="border text-center p-1 lg:p-4 font-semibold">E-Mail</th>
                  <th className="border text-center p-1 lg:p-4 font-semibold">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {commit.map((committee, index) => (
                  committee.members.map((member, memberIndex) => (
                    <tr key={`${index}-${memberIndex}`} className="border-b hover:bg-gray-100">
                      {memberIndex === 0 && (
                        <td className="border text-center p-1 lg:p-4" rowSpan={committee.members.length}>
                          {committee.comm}
                        </td>
                      )}
                      <td className="border p-1 lg:p-4">{member.name}</td>
                      <td className="border p-1 lg:p-4">{member.email}</td>
                      <td className="border p-1 lg:p-4">{member.number || "-"}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


        <Footer></Footer>
    </div>
  )
}

export default Committee
