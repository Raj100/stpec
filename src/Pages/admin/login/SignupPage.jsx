import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../features/Login/LoginSlice';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('faculty');
    const [profile, setProfile] = useState({ name: '', department: '', bio: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook to navigate programmatically
    const { loading, error } = useSelector((state) => state.login);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(signupUser({ username, password, role, profile }));

        if (signupUser.fulfilled.match(result)) {
            // Navigate to login after successful signup
            navigate('/login');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Teacher Signup</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                            <option value="faculty">Faculty</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            placeholder="Full Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        {/* <label className="block text-sm font-medium text-gray-700">Department</label>
                        <input
                            type="text"
                            value={profile.department}
                            onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                            placeholder="Department"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        /> */}

                        <label className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                            value={profile.department}
                            onChange={(e) => setProfile({ ...profile, department: e.target.value })}
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
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Designation</label>
                        <input
                            type="text"
                            value={profile.designation}
                            onChange={(e) => setProfile({ ...profile, designation: e.target.value })}
                            placeholder="Designation"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            placeholder="Email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        {/* <label className="block text-sm font-medium text-gray-700">Staff</label>
                        <input
                            type="checkbox"
                            value={profile.staff}
                            
                            placeholder="Staff"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        /> */}
                        <div className="flex items-center mb-4">
                            <input type="checkbox"
                                value={profile.staff}
                                placeholder="Staff"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setProfile({ ...profile, staff: true })
                                    }
                                    else{
                                        setProfile({ ...profile, staff: false })
                                    }
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non Teaching Staff</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {loading ? 'Adding up...' : 'Add'}
                    </button>
                    {error && <p className="text-red-500 text-sm">{error.message || 'Signup failed'}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
