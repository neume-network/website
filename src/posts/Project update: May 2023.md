---
title: Project update - May 2023
date: '2023-05-29'
tags:
description: Project update May 2023
permalink: posts/{{ title | slug }}/index.html
---

Hello all. Time for an update on activity at neume.

May has been spent predominantly on building out indexing capacity for [Lens](https://www.lens.xyz/). We have now completed one third of the three month grant that we were offered and done a lot of thinking required to deal with the requirements of the Lens ecosystem.

In addition to this, with an eye on the future, we have been exploring the “network” aspect of “neume network”. At this stage we are thinking through how users could use neume to index for specific queries (rather than having to crawl for the whole dataset). This is likely going to be a key element of research and development going forwards, with some exciting work going towards how different neume nodes should communicate and sync with each other.

Finally, we also ran a [very success gitcoin round](https://explorer.gitcoin.co/#/round/1/0x12bb5bbbfe596dbc489d209299b8302c3300fa40/0x12bb5bbbfe596dbc489d209299b8302c3300fa40-20), in the Open Source Software category. At the time of writing the matching calculations still need to be ratified, but it appears that we will be in line for c.$600 in addition to the c.$2,000 raised from donations. Thank you so much to everyone that contributed. We have an [open discussion](https://github.com/orgs/neume-network/discussions/28) in our github forum right now to consider where the highest value use of those funds will be, please feel free to contribute to this discussion!

## Operations

- We have two active grants on-going, from Lens and Gitcoin, which have been 100% allocated towards development activity to date
- Our current proposal for month 2 of the Lens grant allocates some grant budget (20%) towards business development activity in the Lens ecosystem
- Our community conversation has now fully migrated to the [neume github discussions forum](https://github.com/orgs/neume-network/discussions), which is proving very effective to maintain open visibility as the project grows
- We have maintained the weekly cadence of our Open Office calls, though some weeks this has been done asynchronously due to irl limitations; for minutes from each, see the corresponding thread in our discussions forum

## Development workstreams

### 1. Generalise neume architecture to facilitate the indexing of Lens

We have made good progress on this stream, writing strategies for Lens and testing how this work with the current neume architecture. This has resulted in an updated schema, as defined within this [PR](https://github.com/neume-network/schema/pull/60) which has been merged into the codebase.

Inevitably we have met some expected challenges with regards to scale, there are of course many more records coming through from Lens than the other contracts that we have been previously indexing. Which has triggered an [interesting discussion](https://github.com/orgs/neume-network/discussions/24) within the community around the best way to focus the indexer and filter results.

The discussion has culminated in three potential options:

- Crawl for known frontends using Lens API. This is the fastest but comes at the cost of decentralisation.
- Crawl for known frontends using onchain events. This is slow (initial crawl will take 5-6 days to get upto speed).
- Crawl for audio files. This is slow too.

Our estimate is that there isn't much difference between 2nd and 3rd with respect to speed. The 3rd option is better because it will cover more area and opens up the potential for future collaborations with front ends.

So, we will start from the 3rd option and move towards 1st if needed.

### 2. Move neume to new database structure

After much discussion about the right database structure to output crawled data to, we have moved neume from levelDB towards SQL, as can be seen in this merged [PR](https://github.com/neume-network/crawler/pull/9).

In addition to this, we have started to look forwards towards the next version of neume where by we want to make it easy for new users to be able to run a node in an efficient and effect way (see discussion [here](https://github.com/orgs/neume-network/discussions/29)). This is still an area of active research as we progress neume towards its future network state.

### 3. Initial work into indexing based on an array of pre-determined wallets

Starting out with the goal described, this stream has expanded into a neuIP to create a more generalised methodology for neume users to be able to index only for the data that they require (rather than everything).

The goal of this month's work was to conduct research in this area and then propose a neuIP, which can be seen here: [neuIP-5](https://github.com/neume-network/neuIPs/pull/15).

Next steps for this workstream are likely to include:

- Create a proof-of-concept implementation of the crawler with the proposed changes. This could highlight one or more of the use cases proposed in the neuIP (e.g. derived subsets focused on a block range or set of wallet addresses).
- Introduce a second neuIP which builds on this by using Merkle Patricia Tries and subset schema identifiers for efficient subset reconciliation in neume.

A specific outcome will be an updated schema and reference implementation which can be used to generate subset schema IDs and derive subsets via constraints. This would also aid discussion by making the proposal more concrete.

An additional area that we are keen to add to the neuIP-5 discussion are ways to link datums across related schemas, like tracks and NFTs. Alternatively, related datums can be embedded to simplify access. Ideally we could support both use cases and let node operators choose the trade-offs that make sense for their use case.

# Next month milestone targets

Lens grant

1. Get the Lens crawl up and running
2. Onboard front ends in the Lens community to neume
3. Refine and further develop the specification of neuIP-5

Gitcoin grant

1. Assess proposals and assign projects to the gitcoin grant allocation
