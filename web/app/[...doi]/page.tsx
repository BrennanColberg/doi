import { notFound } from "next/navigation"
import DOIFrame from "./DOIFrame"

export default async function DoiPage({ params }: { params: { doi: string[] } }) {
  // verify the DOI and find info about it
  const doi = params.doi.join("/")
  // check if DOI is facially valid
  if (!doi.startsWith("10.")) notFound()
  // if it looks decent see if it's real
  const response = await fetch(`https://doi.org/${doi}`, { redirect: "manual" })
  if (response.status === 404) notFound()
  // if given a 302 back, extract the redirect URL and load it directly
  // in the iframe (this also allows for manual protocol upgrades to HTTPS)
  let href: string | undefined
  if (response.status === 302) {
    const text = await response.text()
    const match = text.match(/https?:\/\/[^"]*/)
    href = match?.[0]
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-start p-5 gap-5">
      {/* iframe the actual site for readability */}
      {/* TODO add button to go to actual site? */}
      <DOIFrame doi={doi} href={href} />
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </main>
  )
}
