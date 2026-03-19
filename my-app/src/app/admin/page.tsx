'use client';

import { useState, useTransition } from 'react';
import { getWaitlistEntries } from '../waitlist/actions';
import './admin.css';

const ADMIN_PASSWORD = 'Sai@7945';

type Entry = {
  id: string | number;
  email: string;
  gender: string;
  city: string;
  phone: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authed, setAuthed] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isPending, startTransition] = useTransition();
  const [fetchError, setFetchError] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError('');
      setAuthed(true);
      startTransition(async () => {
        const result = await getWaitlistEntries();
        if (result.success) {
          setEntries(result.entries as Entry[]);
        } else {
          setFetchError(result.error ?? 'Failed to load entries.');
        }
      });
    } else {
      setError('Incorrect password.');
    }
  }

  const men = entries.filter(e => e.gender === 'male').length;
  const women = entries.filter(e => e.gender === 'female').length;
  const other = entries.filter(e => e.gender !== 'male' && e.gender !== 'female').length;

  if (!authed) {
    return (
      <div className="adm__gate">
        <div className="adm__gate-card">
          <div className="adm__gate-logo">bluedate</div>
          <h1 className="adm__gate-title">Admin Access</h1>
          <p className="adm__gate-sub">Enter the admin password to continue.</p>
          <form onSubmit={handleLogin} className="adm__gate-form">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="adm__gate-input"
              autoFocus
            />
            {error && <p className="adm__gate-error">{error}</p>}
            <button type="submit" className="adm__gate-btn">Unlock →</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="adm__page">
      <header className="adm__header">
        <div className="adm__header-left">
          <span className="adm__header-logo">bluedate</span>
          <span className="adm__header-tag">Admin</span>
        </div>
        <button className="adm__logout" onClick={() => { setAuthed(false); setPassword(''); setEntries([]); }}>
          Log out
        </button>
      </header>

      <main className="adm__main">
        <h1 className="adm__title">Waitlist</h1>

        <div className="adm__stats">
          <div className="adm__stat">
            <span className="adm__stat-num">{entries.length}</span>
            <span className="adm__stat-label">Total</span>
          </div>
          <div className="adm__stat">
            <span className="adm__stat-num">{men}</span>
            <span className="adm__stat-label">Men</span>
          </div>
          <div className="adm__stat">
            <span className="adm__stat-num">{women}</span>
            <span className="adm__stat-label">Women</span>
          </div>
          {other > 0 && (
            <div className="adm__stat">
              <span className="adm__stat-num">{other}</span>
              <span className="adm__stat-label">Other</span>
            </div>
          )}
        </div>

        {isPending && <p className="adm__loading">Loading entries…</p>}
        {fetchError && <p className="adm__fetch-error">{fetchError}</p>}

        {!isPending && !fetchError && (
          <div className="adm__table-wrap">
            <table className="adm__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="adm__empty">No entries yet.</td>
                  </tr>
                ) : (
                  entries.map((entry, i) => (
                    <tr key={entry.id}>
                      <td className="adm__num">{i + 1}</td>
                      <td>{entry.email}</td>
                      <td>
                        <span className={`adm__badge adm__badge--${entry.gender}`}>
                          {entry.gender}
                        </span>
                      </td>
                      <td>{entry.city || '—'}</td>
                      <td>{entry.phone || '—'}</td>
                      <td className="adm__date">
                        {entry.created_at
                          ? new Date(entry.created_at).toLocaleDateString('en-IN', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })
                          : '—'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
