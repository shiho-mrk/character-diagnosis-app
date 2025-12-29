import Link from "next/link";

export default function ResultDemoPage() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Result (Demo)</h1>

      <div style={{ padding: 12, border: "1px solid #ccc", marginBottom: 16 }}>
        <p><b>Type:</b> Warm & Direct</p>
        <p><b>Pattern:</b> You move fast and prefer clarity.</p>
        <p><b>Tip:</b> Ask one concrete question instead of overthinking.</p>
      </div>

      <Link href="/diagnosis">
        <button style={{ padding: "10px 14px", cursor: "pointer" }}>
          Try again
        </button>
      </Link>
    </main>
  );
}
