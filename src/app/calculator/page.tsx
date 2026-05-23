"use client";

import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Loader2,
  RefreshCw,
  Sparkles,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import "./page.css";

// ── Types ─────────────────────────────────────────────────────────

interface MathStep {
  step: number;
  changeType: string;
  oldNode: string | null;
  newNode: string | null;
}

type StepState = "idle" | "correct" | "wrong" | "skipped";

interface UserStep {
  value: string;
  state: StepState;
}

// ── Sample problems aligned to SURI topics ────────────────────────

const SAMPLE_PROBLEMS = [
  { label: "Simplify",       expression: "2x + 3x"           },
  { label: "Simplify",       expression: "x^2 + 2x + x^2"   },
  { label: "Simplify",       expression: "4x - 2x + 6"       },
  { label: "Simplify",       expression: "3x^2 + 2x^2 - x"   },
];

// ── Helpers ───────────────────────────────────────────────────────

function formatChangeType(raw: string): string {
  return raw
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}

// ── Component ─────────────────────────────────────────────────────

export default function PracticePage() {
  // Expression input
  const [expression, setExpression]   = useState("");
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState<string | null>(null);

  // Solved steps from API
  const [steps, setSteps]             = useState<MathStep[]>([]);
  const [solvedExpr, setSolvedExpr]   = useState<string>("");

  // Per-step user answers
  const [userSteps, setUserSteps]     = useState<UserStep[]>([]);
  const [activeStep, setActiveStep]   = useState(0);

  // Score
  const [submitted, setSubmitted]     = useState(false);
  const inputRefs                     = useRef<(HTMLInputElement | null)[]>([]);

  // ── Fetch steps from API ──────────────────────────────────────

  async function handleSolve(expr?: string) {
    const target = (expr ?? expression).trim();
    if (!target) return;

    setLoading(true);
    setError(null);
    setSteps([]);
    setUserSteps([]);
    setActiveStep(0);
    setSubmitted(false);
    setSolvedExpr(target);

    try {
      const res = await fetch("/api/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: target }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error ?? "Something went wrong.");
        return;
      }

      if (!data.steps || data.steps.length === 0) {
        setError("No simplification steps found. Try a different expression.");
        return;
      }

      setSteps(data.steps);
      setUserSteps(data.steps.map(() => ({ value: "", state: "idle" as StepState })));

      // Focus first input after render
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch {
      setError("Could not reach the solver. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  }

  // ── Per-step answer check ─────────────────────────────────────

  function checkStep(index: number) {
    const step    = steps[index];
    const correct = step.newNode?.trim() ?? "";
    const answer  = userSteps[index].value.trim();

    const isCorrect = answer.replace(/\s/g, "") === correct.replace(/\s/g, "");

    setUserSteps((prev) =>
      prev.map((s, i) =>
        i === index ? { ...s, state: isCorrect ? "correct" : "wrong" } : s
      )
    );

    if (isCorrect && index + 1 < steps.length) {
      setActiveStep(index + 1);
      setTimeout(() => inputRefs.current[index + 1]?.focus(), 80);
    }
  }

  function skipStep(index: number) {
    setUserSteps((prev) =>
      prev.map((s, i) =>
        i === index ? { value: steps[index].newNode ?? "", state: "skipped" } : s
      )
    );
    if (index + 1 < steps.length) {
      setActiveStep(index + 1);
      setTimeout(() => inputRefs.current[index + 1]?.focus(), 80);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Enter") checkStep(index);
  }

  // ── Score ─────────────────────────────────────────────────────

  const correct  = userSteps.filter((s) => s.state === "correct").length;
  const wrong    = userSteps.filter((s) => s.state === "wrong").length;
  const skipped  = userSteps.filter((s) => s.state === "skipped").length;
  const score    = steps.length > 0 ? Math.round((correct / steps.length) * 100) : 0;
  const allDone  = steps.length > 0 && userSteps.every((s) => s.state !== "idle");

  function handleSubmit() {
    // Auto-mark remaining idle steps as wrong
    setUserSteps((prev) =>
      prev.map((s) => (s.state === "idle" ? { ...s, state: "wrong" } : s))
    );
    setSubmitted(true);
  }

  function handleReset() {
    setExpression("");
    setSteps([]);
    setUserSteps([]);
    setActiveStep(0);
    setSubmitted(false);
    setError(null);
    setSolvedExpr("");
  }

  // ── Render ────────────────────────────────────────────────────

  return (
    <div className="practice-view page-content">

      {/* ── Header ── */}
      <div className="practice-view__header">
        <div>
          <h2 className="practice-view__title">
            <Sparkles
              className="icon icon--md"
              aria-hidden="true"
              style={{ display: "inline", verticalAlign: "middle", marginRight: 8, color: "var(--primary)" }}
            />
            Scaffolded Practice
          </h2>
          <p className="practice-view__subtitle">
            Enter an algebra expression — SURI will solve it step-by-step and
            ask you to fill in each intermediate result.
          </p>
        </div>
      </div>

      {/* ── Input area ── */}
      <div className="practice-input-card">
        <div className="practice-input-card__top">
          <label className="practice-input-card__label" htmlFor="expr-input">
            Expression
          </label>
          <div className="practice-quick-picks">
            {SAMPLE_PROBLEMS.map((p) => (
              <button
                key={p.expression}
                className="practice-quick-pick"
                type="button"
                onClick={() => {
                  setExpression(p.expression);
                  handleSolve(p.expression);
                }}
              >
                {p.expression}
              </button>
            ))}
          </div>
        </div>

        <div className="practice-input-row">
          <input
            id="expr-input"
            className="practice-expr-input"
            type="text"
            placeholder="e.g. 2x + 3x  or  x^2 + 2x + x^2"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSolve()}
            disabled={loading}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            className="practice-solve-btn"
            type="button"
            onClick={() => handleSolve()}
            disabled={loading || !expression.trim()}
          >
            {loading ? (
              <Loader2 className="icon icon--sm practice-spin" aria-hidden="true" />
            ) : (
              <ChevronRight className="icon icon--sm" aria-hidden="true" />
            )}
            {loading ? "Solving…" : "Solve"}
          </button>
        </div>

        {error && (
          <div className="practice-error">
            <AlertCircle className="icon icon--sm" aria-hidden="true" />
            {error}
          </div>
        )}
      </div>

      {/* ── Steps scaffold ── */}
      {steps.length > 0 && (
        <div className="practice-scaffold">

          {/* Problem header */}
          <div className="practice-scaffold__header">
            <div className="practice-scaffold__expr">
              <span className="practice-scaffold__expr-label">Simplify:</span>
              <span className="practice-scaffold__expr-value">{solvedExpr}</span>
            </div>
            <div className="practice-scaffold__score-row">
              <span className="practice-scaffold__count">
                {correct}/{steps.length} correct
              </span>
              {submitted && (
                <span className={`practice-score-badge ${score >= 70 ? "pass" : "fail"}`}>
                  {score}% {score >= 70 ? "✓ Passed" : "✗ Try again"}
                </span>
              )}
            </div>
          </div>

          {/* Starting expression */}
          <div className="practice-step practice-step--origin">
            <div className="practice-step__num">Start</div>
            <div className="practice-step__body">
              <div className="practice-step__change">Original expression</div>
              <div className="practice-step__node">{solvedExpr}</div>
            </div>
          </div>

          {/* One scaffold row per step */}
          {steps.map((step, i) => {
            const us      = userSteps[i];
            const isActive = i === activeStep && !submitted;
            const isDone  = us?.state !== "idle";

            return (
              <div
                key={i}
                className={`practice-step ${isDone ? `is-${us.state}` : ""} ${isActive ? "is-active" : ""}`}
              >
                {/* Step number */}
                <div className="practice-step__num">
                  {us?.state === "correct" ? (
                    <CheckCircle2 className="icon icon--sm" style={{ color: "var(--tertiary)" }} />
                  ) : us?.state === "wrong" ? (
                    <X className="icon icon--sm" style={{ color: "var(--error)" }} />
                  ) : (
                    i + 1
                  )}
                </div>

                <div className="practice-step__body">
                  {/* Change type hint */}
                  <div className="practice-step__change">
                    {formatChangeType(step.changeType)}
                  </div>

                  {/* Previous node shown as reference */}
                  {step.oldNode && (
                    <div className="practice-step__old">
                      <span className="practice-step__arrow">→</span>
                      <span className="practice-step__old-val">{step.oldNode}</span>
                    </div>
                  )}

                  {/* Fill-in field or revealed answer */}
                  <div className="practice-step__input-row">
                    <span className="practice-step__equals">=</span>

                    {isDone ? (
                      /* Revealed answer */
                      <div className={`practice-step__revealed ${us.state}`}>
                        {step.newNode}
                        {us.state === "wrong" && us.value && (
                          <span className="practice-step__your-ans">
                            (you wrote: {us.value})
                          </span>
                        )}
                      </div>
                    ) : (
                      /* Input field */
                      <input
                        ref={(el) => { inputRefs.current[i] = el; }}
                        className={`practice-step__field ${isActive ? "is-focused" : ""}`}
                        type="text"
                        placeholder="Type your answer…"
                        value={us?.value ?? ""}
                        disabled={!isActive}
                        onChange={(e) =>
                          setUserSteps((prev) =>
                            prev.map((s, idx) =>
                              idx === i ? { ...s, value: e.target.value } : s
                            )
                          )
                        }
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        autoComplete="off"
                        spellCheck={false}
                      />
                    )}

                    {/* Step action buttons */}
                    {isActive && !isDone && (
                      <div className="practice-step__actions">
                        <button
                          className="practice-step__check-btn"
                          type="button"
                          onClick={() => checkStep(i)}
                          disabled={!us?.value.trim()}
                        >
                          Check
                        </button>
                        <button
                          className="practice-step__skip-btn"
                          type="button"
                          onClick={() => skipStep(i)}
                        >
                          Skip
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Submit / Reset bar */}
          <div className="practice-scaffold__footer">
            {!submitted ? (
              <button
                className="practice-submit-btn"
                type="button"
                onClick={handleSubmit}
                disabled={!allDone}
              >
                <CheckCircle2 className="icon icon--sm" aria-hidden="true" />
                Submit Practice
              </button>
            ) : (
              <div className="practice-result">
                <div className={`practice-result__score ${score >= 70 ? "pass" : "fail"}`}>
                  <span className="practice-result__pct">{score}%</span>
                  <span className="practice-result__label">
                    {score >= 70 ? "Passed — great work!" : "Below mastery threshold (70%)"}
                  </span>
                </div>
                <div className="practice-result__breakdown">
                  <span className="bd correct">✓ {correct} correct</span>
                  <span className="bd wrong">✗ {wrong} wrong</span>
                  <span className="bd skipped">↷ {skipped} skipped</span>
                </div>
                <button
                  className="practice-reset-btn"
                  type="button"
                  onClick={handleReset}
                >
                  <RefreshCw className="icon icon--sm" aria-hidden="true" />
                  Try Another
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Empty state ── */}
      {steps.length === 0 && !loading && !error && (
        <div className="practice-empty">
          <div className="practice-empty__icon">✏️</div>
          <h3>No problem loaded yet</h3>
          <p>
            Type an algebra expression above or pick a sample, then hit{" "}
            <strong>Solve</strong>. SURI will break it into steps for you to
            fill in one by one.
          </p>
        </div>
      )}

    </div>
  );
}