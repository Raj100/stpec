import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './features/Login/LoginSlice';
import adminReducer from './features/Admin/AdminSlice';
import facultyReducer from './features/Faculty/FacultySlice';
import sidebarReducer from './features/Sidebar/SidebarSlice';
import slidesSlice from './features/Slides/slidesSlice';
import departmentSlice from './features/Department/departmentSlice';
import announcementsSlice from './features/Announcement/announcement';
import newsSlice from './features/News/newsSlice';
import noticeboardSlice from "./features/NoticeBoard/NoticeBoardSlice" 
import tenderSlice from "./features/Tenders/tendersSlide"
import editFacultyByAdmin from "./features/EditFacultyByAdmin/EditFacultyByAdmin"
export const store = configureStore({
    reducer: {
        login: loginReducer,
        admin: adminReducer,
        faculty: facultyReducer,
        sidebar: sidebarReducer,
        slides: slidesSlice,
        department: departmentSlice,
        announcements: announcementsSlice,
        news: newsSlice,
        notices: noticeboardSlice,
        tender: tenderSlice,
        adminfacultyprofiles: editFacultyByAdmin,
    },
});

export default store; 
