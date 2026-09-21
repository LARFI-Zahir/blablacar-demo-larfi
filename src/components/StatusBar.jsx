import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="status-bar">
      <span className="status-bar__time">{time}</span>
      <div className="status-bar__icons">
        <span>5G</span>
        <svg viewBox="0 0 20 12" width="20" height="12" fill="none">
          <rect x="0.5" y="0.5" width="17" height="11" rx="2.5" stroke="currentColor" />
          <rect x="18.5" y="4" width="1.5" height="4" rx="0.7" fill="currentColor" />
          <rect x="2" y="2" width="12" height="8" rx="1.2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function formatTime(date) {
  return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}
