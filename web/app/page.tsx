import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>My Character App</h1>
      <p style={{ marginBottom: 24 }}>
        Prototype for learning dev process (Next.js + GitHub).
      </p>

      <Link href="/diagnosis">
        <button style={{ padding: "10px 14px", cursor: "pointer" }}>
          Start
        </button>
      </Link>
    </main>
  );
}
