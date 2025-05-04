# ✨ AI Summarizer ✨

🚀 A sleek and simple React-based web app that summarizes long texts using the **Gemini 2.0 Flash API** by Google. Just paste your text, click a button, and let AI do the magic in 150–200 words!  

🔗 **Live Demo**: [Click Here](https://garvvirmani.github.io/AI-Summarizer/)

---


## 🛠️ Features

- 🧠 AI-powered summarization using Gemini 2.0 Flash
- 📝 Clean and responsive text area
- ⏱️ Loading indicator while generating summary
- 🎯 Generates concise summaries (150–200 words)

---

## 🧑‍💻 Tech Stack

- ⚛️ React (Frontend)
- 🌐 Fetch API
- 🔐 Google Gemini API (Generative Language)

---

## 📦 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/AI-Summarizer.git
   cd AI-Summarizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API Key**
   - Create a file: `public/config.js`
   - Add this:
     ```js
     export const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
     ```

4. **Run locally**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🚢 Deployment

This app is deployed on GitHub Pages using:

```bash
npm run build
npm run deploy
```

Make sure your `package.json` includes:
```json
"homepage": "https://your-username.github.io/AI-Summarizer"
```

---

## 💡 Usage

1. Paste or type your content in the text area.
2. Click **Summarize**.
3. Get a neatly generated summary in seconds!
---

Made with ❤️ by [Garv Virmani](https://github.com/garvvirmani)
