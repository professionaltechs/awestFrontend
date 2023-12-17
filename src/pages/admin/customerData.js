import { React, useState } from "react";
import { Sidebar } from "../../components/admin/sidebar";
import CustomerList from "../../components/admin/CustomerList";

export const CustomerData = () => {
  const [menuState, setMenuState] = useState(false);

  const manageMenuState = () => {
    menuState ? setMenuState(false) : setMenuState(true);
  };

  return (
    <div>
      <Sidebar menuState={menuState} />
      <CustomerList manageMenuState={manageMenuState} />
    </div>
  );
};
