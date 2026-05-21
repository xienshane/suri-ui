import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="suri-shell">
      {/* Ambient Background */}
      <div className="bg-mesh"></div>
      <div className="bg-grain"></div>

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
            <div className="browser-url-bar">
              <span className="browser-lock">🔒</span>
              <span className="browser-url">www.suri.edu.ph</span>
            </div>
          </div>

          <div className="browser-right">
            <span className="toolbar-icon">↑</span>
            <span className="toolbar-icon">+</span>
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
            <a href="#features">Features</a>
            <a href="#pipeline">How It Works</a>
            <a href="#scope">Scope</a>
          </div>

          <div className="nav-actions">
            <Link className="btn-ghost" href="/login">
              Log In
            </Link>
            <Link className="btn-primary" href="/signup">
              Create Account →
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero-section" id="features">
          <div className="hero-left">
            <h1>
              Close Your<br />
              <span className="h1-accent">Algebra Gaps</span><br />
              Intelligently.
            </h1>

            <p>
              SURI diagnoses your exact learning gaps in Intermediate Algebra
              and builds a personalized remediation path — powered by DepEd
              Self-Learning Modules and adaptive scaffolding.
            </p>

            <div className="hero-buttons">
              <Link className="btn-primary large" href="/signup">
                Create an Account
              </Link>
              <Link className="btn-outline large" href="#pipeline">
                See How It Works
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>5</strong>
                <span>Topic Chains</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <strong>Step-by-Step</strong>
                <span>Adaptive Pipeline</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <strong>100%</strong>
                <span>MELC-Aligned</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="hero-right">
            <div className="dashboard-card">
              <div className="dashboard-top">
                <div className="dashboard-title">
                  <div className="mini-logo">
                    <Image src="/SURI.png" alt="SURI" width={40} height={40} />
                  </div>
                  <span>Student Dashboard</span>
                </div>
                <div className="dashboard-badge">Live</div>
              </div>

              <div className="dashboard-body">
                <div className="path-label">Your Learning Path</div>

                <div className="node node-blue">
                  Quadratic<br />Equations
                  <span className="node-status done">✓ Mastered</span>
                </div>

                <div className="curve curve-blue"></div>

                <div className="node node-yellow">
                  Rational Exponents
                  <span className="node-status gap">⚠ Gap Found</span>
                </div>

                <div className="curve curve-yellow"></div>

                <div className="node node-green">Rational Equations</div>

                <div className="curve curve-pink"></div>

                <div className="node node-red">Radicals</div>
              </div>

              <div className="dashboard-footer">
                <div className="progress-label">Topic Completion</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "42%" }}></div>
                </div>
                <span className="progress-pct">42%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="pipeline-section" id="pipeline">
          <div className="pipeline-header">
            <div className="section-eyebrow">How It Works</div>
            <h2>Your Path from Gap to Mastery</h2>
            <p>Four stages work together to identify, address, and close every learning gap.</p>
          </div>

          <div className="pipeline-grid">
            <div className="pipeline-card">
              <div className="badge blue">
                <span>①</span>
              </div>
              <h3>Pick Your Topic</h3>
              <p>
                Select an Intermediate Algebra topic. SURI gives you a short
                intro lesson, then runs a diagnostic to find exactly where
                your understanding breaks down.
              </p>
            </div>

            <div className="pipeline-card">
              <div className="badge pink">
                <span>②</span>
              </div>
              <h3>Get a Tailored Lesson</h3>
              <p>
                Based on your gap, SURI generates a personalized remediation
                lesson with worked examples drawn directly from DepEd
                curriculum materials.
              </p>
            </div>

            <div className="pipeline-card">
              <div className="badge green">
                <span>③</span>
              </div>
              <h3>Practice Step by Step</h3>
              <p>
                Work through fill-in-the-blank problems where every
                solution step is checked. SURI pinpoints the exact moment
                you go wrong — not just the final answer.
              </p>
            </div>

            <div className="pipeline-card">
              <div className="badge orange">
                <span>④</span>
              </div>
              <h3>Advance or Revisit</h3>
              <p>
                Hit the mastery threshold and move forward. Fall short and
                choose: drill deeper into prerequisites or go back to your
                specific misconception.
              </p>
            </div>

            {/* Scope Box */}
            <div className="scope-box" id="scope">
              <div className="scope-header">
                <div className="badge navy"><span>⑤</span></div>
                <h3>Your Progress, Always Saved</h3>
              </div>
              <div className="scope-columns">
                <div className="scope-column">
                  <div className="scope-item">
                    <strong>Target Audience</strong>
                    <p>Junior High School students in Grades 9 &amp; 10 studying Intermediate Algebra</p>
                  </div>
                  <div className="scope-item">
                    <strong>Topics Covered</strong>
                    <p>Quadratic Equations · Systems of Linear Equations · Rational Exponents &amp; Radicals · Polynomial Equations</p>
                  </div>
                </div>
                <div className="scope-column">
                  <div className="scope-item">
                    <strong>Curriculum Alignment</strong>
                    <p>DepEd MELCs and Self-Learning Modules, Grades 6–10 Mathematics</p>
                  </div>
                  <div className="scope-item">
                    <strong>Interaction Format</strong>
                    <p>Fill-in-the-blank scaffolding only · English-language content · No offline mode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-banner">
            <div className="cta-left">
              <div className="cta-eyebrow">Free to use · Create an account to track your progress</div>
              <h2>Ready to close your math gaps?</h2>
              <p>
                SURI maps your unique learning path through Intermediate Algebra —
                one competency at a time.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="btn-dark" href="/signup">
                Create an Account →
              </Link>
              <Link className="btn-cta-ghost" href="/login">
                Log In
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-logo">
              <Image src="/SURI.png" alt="SURI" width={60} height={60} />
            </div>
            <span>© 2026 SURI Project. All rights reserved.</span>
            <span>Intermediate Algebra · Grades 9 &amp; 10</span>
          </div>
        </footer>
      </div>
    </main>
  );
}