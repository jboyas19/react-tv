export default function EpisodeList({
  name,
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <section className="episodes">
      <h2>{name}</h2>

      <ol>
        {episodes.map((episode) => (
          <li
            key={episode.number}
            className={
              selectedEpisode?.number === episode.number ? "selected" : ""
            }
            onClick={() => setSelectedEpisode(episode)}
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}