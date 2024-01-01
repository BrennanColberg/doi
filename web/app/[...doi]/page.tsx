import { notFound } from "next/navigation"

export default async function DoiPage({ params }: { params: { doi: string[] } }) {
  // verify the DOI and find info about it
  const doi = params.doi.join("/")
  // check if DOI is facially valid
  if (!doi.startsWith("10.")) notFound()
  // if it looks decent see if it's real
  // TODO merge this with iframe load somehow? rn it'll fetch twice
  const response = await fetch(`https://doi.org/${doi}`)
  if (response.status === 404) notFound()
  await response.text()

  return (
    <main className="w-screen h-screen flex flex-col justify-start p-5 gap-5">
      {/* iframe the actual site for readability */}
      {/* TODO add button to go to actual site? */}
      <iframe
        className="flex-grow border-black border shadow-lg"
        src={`https://doi.org/${doi}`}
        // TODO maybe check for 404 in an `onload` here instead?
        //      as all invalid DOIs at `doi.org` show the same page
      />
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </main>
  )
}
