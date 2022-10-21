---
title: Why neume's only tightly-coupled dependency must be an L1
date: "2022-10-21"
tags:
description: Reason for why we at the Neume Network are skeptical of the "Not Invented Here" Syndrom and why our only hard requirement are L1 APIs.
permalink: posts/why-neume-s-only-tightly-coupled-dependency-must-be-an-l1/index.html
---

Recently, I've heard the efficient optimizers' voices more loudly again. They come to the neume project, saying: "Oh, but you're downloading all block event logs from an Ethereum full node only to filter them down to respective music NFT events." And: "man, that's such a waste of time; why don't you just use our API or this subgraph here." And clearly, they have a good point: If instead of focusing our efforts on becoming autonomous with only using an ETH node as a hard requirement, we had concentrated on horizontally integrating with music NFT subgraph providers, then customers of neume like music-os would now have many more tracks for their users, and potentially we'd also have less code to maintain.

Additionally, I think it'd also mean that we'd save tons of money on cloud server costs, running infrastructure, and we could also maintain a much smaller team.

In fact, when I tell others that we're "reinventing" parts of the graph protocol, they almost sound offended and start asking very skeptical questions as to why we've decided to go down that path. So please let me outline some reasons why we've tried to steer clear of any hard dependencies for neume other than an L1 node, namely Ethereum mainnet.

## "Not Invented Here" Syndrome

Many software engineers will immediately point to a key fallacy in our domain, namely that of the "Not invented here" syndrome - what I almost make out to be a conspiracy theory of Saas companies secretly plotting their way into developer culture.

It states that teams tend to "chauvinistically" avoid buying products or services with external origins. It is usually a pejoratively used term by those who favor externally originated services.

And while there are a million arguments to be made about the improved scalability, modularity, separation of concerns, and economies of scale FOR using externally originating services, in this post, my goal is to make it abundantly clear that I see it as critical to almost entirely steer clear from these purposefully addictively solutions as much as possible in the neume case. And I want to say: You may not be able to fully comprehend this argument if you've never been in my shoes and proverbially "sat downstream of a service provider." But let me try to explain my case anyways.

## Adoption comes with future responsibilities

There's a reason why we use the term "adoption" when we're talking about adding new dependencies to our software. Speech-manipulative, I've actually tried using the term "adoption" over "addition" in this context as it more precisely carries the notion of responsibility that comes with additional dependencies. "Addition" may suggest that "subtraction" is commutatively possible (read: "easily"). But that's not precisely what a react.js developer would tell you about their front-end stack and the respective lock-in. They'd say that subtracting isn't the inverse of addition, and so while generally "integrating react" may be reversible - it's not as easy as "removing all react.js specific code previously added."

And so, rather, I think the term "adoption" is more appropriate here as adding a dependency then also means "taking care of it in the future." And for react.js, that means also following their kind-of-crazy roadmap towards ever-ongoing front-end "innovation." It also means being "OK," with Facebook pivoting to "Meta." And that although you initially had an idea of where the project may be heading - that over time, you stop having this sound understanding and that your supposed change sets towards adjusting the project to your use case may also be rejected upstream.

So adopting a dependency is anything but straightforward, and I'd actually argue that it can kill or strengthen your software product immensely. And let me be clear: this is not some theoretical example that happens on the fringes of the react.js roadmap: We have the famous "pejorative" fallacy in our software developer language because some are vehemently pro while others aren't. And it is also where I'd like to point out Charlie Munger's fat-tony quote, namely:

> Show Me the Incentive, and I'll Show You the Outcome

It's those that argue for the negativity of "Not invented here" that have something to sell - while it is those that see it skeptically who have been burned.

## Control is power

And this leads me to a simpler but first-principle-based conclusion of this dilemma. Yes, on one side, we're potentially wasting time "reinventing the wheel," and "absolutely," we'd be faster and more cash efficient by "just" using turn-key solutions to build neume.

But, on the other hand, at least personally in my career, I've come to observe the immense power of having control over the software and how it's being run. Control is power, control is money, and retaining control is compounding future power and cash flows. And although these are just a few words in sequential order, they couldn't be more significant in the context of open source or, generally, software development.

Let me ask you: Have you recently seen Apple's announcement to add consent tracker warnings in front of all app dialogs that mine a user's data? Have you seen what that did to Facebook's stock price? And do you realize that this may lead to Facebook's unheard-of pivot into the metaverse? Yes, that's right - control is everything: Billions of dollars if you want. And for Facebook and its bullies (the operators of Android and iOS), this is just the end of a year-long fight in which Facebook also attempted to launch its own phones for control and so on.

But my anecdote on this topic is maybe a bit different, and it has to do with my previous project rugpullindex.com, where the problem was of similar nature: And it's simply that sitting downstream of a busy upstream river "pollutes the water unreasonably" that it may end up affecting the product.

So much so that you may need to "begging for upstream changes" or that you're staling to innovate given properties like "water quality," quantity, or other unforeseen diplomatic issues. It can lead to a project's failure or the necessity to take the entire infrastructure, rearchitect it and start from scratch elsewhere.

## Neume's origin story is us agreeing with the "Not Invented here" syndrome

When I started neume, it was very much rugpullindex's crawler 2.0. A re-architecture away from the graph protocol, steering clear of implementing platform-specific services, only hard-coding the Ethereum node, and also not using any fragile SaaS offers "to speed up and simplify" things. I had to learn the hard way: By bug reports waking me on Sunday mornings, by endless discussions and frustration with upstream maintainers - by getting burned out.

With the neume network, I'm confidently giving away these key lessons within its architecture. And I'm also committing myself to not repeat my past mistakes by becoming addicted to software as a service middlemen.

We've built neume with composability in mind. It's free software, and technically it doesn't really "run anywhere." It's credible neutrally constructed, and I'm holding myself accountable for the relationship that it maintains with everything using it. Neume should be like Linux: You may regret using it because it won't function well all the time - but you should never regret adopting it because you find out later that its maintainers are playing a power game for the bucks in your wallet.

And that's why we're steering clear of any major dependencies but Ethereum mainnet or other potential L1s. It's because this extractive property of software services wanting to monetize is potentially transitive, meaning that if we were to integrate, e.g., the graph protocol, and they'd be "turning on monetization," then that'd affect us too and we want to avoid that.
