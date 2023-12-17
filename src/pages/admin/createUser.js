import { React, useState } from "react";
import { Sidebar } from "../../components/admin/sidebar";
import CustomerForm from "../../components/admin/CustomerForm";

export const CreateUser = () => {
  const [menuState, setMenuState] = useState(false);

  const manageMenuState = () => {
    menuState ? setMenuState(false) : setMenuState(true);
  };

  return (
    <div>
      <Sidebar menuState={menuState} />
      <CustomerForm manageMenuState={manageMenuState} />
    </div>
  );
};
