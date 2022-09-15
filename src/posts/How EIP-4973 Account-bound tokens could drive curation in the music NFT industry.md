---
title: How EIP-4973 Account-bound tokens could drive curation in the music NFT industry
date: "2022-09-15"
tags:
description: EIP-4973 Account-bound tokens are consensual on-chain agreements that can be used as a base-layer for music NFT curation.
permalink: posts/{{ title | slug }}/index.html
---

_([Initially posted on the Ethereum Magicians
forum](https://ethereum-magicians.org/t/eip-4973-account-bound-tokens/8825/125))_

In the following post, I want to highlight a problem we've encountered in the
music NFT industry. As a quick aside, these days, I work as a tech lead on
[neume.network](https://neume.network), and we're essentially building a
socially scalable data pipeline to extract and augment on-chain data. For all
of the music NFTs hosted on Ethereum, in contrast to the Graph Protocol, at
Neume, we're not trying to make contract storage data more accessible. Instead,
we want to build a list of music NFTs that users can listen to via an app like
Spotify.

![](/images/curation-1.jpg)

As it's a lot of work to extract music metadata from smart contracts, today we
got some users' feedback, and to my surprise, it sounded like we had
unconsciously optimized for indexing the big curated music NFT platforms like
[sound.xyz](https://sound.xyz),
[beta.catalog.works](https://beta.catalog.works), [zora.co](https://zora.co),
and [mintsongs.com](https://www.mintsongs.com) V2.

But truly, this was never our intention: But I was caught off guard by the user
feedback, and so this post is somewhat a reflection on what happened and led to
problematic emergent effects.

![](/images/curation-2.jpg)

See, for [musicos.xyz](https://musicos.xyz), as it's an audio player like
Spotify, we naturally wanted to index the best possible and probably also most
popular platforms. So when starting the project, we intuitively went for the
popular ones - those that we knew provided nicely sounding songs.

And when they launched musicos a few days ago, I suddenly found myself
confronted with the following user feedback questioning the credible neutrality
of the Neume Network indexer. Here's what users said:

![](/images/curation-3.png)

![](/images/curation-4.png)

Additionally, an artist I am I fan of had this to say on
[Twitter](https://mobile.twitter.com/thepark/status/1568127129203920896):

![](/images/curation-5.png)

## Welcome to the Machine... The "Attention Economy"

So let us unpack what is being discussed here. In my own words: Guspy,
Supersigil, and thepark.eth are all asking for their tracks to be listed on the
music-os app we had just released. And they did so by pointing out an
interesting dynamic in the music NFT space. guspy mentions that the music they
had minted through a custom contract on
[manifold.xyz](https://www.manifold.xyz) isn't showing up on music-os. They're
saying that having their contract being indexed is posing a challenge: And that
instead, had they minted their song on Catalog, Sound, or MintSongs, then it
probably would have made it into music-os.

Extrapolating their statements here, too, we can reason that any track that
gets lots of exposure through a music player may fare better on first and
secondary sales. So potentially, for guspy et al., having their songs exposed
on music-os can potentially mean an improvement in income. Or anyways that
their songs are listened to at all.

In the post by Supersigil below, they help double down on the argument, namely
that artists need to be given the option to "be their own platforms" and that
hence the favoritism of Neume Network to implement the big music NFT platforms
first is a challenge to all artists hosting independent contracts.

There's also an interesting insight in their posts: Namely that the platforms
are curated by genre or type of music. And so, despite some artists' work
having the potential for popularity - they may never end up being exposed to
larger audiences given the moderation policies of the respective platforms.

## Experimenting with Music NFTs

And there's actually more context to unpack here: Historically, the big
platforms like sound.xyz and catalog.works have been heavily curated - or at
least that's how their music sounds to my ears. I can back this up with visitor
data, too, as I had played around with a minimalist website that allowed users
to listen to sound.xyz and catalog.work's songs on a website I called
[tracks.lol](https://tracks.lol).

For a brief moment in time after its release, it gathered a notable listener
community and was widely shared on Twitter despite the website having any
meaningful web design or other functionality. Below's a screenshot of the page,
or you can see it yourself by visiting: [tracks.lol](https://tracks.lol):

![](/images/curation-6.png)

And what my intention had been here is that I had been experimenting in the
true sense, and so I carefully controlled the website's utility to test the
music's popularity.

As you can see, there weren't any fancy animations - no marketing website to
convert users. All there was a single page that played music from sound.xyz and
catalog - with the hypothesis being that people would still like this arguably
"shitty" website because it played nice music! And oh boy, did they! Here's a
screenshot of my plausible.io tracker, and you can access the numbers yourself
by clicking the following link
[plausible.io/tracks.lol](https://plausible.io/tracks.lol).

![](/images/curation-7.png)

So clearly, it couldn't have been my sick web design skills or the amazing
utility you got from the website's controls. The reason people briefly shared
the page was the music on it was nice.

And let me reassure you, this is also the qualitative feedback I'm gathering
from anyone that I manage to expose to sound.xyz and catalog's tracks! They're
doing a great job in properly curating NFTs to seed the initial consumption
network.

And I'm capable of negating that argument, too: Where if you'd built a website
that focuses on listing the highest grossing NFT sales on OpenSea, you'd end up
not with an aesthetically pleasing newsfeed of NFTs: You'd just get a seemingly
random list of Bored Apes, and, in fact, I can prove this to you right away by
asking you to visit: [context.app/trending](https://context.app/trending) where
at the time of writing, the four latest updates in the feed are apes - boring!

![](/images/curation-8.jpg)

## Curation, a double-edged sword

But despite curation platforms like sound.xyz and catalog.works accelerating
the music NFT industry in the first place, there is a sort of tragic story in
this utility provision too, which are the problems pointed out today by
thepark.eth, Supersigil, and guspy: Namely, that while curation can excel an
artist's work, it's also gatekeeping other artists from putting their latest
tracks in front of a larger audience. And it discriminates against genres.

In the end: This capability to curate who and what song is gonna be popular
comes with a lot of influence, and so: curating, gatekeeping, and/or censoring:
Those actions create power structures. Structures that are actively being
misused today to seek further self-serving profit.

It is actually well documented, and just a recent prominent example is
[CoryxKenshin's rebellion about Youtube's arbitrariness, favoritism, and racism
in moderating potentially harmful
content](https://www.youtube.com/watch?v=GaHcnPDcUOE). It highlights a few
faults.

![](/images/curation-9.jpg)

The fact that those who moderate do so opaquely - with non-consistent guideline
interpretation. With potential implicit bias and little public accountability.
Governance, as we say in the crypto-sphere, doesn't seem to be a meaningful
keyword.

But OK - what has any of this to do with EIP-4973 and Account-bound tokens? And
yes, at least for now, this post has been overfocusing on the **problems** and
not a solution. It's a principle I work by called "problem-driven development,"
and so now, since we're sufficiently informed, let's discuss a potential
solution.

## Thesis first: "Broad commoditization of infrastructure creates newfound equity"

A thesis I have been pursuing with
[rugpullindex.com](https://rugpullindex.com), the Neume Network, and now also
with Account-bound tokens is how infrastructure provision and making it broadly
available to any players in a market can produce a wealth-transfer or generally
broader equity. With rugpullindex.com I've seen this because others built
mobile apps based on my API. With Neume Network, we'll see this effect emerge
as developers are capable today of replicating the
[musicos.xyz](https://musicos.xyz) experience by using our GPL-3 licensed Neume
Network crawler or by simply using our data set at
[neume-network/data](https://github.com/neume-network/data).

As pioneered by Sabre and Amadeus in the airline industry, by commoditizing and
co-owning the infrastructure - namely the database that holds all future
flights - similarly, we're able to create competition around the supply of good
music NFT metadata offerings: And we postpone what Ben Thompson calls
"[Aggregation Theory](https://stratechery.com/)," an effect of profit-seeking
and monopolizing a market's supply side.

But enough with the theory: Simply put, what the above means is that EIP-4973
can make the data structure for consensual music curation available to anyone
with a wallet using account-bound tokens to express agreements on-chain. And it
simultaneously removes relevancy from the big curation platforms like sound.xyz
and catalog. So how would it work?

## Consent-based Music Curation using Account-bound tokens

See EIP-4973 is a truly peer-to-peer contract in the sense that no single
individual or group has different privileges when interacting with the
contract. This isn't true for many contracts, by the way! Most EIP-20 contracts
implement permissioned minting, and so do EIP-721 tokens to preserve artificial
scarcity.

But EIP-4973 doesn't implement such hierarchical logic. It's flat, and instead,
for two addresses (EOAs or contracts), if both addresses provide a valid signed
message, then an `Agreement` over a document hosted at `string tokenURI` may be
etched to the chain.

![](/images/curation-10.jpg)

That storing of a consensual agreement can be done two ways - and surprisingly,
it's NOT done through minting, but instead, we implement two bulky functions
called `function give` and `function take`. Here's a drawing of how they work.

![](/images/curation-11.jpg)

- `from` can `give` an ABT to `to` and is the sender of the transaction.
- `to` can `take` an ABT from `from` and is the transaction's sender.

I'm linking the reference implementation code snippets below in case you want
to dive deeper. But for continuing to read this post, it's not necessary to
understand them deeply.

- [`function give`](https://github.com/rugpullindex/ERC4973/blob/1c8d612d78739c2f7bd8cae95be808bcbf3a1cae/src/ERC4973.sol#L78-L88)

- [`function take`](https://github.com/rugpullindex/ERC4973/blob/1c8d612d78739c2f7bd8cae95be808bcbf3a1cae/src/ERC4973.sol#L90-L100)

To clarify: The result of both of these functions is that a new token is minted
to `address to`: And their validation method is similar. Namely, both need two
valid signatures of `string tokenURI` from `address from` and `address to`.
Their difference is who represents the active part on-chain and who just
provides a signature. The figure below outlines the difference in both cases:

![](/images/curation-12.jpg)

For `function give(address to, ...)`, `address from` must wait for `address to`'s signature to arrive and can only then send the transaction on-chain to
cement their agreement. Whereas in the case of `function take(address from, ...)`, `address to` takes the ABT from `address from` and hence has to include
their signature.

So these primitive functions have been deliberately called "give" and "take."
It's because, in the World of Warcraft universe, where Soulbound items were
first implemented and since this in-game metaphor has become EIP-4973's
baseline, players could also "give" and "take" certain items.

In case a player completed a quest, the NPC often "gave" the player items: But
it was at the player's discretion to preserve them in their bag. Likewise,
although this challenges the "consent" metaphor, players could "take" items
from a dragon or firelord they had slain earlier.

## On-chain consent agreements for music NFT curation

So going back to our initial story of how EIP-4973 Account-bound tokens can
help the music NFT industry's curation problem, here's what I'd like to say:

Right now: It is a one-way street where artists are practically dire for having
their tracks minted on popular curation websites. It's also a problem as the
infrastructure for curation is proprietized - so assuming this moat strengthens
further over time: It'll also negatively raise the bar for unestablished
artists to publish.

And we must acknowledge that the above-mentioned dynamic won't go away
overnight too. Instead, given our thesis that commoditizing infrastructure can
break markets, I think by using EIP-4973 for consensual on-chain curation of
music NFT playlists, I think we could achieve more equitable outcomes if more
people could become curators.

It is because standard adoption can initially level the playing field of access
to attention. Instead of one website being able to promote their tracks and
build potentially proprietary solutions, with EIP-4973, we have a primitive
that can express bidirectional agreements between curator and artist.

![](/images/curation-13.jpg)

And sure, we could implement contracts where the curator is in charge of
administering the listing. But I think that's an unwise design, given how
reproducible content is curated nowadays. Rather, if the authors and the
curators mutually agreed on which tracks end up on what lists - I believe this
would carry a higher signal when compared to curator-only feeds.

Additionally, by making the curation infrastructure usable by anyone, a greater
degree of competition would improve outcomes and reduce the risk of a single
party monopolizing.

Wide-scale adoption of this standard would incentivize indexers and other NFT
infrastructure providers to implement its interfaces and make the on-chain data
symbolizing publicly-visible agreements broadly available.

If you're deep in the traditional music industry, you probably know how
complicated moral rights can get - and here's a standard that can potentially
solve some of this domain's questions.

So how would this end up looking? Here's a sketch:

- Similar to [presentmaterial.xyz](https://presentmaterial.xyz)'s on-chain [curation contract](https://etherscan.io/address/0x6422Bf82Ab27F121a043d6DE88b55FA39e2ea292#code), we should come up with a standard agreement JSON template that the curator and artist can collaboratively sign.
- The active part in the agreement (who sends the transaction), would then upload the agreement on a network like IPFS, where the JSON's context-addressability is guaranteed
- They'd send over the agreement to the passive party where it gets signed
- Once the signature is back at the active part: They can start etching the agreement on-chain. The smart contract and the Ethereum consensus algorithm check the validity of both parties' signatures, and if they're valid, the Account-bound token gets emitted, and an `event Transfer(address from, address to, uint256 tokenId)` is sent.

Now, it'd be great if, additionally, a "curation release signal" could be
emitted that clarifies to music NFT indexers when a new song is released. And
that could happen after having reached an agreement between the artist and
curator.

Remember, minting an NFT is not laying claim to license your work permissively.
An artist retains all copyright, and so technically speaking, unless there's a
specific agreement put in place, reproduction of a music NFT is simply a legal
grey zone many seem to tolerate for now.

Hence this whole essay on chainifying two parties' agreement - Since the
`string tokenURI`'s content would detail the conditions under which curator and
artist have decided to collaborate to release the NFT.

For the curator, there's no clarity on whether they're allowed to reproduce the
artist's song on their site. And for the artist, there's transparency regarding
what can be done with their work and what can't.

So that's it, that's why EIP-4973 Account-bound tokens could drive curation in
the music NFT industry. Anyways, this is a very long post, so I'd now like to
start concluding it.

## How EIP-4973 can be used for music NFT curation

In this post, we're documenting the problems of the emerging music NFT industry
and how the aggregation of music NFT supply creates suboptimal outcomes for
independent artists. Our thesis is that well-curated media content is useful
to anyone but that it can also easily lead to power abuse.

To combat this potential negativity and to "break the curation market," our
thesis is that the commoditization of infrastructure can help level the playing
field. And specifically, it means that by mainstreaming consensual content
curation, a new ecosystem of dApps could emerge that serves curators and
artists alike.

EIP-4973 Account-bound tokens are the basis for expressing consensual
agreements on-chain. Their lack of permissions in minting makes them ideal to
be applied broadly and in a true peer to peer fashion.
