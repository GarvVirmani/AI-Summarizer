import React, { useState } from 'react';
import './App.css';
import { GEMINI_API_KEY } from '../public/config.js';

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarizeWithGemini = async (text) => {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text }] }]
        })
      });

      const data = await response.json();

      if (data && data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return "Failed to generate summary. Try again.";
      }
    } catch (error) {
      console.error("Error summarizing text:", error);
      return "Error: Unable to generate summary.";
    }
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) return;
    setLoading(true);

    const generatedSummary = await summarizeWithGemini(inputText+"summarize all points in 150-200 words");
    setSummary(generatedSummary);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>AI Summarizer</h1>
      <textarea
        placeholder="Paste your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="10"
        cols="50"
      />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      {summary && (
        <div className="summary">
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;