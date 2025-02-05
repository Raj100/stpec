import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFacultyProfileByAdmin, updateFacultyProfileByAdmin } from '../../../features/EditFacultyByAdmin/EditFacultyByAdmin';
import Sidebar from '../../../Components/Admin/Sidebar';
import { TextField, Button, Container, Typography, Paper, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CircularProgress from '@mui/material/CircularProgress';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useParams } from 'react-router-dom';

const FacultyProfilePageByAdmin = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    let { adminfacultyprofiles, loading } = useSelector((state) => state.adminfacultyprofiles);

    let profile = adminfacultyprofiles?.profile;
    let user = adminfacultyprofiles;
    const [previewImage, setPreviewImage] = useState(null);


    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        department: '',
        bio: {
            education: [''],
            researchPapers: [''],
            awards: [''],
        },
        customSections: {},
        email: '',
        phone: '',
        imageLink: null,
        staff: false,
        file: null,
        username: '',
        password: '',
        researcharea: '',
        courses: '',
    });

    useEffect(() => {
        dispatch(fetchFacultyProfileByAdmin(id));
    }, [dispatch]);

    useEffect(() => {
        if (profile) {
            setFormData({
                id: id,
                name: profile?.name || '',
                designation: profile?.designation || '',
                department: profile?.department || '',
                bio: profile?.bio || { education: [''], researchPapers: [''], awards: [''] },
                customSections: profile?.customSections || {},
                email: profile?.email || '',
                phone: profile?.phone || '',
                imageLink: profile?.imageLink || null,
                staff: profile?.staff || false,
                username: user?.username || '',
                password: user?.password || '',
                researcharea: profile?.researcharea || '',
                courses: profile?.courses || '',
            });
            setPreviewImage(profile?.imageLink || null);
        }
        console.log(profile?.imageLink);
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(formData);
    };

    const handleBioChange = (index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            bio: {
                ...prev.bio,
                [field]: prev?.bio[field]?.map((item, i) => (i === index ? value : item)) || [],
            },
        }));
    };

    const handleCustomSectionChange = (index, sectionName, value) => {
        setFormData((prev) => ({
            ...prev,
            customSections: {
                ...prev.customSections,
                [sectionName]: prev.customSections[sectionName]?.map((item, i) => (i === index ? value : item)) || [],
            },
        }));
    };

    const handleAddField = (field) => {
        setFormData((prev) => ({
            ...prev,
            bio: {
                ...prev.bio,
                [field]: [...(prev.bio[field] || []), ''],
            },
        }));
    };

    const handleRemoveField = (index, field) => {
        setFormData((prev) => ({
            ...prev,
            bio: {
                ...prev.bio,
                [field]: prev.bio[field]?.filter((_, i) => i !== index) || [],
            },
        }));
    };

    const handleAddCustomField = (sectionName) => {
        setFormData((prev) => ({
            ...prev,
            customSections: {
                ...prev.customSections,
                [sectionName]: [...(prev.customSections[sectionName] || []), ''],
            },
        }));
    };

    const handleRemoveCustomField = (index, sectionName) => {
        setFormData((prev) => ({
            ...prev,
            customSections: {
                ...prev.customSections,
                [sectionName]: prev.customSections[sectionName]?.filter((_, i) => i !== index) || [],
            },
        }));
    };

    const handleCustomSectionNameChange = (oldSectionName, newSectionName) => {
        const { [oldSectionName]: oldFields, ...restSections } = formData.customSections;
        setFormData((prev) => ({
            ...prev,
            customSections: {
                ...restSections,
                [newSectionName]: oldFields,
            },
        }));
    };

    const handleAddCustomSection = () => {
        setFormData((prev) => ({
            ...prev,
            customSections: {
                ...prev.customSections,
                ['New Section']: [''],
            },
        }));
    };

    const handleRemoveCustomSection = (sectionName) => {
        const { [sectionName]: _, ...restSections } = formData.customSections;
        setFormData((prev) => ({
            ...prev,
            customSections: restSections,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, file: file, imageLink: file }));
            setPreviewImage(URL.createObjectURL(file)); // Set preview for the image
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(updateFacultyProfileByAdmin(formData));
        // dispatch(fetchFacultyProfile());
    };



    return (
        <div className="flex">
            <Sidebar />
            {loading && <CircularProgress />}
            <Container maxWidth="md" sx={{ mt: 6 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Edit Profile
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Upload Profile Image
                        </Typography>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }}
                            />
                        )}
                        {!previewImage && (
                            <img
                                src={profile?.imageLink}
                                alt="Preview"
                                style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }}
                            />
                        )}
                        <TextField
                            label="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        /><TextField
                            label="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        {/* <TextField
                            label="Department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        /> */}
                        <label className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option selected>Choose a Department</option>
                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                            <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
                            <option value="Applied Science">Applied Science</option>
                            <option value="Administrative Staff">Administrative Staff</option>
                        </select>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <div className="flex items-center mb-4">
                            <input type="checkbox"
                                value={formData.staff}
                                name='staff'
                                placeholder="Staff"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setFormData({ ...formData, staff: true })
                                    }
                                    else {
                                        setFormData({ ...formData, staff: false })
                                    }
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non Teaching Staff</label>
                        </div>

                        <label className="block mb-2 text-sm font-medium text-gray-500 ">Research Area</label>
                        <textarea
                            name="researcharea"
                            value={formData.researcharea}
                            onChange={handleChange}
                            rows="3"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Research Area"
                        ></textarea>
                        <label className="block m-2 text-sm font-medium text-gray-500 ">Courses Taught</label>
                        {/* <textarea 
                       
                        
                        rows="3" 
                        className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Courses Taught"
                        ></textarea> */}
                        <ReactQuill
                            name="courses"
                            theme="snow"
                            value={formData.courses}
                            onChange={(e) => { setFormData({ ...formData, courses: e}) }}

                            modules={{
                                toolbar: [
                                    [{ 'header': [1, 2, false] }, { 'font': [] }],
                                    ['bold', 'italic', 'underline', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image'],
                                    ['clean'],
                                ],
                            }}
                        />

                        {/* <Typography variant="h6" sx={{ mt: 4 }}>
                            Visit My Page
                        </Typography> */}
                        <Link
                            to={`/faculty/${profile?.facultyPageRoute}`}
                            className='text-sky-700'
                            target='_blank'
                        >
                            Go to My Page
                            <OpenInNewIcon color="primary" />
                        </Link>


                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Education
                        </Typography>
                        {formData?.bio?.education?.map((edu, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={12}>
                                    <ReactQuill
                                        theme="snow"
                                        value={edu}
                                        onChange={(value) => handleBioChange(index, 'education', value)}
                                        modules={{
                                            toolbar: [
                                                [{ 'header': [1, 2, false] }, { 'font': [] }],
                                                ['bold', 'italic', 'underline', 'blockquote'],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                ['link', 'image'],
                                                ['clean'],
                                            ],
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton onClick={() => handleRemoveField(index, 'education')}>
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddField('education')}
                            startIcon={<AddIcon />}
                            sx={{ mb: 2 }}
                        >
                            Add Education
                        </Button>

                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Research Papers
                        </Typography>
                        {formData?.bio?.researchPapers?.map((paper, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={12}>
                                    <ReactQuill
                                        theme="snow"
                                        value={paper}
                                        onChange={(value) => handleBioChange(index, 'researchPapers', value)}
                                        modules={{
                                            toolbar: [
                                                [{ 'header': [1, 2, false] }, { 'font': [] }],
                                                ['bold', 'italic', 'underline', 'blockquote'],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                ['link', 'image'],
                                                ['clean'],
                                            ],
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton onClick={() => handleRemoveField(index, 'researchPapers')}>
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddField('researchPapers')}
                            startIcon={<AddIcon />}
                            sx={{ mb: 2 }}
                        >
                            Add Research Paper
                        </Button>

                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Awards
                        </Typography>
                        {formData?.bio?.awards?.map((award, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={12}>
                                    <ReactQuill
                                        theme="snow"
                                        value={award}
                                        onChange={(value) => handleBioChange(index, 'awards', value)}
                                        modules={{
                                            toolbar: [
                                                [{ 'header': [1, 2, false] }, { 'font': [] }],
                                                ['bold', 'italic', 'underline', 'blockquote'],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                ['link', 'image'],
                                                ['clean'],
                                            ],
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton onClick={() => handleRemoveField(index, 'awards')}>
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddField('awards')}
                            startIcon={<AddIcon />}
                            sx={{ mb: 2 }}
                        >
                            Add Award
                        </Button>

                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Custom Sections
                        </Typography>
                        {Object.entries(formData.customSections).map(([sectionName, fields]) => (
                            <div key={sectionName}>
                                <TextField
                                    label="Section Name"
                                    value={sectionName}
                                    onChange={(e) => handleCustomSectionNameChange(sectionName, e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                                {fields.map((field, index) => (
                                    <Grid container spacing={2} key={index}>
                                        <Grid item xs={12}>
                                            <ReactQuill
                                                theme="snow"
                                                value={field}
                                                onChange={(value) => handleCustomSectionChange(index, sectionName, value)}
                                                modules={{
                                                    toolbar: [
                                                        [{ 'header': [1, 2, false] }, { 'font': [] }],
                                                        ['bold', 'italic', 'underline', 'blockquote'],
                                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                        ['link', 'image'],
                                                        ['clean'],
                                                    ],
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton onClick={() => handleRemoveCustomField(index, sectionName)}>
                                                <RemoveIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                ))}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleAddCustomField(sectionName)}
                                    startIcon={<AddIcon />}
                                    sx={{ mb: 2 }}
                                >
                                    Add Field
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleRemoveCustomSection(sectionName)}
                                    sx={{ mb: 2 }}
                                >
                                    Remove Section
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddCustomSection}
                            startIcon={<AddIcon />}

                        >
                            Add Custom Section
                        </Button>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 10 }}>
                            Save Changes
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default FacultyProfilePageByAdmin;
