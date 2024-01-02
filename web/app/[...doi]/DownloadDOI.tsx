"use client"

export default function DownloadDOI({ doi }: { doi: string }) {
  // TODO only show when appropriate-- how to tell when there's an actual PDF (vs website)?
  return (
    <p className="text-purple-500 underline cursor-pointer">
      <span
        onClick={() => {
          const legal = confirm(
            "Sci-Hub is illegal to use in some countries over copyright law violation concerns. " +
              "DOI Chat does not endorse, condone, or recommend the use of Sci-Hub anywhere that it is illegal. " +
              "\n\n" +
              "By continuing, you assert that the use of Sci-Hub is permitted in your jurisdiction, " +
              "and assume full legal responsibility for any improper usage.",
          )
          if (legal) window.open(`https://sci-hub.se/${doi}`, "_blank")
        }}
      >
        download via Sci-Hub
      </span>
    </p>
  )
}
