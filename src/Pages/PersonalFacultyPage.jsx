import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPublicFacultyProfile } from '../features/Faculty/FacultySlice';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ReactQuill from 'react-quill'; // Importing Quill
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import 'react-quill/dist/quill.bubble.css'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';


const PersonalFacultyPage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  // const [selectedInfo, setSelectedInfo] = useState('contact');

  const { profile, loading, error } = useSelector((state) => state.faculty);

  useEffect(() => {
    if (username) {
      dispatch(fetchPublicFacultyProfile({ username }));
    }
  }, [dispatch, username]);


  // const renderContent = () => {
  //   { console.log(profile) }
  //   if (selectedInfo === 'contact') {
  //     return (
  //       <>

  //       </>
  //     );
  //   } else if (selectedInfo === 'bio') {
  //     return (
  //       <>


  //       </>
  //     );
  //   }
  //   return null;
  // };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />




      {error ? <p className="flex justify-center items-center text-red-500 font-bold text-center mt-4 h-96">Oops! Some Error Occured.</p> :
        loading ? <div className='flex justify-center items-center h-96'> <CircularProgress /></div> : <>

          <div className='lg:px-20 lg:py-10 font-dosis'>
            {profile && (
              <div className="flex flex-row justify-center p-4">
                {/* Sidebar */}
                {/* <div className="w-1/4 bg-white shadow-lg rounded-lg p-4">
              <Typography variant="h6" className="font-semibold mb-4">
                Information
              </Typography>
              <List component="nav">
                <ListItem button onClick={() => setSelectedInfo('contact')}>
                  <ListItemText primary="Contact Info" />
                </ListItem>
                <ListItem button onClick={() => setSelectedInfo('bio')}>
                  <ListItemText primary="Biography" />
                </ListItem>
                <ListItem button component={Link} to={`/faculty/${profile?.facultyPageRoute}`}>
                  <ListItemText primary="Visit My Page" />
                </ListItem>
              </List>
            </div> */}

                {/* Main Content */}
                <div className="w-full ml-4">
                  <div className=" rounded-lg p-5">
                    <div>



                      <div className="flex flex-col items-center mb-6">

                        <div className='flex justify-between w-full flex-wrap'>

                          <div className="flex flex-col items-center">
                            {profile?.imageLink && (
                              <img
                                alt={profile?.name}
                                src={profile.imageLink}
                                className="mb-4 rounded-xl h-52 w-52"
                              />
                            )}
                            {profile?.name && (
                              <h4 className="font-dosis font-semibold text-blue-800 text-center text-2xl">
                                {profile.name}
                              </h4>
                            )}
                            {/* {profile?.designation && (
                              <h6 className="font-dosis text-gray-600 text-center">
                                {profile.designation}
                              </h6>
                            )}
                            {profile?.department && (
                              <h6 className="font-dosis text-gray-600 text-center">
                                {profile.department}
                              </h6>
                            )} */}
                          </div>

                          <div className='flex flex-col grow px-8 p-4'>
                            {profile?.email && (
                              <p className="mb-2">
                                <strong>Email:</strong> <a className='text-blue-800 underline' href={`mailto:${profile?.email}`}> {profile.email}</a>
                              </p>
                            )}
                            {profile?.phone && (
                              <p className="mb-2">
                                <strong>Phone:</strong> {profile.phone}
                              </p>
                            )}
                            {profile?.designation && (
                              <p className="mb-2">
                                <strong>Designation:</strong> {profile.designation}
                              </p>
                            )}
                            {profile?.department && (
                              <p className="mb-2">
                                <strong>Department:</strong> {profile.department}
                              </p>
                            )}
                            {profile?.researcharea && (
                              <p className="mb-4">
                                <strong>Research Areas:</strong> {profile?.researcharea}
                              </p>
                            )}
                          </div>


                        </div>

                      </div>


                      <Divider className="my-2" />

                      {/* Dynamic Content Area */}
                      {/* {renderContent()} */}
                    </div>


                    {profile?.gender && <div>
                      <p><strong>Gender:</strong>{profile?.gender}</p>
                    </div>
                    }
                    {profile?.doj && <div>
                      <p><strong>Date of Joining:</strong>{profile?.doj}</p>
                    </div>
                    }
                    {profile?.experience && <div>
                      <p><strong>Research/Teaching Experience:</strong>{profile?.experience}</p>
                    </div>
                    }
                    {profile?.courses && <div>
                      <Typography variant="h6" className="font-semibold mb-2 text-blue-800 capitalize">
                        Courses Taught:
                      </Typography>
                      <ReactQuill
                        value={profile?.courses}
                        readOnly={true}
                        theme={"bubble"}
                      />
                    </div>
                    }



                    <div>

                      {profile?.bio && (
                        <div>
                          {Object.entries(profile?.bio).map(([key, value]) => (
                            <div key={key}>
                              <Typography variant="h6" className="font-semibold mb-2 text-blue-800 capitalize">
                                {key.replace(/([A-Z])/g, ' $1')}
                              </Typography>
                              {Array.isArray(value) ? (
                                <ul className=" pl-5 mb-4">
                                  {value.map((item, index) => (
                                    <li key={index} className="text-gray-700">
                                      <ReactQuill
                                        value={item}
                                        readOnly={true}
                                        theme={"bubble"}
                                      />
                                      {/* {item} */}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <Typography variant="body1" className="mb-4 text-gray-700">
                                  {/* <div dangerouslySetInnerHTML={{ __html: value }}></div> */}
                                </Typography>
                              )}
                              <Divider className="my-4" />


                            </div>
                          ))}
                        </div>
                      )}
                      {profile?.customSections && (
                        <div>
                          {Object.entries(profile?.customSections).map(([key, value]) => (
                            <div key={key}>
                              <Typography variant="h6" className="font-semibold mb-2 text-blue-800 capitalize">
                                {key.replace(/([A-Z])/g, ' $1')}
                              </Typography>
                              {Array.isArray(value) ? (
                                <ul className=" pl-5 mb-4">
                                  {value.map((item, index) => (
                                    <li key={index} className="text-gray-700">
                                      <ReactQuill
                                        value={item}
                                        readOnly={true}
                                        theme={"bubble"}
                                      />
                                      {/* {item} */}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <Typography variant="body1" className="mb-4 text-gray-700">
                                  {/* <div dangerouslySetInnerHTML={{ __html: value }}></div> */}


                                </Typography>
                              )}
                              <Divider className="my-4" />


                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>




              </div>
            )}

          </div>

        </>}

      <Footer />
    </div>
  );
};

export default PersonalFacultyPage;
