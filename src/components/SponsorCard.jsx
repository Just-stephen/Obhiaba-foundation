import { Card, CardContent } from "./ui/card";

export default function SponsorCard({ sponsor }) {
  return (
    <Card className="card-colorful text-center">
      <CardContent className="p-3">
        <h3 className="h6 fw-bold">{sponsor.name}</h3>
        <div className="mt-2"><span className="badge bg-secondary text-white">{sponsor.level}</span></div>
      </CardContent>
    </Card>
  );
}
