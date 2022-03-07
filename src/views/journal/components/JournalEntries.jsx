import { useEffect, useState } from "react";
import { JournalEntry } from "./JournalEntry.jsx";

export const JournalEntries = ({ add }) => {
  const [entries, setEntries] = useState([2, 3, 4, 5, 6, 7]);

  useEffect(() => {
    setEntries(entries.concat(add));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [add]);
  return (
    <div className="journal__entries">
      {entries.map((entry, i) => (
        <JournalEntry key={i} />
      ))}
    </div>
  );
};
