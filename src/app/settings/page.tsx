export default function SettingsPage() {
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
