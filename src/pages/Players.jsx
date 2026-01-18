import React from 'react';
import { players } from '../data/players';
import PlayerCard from '../components/PlayerCard';
import { Link } from 'react-router-dom';

export default function Players() {
  return (
    <div className="container">
      <h2 className="my-4">Team Roster</h2>
      <div className="row">
        {players.map(player => (
          <div className="col-md-4 mb-3" key={player.id}>
            <Link to={`/players/${player.id}`} className="text-decoration-none text-dark">
              <PlayerCard player={player} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
