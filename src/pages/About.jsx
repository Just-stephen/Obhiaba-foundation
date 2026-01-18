import React from 'react';

export default function About() {
  return (
    <div className="container my-4">
      <h2>About Obhiaba</h2>
      <p className="lead">Obhiaba Foundation is a non-governmental, denominational, non-profit generating foundation with a great vision and idea that gives opportunity and privilege to individuals to give back to society.</p>
      
      <section className="mt-4">
        <h4>Our Mission</h4>
        <p>Our vision is to engage the youths of Esan through sports (football) and reduce crime rate in our society.</p>
      </section>

      <section className="mt-4">
        <h4>About Us</h4>
        <p>Obhiaba has been running seamlessly and unhindered since 2017, completing over 7 years of dedicated service to the community. We train young athletes, support local initiatives, and compete with pride.</p>
      </section>

      <section className="mt-4">
        <h4>Founders</h4>
        <ul>
          <li>Mr Osy Okoeguale</li>
          <li>Mr Lucky Oghinna</li>
        </ul>
      </section>

      <section className="mt-4">
        <h4>Office Address</h4>
        <address>
          64 Mission Road<br />
          Uromi<br />
          Edo State
        </address>
      </section>
    </div>
  );
}
