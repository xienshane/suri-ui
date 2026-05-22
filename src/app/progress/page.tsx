"use client";

import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Flame,
  Lock,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import "./page.css";

// ── Data ──────────────────────────────────────────────────────────

const OVERVIEW_STATS = [
  { label: "Overall Mastery", value: "42%",  sub: "Across all topics",         icon: TrendingUp, color: "blue"  },
  { label: "Day Streak",      value: "7",    sub: "Keep it going!",             icon: Flame,      color: "gold"  },
  { label: "XP Earned",       value: "1,340",sub: "This month",                icon: Zap,        color: "green" },
  { label: "Badges Earned",   value: "4",    sub: "Out of 12 available",        icon: Award,      color: "navy"  },
];

const TOPICS = [
  {
    name: "Quadratic Equations",
    color: "blue",
    status: "mastered",
    statusLabel: "Mastered",
    mastery: 100,
    competencies: 6,
    completedCompetencies: 6,
    timeSpent: "3h 12m",
    lastActivity: "2 days ago",
  },
  {
    name: "Rational Exponents & Radicals",
    color: "gold",
    status: "gap",
    statusLabel: "Gap Found",
    mastery: 40,
    competencies: 5,
    completedCompetencies: 2,
    timeSpent: "1h 44m",
    lastActivity: "Today",
  },
  {
    name: "Systems of Linear Equations",
    color: "green",
    status: "next",
    statusLabel: "Not Started",
    mastery: 0,
    competencies: 7,
    completedCompetencies: 0,
    timeSpent: "—",
    lastActivity: "—",
  },
  {
    name: "Polynomial Equations",
    color: "red",
    status: "locked",
    statusLabel: "Locked",
    mastery: 0,
    competencies: 6,
    completedCompetencies: 0,
    timeSpent: "—",
    lastActivity: "—",
  },
];

const RECENT_SESSIONS = [
  {
    topic: "Rational Exponents",
    type: "Practice",
    score: 52,
    pass: false,
    steps: "3 / 6 correct",
    duration: "14 min",
    ago: "Today, 9:41 AM",
    icon: "⚠️",
    iconColor: "gold",
  },
  {
    topic: "Quadratic Equations",
    type: "Diagnostic",
    score: 88,
    pass: true,
    steps: "All steps correct",
    duration: "12 min",
    ago: "Yesterday, 3:15 PM",
    icon: "✅",
    iconColor: "green",
  },
  {
    topic: "Laws of Exponents",
    type: "Remediation",
    score: 76,
    pass: true,
    steps: "5 / 6 correct",
    duration: "10 min",
    ago: "2 days ago",
    icon: "📘",
    iconColor: "blue",
  },
  {
    topic: "Quadratic Equations",
    type: "Practice",
    score: 64,
    pass: false,
    steps: "4 / 6 correct",
    duration: "9 min",
    ago: "3 days ago",
    icon: "📝",
    iconColor: "red",
  },
];

const BADGES = [
  { label: "First Mastery",    sub: "Master your first topic",    earned: true,  icon: "🏅" },
  { label: "7-Day Streak",     sub: "Study 7 days in a row",      earned: true,  icon: "🔥" },
  { label: "Perfect Practice", sub: "Score 100% on a practice",   earned: true,  icon: "⭐" },
  { label: "Gap Crusher",      sub: "Resolve an identified gap",  earned: true,  icon: "💥" },
  { label: "Speed Solver",     sub: "Finish a session < 8 min",   earned: false, icon: "⚡" },
  { label: "Chain Breaker",    sub: "Complete 2 topics in a day", earned: false, icon: "🔗" },
];

// Weekly activity — 7 days, each with a height % (0–100)
const WEEKLY = [
  { day: "Mon", pct: 80, min: 38 },
  { day: "Tue", pct: 55, min: 26 },
  { day: "Wed", pct: 95, min: 44 },
  { day: "Thu", pct: 30, min: 14 },
  { day: "Fri", pct: 70, min: 33 },
  { day: "Sat", pct: 45, min: 21 },
  { day: "Sun", pct: 20, min: 9  },
];

// ── Component ─────────────────────────────────────────────────────

