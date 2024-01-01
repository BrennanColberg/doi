"use client"

export default function DOIFrame({ doi, href }: { doi: string; href?: string }) {
  // upgrade links to https so that they don't break the iframe when served from https
  // note: this will screw up sites that are legitimately http-only. but they'd be broken
  // anyway as-is, so this is a reasonable tradeoff
  if (href?.startsWith("http://")) {
    console.warn("DOI redirects to insecure http link")
    href = href.replace("http://", "https://")
  }

  return (
    <iframe
      className="flex-grow border-black border shadow-lg"
      src={href ?? `https://doi.org/${doi}`}
      // TODO maybe check for 404 in an `onload` here instead?
      //      as all invalid DOIs at `doi.org` show the same page
      onError={(error) => console.error("onError", error)}
      onErrorCapture={(error) => console.error("onErrorCapture", error)}
    />
  )
}
