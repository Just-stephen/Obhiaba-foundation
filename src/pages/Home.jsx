import { useState } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerModal from "../components/PlayerModal";
import SponsorCard from "../components/SponsorCard";
import { players } from "../data/players";
import { sponsors } from "../data/sponsors";
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className="container py-4">
      <section className="mb-4">
        <div className="p-4 rounded hero-gradient mainImage">
          <h1 className="display-6 text-white fw-bold">Obhiaba Foundation</h1>
          <p className="lead text-white-50">Welcome to the official site. Meet the squad and explore player profiles.</p>
          <Link to="/players" className="btn btn-dark">View Full Squad</Link>
        </div>
      </section>

      <section>
        <h2 className="mb-3">Players</h2>
        <div className="row">
          {players.map(p => (
            <div className="col-md-4 mb-3" key={p.id}>
              <PlayerCard player={p} onClick={() => setSelectedPlayer(p)} />
            </div>
          ))}
        </div>
        <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      </section>

      <section className="mt-4">
        <h2 className="mb-3">Sponsors</h2>
        <div className="row">
          {sponsors.map(s => (
            <div className="col-md-4 mb-3" key={s.id}>
              <SponsorCard sponsor={s} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
