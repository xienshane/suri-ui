"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./page.css";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const toggleAuth = () => {
    setIsAnimating(true);
    setIsLogin((prev) => !prev);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 140);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="login-page">
      <main className="login-main">
        <div className="login-shell">
          <div className="brand-block">
            <Image
              src="/SURI.png"
              alt="SURI"
              width={150}
              height={150}
              priority
            />
          </div>

          <section
            className={`auth-card ${isAnimating ? "is-animating" : ""}`}
            aria-live="polite"
          >
            {isLogin ? (
              <div className="auth-view">
                <div className="auth-header">
                  <h2>Welcome back</h2>
                  <p>Sign in to continue your learning journey.</p>
                </div>

                <form
                  className="auth-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="field">
                    <label htmlFor="login-email">Email address</label>
                    <div className="input-wrap">
                      <input
                        id="login-email"
                        type="email"
                        placeholder="student@school.edu"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="field-row">
                      <label htmlFor="login-password">Password</label>
                      <a className="link" href="#">
                        Forgot?
                      </a>
                    </div>
                    <div className="input-wrap">
                      <input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>

                  <Link className="primary-btn" href="/dashboard">
                    <span>Login</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </form>

                <p className="switch-text">
                  New here?
                  <button type="button" onClick={toggleAuth}>
                    Create an account
                  </button>
                </p>
              </div>
            ) : (
              <div className="auth-view">
                <div className="auth-header">
                  <h2>Get started</h2>
                  <p>Create your SURI account to start mastering math.</p>
                </div>

                <form
                  className="auth-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="field-grid">
                    <div className="field">
                      <label htmlFor="register-first-name">First Name</label>
                      <input
                        id="register-first-name"
                        type="text"
                        placeholder="Alex"
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="register-grade">Grade</label>
                      <select id="register-grade" defaultValue="Grade 9">
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="register-email">Email address</label>
                    <input
                      id="register-email"
                      type="email"
                      placeholder="student@school.edu"
                      autoComplete="email"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="register-password">Choose Password</label>
                    <input
                      id="register-password"
                      type="password"
                      placeholder="Min. 8 characters"
                      autoComplete="new-password"
                    />
                  </div>

                  <label className="checkbox-row">
                    <input type="checkbox" />
                    <span>
                      I agree to the <a href="#">Terms of Service</a> and{" "}
                      <a href="#">Privacy Policy</a>.
                    </span>
                  </label>

                  <button className="tertiary-btn" type="submit">
                    <span>Create Account</span>
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                  </button>
                </form>

                <p className="switch-text">
                  Already have an account?
                  <button type="button" onClick={toggleAuth}>
                    Sign in instead
                  </button>
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <div className="login-blobs" aria-hidden="true">
        <div className="blob blob-primary"></div>
        <div className="blob blob-secondary"></div>
      </div>

      <footer className="login-footer">
        <p>© 2024 SURI Adaptive Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
