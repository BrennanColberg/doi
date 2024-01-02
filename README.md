# DOI-based comment section

This app lets people "comment on" any academic paper that has a DOI (almost all of them). It solves the problem of academics not having a reliable, universal, and accessible public forum to discuss their ideas; most discussion happens either in dialogue between published papers (a long lag time), in-person at conferences (exclusive and not durable), or via direct emails or conversations between people (not public), or on non-purpose-built forums like Twitter or Reddit (not well-designed for the use case).

A `doi.colberg.dev` (soon `https://doi.chat`?) page can be accessed by replacing the "doi.org" in any valid DOI URL. It includes a way to view the paper (i.e. go to the DOI link) (if not just embedding it). It may also include a link to download the page via e.g. Sci-Hub, if the user signs a disclaimer that doing so is legal in their jurisdiction and they assume any risk. Its main feature is a comment section where academics can reply to or discuss papers. This happens under real names, with real emails, just like it would if they published a paper in reply. Users can log in with their emails (or Google, to start). The platform's viral growth loop will be to send paper authors' emails (extracted via scraping the paper's PDF) a notification whenever someone comments on their paper, and allowing them to log in or reply to respond. Everything (login, credentials, etc) will be built around email. All interfaces will be web-app-based, designed for desktop but usable on mobile as well (e.g. after academics click a link in their email client). A Chrome extension may be built to show a comment section (or redirect users to one) when they are viewing a web page with a DOI link, perhaps by modifying all `doi.org` links or DOI-like IDs that are rendered on the browser to go here instead.

## MVP features

- [ ] homepage explaining this strategy
- [ ] login button/flow (Google or email)
- [ ] replacing `doi.org` in URLs shows a basic page with info from that paper
- [x] our page has a back-link to the `doi` slug (perhaps with iframe)
- [ ] our page has a basic comment section
- [ ] people are emailed when someone comments on their paper
- [ ] people are emailed when someone replies to their comment
- [ ] like/dislike on papers

## possible long-term features

- [ ] dashboard for users with their recent conversations/etc
- [ ] more features for reading/collecting/discussing academic papers
- [ ] (figure out how to monetize)
- [x] Chrome extension which enables / encourages regular use via redirects
- [ ] paper discoverability?
- [ ] verify commenters' identity (show field, credential, position, h-index, etc) (per-user profiles, see their papers)
- [ ] inter-hyperlink discussions based on citation/etc
- [ ] authors of a paper able to provide documents giving additional context (e.g. materials, calculations, code/data links). authors have special powers on the page to manage a separate section above all the comments
- [ ] (manual?) way to associate multiple historical emails with one user
- [ ] require e.g. @.edu or corporate emails (ban @gmail? unclear) to ban throwaways / anon flamewars
- [ ] authors can upload a copy of the PDF for download/view by everyone (streamline email -> pdf)
- software coordination of peer review and publishing? disrupt journals? open-access repository? (Mattea: people publish in reputable journals in part for discoverability; if you own discoverability within a field you can disrupt journals) (is the peer review process—given a pool of qualified reviewers—in principle automatable?) (maybe even select these reviewers via some algorithm based on topic similarity, instead of discrete "journal" buckets? look at citations, LLM the content, match to people who have similar published papers)

## possible monetization strategies

general philosophy: never restrict free flow of information or quality of discussion. monetize around status/discoverability

- higher comment visibility / priority
- NOT restrict access
- reddit-style comment awards
- something around anonymity in commenting/viewing?
- extensive features for paper authors on their own papers
- thumb on discoverability (ads)
- universities may pay to have a research/discussion showcase page (like with journals)
- pay for information curation in a field (e.g. weekly AI-gen newsletter of top papers)
- pay for notifications of new papers in a field
- ^^ general subscription which empowers field-specific researchers (notifs, recaps, etc)
- if identity has been verified, pay to optionally hide email when commenting
- peer review bounty system? ($100 to us, $25 to each reviewer)
- pay to be able to update PDF / publish corrections (preprint -> final -> corrections, etc)
