import React from 'react';

const sampleEvents = [
  { id: 1, title: 'Pre-season Friendly', date: '2026-07-12', location: 'Main Stadium' },
  { id: 2, title: 'Community Training Day', date: '2026-08-03', location: 'Training Ground' }
];

export default function Events() {
  return (
    <div className="container my-4">
      <h2>Events & Matches</h2>
      <div className="list-group mt-3">
        {sampleEvents.map(e => (
          <div key={e.id} className="list-group-item">
            <h5 className="mb-1">{e.title}</h5>
            <small className="text-muted">{e.date} — {e.location}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
