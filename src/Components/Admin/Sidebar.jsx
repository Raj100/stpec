// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../features/Sidebar/SidebarSlice';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.sidebar.isOpen);

    const links = [
        { name: 'Dashboard', icon: 'fas fa-tachometer-alt', path: '/admin/dashboard' },
        { name: 'Edit Profile Page', icon: 'fas fa-user-edit', path: '/admin/profile' },
        { name: 'My Department', icon: 'fas fa-building', path: '/admin/mydepartment' },
        { name: 'Manage Faculties', icon: 'fas fa-users', path: '/admin/manage-faculties' },
        { name: 'Manage Departments', icon: 'fas fa-building', path: '/admin/manage-departments' },
        { name: 'Digital Signature', icon: 'fas fa-file-signature', path: '/DigitalSignature' },
        { name: 'Logout', icon: 'fas fa-sign-out', path: '/' },
    ];

    return (
        <div className={`${isOpen ? 'w-80' : 'w-20'}`}>
            <div className={`fixed z-10 top-0 left-0 flex flex-col min-h-screen h-full bg-sky-700 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
                {/* Toggle Button */}

                <button
                    className="p-4 text-xl focus:outline-none bg-sky-700 hover:bg-sky-600"
                    onClick={() => dispatch(toggleSidebar())}
                >
                    {isOpen ? '<' : '>'}
                </button>

                {/* Menu Items */}
                <ul className="flex flex-col mt-8 w-full block overflow-hidden">
                    {links.map((link, index) => (
                        <li key={index} className="hover:bg-sky-600 cursor-pointer">
                            <Link to={link.path} className="flex p-4 items-center w-full block">
                                <i className={link.icon}></i>
                                {isOpen && <span className="pl-4">{link.name}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
