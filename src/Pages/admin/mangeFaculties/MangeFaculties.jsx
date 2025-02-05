import React, { useEffect } from 'react'
import Sidebar from '../../../Components/Admin/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFacultyProfile } from '../../../features/Department/departmentSlice';
import { deleteSlide, editSlide, postSlide } from '../../../features/Slides/slidesSlice';
import {deleteFacultyProfile} from "../../../features/Department/departmentSlice"
import {updateFacultyProfile} from '../../../features/Faculty/FacultySlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ManageFaculties = () => {
  // const faculties = useSelector((state) => state.facultyProfile.facultyProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Slides State
  const faculties = useSelector((state) => state.department.department);
  const slidesLoading = useSelector((state) => state.slides.loading);
  const [newSlide, setNewSlide] = useState({ type: 'image', image: '', description: '', accentColorLink: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentSlideId, setCurrentSlideId] = useState(null);
  const fetchData = async () => {
    await dispatch(fetchAllFacultyProfile());
  }

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllFacultyProfile());
    }
    fetchData();
  }, []);

  // Faculty Profile
  const handleChangeSlide = (e) => {
    const { name, value } = e.target;
    setNewSlide((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitSlide = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(editSlide({ updatedSlide: newSlide }));
      setEditMode(false);
    } else {
      dispatch(postSlide(newSlide));
    }
    resetSlideForm();
    fetchData();
  };

  const handleEditSlide = (slide) => {
    // setNewSlide(slide);
    // setEditMode(true);
    // setCurrentSlideId(slide._id);
    
    console.log(slide, "haiduhgfauif");

    navigate(`${slide._id}`);
  };

  const handleDeleteSlide = (id) => {
    dispatch(deleteFacultyProfile(id));
    fetchData();
  };

  const resetSlideForm = () => {
    setNewSlide({ type: 'image', image: '', description: '', accentColorLink: '' });
    setCurrentSlideId(null);
  };

  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <div className='p-2'>
        <h1>Manage faculties</h1>
        {slidesLoading ? (
          <div>Loading...</div>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300 mb-8">
            <thead>
              <tr className="bg-blue-400">
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">Preview</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Department</th>
                <th className="border border-gray-300 p-2">Designation</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Page</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(faculties) && faculties?.map((slide) => (

                <tr key={slide?.profile?._id}>
                  <td className="border border-gray-300 p-2">{slide?.profile?.type}</td>
                  <td className="border border-gray-300 p-2">
                    {slide?.profile?.type === 'video' ? (
                      <VideoThumbnail
                        videoUrl={slide.image}
                        snapshotAtTime={5}
                        width={80}
                        height={60}
                        alt="Video Thumbnail"
                      />
                    ) : (
                      <img src={slide?.profile?.imageLink} alt={slide?.profile?.name} className="w-16 h-16 object-cover" />
                    )}
                  </td>
                  <td className="border border-gray-300 p-2">{slide?.profile?.name}</td>
                  <td className="border border-gray-300 p-2">{slide?.profile?.department}</td>
                  <td className="border border-gray-300 p-2">{slide?.profile?.designation}</td>
                  <td className="border border-gray-300 p-2">{slide?.profile?.email}</td>
                  <td className="border border-gray-300 p-2">{slide?.profile?.facultyPageRoute?<Link to={`/faculty/${slide?.profile?.facultyPageRoute}`}>Visit</Link>:""}</td>
                  <td className="border border-gray-300 p-2 space-x-2">
                    <button
                      onClick={() => handleEditSlide(slide)}
                      className="bg-yellow-500 text-white p-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSlide(slide?._id)}
                      className="bg-red-500 text-white p-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 p-2">
                  <select
                    name="type"
                    value={newSlide?.profile?.type}
                    onChange={handleChangeSlide}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  {newSlide?.profile?.type === 'video' && newSlide?.profile?.image ? (
                    <VideoThumbnail
                      videoUrl={newSlide?.profile?.image}
                      snapshotAtTime={5}
                      width={80}
                      height={60}
                      alt="Video Thumbnail"
                    />
                  ) : newSlide?.profile?.image ? (
                    <img
                      src={newSlide?.profile?.image}
                      alt="Preview"
                      className="w-16 h-16 object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">No preview available</div>
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    name="image"
                    value={newSlide?.profile?.image}
                    onChange={handleChangeSlide}
                    placeholder="Image/Video URL"
                    className="border border-gray-300 p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    name="description"
                    value={newSlide?.profile?.description}
                    onChange={handleChangeSlide}
                    placeholder="Description"
                    className="border border-gray-300 p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    name="accentColorLink"
                    value={newSlide?.profile?.accentColorLink}
                    onChange={handleChangeSlide}
                    placeholder="Accent Color"
                    className="border border-gray-300 p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center" colSpan={2}>
                  <Link to="/admin/signup">
                  <button
                    // onClick={handleSubmitSlide}
                    className="bg-blue-500 text-white p-1 w-full"
                  >
                    {/* {editMode ? 'Update' : 'Add'} */}
                    Add
                  </button>
                  </Link>
                </td>
              </tr>

            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ManageFaculties
