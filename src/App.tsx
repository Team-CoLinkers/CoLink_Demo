import { useEffect, useState, type ReactElement } from "react";

import { AdminDashboard } from "./screens/colink/AdminDashboard";
import { Auth } from "./screens/colink/Auth";
import { Booking } from "./screens/colink/Booking";
import { EmergencySOS } from "./screens/colink/EmergencySOS";
import { Home } from "./screens/colink/Home";
import { Invoice } from "./screens/colink/Invoice";
import { NotFound } from "./screens/colink/NotFound";
import { RatingReview } from "./screens/colink/RatingReview";
import { Tracking } from "./screens/colink/Tracking";
import { WorkerDashboard } from "./screens/colink/WorkerDashboard";
import { WorkerRegister } from "./screens/colink/WorkerRegister";

/**
 * Lightweight hash router.
 *
 * The CoLink screens navigate by assigning `window.location.hash` (e.g.
 * `window.location.hash = "/book"`). This router listens for those changes and
 * renders the matching screen. Hash routing needs zero server configuration,
 * so every deep link keeps working when deployed to Vercel as a static site.
 */

type Route = {
  test: (path: string) => boolean;
  element: ReactElement;
};

const routes: Route[] = [
  { test: (path) => path === "/", element: <Home /> },
  { test: (path) => path === "/auth", element: <Auth /> },
  { test: (path) => path === "/worker-register", element: <WorkerRegister /> },
  { test: (path) => path === "/worker", element: <WorkerDashboard /> },
  { test: (path) => path === "/book", element: <Booking /> },
  {
    test: (path) => path === "/track" || path.startsWith("/track/"),
    element: <Tracking />,
  },
  { test: (path) => path === "/sos", element: <EmergencySOS /> },
  { test: (path) => path === "/admin", element: <AdminDashboard /> },
  { test: (path) => path === "/invoice", element: <Invoice /> },
  {
    test: (path) => path === "/rating" || path === "/review",
    element: <RatingReview />,
  },
];

function getCurrentPath(): string {
  const raw = window.location.hash.replace(/^#/, "");
  const path = (raw.split("?")[0] || "/").trim();
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export default function App() {
  const [path, setPath] = useState<string>(() => getCurrentPath());

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getCurrentPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const match = routes.find((route) => route.test(path));
  return match ? match.element : <NotFound />;
}
