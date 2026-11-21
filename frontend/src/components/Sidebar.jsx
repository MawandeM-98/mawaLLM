
import { useState } from 'react'
import './Sidebar.css'

export default function Sidebar() {
  const [activeChat, setActiveChat] = useState(null)

  // Temporary data until SQLite conversation history is implemented.
  const [conversations] = useState([
    {
      id: 1,
      title: 'Understanding artificial intelligence',
    },
    {
      id: 2,
      title: 'Python programming help',
    },
    {
      id: 3,
      title: 'Building a web application',
    },
  ])

  const handleNewChat = () => {
    setActiveChat(null)
  }

  const handleSelectChat = (chatId) => {
    setActiveChat(chatId)
  }

  return (
    <aside className="sidebar">

      {/* Brand identity */}
      <div className="sidebar-brand">
        <div className="brand-icon">m</div>

        <div className="brand-details">
          <span className="brand-name">mawaLLM</span>
          <span className="brand-subtitle">LOCAL INTELLIGENCE</span>
        </div>
      </div>

      {/* New conversation */}
      <button
        className="new-chat-button"
        onClick={handleNewChat}
        type="button"
      >
        <span className="new-chat-icon">+</span>
        <span>New chat</span>
      </button>

      {/* Conversation history */}
      <div className="conversation-section">

        <p className="section-label">
          RECENT CONVERSATIONS
        </p>

        <div className="conversation-list">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              className={`conversation-item ${
                activeChat === conversation.id ? 'active' : ''
              }`}
              onClick={() => handleSelectChat(conversation.id)}
            >
              <span className="chat-icon">◷</span>

              <span className="conversation-title">
                {conversation.title}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* User profile */}
      <div className="sidebar-footer">

        <div className="user-avatar">
          M
        </div>

        <div className="user-details">
          <span className="user-name">Local User</span>
          <span className="user-plan">Personal workspace</span>
        </div>

        <button
          className="settings-button"
          type="button"
          aria-label="Settings"
          title="Settings"
        >
          ⚙
        </button>

      </div>

    </aside>
  )
}
