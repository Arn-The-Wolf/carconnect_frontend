import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Optional: lightweight analytics (Vercel Analytics)
try {
  // dynamic import to avoid bundling if not available
  import('@vercel/analytics').then(m => m.inject?.()).catch(() => {});
} catch {}

createRoot(document.getElementById("root")!).render(<App />);
