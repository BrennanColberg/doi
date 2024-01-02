import { notFound } from "next/navigation"
import DOIFrame from "./DOIFrame"
import Link from "next/link"
import DownloadDOI from "./DownloadDOI"
import { parse } from "@retorquere/bibtex-parser"

export default async function DoiPage({ params }: { params: { doi: string[] } }) {
  // verify the DOI and find info about it
  const doi = params.doi.join("/")
  // check if DOI is facially valid
  if (!doi.startsWith("10.")) notFound()
  // if it looks decent see if it's real
  const doiResponse = await fetch(`https://doi.org/${doi}`, { redirect: "manual" })
  if (doiResponse.status === 404) notFound()

  // if given a 302 back, extract the redirect URL and load it directly
  // in the iframe (this also allows for manual protocol upgrades to HTTPS)
  let href: string | undefined
  if (doiResponse.status === 302) {
    const text = await doiResponse.text()
    const match = text.match(/https?:\/\/[^"]*/)
    href = match?.[0]
  }
  if (!href) {
    console.error(`unexpected status ${doiResponse.status} from doi.org/${doi}`)
    notFound() // TODO handle responses that aren't 404/302
  }

  // check if the href is iframeable
  let iframeable = true
  const siteResponse = await fetch(href)
  const frameOptions = siteResponse.headers.get("X-Frame-Options")
  if (frameOptions?.toLowerCase().includes("deny")) iframeable = false
  if (frameOptions?.toLowerCase().includes("sameorigin")) iframeable = false
  const csp = siteResponse.headers.get("Content-Security-Policy")
  if (csp?.toLowerCase().includes("frame-ancestors 'none'")) iframeable = false
  // note: in theory they could specifically allow us, but rn that's unlikely
  //       so for now we just assume *any* restriction blocks our iframes
  if (csp?.toLowerCase().includes("frame-ancestors")) iframeable = false

  // get bibtex of site for meta tags, showing data, etc
  const bibtexResponse = await fetch(`https://doi.org/${doi}`, { headers: { Accept: "application/x-bibtex" } })
  const bibtexText = await bibtexResponse.text()
  console.log("bibtex:", bibtexText)
  const bibliography = parse(bibtexText)
  const data = bibliography.entries[0]
  console.log({ doi, data })

  return (
    <main className="w-screen h-screen flex flex-col justify-start p-5 gap-5">
      {data?.fields?.title && <h1 className="text-2xl font-bold">{data.fields.title}</h1>}
      {data?.fields?.author && (
        <p className="text-lg">
          {data.fields.author.join("; ")} {data?.fields?.year && <span className="text-lg"> ({data.fields.year})</span>}
        </p>
      )}

      {(data?.fields?.journal ?? data?.fields?.publisher) && (
        <p className="text-lg">
          {data.fields.journal ?? data.fields.publisher}
          {data?.fields?.volume && <span> volume {data.fields.volume}</span>}
          {data?.fields?.number && <span> number {data.fields.number}</span>}
          {data?.fields?.pages && <span> page {data.fields.pages}</span>}
        </p>
      )}

      {/* iframe the actual site for readability */}
      {/* TODO add button to go to actual site? */}
      {/* TODO add button to download (`sci-hub.se/$DOI`) after copyright disclaimer */}
      {iframeable ? (
        <DOIFrame href={href} />
      ) : (
        <p className="text-red-500">
          Unable to preview this site. Please{" "}
          <Link href={href} className="underline">
            visit it directly
          </Link>
          .
        </p>
      )}

      <DownloadDOI doi={doi} />

      {/* {data.fields && <pre>{JSON.stringify(data.fields, undefined, 2)}</pre>} */}
    </main>
  )
}
