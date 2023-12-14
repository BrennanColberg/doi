# DOI-based comment section

This app lets people "comment on" any academic paper that has a DOI (almost all of them). It solves the problem of academics not having a reliable, universal, and accessible public forum to discuss their ideas; most discussion happens either in dialogue between published papers (a long lag time), in-person at conferences (exclusive and not durable), or via direct emails or conversations between people (not public), or on non-purpose-built forums like Twitter or Reddit (not well-designed for the use case).

A `doi.colberg.dev` (soon `https://doi.chat`?) page can be accessed by replacing the "doi.org" in any valid DOI URL. It includes a way to view the paper (i.e. go to the DOI link) (if not just embedding it). It may also include a link to download the page via e.g. Sci-Hub, if the user signs a disclaimer that doing so is legal in their jurisdiction and they assume any risk. Its main feature is a comment section where academics can reply to or discuss papers. This happens under real names, with real emails, just like it would if they published a paper in reply. Users can log in with their emails (or Google, to start). The platform's viral growth loop will be to send paper authors' emails (extracted via scraping the paper's PDF) a notification whenever someone comments on their paper, and allowing them to log in or reply to respond. Everything (login, credentials, etc) will be built around email. All interfaces will be web-app-based, designed for desktop but usable on mobile as well (e.g. after academics click a link in their email client). A Chrome extension may be built to show a comment section (or redirect users to one) when they are viewing a web page with a DOI link, perhaps by modifying all `doi.org` links or DOI-like IDs that are rendered on the browser to go here instead.

## MVP features

- [ ] homepage explaining this strategy
- [ ] login button/flow (Google or email)
- [ ] replacing `doi.org` in URLs shows a basic page with info from that paper
- [ ] our page has a back-link to the `doi` slug (perhaps with iframe)
- [ ] our page has a basic comment section
- [ ] people are emailed when someone comments on their paper
- [ ] people are emailed when someone replies to their comment

## possible long-term features

- [ ] dashboard for users with their recent conversations/etc
- [ ] more features for reading/collecting/discussing academic papers
- [ ] (figure out how to monetize)
- [ ] Chrome extension which enables / encourages regular use via redirects
- [ ] paper discoverability?
- [ ] verify commenters' identity (show field, credential, position, h-index, etc)
- [ ] inter-hyperlink discussions based on citation/etc
