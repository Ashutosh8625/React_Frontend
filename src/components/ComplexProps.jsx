import { useState } from "react";
import "../App.css";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div className={`profile-card ${theme.backgroundColor}`}>

      {/* Header */}
      <div className="profile-header">

        <div className={`avatar ${theme.avatarBg}`}>
          {user.avatar}
        </div>

        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <div className="badges">
            <span className={`badge ${theme.badgeBg}`}>
              {user.role}
            </span>

            <span className={`badge ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>

      </div>

      {/* Stats */}
      {user.stats && (
        <div className="stats">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="stat-box">
              <h4>{value}</h4>
              <span>{key}</span>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions && (
        <div className="actions">

          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`action-btn ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}

          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`action-btn ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}

        </div>
      )}

    </div>
  );
}

function ComplexProps() {

  const [, setMessage] = useState("");

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💻",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },

      theme: {
        backgroundColor: "purple-bg",
        avatarBg: "purple-avatar",
        badgeBg: "purple-badge",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "purple-primary",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message with Alice"),
          className: "purple-secondary",
        },
      },
    },

    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },

      theme: {
        backgroundColor: "green-bg",
        avatarBg: "green-avatar",
        badgeBg: "green-badge",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "green-primary",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Collaborating with Bob"),
          className: "green-secondary",
        },
      },
    },
  ];

  return (
    <div className="page-wrapper">

      <div className="main-box">

        <h2>Complex/Nested Props</h2>

        <p className="subtitle">
          Complex props allow you to pass nested objects and functions, enabling sophisticated component configurations and interactions.
        </p>

        <h3 className="section-title">
          User Profile Cards (Nested User, Theme, and Actions):
        </h3>

        <div className="cards-row">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default ComplexProps;
