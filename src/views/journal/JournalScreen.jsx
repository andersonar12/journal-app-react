import { NothingSelected } from "./components/NothingSelected.jsx";
import { Sidebar } from "../../general-components/Sidebar.jsx";
import { NoteScreen } from "./components/NoteScreen.jsx";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content d-flex">
      <Sidebar />
      <main className="container-fluid">
        <div className="row">
          <div className="col p-0">
            {/* <NothingSelected /> */}
            <NoteScreen />
          </div>
        </div>
      </main>
    </div>
  );
};
