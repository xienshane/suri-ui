import React from 'react';
import Image from 'next/image';
import './globals.css';

export default function LandingPage() {
  return (
    <main className="suri-shell">
      {/* Decorative Background Blur */}
      <div className="bg-blur bg-blur-blue"></div>
      <div className="bg-blur bg-blur-green"></div>

      {/* App Window */}
      <div className="browser-frame">
        {/* Browser Top Bar */}
        <div className="browser-toolbar">
          <div className="browser-left">
            <span className="browser-dot red"></span>
            <span className="browser-dot yellow"></span>
            <span className="browser-dot green"></span>
          </div>

          <div className="browser-center">
            <span className="browser-url">www.suri.com</span>
          </div>

          <div className="browser-right">
            <span className="toolbar-icon">⤴</span>
            <span className="toolbar-icon">＋</span>
          </div>
        </div>

        {/* Navbar */}
        <nav className="suri-nav">
          <div className="logo-wrap">
            <Image
              src="/SURI.png"
              alt="SURI Logo"
              width={70}
              height={70}
              priority
            />
          </div>

          <div className="nav-links">
            <a href="#">Features</a>
            <a href="#">How It Works</a>
            <a href="#">Scope</a>
          </div>

          <div className="nav-actions">
            <button className="btn-outline">Log In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-left">
            <h1>
              Master Algebra with
              <br />
              Personalized Guidance
            </h1>

            <p>
              SURI is an intelligent, web-based platform that maps your unique
              learning gaps and builds a custom remediation path aligned with
              DepEd MELCs and Self-Learning Modules.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary large">
                Start Learning Now
              </button>

              <button className="btn-secondary large">
                Learn More
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="hero-right">
            <div className="dashboard-card">
              <div className="dashboard-top">
                <div className="dashboard-title">
                  <div className="mini-logo"></div>
                  <span>Student Dashboard</span>
                </div>

                <div className="dashboard-user"></div>
              </div>

              <div className="dashboard-body">
                <div className="node node-blue">
                  Quadratic
                  <br />
                  Equations
                </div>

                <div className="curve curve-blue"></div>

                <div className="node node-yellow">
                  Rational Exponents
                  <span>(Gap Identified)</span>
                </div>

                <div className="curve curve-yellow"></div>

                <div className="node node-green">Rational Equations</div>

                <div className="curve curve-pink"></div>

                <div className="node node-red">Radicals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="pipeline-section">
          <h2>SURI Learning Pipeline</h2>

          <div className="pipeline-grid">
            <div className="pipeline-card">
              <div className="badge blue">🎓</div>
              <h3>GO1</h3>
              <p>
                Learn more modules and training skills configurations.
              </p>
            </div>

            <div className="pipeline-card">
              <div className="badge pink">📕</div>
              <h3>GO2</h3>
              <p>
                Learn more educational concepts and experiences.
              </p>
            </div>

            <div className="pipeline-card">
              <div className="badge green">🟩</div>
              <h3>GO3</h3>
              <p>
                Learn more with math causes and personalized learning gaps.
              </p>
            </div>

            <div className="pipeline-card">
              <div className="badge orange">🟨</div>
              <h3>GO5</h3>
              <p>
                Learn more modern remediation systems and assisted math models.
              </p>
            </div>

            {/* Scope Box */}
            <div className="scope-box">
              <div className="scope-column">
                <h4>System Scope & Focus</h4>

                <div className="scope-item">
                  <strong>Target Audience & Topics</strong>
                  <p>Interaction Format</p>
                </div>

                
              </div>

              <div className="scope-column">
                <div className="scope-item">
                  <strong>Curriculum Alignment</strong>
                  <p>Verified and Focused</p>
                </div>

                <div className="scope-item">
                  <strong>Focus Models</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-banner">
            <div>
              <h2>Ready to close your math gaps?</h2>
              <p>
                SURI is an intelligent, web math platform that treats your
                unique gaps.
              </p>
            </div>

            <button className="btn-white">Launch Dashboard</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          Copyright 20221. All rights reserved.
        </footer>
      </div>
    </main>
  );
}