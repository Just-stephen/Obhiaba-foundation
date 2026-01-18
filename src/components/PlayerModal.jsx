import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function PlayerModal({ player, onClose }) {
  if (!player) return null;

  return (
    <Card className="mt-4 card-colorful">
      <div className="d-flex p-3">
        {player.image && <img src={player.image} alt={player.name} className="me-3 rounded" style={{width:120,height:120,objectFit:'cover'}} />}
        <CardContent className="p-0">
          <h3 className="h5">{player.name} <span className="badge badge-accent ms-2">#{player.number}</span></h3>
          <p><strong>Position:</strong> {player.position}</p>
          <p className="text-muted">{player.bio}</p>
          <div className="mt-2"><Button onClick={onClose} variant="dark">Close</Button></div>
        </CardContent>
      </div>
    </Card>
  );
}
