import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTender,
    postTender,
    editTender,
    deleteTender,
} from '../../features/Tenders/tendersSlide';
import VideoThumbnail from 'react-video-thumbnail';

const TenderTable = () => {
    const dispatch = useDispatch();
    const { tender,newsUploadStatus } = useSelector((state) => state.tender);
    let news= tender;
    const [newNews, setNewNews] = useState({ type: 'Link', link: '', content: '', file: null });
    const [editNewsMode, setEditNewsMode] = useState(false);
    const [currentNewsId, setCurrentNewsId] = useState(null);

    const handleChangeNews = (e) => {
        const { name, value } = e.target;
        setNewNews((prev) => ({ ...prev, [name]: value }));
    };

    const handleNewsFileChange = (e) => {
        setNewNews({ ...newNews, file: e.target.files[0] });
    };

    const handleNewsFileUpload = async (e) => {
        e.preventDefault();
        // Simulate file upload (replace with actual upload logic)
        const uploadStatus = await new Promise((resolve) => setTimeout(() => resolve('success'), 1000));
        setNewNews({ ...newNews, link: 'uploaded-file-link.com' });
    };

    const handleSubmitNews = async (e) => {
        e.preventDefault();
        if (editNewsMode) {
            dispatch(editTender({ id: currentNewsId, updatedNews: newNews }));
            setEditNewsMode(false);
        } else {
            await dispatch(postTender(newNews)); // Handle potential errors from postNews
        }
        resetNewsForm();
        fetchData();
    };

    const handleEditNews = (news) => {
        setNewNews(news);
        setEditNewsMode(true);
        setCurrentNewsId(news._id);
    };

    const handleDeleteNews = (id) => {
        dispatch(deleteTender(id));
        fetchData();
    };

    const resetNewsForm = () => {
        setNewNews({ type: 'Link', link: '', content: '', file: null });
        setCurrentNewsId(null);
    };

    const fetchData = async () => {
        await dispatch(fetchTender());
    };

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    return (
        <>
            <h2 className="text-lg font-bold mb-4 mt-8">Tenders Update</h2>
            {
                (
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
                                            <input type="file" onChange={(e) => { handleNewsFileChange(e) }} />
                                            <button onClick={(e) => { handleNewsFileUpload(e) }}>Upload</button>
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
                )}
        </>
    );
};

export default TenderTable;