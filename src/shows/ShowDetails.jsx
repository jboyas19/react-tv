import { useEffect, useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(
    show ? show.episodes[5] : null
  );

  useEffect(() => {
    setSelectedEpisode(show ? show.episodes[5] : null);
  }, [show]);

  if (!show) {
    return <p>Please select a show.</p>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}