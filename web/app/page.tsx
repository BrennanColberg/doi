import Link from "next/link"

export default function Home() {
  return (
    <main className="w-screen p-5">
      <h1>DOI chat</h1>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/10.1000/182" className="text-blue-500 underline">
            example
          </Link>{" "}
          with working iframe
        </li>
        <li>
          <Link href="/10.1093/ajae/aaq063" className="text-blue-500 underline">
            example
          </Link>{" "}
          where iframe is disabled by the site
        </li>

        <li>
          <Link href="/10.48550/arXiv.2312.17288" className="text-blue-500 underline">
            example
          </Link>{" "}
          from arXiv
        </li>
      </ul>
    </main>
  )
}
