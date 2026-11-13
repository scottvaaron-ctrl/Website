---
title: StreamBot
summary: An AI host that runs a daily YouTube live show from one PC, with no software or API fees.
category: Media
status: Paused
role: Owner and builder
period: 2026 – present
tags: [AI agents, Media]
tools: [Python, Ollama, Kokoro TTS, OBS, YouTube Live API]
flow: [YouTube chat, Moderation, Local AI writes dialogue, Voice, OBS stream]
image: images/streambot-frame.jpg
imageAlt: A test frame of the stream showing Mochi, an animated AI host, beside a chat and story panel.
order: 13
---

## How it works

Chat comes in from YouTube and passes moderation. A local language model writes the host's lines one sentence at a time, a local voice reads them, and OBS streams the show with captions and an animated host named Mochi.

Some rules always apply: the host discloses that it is an AI, news comes only from verified stories, the host remains politically neutral, and chat input is treated as untrusted.

## Where it stands

Built; testing is currently paused.
