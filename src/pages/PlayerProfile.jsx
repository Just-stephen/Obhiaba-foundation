import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { players } from '../data/players';
import { Card, CardContent } from '../components/ui/card';

export default function PlayerProfile() {
  const { id } = useParams();
  const player = players.find(p => String(p.id) === id);
  if (!player) return <div className="container"><h2>Player not found</h2></div>;

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>{player.name}</h2>
        <Link to="/players" className="btn btn-secondary">Back to Players</Link>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          {player.image && <img src={player.image} className="img-fluid rounded" alt={player.name} />}
        </div>
        <div className="col-md-8">
          <Card>
            <CardContent>
              <p><strong>Position:</strong> {player.position}</p>
              <p><strong>Number:</strong> #{player.number}</p>
              <p>{player.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
