import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JournalEntries } from "../views/journal/components/JournalEntries.jsx";

export const Sidebar = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/auth/login");
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar d-flex justify-content-between mt-2">
        <h3 className="">
          <i className="far fa-user"></i>
          <span className="ml-3">Anderson</span>
        </h3>

        <button className="btn btn-dark" onClick={() => logout()}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={() => setValue(value + 1)}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p>New entry</p>
      </div>

      <JournalEntries add={value} />
    </aside>
  );
};
