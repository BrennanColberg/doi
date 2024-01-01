"use client"

export default function DOIFrame({ doi }: { doi: string }) {
  return (
    <iframe
      className="flex-grow border-black border shadow-lg"
      src={`https://doi.org/${doi}`}
      // TODO maybe check for 404 in an `onload` here instead?
      //      as all invalid DOIs at `doi.org` show the same page
      onError={(error) => console.error("onError", error)}
      onErrorCapture={(error) => console.error("onErrorCapture", error)}
    />
  )
}
