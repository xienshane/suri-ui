"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

type AuthShellProps = {
  initialView?: "login" | "signup";
};

export default function AuthShell({ initialView = "login" }: AuthShellProps) {
  const [view, setView] = useState<"login" | "signup">(initialView);
  const [phase, setPhase] = useState<"idle" | "leave" | "enter">("enter");
  const [showLoginPw, setShowLoginPw] = useState(false);
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setPhase("idle"), 50);
    return () => clearTimeout(t);
  }, []);

  const toggleView = useCallback(() => {
    if (phase !== "idle") return;
    setPhase("leave");
    setTimeout(() => {
      router.push(view === "login" ? "/signup" : "/login");
    }, 150);
  }, [phase, view, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f8f9ff",
        color: "#0b1c30",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "fixed",
        top: 0, left: 0, width: "100%", height: "100%",
        overflow: "hidden", pointerEvents: "none", opacity: 0.3,
        zIndex: 0,
      }}>
        <div style={{
          position: "absolute", top: "-10%", left: "-10%",
          width: "40%", height: "40%", borderRadius: "9999px",
          background: "#2563eb", filter: "blur(120px)",
        }} />
        <div style={{
          position: "absolute", top: "60%", right: "-10%",
          width: "40%", height: "40%", borderRadius: "9999px",
          background: "#ffc329", filter: "blur(120px)",
        }} />
      </div>

      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "440px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{
            marginBottom: "12px",
            transition: "opacity 0.25s ease",
            opacity: phase === "idle" ? 1 : 0,
          }}>
            <Image src="/SURI.png" alt="SURI" width={80} height={80} priority />
          </div>

          <div
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(226,232,240,0.6)",
              borderRadius: "24px",
              padding: "20px 28px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              boxSizing: "border-box",
              transition: "opacity 0.25s ease, transform 0.3s ease",
              opacity: phase === "idle" ? 1 : 0,
              transform:
                phase === "leave"
                  ? "translateX(-24px)"
                  : phase === "enter"
                  ? "translateX(24px)"
                  : "translateX(0)",
            }}
          >
            {view === "login" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h2 style={{
                    fontSize: "22px", fontWeight: 700,
                    lineHeight: "28px", color: "#0b1c30",
                    margin: 0,
                  }}>
                    Welcome back
                  </h2>
                  <p style={{
                    fontSize: "14px", lineHeight: "20px",
                    color: "#434655", marginTop: "4px", marginBottom: 0,
                  }}>
                    Sign in to continue your learning journey.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{
                      fontSize: "13px", fontWeight: 600,
                      lineHeight: "18px", color: "#0b1c30",
                      display: "block", marginBottom: "5px",
                    }}>
                      Email address
                    </label>
                    <div style={{ position: "relative" }}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          position: "absolute", left: "14px", top: "50%",
                          transform: "translateY(-50%)", color: "#737686",
                          fontSize: "18px",
                        }}
                      >
                        mail
                      </span>
                      <input
                        style={{
                          width: "100%", padding: "11px 14px 11px 44px",
                          background: "#fff", border: "1.5px solid #c3c6d7",
                          borderRadius: "12px", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                        placeholder="student@school.edu"
                        type="email"
                      />
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center", marginBottom: "5px",
                    }}>
                      <label style={{
                        fontSize: "13px", fontWeight: 600,
                        lineHeight: "18px", color: "#0b1c30",
                      }}>
                        Password
                      </label>
                      <a
                        href="#"
                        style={{
                          fontSize: "12px", fontWeight: 600,
                          color: "#004ac6", textDecoration: "none",
                        }}
                        className="hover:underline"
                      >
                        Forgot?
                      </a>
                    </div>
                    <div style={{ position: "relative" }}>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          position: "absolute", left: "14px", top: "50%",
                          transform: "translateY(-50%)", color: "#737686",
                          fontSize: "18px",
                          pointerEvents: "none",
                        }}
                      >
                        lock
                      </span>
                      <input
                        style={{
                          width: "100%", padding: "11px 44px 11px 44px",
                          background: "#fff", border: "1.5px solid #c3c6d7",
                          borderRadius: "12px", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                        placeholder="••••••••"
                        type={showLoginPw ? "text" : "password"}
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPw((v) => !v)}
                        style={{
                          position: "absolute", right: "10px", top: "50%",
                          transform: "translateY(-50%)",
                          background: "none", border: "none",
                          cursor: "pointer", padding: "4px",
                          display: "flex", alignItems: "center",
                          color: "#737686",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                          {showLoginPw ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <button
                    style={{
                      width: "100%", padding: "13px 20px",
                      background: "#004ac6", color: "#fff",
                      fontWeight: 600, fontSize: "14px",
                      border: "none", borderRadius: "12px",
                      cursor: "pointer", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      gap: "6px", boxShadow: "0 6px 18px rgba(0,74,198,0.2)",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-[#2563eb] active:scale-[0.98]"
                    type="submit"
                  >
                    Login
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      arrow_forward
                    </span>
                  </button>
                </form>

                <p style={{
                  textAlign: "center", fontSize: "14px",
                  color: "#434655", margin: 0,
                }}>
                  New here?{" "}
                  <button
                    style={{
                      background: "none", border: "none",
                      color: "#004ac6", fontWeight: 600,
                      fontSize: "14px", cursor: "pointer",
                      padding: 0,
                    }}
                    className="hover:underline"
                    onClick={toggleView}
                  >
                    Create an account
                  </button>
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <h2 style={{
                    fontSize: "22px", fontWeight: 700,
                    lineHeight: "28px", color: "#0b1c30",
                    margin: 0,
                  }}>
                    Get started
                  </h2>
                  <p style={{
                    fontSize: "14px", lineHeight: "20px",
                    color: "#434655", marginTop: "4px", marginBottom: 0,
                  }}>
                    Create your SURI account to start mastering math.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px",
                  }}>
                    <div>
                      <label style={{
                        fontSize: "13px", fontWeight: 600,
                        lineHeight: "18px", color: "#0b1c30",
                        display: "block", marginBottom: "5px",
                      }}>
                        First Name
                      </label>
                      <input
                        style={{
                          width: "100%", padding: "11px 14px",
                          background: "#fff", border: "1.5px solid #c3c6d7",
                          borderRadius: "12px", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                        placeholder="Alex"
                        type="text"
                      />
                    </div>
                    <div>
                      <label style={{
                        fontSize: "13px", fontWeight: 600,
                        lineHeight: "18px", color: "#0b1c30",
                        display: "block", marginBottom: "5px",
                      }}>
                        Last Name
                      </label>
                      <input
                        style={{
                          width: "100%", padding: "11px 14px",
                          background: "#fff", border: "1.5px solid #c3c6d7",
                          borderRadius: "12px", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                        placeholder="Johnson"
                        type="text"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      fontSize: "13px", fontWeight: 600,
                      lineHeight: "18px", color: "#0b1c30",
                      display: "block", marginBottom: "5px",
                    }}>
                      Email address
                    </label>
                    <input
                      style={{
                        width: "100%", padding: "11px 14px",
                        background: "#fff", border: "1.5px solid #c3c6d7",
                        borderRadius: "12px", fontSize: "14px",
                        outline: "none", boxSizing: "border-box",
                      }}
                      className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                      placeholder="student@school.edu"
                      type="email"
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: "13px", fontWeight: 600,
                      lineHeight: "18px", color: "#0b1c30",
                      display: "block", marginBottom: "5px",
                    }}>
                      Password
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        style={{
                          width: "100%", padding: "11px 44px 11px 14px",
                          background: "#fff", border: "1.5px solid #c3c6d7",
                          borderRadius: "12px", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                        placeholder="Min. 8 characters"
                        type={showSignupPw ? "text" : "password"}
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupPw((v) => !v)}
                        style={{
                          position: "absolute", right: "10px", top: "50%",
                          transform: "translateY(-50%)",
                          background: "none", border: "none",
                          cursor: "pointer", padding: "4px",
                          display: "flex", alignItems: "center",
                          color: "#737686",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                          {showSignupPw ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label style={{
                      fontSize: "13px", fontWeight: 600,
                      lineHeight: "18px", color: "#0b1c30",
                      display: "block", marginBottom: "5px",
                    }}>
                      Confirm Password
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        style={{
                          width: "100%", padding: "11px 44px 11px 14px",
                          background: "#fff", border: "1.5px solid #c3c6d7",
                          borderRadius: "12px", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        className="focus:ring-2 focus:ring-[#004ac6] focus:border-transparent"
                        placeholder="Re-enter your password"
                        type={showConfirmPw ? "text" : "password"}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPw((v) => !v)}
                        style={{
                          position: "absolute", right: "10px", top: "50%",
                          transform: "translateY(-50%)",
                          background: "none", border: "none",
                          cursor: "pointer", padding: "4px",
                          display: "flex", alignItems: "center",
                          color: "#737686",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                          {showConfirmPw ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    paddingTop: "8px", paddingBottom: "4px",
                  }}>
                    <input
                      type="checkbox"
                      style={{
                        width: "16px", height: "16px",
                        borderRadius: "3px", accentColor: "#004ac6",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{
                      fontSize: "12px", color: "#434655",
                      lineHeight: "1.4",
                    }}>
                      I agree to the{" "}
                      <a href="#" style={{ color: "#004ac6", textDecoration: "none" }}
                        className="hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" style={{ color: "#004ac6", textDecoration: "none" }}
                        className="hover:underline"
                      >
                        Privacy Policy
                      </a>.
                    </span>
                  </div>

                  <button
                    style={{
                      width: "100%", padding: "13px 20px",
                      background: "#007e37", color: "#fff",
                      fontWeight: 600, fontSize: "14px",
                      border: "none", borderRadius: "12px",
                      cursor: "pointer", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      gap: "6px", boxShadow: "0 6px 18px rgba(0,126,55,0.2)",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-[#006229] active:scale-[0.98]"
                    type="submit"
                  >
                    Create Account
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      rocket_launch
                    </span>
                  </button>
                </form>

                <p style={{
                  textAlign: "center", fontSize: "14px",
                  color: "#434655", margin: 0,
                }}>
                  Already have an account?{" "}
                  <button
                    style={{
                      background: "none", border: "none",
                      color: "#004ac6", fontWeight: 600,
                      fontSize: "14px", cursor: "pointer",
                      padding: 0,
                    }}
                    className="hover:underline"
                    onClick={toggleView}
                  >
                    Sign in instead
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