export default function ProgressPage() {
  return (
    <div className="progress-view page-content">

      {/* ── Page header ── */}
      <div className="progress-view__header">
        <div>
          <h2 className="progress-view__title">
            <TrendingUp
              className="icon icon--md"
              aria-hidden="true"
              style={{ display: "inline", verticalAlign: "middle", marginRight: 8, color: "var(--primary)" }}
            />
            My Progress
          </h2>
          <p className="progress-view__subtitle">
            Track your mastery, session history, and earned achievements across all topics.
          </p>
        </div>
      </div>

      {/* ── Overview stat cards ── */}
      <div className="progress-view__overview">
        {OVERVIEW_STATS.map((s) => (
          <div key={s.label} className={`progress-stat-card progress-stat-card--${s.color}`}>
            <div className="progress-stat-card__icon">
              <s.icon className="icon icon--md" aria-hidden="true" />
            </div>
            <div className="progress-stat-card__value">{s.value}</div>
            <div className="progress-stat-card__label">{s.label}</div>
            <div className="progress-stat-card__sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Middle row: topic breakdown + weekly activity ── */}
      <div className="progress-view__mid">

        {/* Topic breakdown */}
        <div className="dashboard__card progress-view__topics-card">
          <h3 className="dashboard__section-title" style={{ marginBottom: 20 }}>
            <BookOpen className="icon icon--md" aria-hidden="true" />
            Topic Breakdown
          </h3>

          <div className="progress-topic-list">
            {TOPICS.map((t) => (
              <div key={t.name} className={`progress-topic-row ${t.status === "locked" ? "is-locked" : ""}`}>
                <div className="progress-topic-row__left">
                  <div className={`progress-topic-row__dot ${t.color}`}></div>
                  <div>
                    <div className="progress-topic-row__name">{t.name}</div>
                    <div className="progress-topic-row__meta">
                      {t.completedCompetencies}/{t.competencies} competencies · {t.timeSpent}
                    </div>
                  </div>
                </div>

                <div className="progress-topic-row__right">
                  <div className="progress-topic-row__bar-wrap">
                    <div className="progress-topic-row__bar">
                      <div
                        className={`progress-topic-row__fill ${t.color}`}
                        style={{ width: `${t.mastery}%` }}
                      ></div>
                    </div>
                    <span className="progress-topic-row__pct">{t.mastery}%</span>
                  </div>
                  <span className={`progress-topic-row__pill ${t.status}`}>
                    {t.status === "locked" && <Lock style={{ width: 9, height: 9 }} />}
                    {t.statusLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly activity chart */}
        <div className="dashboard__card progress-view__weekly-card">
          <div className="progress-weekly__header">
            <h3 className="dashboard__section-title">
              <Flame className="icon icon--md" aria-hidden="true" />
              Weekly Activity
            </h3>
            <span className="progress-weekly__range">This week</span>
          </div>

          <div className="progress-weekly__total">
            <span className="progress-weekly__total-value">3 hr 25 min</span>
            <span className="progress-weekly__total-label">Total study time</span>
          </div>

          <div className="progress-weekly__chart">
            {WEEKLY.map((d) => (
              <div key={d.day} className="progress-bar-col">
                <div className="progress-bar-col__track">
                  <div
                    className="progress-bar-col__fill"
                    style={{ height: `${d.pct}%` }}
                    title={`${d.min} min`}
                  ></div>
                </div>
                <span className="progress-bar-col__label">{d.day}</span>
              </div>
            ))}
          </div>

          <div className="progress-weekly__streak">
            <Flame className="icon icon--sm" style={{ color: "#f59e0b" }} aria-hidden="true" />
            <span><strong>7-day streak</strong> — don't break it!</span>
          </div>
        </div>
      </div>

      {/* ── Bottom row: session history + badges ── */}
      <div className="progress-view__bottom">

        {/* Session history */}
        <div className="dashboard__card progress-view__sessions-card">
          <div className="dashboard__card-heading">
            <h3 className="dashboard__section-title">
              <CheckCircle2 className="icon icon--md" aria-hidden="true" />
              Recent Sessions
            </h3>
            <button type="button">
              View all
              <ChevronRight className="icon icon--sm" aria-hidden="true" />
            </button>
          </div>

          <div className="dashboard__activity-list">
            {RECENT_SESSIONS.map((s, i) => (
              <div key={i} className="dashboard__activity-item">
                <span className={`dashboard__activity-icon is-${s.iconColor === "green" ? "success" : s.iconColor === "gold" ? "warning" : "info"}`}>
                  <span style={{ fontSize: 18 }}>{s.icon}</span>
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4>{s.type}: {s.topic}</h4>
                  <p>{s.steps} · {s.duration}</p>
                  <p>{s.ago}</p>
                </div>
                <span className={`dashboard__tag ${s.pass ? "is-success" : "is-warning"}`}>
                  {s.score}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="dashboard__card progress-view__badges-card">
          <h3 className="dashboard__section-title" style={{ marginBottom: 20 }}>
            <Star className="icon icon--md" aria-hidden="true" />
            Achievements
          </h3>

          <div className="progress-badges">
            {BADGES.map((b) => (
              <div key={b.label} className={`progress-badge ${b.earned ? "is-earned" : "is-locked"}`}>
                <div className="progress-badge__icon">{b.icon}</div>
                <div className="progress-badge__label">{b.label}</div>
                <div className="progress-badge__sub">{b.sub}</div>
                {!b.earned && (
                  <div className="progress-badge__lock">
                    <Lock style={{ width: 10, height: 10 }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="progress-badges__footer">
            <Target className="icon icon--sm" style={{ color: "var(--primary)" }} aria-hidden="true" />
            <span>4 of 12 badges earned · <strong>8 remaining</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}