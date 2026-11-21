
import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim()) return

    setLoading(true)
    setResponse('')

    try {
      const result = await fetch(
        'http://127.0.0.1:8000/api/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        }
      )

      if (!result.ok) {
        throw new Error('Failed to communicate with the backend')
      }

      const data = await result.json()

      setResponse(data.response)
      setMessage('')

    } catch (error) {
      console.error(error)

      setResponse(
        'Sorry, I could not connect to mawaLLM. Please check that the backend is running.'
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="chat-workspace">

        <Header />

        <section className="chat-container">

          <div className="response">
            {loading
              ? 'mawaLLM is thinking...'
              : response || 'Your AI response will appear here.'}
          </div>

          <div className="input-container">

            <input
              type="text"
              placeholder="Ask mawaLLM anything..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !loading) {
                  sendMessage()
                }
              }}
              disabled={loading}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              type="button"
            >
              {loading ? 'Thinking...' : 'Send'}
            </button>

          </div>

        </section>

      </main>

    </div>
  )
}

export default App
