
import './Header.css'
import { useTheme } from '../context/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="workspace-header">

      {/* Workspace information */}
      <div className="header-information">
        <h1>Welcome to mawaLLM</h1>
        <p>Your personal, locally powered AI assistant.</p>
      </div>

      {/* Header actions */}
      <div className="header-actions">

        <div className="local-model-indicator">
          <span className="status-dot"></span>
          <span>LOCAL AI</span>
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          <span className="theme-icon" aria-hidden="true">
            {theme === 'light' ? '☾' : '☀'}
          </span>

          <span className="theme-label">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </span>
        </button>

      </div>

    </header>
  )
}
