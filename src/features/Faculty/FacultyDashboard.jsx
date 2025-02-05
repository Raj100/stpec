// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFacultyProfile, updateFacultyProfile } from './FacultySlice';

// const FacultyDashboard = () => {
//     const dispatch = useDispatch();
//     const { profile, loading } = useSelector((state) => state.faculty);
//     const [profileData, setProfileData] = useState(profile || {});

//     useEffect(() => {
//         dispatch(fetchFacultyProfile('currentFacultyUsername'));
//     }, [dispatch]);

//     useEffect(() => {
//         setProfileData(profile);
//     }, [profile]);

//     const handleSubmit = () => {
//         dispatch(updateFacultyProfile(profileData));
//     };

//     if (loading) return <div className="text-center mt-8">Loading...</div>;

//     return (
//         <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
//             <h2 className="text-2xl font-bold text-center mb-6">Faculty Dashboard</h2>
//             <div className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Name</label>
//                     <input
//                         type="text"
//                         value={profileData?.name || ''}
//                         onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
//                         placeholder="Enter your name"
//                         className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="flex justify-center">
//                     <button
//                         onClick={handleSubmit}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         Update Profile
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FacultyDashboard;
