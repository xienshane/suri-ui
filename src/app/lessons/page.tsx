"use client";

import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  LayoutGrid,
  Library,
  Lock,
  PencilLine,
  PlayCircle,
  Route,
  Settings,
  Sparkles,
} from "lucide-react";
import "./page.css";

// ── Data ──────────────────────────────────────────────────────────

const TOPICS = [
  {
    id: "quadratic",
    name: "Quadratic Equations",
    color: "blue",
    icon: "📐",
    status: "mastered",
    statusLabel: "Mastered",
    competencies: 6,
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
    competencies: 5,
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
    competencies: 7,
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
    competencies: 6,
    progress: 0,
    meta: "6 competencies · Complete previous topics",
  },
];

const ACTIVE_TOPIC = TOPICS[1]; // Rational Exponents (gap — most relevant)

const PREREQ_NODES = [
  {
    state: "done",
    label: "✓",
    name: "Integer Exponents",
    sub: "Grade 7 prerequisite",
    tag: "done",
    tagLabel: "Mastered",
  },
  {
    state: "done",
    label: "✓",
    name: "Laws of Exponents",
    sub: "Grade 8 prerequisite",
    tag: "done",
    tagLabel: "Mastered",
  },
  {
    state: "current",
    label: "→",
    name: "Rational Exponents",
    sub: "Grade 9 · Current gap",
    tag: "current",
    tagLabel: "In Remediation",
  },
  {
    state: "locked",
    label: "🔒",
    name: "Radical Expressions",
    sub: "Grade 9 · Unlock next",
    tag: "locked",
    tagLabel: "Locked",
  },
  {
    state: "locked",
    label: "🔒",
    name: "Solving Radical Equations",
    sub: "Grade 10 · Unlock next",
    tag: "locked",
    tagLabel: "Locked",
  },
];

const LESSONS = [
  {
    num: 1, numState: "done",
    name: "Review: Laws of Exponents",
    meta: "5 min · Prerequisite review",
    tag: "done", tagLabel: "Done",
    locked: false,
  },
  {
    num: 2, numState: "done",
    name: "What Is a Rational Exponent?",
    meta: "8 min · Introductory lesson",
    tag: "done", tagLabel: "Done",
    locked: false,
  },
  {
    num: 3, numState: "default",
    name: "Simplifying Rational Exponents",
    meta: "12 min · Worked examples",
    tag: "prereq", tagLabel: "Your Gap",
    locked: false,
  },
  {
    num: 4, numState: "default",
    name: "Practice: Fill-in-the-Blank Steps",
    meta: "10 min · Scaffolded practice",
    tag: "new", tagLabel: "Practice",
    locked: false,
  },
  {
    num: 5, numState: "default",
    name: "Diagnostic Quiz",
    meta: "8 min · Mastery check",
    tag: "quiz", tagLabel: "Quiz",
    locked: false,
  },
  {
    num: 6, numState: "locked",
    name: "Connecting to Radical Expressions",
    meta: "10 min · Unlocks after quiz",
    tag: "done", tagLabel: "Locked",
    locked: true,
  },
];

// ── Component ─────────────────────────────────────────────────────

