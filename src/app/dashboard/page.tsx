"use client";

import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  History,
  LayoutGrid,
  Library,
  Lock,
  PencilLine,
  PlayCircle,
  Route,
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import "./dashboard.css";

// ── Learn page data ───────────────────────────────────────────────

const TOPICS = [
  {
    id: "quadratic",
    name: "Quadratic Equations",
    color: "blue",
    icon: "📐",
    status: "mastered",
    statusLabel: "Mastered",
    progress: 100,
    meta: "6 competencies · Completed",
  },
  {
    id: "rational-exp",
    name: "Rational Exponents & Radicals",
    color: "gold",
    icon: "⚠️",
    status: "gap",
    statusLabel: "Gap Found",
    progress: 40,
    meta: "5 competencies · In remediation",
  },
  {
    id: "linear",
    name: "Systems of Linear Equations",
    color: "green",
    icon: "📊",
    status: "next",
    statusLabel: "Next Up",
    progress: 0,
    meta: "7 competencies · Not started",
  },
  {
    id: "polynomial",
    name: "Polynomial Equations",
    color: "red",
    icon: "🔒",
    status: "locked",
    statusLabel: "Locked",
    progress: 0,
    meta: "6 competencies · Complete previous topics",
  },
];

const PREREQ_NODES = [
  { state: "done",    label: "✓",  name: "Integer Exponents",        sub: "Grade 7 prerequisite",  tag: "done",    tagLabel: "Mastered" },
  { state: "done",    label: "✓",  name: "Laws of Exponents",         sub: "Grade 8 prerequisite",  tag: "done",    tagLabel: "Mastered" },
  { state: "current", label: "→",  name: "Rational Exponents",        sub: "Grade 9 · Current gap", tag: "current", tagLabel: "In Remediation" },
  { state: "locked",  label: "🔒", name: "Radical Expressions",       sub: "Grade 9 · Unlock next", tag: "locked",  tagLabel: "Locked" },
  { state: "locked",  label: "🔒", name: "Solving Radical Equations",  sub: "Grade 10 · Unlock next",tag: "locked",  tagLabel: "Locked" },
];

const LESSONS = [
  { num: 1, numState: "done",    name: "Review: Laws of Exponents",         meta: "5 min · Prerequisite review",   tag: "done",   tagLabel: "Done",      locked: false },
  { num: 2, numState: "done",    name: "What Is a Rational Exponent?",       meta: "8 min · Introductory lesson",   tag: "done",   tagLabel: "Done",      locked: false },
  { num: 3, numState: "default", name: "Simplifying Rational Exponents",     meta: "12 min · Worked examples",      tag: "prereq", tagLabel: "Your Gap",  locked: false },
  { num: 4, numState: "default", name: "Practice: Fill-in-the-Blank Steps",  meta: "10 min · Scaffolded practice",  tag: "new",    tagLabel: "Practice",  locked: false },
  { num: 5, numState: "default", name: "Diagnostic Quiz",                    meta: "8 min · Mastery check",         tag: "quiz",   tagLabel: "Quiz",      locked: false },
  { num: 6, numState: "locked",  name: "Connecting to Radical Expressions",  meta: "10 min · Unlocks after quiz",   tag: "done",   tagLabel: "Locked",    locked: true  },
];

// ── Nav config ────────────────────────────────────────────────────

type View = "home" | "learn" | "practice" | "exams" | "library" | "settings";

const NAV: { id: View; icon: React.ElementType; label: string }[] = [
  { id: "home",     icon: LayoutGrid,    label: "Home" },
  { id: "learn",    icon: BookOpen,      label: "Learn" },
  { id: "practice", icon: PencilLine,    label: "Practice" },
  { id: "exams",    icon: ClipboardCheck,label: "Assessments" },
  { id: "library",  icon: Library,       label: "Library" },
];

// ── Placeholder views ─────────────────────────────────────────────

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="dashboard__coming-soon">
      <div className="dashboard__coming-soon-icon">🚧</div>
      <h3>{label}</h3>
      <p>This section is under construction and will be available soon.</p>
    </div>
  );
}

// ── Learn view ────────────────────────────────────────────────────

