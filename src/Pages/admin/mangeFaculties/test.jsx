import React, { useEffect } from 'react'
import Sidebar from '../../../Components/Admin/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFacultyProfile } from '../../../features/Department/departmentSlice';
import { deleteSlide, editSlide, postSlide } from '../../../features/Slides/slidesSlice';
import { useState } from 'react';

const ManageFaculties = () => {
  // const faculties = useSelector((state) => state.facultyProfile.facultyProfile);
  const dispatch = useDispatch();

  // Slides State
  const slides = useSelector((state) => state.slides.slides);
  const slidesLoading = useSelector((state) => state.slides.loading);
  const [newSlide, setNewSlide] = useState({ type: 'image', image: '', description: '', accentColorLink: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentSlideId, setCurrentSlideId] = useState(null);


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
      dispatch(editSlide({ id: currentSlideId, updatedSlide: newSlide }));
      setEditMode(false);
    } else {
      dispatch(postSlide(newSlide));
    }
    resetSlideForm();
    fetchData();
  };

  const handleEditSlide = (slide) => {
    setNewSlide(slide);
    setEditMode(true);
    setCurrentSlideId(slide._id);
  };

  const handleDeleteSlide = (id) => {
    dispatch(deleteSlide(id));
  };

  const resetSlideForm = () => {
    setNewSlide({ type: 'image', image: '', description: '', accentColorLink: '' });
    setCurrentSlideId(null);
  };

  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <div>
        <h1>Manage faculties</h1>
        {slidesLoading ? (
          <div>Loading...</div>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300 mb-8">
            <thead>
              <tr className="bg-blue-400">
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">Preview</th>
                <th className="border border-gray-300 p-2">Image Link</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Accent Color</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(slides) && slides?.map((slide) => (

                <tr key={slide?._id}>
                  <td className="border border-gray-300 p-2">{slide.type}</td>
                  <td className="border border-gray-300 p-2">
                    {slide.type === 'video' ? (
                      <VideoThumbnail
                        videoUrl={slide.image}
                        snapshotAtTime={5}
                        width={80}
                        height={60}
                        alt="Video Thumbnail"
                      />
                    ) : (
                      <img src={slide.image} alt={slide.description} className="w-16 h-16 object-cover" />
                    )}
                  </td>
                  <td className="border border-gray-300 p-2">{slide.image}</td>
                  <td className="border border-gray-300 p-2">{slide.description}</td>
                  <td className="border border-gray-300 p-2">{slide.accentColorLink}</td>
                  <td className="border border-gray-300 p-2 space-x-2">
                    <button
                      onClick={() => handleEditSlide(slide)}
                      className="bg-yellow-500 text-white p-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSlide(slide._id)}
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
                    value={newSlide.type}
                    onChange={handleChangeSlide}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  {newSlide.type === 'video' && newSlide.image ? (
                    <VideoThumbnail
                      videoUrl={newSlide.image}
                      snapshotAtTime={5}
                      width={80}
                      height={60}
                      alt="Video Thumbnail"
                    />
                  ) : newSlide.image ? (
                    <img
                      src={newSlide.image}
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
                    value={newSlide.image}
                    onChange={handleChangeSlide}
                    placeholder="Image/Video URL"
                    className="border border-gray-300 p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    name="description"
                    value={newSlide.description}
                    onChange={handleChangeSlide}
                    placeholder="Description"
                    className="border border-gray-300 p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    name="accentColorLink"
                    value={newSlide.accentColorLink}
                    onChange={handleChangeSlide}
                    placeholder="Accent Color"
                    className="border border-gray-300 p-1 w-full"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center" colSpan={2}>
                  <button
                    onClick={handleSubmitSlide}
                    className="bg-blue-500 text-white p-1 w-full"
                  >
                    {editMode ? 'Update' : 'Add'}
                  </button>
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
