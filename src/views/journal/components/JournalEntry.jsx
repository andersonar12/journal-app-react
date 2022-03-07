export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage: `url(${require("assets/images/dark-sky.png")})`,
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Actividades por hacer</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>24</h4>
      </div>
    </div>
  );
};
