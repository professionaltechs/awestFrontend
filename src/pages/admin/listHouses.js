import { React, useState } from 'react';
import { Sidebar } from '../../components/admin/sidebar';
import { HouseTable } from '../../components/admin/houseTable';

export const ListHouses = () => {
    const [menuState, setMenuState] = useState(false);

    const manageMenuState = () => {
        menuState ? setMenuState(false) : setMenuState(true)
    }

    return (
        <div>
            <Sidebar menuState={menuState} />
            <HouseTable manageMenuState={manageMenuState} />
        </div>
    )
}