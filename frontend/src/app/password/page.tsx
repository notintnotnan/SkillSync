import Link from "next/link";

export default function Page() {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>SkillSync</h1>
      </div>
      <div className="auth-body">
        <div className="auth-form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <div>
            <button type="button">Recover</button>
          </div>
        </div>
      </div>
      <div className="auth-footer"></div>
    </div>
  );
}
