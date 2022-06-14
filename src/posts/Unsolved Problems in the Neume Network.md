---
title: Unsolved Problems in the Neume Network
date: "2022-06-14"
tags:
description: To create a Schellingpoint for the Music NFT web3 community, we outline the currently unsolved challenges at neume network.
permalink: posts/{{ title | slug }}/index.html
---

gm!

In this post, I'm elaborating on the most pressing technical challenges we're
currently facing in the neume network. And just for context, this isn't a
conclusive post. We expect more technical challenges as we're building this:
But with this post, I want to make the broader neume network community aware of
the problems we're currently hitting when developing neume.

But first of all: if you end up finding what's written here interesting and you
could think of contributing: We have a contributors guide on GitHub, and you
can get paid.

## Neume's short-term target

Neume's primary goal is to enable Hifilabs to ship the first version of
music-os. For that, the neume crawl shall produce new data roughly every five
minutes from sound.xyz and catalog (v1 and v2). We've agreed that it's
sufficient to dump this data into the neume-network/data repository.
Additionally, we want to structure sound.xyz's data download so that it is
"editions-aware," meaning, e.g., soundxyz track titles don't include the "#3"
edition number anymore.

<picture of soundxyz track title>

Finally, we want each music NFT to have a universal and unique identifier. In
talking with the music-os team, we've agreed that the priority of those issues
is as follows:

- Most important is crawling regularly and producing new data.
- Then creating "editions-aware" data models
- And "least important" is giving any music NFT a unique and universal identifier.

Now, from my side as the project's architect, I want to second and highlight
the importance of these goals. Within the next few weeks, we want to start
having these issues addressed as it enables a real customer (Hifilabs) to ship
a real product (music-os). So it is our chance to build something useful people
want, and we must take advantage of it.

Given that I've now established the project's context, here are technical
challenges and generally components that need work in the neume ecosystem.

## Crawling the Ethereum mainnet directly

Currently, neume-network uses Spinamp's minimal web3 music NFT subgraph to
download all of Ethereum mainnet's tracks from platforms like catalog, sound,
and NOIZD. However, we ultimately don't want to rely on this level of
intermediation for receiving our data. We want to minimize the amount of
infrastructure necessary to run the neume network: Ideally, an Ethereum full
node suffices. Additionally, there are benefits from interacting with immutable
contracts: They never change.

Additionally, Spinamp's web3 music NFT subgraph currently crawls the three
platforms mentioned above: But neume's mission is greater than that: It's a
socially scalable extraction and transformation engine for web3, and so
supporting as many platforms, and dapp's data as possible must be our target.

For that matter, we're aiming to replace the subgraph strategy with directly
extracting blocks from a certain block height and then extracting their logs on
a case-by-case basis, e.g., depending on the emitted topics.

## Integrating an embedded database

Then, if you're looking at our code and the technical overview of neume's
architecture - you'll find that we're currently writing in flat files. So far,
this had the benefit of not committing to, e.g., a database schema. But it's
starting to bother me that we haven't figured out a good way of storing and
ordering data in neume.

For now, each strategy can write directly to disk into a flat-file. So,
essentially, we're appending to files, and the outcome is what I'm showing over
at TimDaub/temp-neume-data-dir-results.

However, this type of handling of new data has the problems:

- Duplicate entries aren't detected.
- We don't have a universally unique identifier, e.g., each track has an ID.
- We're generally not handling the "load" in ETL yet.

We can't generate an order for the data that we've successfully extracted and
transformed (e.g., we can't sort by "newest songs")

We still do not understand what type of database we want to use. However, we
know what we want: It has to be embedded, meaning it cannot ask for additional
installation or configuration of a neume network user. And it has to be able to
handle many writes - ideally concurrently and even within separate threads.

So to recapitulate, another unsolved problem in the neume network ecosystem is
integrating a fitting embedded database into the stack towards enabling
Hifilab's music-os use-case of showing "the latest tracks."

## Controlling the user experience during onboarding

Another problem is that we're currently doing a bad job controlling the
onboarding experience when finding and wanting to use the neume network.
Already we've had three or four seriously interested users that ended up being,
e.g., confused about our way of working with git submodules and npm packages.

In my opinion, this is not so much about teaching users how to do things. And
either is it about artificially simplifying the stack so that everybody can use
the tool. It may also not be about documentation. Rather it is about us as the
neume core contributors being able to control the user experience, meaning
that, e.g., we're immediately aware of issues when we push new code.

So this problem is about building scalable mechanisms for working together as a
team of async workers. E.g., can we run a nightly integration test for
neume-network/core that tests the entire user flow until finishing downloading
all the data? What problems did the user experience? Did they end up reporting
them to our GitHub repository? Did they find our Discord channel? How
well-received were our existing documents?

Controlling the user experience during onboarding means being vulnerable to
embarrassment and creating issues that you don't want to see publicly. But, on
the other hand, when we do this frequently and adamantly, we get great open
source software that changes people's lives because it is useful.

## Building Neume as an Organism

> A "Living System" is one that grows into its environment, by self-organizing
> around opportunities. Living systems can last for a long time, adapt well to
> change, and thus be highly successful. By contrast, "Planned Systems" tend to
> be fragile, poor at coping with change, and thus short-lived.

Neume must be built to become a living system or an organism. We can't just
ship computer code - that'd be unsustainable as it'd stop working the day we
stopped maintaining it. Rather, to truly build something useful, we must strive
to create the neume almost as an organism or a living system. One that can
adapt to the challenges ahead that can grow and shrink according to its
environmental factors: And one that tends to have more upside than
downside(anti-fragile): It should be default-alive.

Throughout countless meetings and working together for months now, we've been
trying to not only continuously ship the neume network software: but also the
neume network social architecture that details how we collaborate.

Specifically, e.g., the universally unique identifiers, the work on a track's
normalized schema, and properly parse and integrate soundxyz's edition data:
We've now created neuIP, a standards track allowing us to express and reflect
on consensus decisions in the community.

## Conclusion

With the neume network, we're on the brink of shipping useful software for
Hifilabs and the broader Ethereum and music NFT ecosystem. However, we're
facing several technical and social challenges, like not downloading Ethereum
blocks directly from their source, not having a clear database directive, not
controlling the user experience, and building a scalable social system.

At neume, we're capable of welcoming new contributors quickly through a staged
process of engagement where tomorrow, you could get paid for contributing. So
we don't only want to advertise the neume network as socially scalable: We also
want to do it and think that in its current form, the existing software
architecture can absorb more eager brains.

If you're a neume regular, we eagerly await your tickets to solve the above
problems. If you're new to neume and this read was interesting: Head over to
our Discord and say "hi!".
