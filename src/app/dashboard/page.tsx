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
  PencilLine,
  PlayCircle,
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import "./dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <div className="dashboard__logo">
          <img alt="SURI" src="/SURI_white.png" />
        </div>
        <nav className="dashboard__nav">
          <button className="dashboard__nav-item is-active" title="[Home]" type="button">
            <LayoutGrid className="icon" aria-hidden="true" />
          </button>
          <button className="dashboard__nav-item" title="[Learn]" type="button">
            <BookOpen className="icon" aria-hidden="true" />
          </button>
          <button className="dashboard__nav-item" title="[Practice]" type="button">
            <PencilLine className="icon" aria-hidden="true" />
          </button>
          <button className="dashboard__nav-item" title="[Exams]" type="button">
            <ClipboardCheck className="icon" aria-hidden="true" />
          </button>
          <button className="dashboard__nav-item" title="[Library]" type="button">
            <Library className="icon" aria-hidden="true" />
          </button>
        </nav>
        <div className="dashboard__sidebar-actions">
          <button className="dashboard__icon-button" title="[Settings]" type="button">
            <Settings className="icon" aria-hidden="true" />
          </button>
          <div className="dashboard__profile" title="Account">
            <img
              alt="Account avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9ce7PthfqH_ELoYbnoa-g6SrAbygVLmZCcnAQH8ACCSrOlvn_2_ghbS9W1Qqq6dfH-BX2uLOQ55wsgzRQSoUaPozMnnP79T3OAyNK1rLfPuiobGJTRPwCO7rd1EFTVo3japqZeY6MrfPTn5ED9vVAaJDVyCCyIMehIJPtRA_RI0Jr31Q27nVWLpXZ0Pthd5EgJ-_8f28YVOBRMVzl4Pba3EI4BtF95ilDk_WOaMzkIIT4M7-AUxb5Qwe-Zz5ghmLtEVAHvNGYNI"
            />
          </div>
        </div>
      </aside>

      <main className="dashboard__main">
        <div className="dashboard__content dashboard__content--scroll">
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
                <p>
                  You're pacing ahead of [Grade Level] peers this week. Keep the
                  streak alive with [Daily Goal] minutes a day.
                </p>
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
                  <span className="dashboard__activity-icon is-success">
                    <CheckCircle2 className="icon" aria-hidden="true" />
                  </span>
                  <div>
                    <h4>Quiz: [Assessment Name]</h4>
                    <p>Completed with [Score %] • [Time Ago]</p>
                    <p>Focus: [Skill Focus] • Time spent: [Duration]</p>
                  </div>
                  <span className="dashboard__tag is-success">+150 XP</span>
                </div>
                <div className="dashboard__activity-item">
                  <span className="dashboard__activity-icon is-info">
                    <BookOpen className="icon" aria-hidden="true" />
                  </span>
                  <div>
                    <h4>Lesson: [Lesson Title]</h4>
                    <p>Watched [Duration] • [Time Ago]</p>
                    <p>Checkpoint: [Quiz Status]</p>
                  </div>
                  <span className="dashboard__tag is-info">Progress</span>
                </div>
                <div className="dashboard__activity-item">
                  <span className="dashboard__activity-icon is-warning">
                    <Trophy className="icon" aria-hidden="true" />
                  </span>
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
                  <img
                    alt="Algebra Mastery"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc76_N6TRoTpatW-p7PlQtmx_Q7bKrYI_dQ2bA46aEUNwK8x4AuM-B4Z_pHL6DKCVvv1KqyaUY9kU-UMkckTPxKcX1A4EsW2KQjn8kkrrRqu2EZZPVxPrTwtBCFDI7keoZ__qVIQMMMqfUXGLSalGLIcYZqsHGlc7MZi7Xzbjval6l_0KTwXvdOZ_a9AM7CNYh-3sVlbCTNZCAPue3wwDqS5u_rG1oKOqRezWES6X1ACfOLpLwD233BxVm9NtIjonbvEi6O8uY38Y"
                  />
                  <div>
                    <span>[Difficulty]</span>
                    <h4>[Recommendation Title]</h4>
                    <small>Estimated time: [Duration]</small>
                  </div>
                </div>
                <div className="dashboard__recommend-row">
                  <div>
                    <Calculator className="icon" aria-hidden="true" />
                  </div>
                  <div>
                    <span>[Skill Focus]</span>
                    <small>[Duration] • [Practice Count]</small>
                  </div>
                  <ChevronRight className="icon" aria-hidden="true" />
                </div>
              </div>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
}
