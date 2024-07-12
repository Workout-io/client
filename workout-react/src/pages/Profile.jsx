import ProfilePage from '../components/ProfilePage';
import Sidebar from '../components/Sidebar'

export default function Home() {
    return(
    <div className="bg-stone-200 flex px-8 py-5 w-full h-full gap-5">
        <Sidebar/>
        <ProfilePage num="2"/>
    </div>
    );
}