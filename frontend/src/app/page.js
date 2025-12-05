"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("loading"); // loading|ok|fail
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();

        if (cancelled) return;

        if (res.ok && json.ok) {
          setUser(json.user);
          setStatus("ok");
        } else {
          setStatus("fail");
        }
      } catch {
        if (!cancelled) setStatus("fail");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") return <p>Verifying…</p>;
  if (status === "fail") return <p>Not logged in</p>;

  return (
    <div>
      <h1>Welcome</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
