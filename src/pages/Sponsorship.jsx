import React from 'react';
import { sponsors } from '../data/sponsors';
import SponsorCard from '../components/SponsorCard';

export default function Sponsorship() {
  return (
    <div className="container my-4">
      <h2>Sponsorship & Partners</h2>
      <p className="text-muted">Thank you to our partners who help us grow.</p>
      <div className="row mt-3">
        {sponsors.map(s => (
          <div className="col-md-4 mb-3" key={s.id}>
            <SponsorCard sponsor={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
