import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar'

export default function Home() {
    return(
    <div className="bg-stone-200 flex px-8 py-5 w-full h-full gap-5">
        <Sidebar/>
        <MainPage num="2"/>
    </div>
    );
}