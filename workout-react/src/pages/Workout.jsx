import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup'

import {useState} from 'react';

export default function Home() {
    const [open, setOpen] = useState(true);
    return(
    <div className="bg-stone-200 flex px-8 py-5 w-full h-full gap-5">
        <Sidebar/>
        <MainPage num="1"/>

        <Popup></Popup>
    </div>
    );
}