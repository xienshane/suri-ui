"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [showCurPw, setShowCurPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const router = useRouter();

  return (
    <div className="settings-view">
      <header className="settings-view__header">
        <p className="settings-view__eyebrow">Settings</p>
        <h2>Account Settings</h2>
        <p>Manage your profile, security, and learning preferences.</p>
      </header>

      <div className="settings-view__grid">
        <section className="settings-view__card" style={{ flexDirection: "column", alignItems: "stretch", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3>Account</h3>
              <p>Your profile details and student information.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#4f5368", display: "block", marginBottom: "4px" }}>First Name</label>
              <input defaultValue="Alex" style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #c3c5d9", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fff" }} className="focus:ring-2 focus:ring-[#001a54] focus:border-transparent" />
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#4f5368", display: "block", marginBottom: "4px" }}>Last Name</label>
              <input defaultValue="Johnson" style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #c3c5d9", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fff" }} className="focus:ring-2 focus:ring-[#001a54] focus:border-transparent" />
            </div>
          </div>
          <div>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "#4f5368", display: "block", marginBottom: "4px" }}>Email address</label>
            <input defaultValue="alex.johnson@school.edu" style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #c3c5d9", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fff" }} className="focus:ring-2 focus:ring-[#001a54] focus:border-transparent" />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button">Save Changes</button>
          </div>
        </section>

        <section className="settings-view__card" style={{ flexDirection: "column", alignItems: "stretch", gap: "16px" }}>
          <div>
            <h3>Security</h3>
            <p>Change your password and keep your account secure.</p>
          </div>
          <div>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "#4f5368", display: "block", marginBottom: "4px" }}>Current Password</label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%", padding: "10px 40px 10px 12px", border: "1.5px solid #c3c5d9", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fff" }}
                className="focus:ring-2 focus:ring-[#001a54] focus:border-transparent"
                placeholder="Enter current password"
                type={showCurPw ? "text" : "password"}
              />
              <button type="button" onClick={() => setShowCurPw((v) => !v)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", color: "#737686" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{showCurPw ? "visibility_off" : "visibility"}</span>
              </button>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "#4f5368", display: "block", marginBottom: "4px" }}>New Password</label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%", padding: "10px 40px 10px 12px", border: "1.5px solid #c3c5d9", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fff" }}
                className="focus:ring-2 focus:ring-[#001a54] focus:border-transparent"
                placeholder="Min. 8 characters"
                type={showNewPw ? "text" : "password"}
              />
              <button type="button" onClick={() => setShowNewPw((v) => !v)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", color: "#737686" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{showNewPw ? "visibility_off" : "visibility"}</span>
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button">Update Password</button>
          </div>
        </section>

        <section className="settings-view__card" style={{ flexDirection: "column", alignItems: "stretch", gap: "16px" }}>
          <div>
            <h3>Notifications</h3>
            <p>Control which notifications you receive.</p>
          </div>
          {[
            { label: "Push Notifications", desc: "Receive notifications on your device" },
            { label: "Email Summaries", desc: "Weekly progress report via email" },
            { label: "Practice Reminders", desc: "Get reminded to complete daily practice" },
            { label: "Achievement Alerts", desc: "Celebrate when you hit a new milestone" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>{item.label}</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#8a8ea8" }}>{item.desc}</p>
              </div>
              <label style={{ position: "relative", display: "inline-block", width: "40px", height: "22px", cursor: "pointer" }}>
                <input type="checkbox" defaultChecked={item.label === "Practice Reminders"} style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{ position: "absolute", inset: 0, background: "#c3c5d9", borderRadius: "22px", transition: "0.2s" }} className="toggle-slider" />
              </label>
            </div>
          ))}
        </section>
      </div>

      <button
        type="button"
        onClick={() => router.push("/login")}
        className="settings-view__logout"
      >
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>logout</span>
        Logout
      </button>
    </div>
  );
}