function LearnView() {
  return (
    <div className="learn-view">
      {/* Header */}
      <div className="learn-view__header">
        <div>
          <h2 className="learn-view__title">
            <BookOpen className="icon icon--md" aria-hidden="true" style={{ display:"inline", verticalAlign:"middle", marginRight:8, color:"var(--primary)" }} />
            My Topics
          </h2>
          <p className="learn-view__subtitle">Select a topic to view your prerequisite path and continue a lesson.</p>
        </div>
        <div className="learn-view__actions">
          <button className="dashboard__primary-button" type="button">
            <PlayCircle className="icon icon--md" aria-hidden="true" />
            Continue Lesson
          </button>
          <button className="dashboard__secondary-button" type="button">
            <Sparkles className="icon icon--md" aria-hidden="true" />
            Take Diagnostic
          </button>
        </div>
      </div>

      {/* Topic cards */}
      <div className="learn-view__topics">
        {TOPICS.map((t) => (
          <div
            key={t.id}
            className={`learn-topic-card ${t.status === "locked" ? "is-locked" : ""} ${t.id === "rational-exp" ? "is-active" : ""}`}
          >
            <div className={`learn-topic-card__bar ${t.color}`}></div>
            <div className="learn-topic-card__top">
              <div className={`learn-topic-card__icon ${t.color}`}>{t.icon}</div>
              <span className={`learn-topic-card__pill ${t.status}`}>{t.statusLabel}</span>
            </div>
            <p className="learn-topic-card__name">{t.name}</p>
            <p className="learn-topic-card__meta">{t.meta}</p>
            {t.progress > 0 && (
              <div className="learn-topic-card__progress-wrap">
                <div className="learn-topic-card__progress-labels">
                  <span>Progress</span><span>{t.progress}%</span>
                </div>
                <div className="learn-topic-card__progress-bar">
                  <div className={`learn-topic-card__progress-fill ${t.color}`} style={{ width: `${t.progress}%` }}></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detail grid */}
      <div className="learn-view__detail">
        {/* Prereq path */}
        <div className="dashboard__card learn-view__path-card">
          <h3 className="dashboard__section-title" style={{ marginBottom: 18 }}>
            <Route className="icon icon--md" aria-hidden="true" />
            Prerequisite Path — Rational Exponents &amp; Radicals
          </h3>
          <div className="prereq-path">
            {PREREQ_NODES.map((node) => (
              <div className="prereq-node" key={node.name}>
                <div className="prereq-node__dot-wrap">
                  <div className={`prereq-node__dot ${node.state}`}>
                    {node.state === "locked" ? <Lock style={{ width:12, height:12 }} /> : node.label}
                  </div>
                </div>
                <div className="prereq-node__body">
                  <div className="prereq-node__name">{node.name}</div>
                  <div className="prereq-node__sub">{node.sub}</div>
                  <span className={`prereq-node__tag ${node.tag}`}>{node.tagLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="learn-view__cta-card">
          <div className="learn-view__cta-eyebrow">
            <span className="learn-view__cta-dot"></span>
            Active Gap
          </div>
          <h3>Continue: Rational Exponents</h3>
          <p>SURI identified this competency as your current gap. Complete the scaffolded practice to advance.</p>
          <div className="learn-view__cta-meta">
            <div className="learn-view__cta-row"><Clock className="icon icon--sm" /><span>Estimated time</span><strong>~12 min</strong></div>
            <div className="learn-view__cta-row"><CheckCircle2 className="icon icon--sm" /><span>Mastery threshold</span><strong>70%</strong></div>
            <div className="learn-view__cta-row"><ClipboardCheck className="icon icon--sm" /><span>Format</span><strong>Fill-in-the-blank</strong></div>
          </div>
          <button className="learn-view__cta-btn" type="button">
            <PlayCircle className="icon icon--sm" />
            Start Remediation Lesson
          </button>
        </div>
      </div>

      {/* Lesson list */}
      <div className="learn-view__lessons">
        <h3 className="dashboard__section-title" style={{ marginBottom: 14 }}>
          <BookOpen className="icon icon--md" style={{ color:"var(--primary)" }} aria-hidden="true" />
          Lessons in This Topic
        </h3>
        <div className="learn-view__lesson-list">
          {LESSONS.map((lesson) => (
            <div key={lesson.num} className={`learn-lesson-item ${lesson.locked ? "is-locked" : ""} ${lesson.numState === "done" ? "is-done" : ""}`}>
              <div className={`learn-lesson-item__num ${lesson.numState}`}>
                {lesson.numState === "done" ? "✓" : lesson.numState === "locked" ? <Lock style={{ width:12, height:12 }} /> : lesson.num}
              </div>
              <div className="learn-lesson-item__body">
                <div className="learn-lesson-item__name">{lesson.name}</div>
                <div className="learn-lesson-item__meta">{lesson.meta}</div>
              </div>
              <div className="learn-lesson-item__right">
                <span className={`learn-lesson-item__tag ${lesson.tag}`}>{lesson.tagLabel}</span>
                {!lesson.locked && <PlayCircle className="icon icon--sm" style={{ color:"var(--outline)" }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Home view (original dashboard content) ────────────────────────

function HomeView() {
  return (
    <>
      <section className="dashboard__welcome">
        <div className="dashboard__welcome-copy">
          <h2>Welcome back, [User]! 👋</h2>
        </div>
        <div className="dashboard__welcome-actions">
          <button className="dashboard__primary-button" type="button">
            <PlayCircle className="icon icon--md" aria-hidden="true" />
            Resume [Lesson]
          </button>
          <button className="dashboard__secondary-button" type="button">
            <Star className="icon icon--md" aria-hidden="true" />
            Daily [Challenge]
          </button>
        </div>
      </section>

      <section className="dashboard__grid">
        <div className="dashboard__card dashboard__card--primary">
          <div>
            <span className="dashboard__eyebrow">
              <TrendingUp className="icon icon--sm" aria-hidden="true" />
              Overall Mastery
            </span>
            <h3>[Mastery %]</h3>
            <p>You're pacing ahead of [Grade Level] peers this week. Keep the streak alive with [Daily Goal] minutes a day.</p>
          </div>
          <div className="dashboard__progress">
            <div>
              <span>Target: [Goal %] by [Milestone]</span>
              <span>[Delta %] to go</span>
            </div>
            <div className="dashboard__progress-bar">
              <span style={{ width: "78%" }} />
            </div>
          </div>
          <span className="dashboard__glow" />
        </div>

        <div className="dashboard__card dashboard__card--secondary">
          <div>
            <div className="dashboard__card-header">
              <Clock className="icon icon--md" aria-hidden="true" />
              <span>Last [Time Window]</span>
            </div>
            <h3>[Time Spent]</h3>
            <p>Total focus time. Up [Change %] from last week.</p>
            <p>Best day: [Best Day] • Peak hour: [Peak Hour]</p>
          </div>
          <div className="dashboard__stat-grid">
            <div>
              <span>Problems</span>
              <strong>[Count]</strong>
              <small>[Trend]</small>
            </div>
            <div>
              <span>Accuracy</span>
              <strong>[Rate %]</strong>
              <small>[Since Last]</small>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard__grid dashboard__grid--bottom">
        <div className="dashboard__card dashboard__card--activity">
          <div className="dashboard__card-heading">
            <h3 className="dashboard__section-title">
              <History className="icon icon--md" aria-hidden="true" />
              Recent Activity
            </h3>
            <button type="button">
              View [History]
              <ArrowRight className="icon icon--sm" aria-hidden="true" />
            </button>
          </div>
          <div className="dashboard__activity-list">
            <div className="dashboard__activity-item">
              <span className="dashboard__activity-icon is-success"><CheckCircle2 className="icon" aria-hidden="true" /></span>
              <div>
                <h4>Quiz: [Assessment Name]</h4>
                <p>Completed with [Score %] • [Time Ago]</p>
                <p>Focus: [Skill Focus] • Time spent: [Duration]</p>
              </div>
              <span className="dashboard__tag is-success">+150 XP</span>
            </div>
            <div className="dashboard__activity-item">
              <span className="dashboard__activity-icon is-info"><BookOpen className="icon" aria-hidden="true" /></span>
              <div>
                <h4>Lesson: [Lesson Title]</h4>
                <p>Watched [Duration] • [Time Ago]</p>
                <p>Checkpoint: [Quiz Status]</p>
              </div>
              <span className="dashboard__tag is-info">Progress</span>
            </div>
            <div className="dashboard__activity-item">
              <span className="dashboard__activity-icon is-warning"><Trophy className="icon" aria-hidden="true" /></span>
              <div>
                <h4>Achievement Unlocked</h4>
                <p>"[Badge Name]" - [Streak] day streak</p>
                <p>Reward: [Reward]</p>
              </div>
              <span className="dashboard__tag is-warning">Badge</span>
            </div>
          </div>
        </div>

        <div className="dashboard__card dashboard__card--recommend">
          <h3 className="dashboard__section-title">
            <Sparkles className="icon icon--md" aria-hidden="true" />
            Recommended for You
          </h3>
          <div className="dashboard__recommend">
            <div className="dashboard__recommend-hero">
              <img alt="Algebra Mastery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc76_N6TRoTpatW-p7PlQtmx_Q7bKrYI_dQ2bA46aEUNwK8x4AuM-B4Z_pHL6DKCVvv1KqyaUY9kU-UMkckTPxKcX1A4EsW2KQjn8kkrrRqu2EZZPVxPrTwtBCFDI7keoZ__qVIQMMMqfUXGLSalGLIcYZqsHGlc7MZi7Xzbjval6l_0KTwXvdOZ_a9AM7CNYh-3sVlbCTNZCAPue3wwDqS5u_rG1oKOqRezWES6X1ACfOLpLwD233BxVm9NtIjonbvEi6O8uY38Y" />
              <div>
                <span>[Difficulty]</span>
                <h4>[Recommendation Title]</h4>
                <small>Estimated time: [Duration]</small>
              </div>
            </div>
            <div className="dashboard__recommend-row">
              <div><Calculator className="icon" aria-hidden="true" /></div>
              <div>
                <span>[Skill Focus]</span>
                <small>[Duration] • [Practice Count]</small>
              </div>
              <ChevronRight className="icon" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Root component ────────────────────────────────────────────────

export default function DashboardPage() {
  const [view, setView] = useState<View>("home");

  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <div className="dashboard__logo">
          <img alt="SURI" src="/SURI_white.png" />
        </div>
        <nav className="dashboard__nav">
          {NAV.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`dashboard__nav-item ${view === id ? "is-active" : ""}`}
              title={label}
              type="button"
              onClick={() => setView(id)}
            >
              <Icon className="icon" aria-hidden="true" />
            </button>
          ))}
        </nav>
        <div className="dashboard__sidebar-actions">
          <button
            className={`dashboard__icon-button ${view === "settings" ? "is-active" : ""}`}
            title="Settings"
            type="button"
            onClick={() => setView("settings")}
          >
            <Settings className="icon" aria-hidden="true" />
          </button>
        </div>
      </aside>

      <main className="dashboard__main">
        <div className="dashboard__content dashboard__content--scroll">
          {view === "home"     && <HomeView />}
          {view === "learn"    && <LearnView />}
          {view === "practice" && <ComingSoon label="Practice" />}
          {view === "exams"    && <ComingSoon label="Assessments" />}
          {view === "library"  && <ComingSoon label="Library" />}
          {view === "settings" && <SettingsView />}
        </div>
      </main>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="settings-view">
      <header className="settings-view__header">
        <p className="settings-view__eyebrow">Settings</p>
        <h2>Account Settings</h2>
        <p>Manage your profile, security, and learning preferences.</p>
      </header>

      <div className="settings-view__grid">
        <section className="settings-view__card">
          <div>
            <h3>Profile</h3>
            <p>Update your name, email, and student details.</p>
          </div>
          <button type="button">Edit Profile</button>
        </section>

        <section className="settings-view__card">
          <div>
            <h3>Security</h3>
            <p>Change your password and manage devices.</p>
          </div>
          <button type="button">Update Password</button>
        </section>

        <section className="settings-view__card">
          <div>
            <h3>Notifications</h3>
            <p>Control reminders, weekly summaries, and tips.</p>
          </div>
          <button type="button">Manage Alerts</button>
        </section>
      </div>
    </div>
  );
}
