import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchSlides,
    postSlide,
    editSlide,
    deleteSlide,
} from '../../../features/Slides/slidesSlice';
import {
    fetchAnnouncements,
    postAnnouncement,
    editAnnouncement,
    deleteAnnouncement,
} from '../../../features/Announcement/announcement';
import Sidebar from '../../../Components/Admin/Sidebar';
import VideoThumbnail from 'react-video-thumbnail';
import NewsTable from '../../../Components/News/News';
import NoticeboardTable from '../../../Components/NoticeBoard/NoticeBoard';
import TenderTable from '../../../Components/Tenders/Tenders';
import whyDidYouRender from "@welldone-software/why-did-you-render";

whyDidYouRender(React);
const AdminDashboard = () => {
    const dispatch = useDispatch();

    // Slides State
    const slides = useSelector((state) => state.slides.slides);
    const slidesLoading = useSelector((state) => state.slides.loading);
    const [newSlide, setNewSlide] = useState({ type: 'image', image: '', description: '', accentColorLink: '' });
    const [editMode, setEditMode] = useState(false);
    const [currentSlideId, setCurrentSlideId] = useState(null);

    // // News State
    // const news = useSelector((state) => state.news.news);
    // const newsLoading = useSelector((state) => state.news.loading);
    // const [newNews, setNewNews] = useState({ type: 'Link', link: '', content: '',file: null });
    // const [editNewsMode, setEditNewsMode] = useState(false);
    // const [currentNewsId, setCurrentNewsId] = useState(null);

    // // NoticeBoard State
    //     const noticeBoard = useSelector((state) => state.news.news);
    //     const noticeBoardLoading = useSelector((state) => state.news.loading);
    //     const [newnoticeBoard, setNewnoticeBoard] = useState({ type: 'Link', link: '', content: '',file: null });
    //     const [editnoticeBoardMode, setnoticeBoardMode] = useState(false);
    //     const [currentnoticeBoardId, setCurrentnoticeBoardId] = useState(null);

    // Announcements State
    const announcements = useSelector((state) => state.announcements.announcements);
    const announcementsLoading = useSelector((state) => state.announcements.loading);
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' });
    const [editAnnouncementMode, setEditAnnouncementMode] = useState(false);
    const [currentAnnouncementId, setCurrentAnnouncementId] = useState(null);
    const { newsUploadStatus } = false;


    // Fetch Data
    const fetchData = async () => {
        await dispatch(fetchSlides());
        await dispatch(fetchAnnouncements());
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Slide Handlers
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

    // Announcement Handlers
    const handleChangeAnnouncement = (e) => {
        const { name, value } = e.target;
        setNewAnnouncement((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitAnnouncement = (e) => {
        e.preventDefault();
        if (editAnnouncementMode) {
            dispatch(editAnnouncement({ id: currentAnnouncementId, updatedAnnouncement: newAnnouncement }));
            setEditAnnouncementMode(false);
        } else {
            dispatch(postAnnouncement(newAnnouncement));
        }
        resetAnnouncementForm();
        fetchData();
    };

    const handleEditAnnouncement = (announcement) => {
        setNewAnnouncement(announcement);
        setEditAnnouncementMode(true);
        setCurrentAnnouncementId(announcement._id);
    };

    const handleDeleteAnnouncement = (id) => {
        console.log('ids', id);
        dispatch(deleteAnnouncement(id));
        fetchData();
    };

    const resetAnnouncementForm = () => {
        setNewAnnouncement({ title: '', content: '' });
        setCurrentAnnouncementId(null);
    };


    // // News Handlers
    // const handleChangeNews = (e) => {
    //     const { name, value } = e.target;
    //     setNewNews((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmitNews = (e) => {
    //     e.preventDefault();
    //     if (editNewsMode) {
    //         dispatch(editNews({ id: currentNewsId, updatedNews: newNews }));
    //         setEditNewsMode(false);
    //     } else {
    //         dispatch(postNews(newNews));
    //     }
    //     resetNewsForm();
    //     fetchData();
    // };

    // const handleEditNews = (news) => {
    //     setNewNews(news);
    //     setEditNewsMode(true);
    //     setCurrentNewsId(news._id);
    // };

    // const handleDeleteNews = (id) => {
    //     dispatch(deleteNews(id));
    // };
    // console.log("hello");
    // const resetNewsForm = () => {
    //     setNewNews({ type: 'Link', link: '', content: '' });
    //     setCurrentNewsId(null);
    // };
    // const handleNewsFileChange = (e) => {
    //     console.log(e.target.files[0]);
    //     setNewNews({ ...newNews, file: e.target.files[0] });
    // }
    const handleNewsFileUpload = (e) => {
        setNewSlide({ ...newSlide, file: e.target.files[0], link: "something" });

    }



    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4 w-full">
                {/* Slides Section */}
                <h2 className="text-lg font-bold mb-4">Slideshow Update</h2>
                {(
                    <table className="min-w-full border-collapse border border-gray-300 mb-8">
                        <thead>
                            <tr className="bg-blue-400">
                                <th className="border border-gray-300 p-2">Type</th>
                                <th className="border border-gray-300 p-2">Preview</th>
                                {/* <th className="border border-gray-300 p-2">Upload</th> */}
                                <th className="border border-gray-300 p-2">Image Link</th>
                                <th className="border border-gray-300 p-2">Description</th>
                                {/* <th className="border border-gray-300 p-2">Accent Color</th> */}
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(slides) && slides?.map((slide) => (

                                <tr key={slide?._id}>
                                    <td className="border border-gray-300 p-2">{slide.type}</td>
                                    <td className="flex border border-gray-300 p-2">
                                        {slide.type === 'video' ? (
                                            <div className='flex w-20 h-20'>
                                            <VideoThumbnail
                                                videoUrl={slide.image}
                                                snapshotAtTime={5}
                                                width={2000}
                                                height={2000}
                                                alt="Video Thumbnail"
                                            />
                                            </div>
                                        ) : (
                                            <img src={slide.image} alt={slide.description} className="w-16 h-16 object-cover" />
                                        )}
                                    </td>
                                    <td className="border border-gray-300 p-2">{slide.image}</td>
                                    <td className="border border-gray-300 p-2">{slide.description}</td>
                                    {/* <td className="border border-gray-300 p-2">{slide.accentColorLink}</td> */}
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
                                {/* <td className="border border-gray-300 p-2">
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
                                </td> */}
                                <td className="border border-gray-300 p-2">
                                    <input type="file" onChange={(e) => { handleNewsFileUpload(e) }} />
                                    <button onClick={(e) => { handleNewsFileUpload(e) }}>Upload</button>
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
                                {/* <td className="border border-gray-300 p-2">
                                <input
                                    type="text"
                                    name="accentColorLink"
                                    value={newSlide.accentColorLink}
                                    onChange={handleChangeSlide}
                                    placeholder="Accent Color"
                                    className="border border-gray-300 p-1 w-full"
                                />
                            </td> */}
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

                {/* Announcements Section */}
                <h2 className="text-lg font-bold mb-4">Announcements</h2>
                {(
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-green-400">
                                <th className="border border-gray-300 p-2">Title</th>
                                <th className="border border-gray-300 p-2">Content</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {announcements.map((announcement) => (
                                <tr key={announcement._id}>
                                    <td className="border border-gray-300 p-2">{announcement.title}</td>
                                    <td className="border border-gray-300 p-2">{announcement.content}</td>
                                    <td className="border border-gray-300 p-2 space-x-2">
                                        <button
                                            onClick={() => handleEditAnnouncement(announcement)}
                                            className="bg-yellow-500 text-white p-1"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAnnouncement(announcement._id)}
                                            className="bg-red-500 text-white p-1"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="text"
                                        name="title"
                                        value={newAnnouncement.title}
                                        onChange={handleChangeAnnouncement}
                                        placeholder="Title"
                                        className="border border-gray-300 p-1 w-full"
                                    />
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="text"
                                        name="content"
                                        value={newAnnouncement.content}
                                        onChange={handleChangeAnnouncement}
                                        placeholder="Content"
                                        className="border border-gray-300 p-1 w-full"
                                    />
                                </td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button
                                        onClick={handleSubmitAnnouncement}
                                        className="bg-blue-500 text-white p-1 w-full"
                                    >
                                        {editAnnouncementMode ? 'Update' : 'Add'}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}



                <NewsTable></NewsTable>

                <NoticeboardTable></NoticeboardTable>

                <TenderTable></TenderTable>

                {/* News Section */}
                {/* <h2 className="text-lg font-bold mb-4 mt-8">News & Events Update</h2>
            {
                newsLoading ? (
                    <div>Loading...</div>
                ) : (
                    <table className="min-w-full border-collapse border border-gray-300 mb-8">
                        <thead>
                            <tr className="bg-blue-400">
                                <th className="border border-gray-300 p-2">Type</th>
                                <th className="border border-gray-300 p-2">Upload/Link</th>
                                <th className="border border-gray-300 p-2">Content</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(news) && news.map((newss) => (
                                <tr key={newss._id}>
                                    <td className="border border-gray-300 p-2">{newss.type}</td>
                                    <td className="border border-gray-300 p-2 max-w-96 ">
                                        {newss.type === 'video' ? (
                                            <VideoThumbnail
                                                videoUrl={newss.link}
                                                snapshotAtTime={5}
                                                width={80}
                                                height={60}
                                                alt="Video Thumbnail"
                                            />
                                        ) : (
                                            // <img src={newss.link} alt={newss.content} className="w-16 h-16 object-cover" />
                                            <p className='break-all'>{newss?.link}</p>
                                        )}
                                    </td>
                                    <td className="border border-gray-300 p-2 break-all">{newss.content}</td>
                                    <td className="border border-gray-300 p-2 space-x-2">
                                        <button
                                            onClick={() => handleEditNews(newss)}
                                            className="bg-yellow-500 text-white p-1"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteNews(newss._id)}
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
                                        value={newNews.type}
                                        onChange={handleChangeNews}
                                        className="border border-gray-300 p-1 w-full"
                                    >
                                        <option value="Link">Link</option>
                                        <option value="Upload">Upload</option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 p-2">
                                    {newNews.type === 'Upload' ? (
                                        <>
                                            <input type="file" onChange={(e)=>{handleNewsFileChange(e)}} />
                                            <button onClick={(e)=>{handleNewsFileUpload(e)}}>Upload</button>
                                            {newsUploadStatus === "loading" && <p>Uploading...</p>}
                                            {newsUploadStatus === "success" && <p>Upload Successful!</p>}
                                            {newsUploadStatus === "error" && <p>Error uploading file.</p>}
                                        </>
                                    ) : (
                                        <input
                                            type="text"
                                            name="link"
                                            value={newNews.link}
                                            onChange={handleChangeNews}
                                            placeholder="Link"
                                            className="border border-gray-300 p-1 w-full"
                                        />
                                    )}
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <input
                                        type="text"
                                        name="content"
                                        value={newNews.content}
                                        onChange={handleChangeNews}
                                        placeholder="Content"
                                        className="border border-gray-300 p-1 w-full"
                                    />
                                </td>
                                <td className="border border-gray-300 p-2 text-center" colSpan={2}>
                                    <button
                                        onClick={handleSubmitNews}
                                        className="bg-blue-500 text-white p-1 w-full"
                                    >
                                        {editNewsMode ? 'Update' : 'Add'}
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                )} */}








            </div>



        </div>
    );
};

export default AdminDashboard;
