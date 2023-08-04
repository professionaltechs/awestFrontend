import { React, useState } from 'react';
import { Sidebar } from '../../components/admin/sidebar';
import { HouseForm } from '../../components/admin/houseForm';

export const Dashboard = () => {
    const [menuState, setMenuState] = useState(false);

    const manageMenuState = () => {
        menuState ? setMenuState(false) : setMenuState(true)
    }

    return (
        <div>
            <Sidebar menuState={menuState} />
            <HouseForm manageMenuState={manageMenuState} />
        </div>
    )
}