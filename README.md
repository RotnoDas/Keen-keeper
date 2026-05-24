**KeenKeeper**

KeenKeeper helps you manage and nurture meaningful relationships by tracking interactions, visualizing activity, and surfacing who needs attention next.

**Technologies**
- **Frontend:** React (v19), Vite
- **Styling:** Tailwind CSS, DaisyUI
- **Charts:** Recharts (+ @recharts/devtools)
- **Routing & State:** react-router, React Context
- **UI / Helpers:** react-toastify, react-icons

**Key Features**
- **Interaction Timeline:** Log calls, texts, and video interactions and view a chronological activity feed.
- **Analytics & Charts:** Visualize interaction types and counts with an interactive pie chart on the `Stats` page.
- **Friend Management:** Browse friends, view details, quick check-ins, and retain metadata (tags, status, goals).

**Quick Start**

- **Install dependencies**

```bash
npm install
```

- **Run the development server**

```bash
npm run dev
```

- **Build for production**

```bash
npm run build
```

**Project Structure (high level)**
- **Pages:** [src/pages/homepage/Homepage.jsx](src/pages/homepage/Homepage.jsx#L1) — landing UI with banner and friends list.
- **Stats:** [src/pages/stats/Stats.jsx](src/pages/stats/Stats.jsx#L1) and [src/pages/stats/Chart.jsx](src/pages/stats/Chart.jsx#L1) — analytics and Recharts pie chart.
- **Timeline:** [src/pages/timeline/Timeline.jsx](src/pages/timeline/Timeline.jsx#L1) — activity feed and filters.
- **Components:** [src/components](src/components)
- **Context:** [src/components/context/ContextProvider.jsx](src/components/context/ContextProvider.jsx#L1) — global app data and data loader (reads [public/data.json](public/data.json)).

**Usage Notes**
- The app loads initial friend data from [public/data.json](public/data.json).
- Timeline entries are added when performing quick check-ins from a friend's detail view — these are kept in memory via React Context for the current session.
- The `Chart` reads `timelineData` from context and renders interaction counts using Recharts.

**Development Tips**
- To customize the chart tooltip or legend, edit [src/pages/stats/Chart.jsx](src/pages/stats/Chart.jsx#L1-L200).
- To add persistent storage for timeline events, replace in-memory `timelineData` with an API or localStorage-backed persistence in `ContextProvider`.

**Contributing**
- Fork the repo, create a feature branch, and open a pull request. Please include a short description of the change and any manual steps to test it.

**License**
- MIT — feel free to reuse and adapt the code.

**Contact**
- Questions or feature requests? Open an issue in the repo or reach out to the project maintainer.

---

This README was generated to summarize the current KeenKeeper implementation and help new contributors get started quickly.
