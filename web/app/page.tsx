import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>DOI chat</h1>
      <ul>
        <li>
          example:{" "}
          <Link href="/10.1000/182" className="text-blue-500 underline">
            doi handbook
          </Link>
        </li>
      </ul>
    </main>
  )
}
