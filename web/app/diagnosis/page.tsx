"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DiagnosisPage() {
  const router = useRouter();
  const [text, setText] = useState("");

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Diagnosis</h1>

      <p style={{ marginBottom: 16 }}>
        Type anything. For now we go to a demo result page.
      </p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. I'm interested in someone but I'm shy..."
        style={{ width: "100%", padding: 10, marginBottom: 12 }}
      />

      <button
        onClick={() => {
          const q = encodeURIComponent(text.trim());
          router.push(`/result/demo?q=${q}`);
        }}
        style={{ padding: "10px 14px", cursor: "pointer" }}
        disabled={!text.trim()}
      >
        Generate result
      </button>
    </main>
  );
}
