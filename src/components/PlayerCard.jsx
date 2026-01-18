import { Card, CardContent } from "./ui/card";

export default function PlayerCard({ player, onClick }) {
  return (
    <Card className="h-100 card-colorful" onClick={onClick}>
      {player.image && <img src={player.image} className="player-img" alt={player.name} />}
      <CardContent className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="h5 mb-0">#{player.number} {player.name}</h3>
          <span className="badge badge-accent">{player.position}</span>
        </div>
        <p className="text-muted small">{player.bio}</p>
      </CardContent>
    </Card>
  );
}
