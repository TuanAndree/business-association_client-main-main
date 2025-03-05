import LastestHeader from './Header/LastestHeader';
import SideBar from './SideBar';
const LayoutAdmin = ({ children }) => {
    return (
        <div >
            <LastestHeader />
                {children}
        </div>
    );
};
export default LayoutAdmin;
