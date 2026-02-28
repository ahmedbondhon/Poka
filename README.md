# 🐞 Poka (পোকা) 
### *AI-Powered Visual Bug Reporting for the Modern Web*

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build: Plasmo](https://img.shields.io/badge/Build-Plasmo_Framework-blueviolet)](https://plasmo.com)
[![AI: Gemini 1.5 Flash](https://img.shields.io/badge/AI-Gemini_Flash-blue)](https://ai.google.dev/)
[![Backend: Supabase](https://img.shields.io/badge/Backend-Supabase-3ecf8e)](https://supabase.com)

**Poka** (Bengali for *Bug*) is an AI-native debugging assistant designed to end the "it's broken" email chain forever. It captures what the user sees and translates it into what a developer needs to fix.

---

## 💡 The Concept
Most bug reports from clients are vague. Developers spend 40% of their time just trying to reproduce issues. 

**Poka** bridges this gap by capturing a "Technical Snapshot" of the browser the moment a bug is reported. It doesn't just show you a screenshot; it uses AI to tell you **why** the bug is happening.

## 🚀 Key Features
* **One-Click "Snap":** Clients click one button to record the screen and capture the state of the app.
* **AI Auto-Diagnosis:** Powered by Gemini, Poka analyzes console logs and network failures to suggest the exact file and line of code causing the issue.
* **Technical Deep-Dive:** Automatically attaches:
    * `console.error` and `console.warn` history.
    * Network request/response logs (XHR/Fetch).
    * Browser metadata (OS, Version, Screen Resolution).
* **PII Masking:** Built-in AI privacy layer that automatically blurs sensitive data (emails, keys) before the report is sent.
* **Instant Integration:** One-click export to GitHub Issues, Jira, Linear, or Slack.

---

## 🛠️ Tech Stack
Built for speed and zero-cost scaling in 2026:
* **Frontend:** React + Tailwind CSS via the [Plasmo Extension Framework](https://docs.plasmo.com/).
* **Intelligence:** Google Gemini API (1.5 Flash) for real-time log analysis.
* **Storage/Auth:** Supabase for secure report hosting and developer accounts.
* **Deployment:** Vercel for the web dashboard.

---

## 📦 Installation & Setup

### For Developers
1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/yourusername/poka.git](https://github.com/yourusername/poka.git)
    cd poka
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    Create a `.env` file and add your keys:
    ```env
    PLASMO_PUBLIC_GEMINI_API_KEY=your_key_here
    PLASMO_PUBLIC_SUPABASE_URL=your_url_here
    PLASMO_PUBLIC_SUPABASE_ANON_KEY=your_key_here
    ```
4.  **Start Development:**
    ```bash
    npm run dev
    ```
    *This will load Poka into a temporary Chrome instance for testing.*

---

## 🗺️ Roadmap
- [x] Initial Plasmo scaffolding
- [ ] Visual screenshot/video capture engine
- [ ] Background listener for console/network logs
- [ ] AI "Diagnosis" prompt engineering
- [ ] Dashboard for managing "Snaps"
- [ ] Chrome Web Store Launch 🚀

## 🤝 Contributing
Poka is open-source. If you want to help kill the world's most annoying bugs, check our `CONTRIBUTING.md`.

## 📄 License
This project is licensed under the MIT License.

---
*Created with ❤️ for developers who hate vague bug reports.*