export default function LearnPage() {
  return (
    <div className="learn">
      {/* ── Sidebar ── */}
      <aside className="learn__sidebar">
        <div className="learn__logo">
          <img alt="SURI" src="/SURI_white.png" />
        </div>
        <nav className="learn__nav">
          <button className="learn__nav-item" title="Home" type="button">
            <LayoutGrid className="icon" aria-hidden="true" />
          </button>
          <button className="learn__nav-item is-active" title="Learn" type="button">
            <BookOpen className="icon" aria-hidden="true" />
          </button>
          <button className="learn__nav-item" title="Practice" type="button">
            <PencilLine className="icon" aria-hidden="true" />
          </button>
          <button className="learn__nav-item" title="Assessments" type="button">
            <ClipboardCheck className="icon" aria-hidden="true" />
          </button>
          <button className="learn__nav-item" title="Library" type="button">
            <Library className="icon" aria-hidden="true" />
          </button>
        </nav>
        <div className="learn__sidebar-actions">
          <button className="learn__icon-button" title="Settings" type="button">
            <Settings className="icon" aria-hidden="true" />
          </button>
          <div className="learn__profile" title="Account">
            <img
              alt="Account avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9ce7PthfqH_ELoYbnoa-g6SrAbygVLmZCcnAQH8ACCSrOlvn_2_ghbS9W1Qqq6dfH-BX2uLOQ55wsgzRQSoUaPozMnnP79T3OAyNK1rLfPuiobGJTRPwCO7rd1EFTVo3japqZeY6MrfPTn5ED9vVAaJDVyCCyIMehIJPtRA_RI0Jr31Q27nVWLpXZ0Pthd5EgJ-_8f28YVOBRMVzl4Pba3EI4BtF95ilDk_WOaMzkIIT4M7-AUxb5Qwe-Zz5ghmLtEVAHvNGYNI"
            />
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="learn__main">
        <div className="learn__content">

          {/* Page header */}
          <div className="learn__header">
            <div className="learn__header-copy">
              <h2>
                <BookOpen
                  className="icon icon--md"
                  aria-hidden="true"
                  style={{ display: "inline", verticalAlign: "middle", marginRight: 8, color: "var(--primary)" }}
                />
                My Topics
              </h2>
              <p>
                Select a topic below to view your prerequisite path and start or continue a lesson.
              </p>
            </div>
            <div className="learn__header-actions">
              <button className="learn__primary-btn" type="button">
                <PlayCircle className="icon icon--sm" aria-hidden="true" />
                Continue Lesson
              </button>
              <button className="learn__ghost-btn" type="button">
                <Sparkles className="icon icon--sm" aria-hidden="true" />
                Take Diagnostic
              </button>
            </div>
          </div>

          {/* Topic cards */}
          <div className="learn__topics">
            {TOPICS.map((t) => (
              <div
                key={t.id}
                className={`learn__topic-card ${t.status === "locked" ? "is-locked" : ""} ${t.id === ACTIVE_TOPIC.id ? "is-active" : ""}`}
              >
                <div className={`topic-card__color-bar ${t.color}`}></div>
                <div className="topic-card__top">
                  <div className={`topic-card__icon ${t.color}`}>{t.icon}</div>
                  <span className={`topic-card__status-pill ${t.status}`}>{t.statusLabel}</span>
                </div>
                <p className="topic-card__name">{t.name}</p>
                <p className="topic-card__meta">{t.meta}</p>
                {t.progress > 0 && (
                  <div className="topic-card__progress-wrap">
                    <div className="topic-card__progress-labels">
                      <span>Progress</span>
                      <span>{t.progress}%</span>
                    </div>
                    <div className="topic-card__progress-bar">
                      <div
                        className={`topic-card__progress-fill ${t.color}`}
                        style={{ width: `${t.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active topic detail */}
          <div className="learn__detail">

            {/* Prereq path */}
            <div className="learn__card">
              <h3 className="learn__card-title">
                <Route className="icon icon--md" aria-hidden="true" />
                Prerequisite Path — {ACTIVE_TOPIC.name}
              </h3>
              <div className="prereq-path">
                {PREREQ_NODES.map((node) => (
                  <div className="prereq-node" key={node.name}>
                    <div className="prereq-node__dot-wrap">
                      <div className={`prereq-node__dot ${node.state}`}>
                        {node.state === "locked" ? (
                          <Lock style={{ width: 12, height: 12 }} />
                        ) : node.label}
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

            {/* CTA card */}
            <div className="learn__cta-card">
              <div className="learn__cta-eyebrow">
                <span className="learn__cta-eyebrow-dot"></span>
                Active Gap
              </div>
              <h3>Continue: Rational Exponents</h3>
              <p>
                SURI identified this competency as your current gap. Complete the
                scaffolded practice to advance your prerequisite path.
              </p>
              <div className="learn__cta-meta">
                <div className="learn__cta-row">
                  <Clock className="icon icon--sm" aria-hidden="true" />
                  <span>Estimated time</span>
                  <strong>~12 min</strong>
                </div>
                <div className="learn__cta-row">
                  <CheckCircle2 className="icon icon--sm" aria-hidden="true" />
                  <span>Mastery threshold</span>
                  <strong>70%</strong>
                </div>
                <div className="learn__cta-row">
                  <ClipboardCheck className="icon icon--sm" aria-hidden="true" />
                  <span>Format</span>
                  <strong>Fill-in-the-blank</strong>
                </div>
              </div>
              <button className="learn__cta-btn" type="button">
                <PlayCircle className="icon icon--sm" aria-hidden="true" />
                Start Remediation Lesson
              </button>
            </div>
          </div>

          {/* Lesson list */}
          <div className="learn__lessons">
            <h3 className="learn__lessons-title">
              <BookOpen
                className="icon icon--md"
                style={{ color: "var(--primary)" }}
                aria-hidden="true"
              />
              Lessons in This Topic
            </h3>
            <div className="learn__lesson-list">
              {LESSONS.map((lesson) => (
                <div
                  key={lesson.num}
                  className={`learn__lesson-item ${lesson.locked ? "is-locked" : ""} ${lesson.numState === "done" ? "is-done" : ""}`}
                >
                  <div className={`lesson-item__num ${lesson.numState}`}>
                    {lesson.numState === "done" ? "✓" : lesson.numState === "locked" ? <Lock style={{ width: 12, height: 12 }} /> : lesson.num}
                  </div>
                  <div className="lesson-item__body">
                    <div className="lesson-item__name">{lesson.name}</div>
                    <div className="lesson-item__meta">{lesson.meta}</div>
                  </div>
                  <div className="lesson-item__right">
                    <span className={`lesson-item__tag ${lesson.tag}`}>{lesson.tagLabel}</span>
                    {!lesson.locked && (
                      <PlayCircle
                        className="icon icon--sm"
                        style={{ color: "var(--outline)" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}