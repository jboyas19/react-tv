export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          href="#"
          className={`show ${
            selectedShow?.name === show.name ? "selected" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}