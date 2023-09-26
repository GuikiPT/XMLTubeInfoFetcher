# XMLTubeInfoFetcher
XMLTubeInfoFetch is a lightweight Node.js app/function designed to effortlessly retrieve basic video and channel details from the legacy XML-based YouTube API, simplifying data access and integration.

* **Simple**, **Light** and **Basic** **to use**.
* **No API Key needed**.
* **Parse YouTube XML API to JSON**.
* **Easy to implement everywhere.**

## Table of Content
* [About](#about)
* [How can I use it?](#how-can-i-use-it)

## About
Some of you may be asking why this simple project is using an inappropriate YouTube API.

YouTube's current API sucks for me in these ways:
* First, the API need a `API Key`.
* Secound, there's a lot of [`Limits`](https://developers.google.com/youtube/v3/guides/quota_and_compliance_audits) to make requests to their API.
* Third, `Rate Limits` are ***Crazy***.
* Fourth, I need a `very basic API Wrapper`, just for `fetch basic information`, I already tryed the oficial wrappers on, but it's very stressful having to create an API Key for such a small project.
* Fifth, I started these project for an Discord Youtube Notification's Bot. If i use current v3 of YouTube API, I will spam and get `Rated Limited` every time for checking if there's a new video from a YouTube Channel. I tryed these a long time ago and I just forfeit. I watch a lot of popular Discord Bots getting rated limited by youtube and yeah.....

## How can I use it?
Like i sayed before, it's pretty simple to use it.

The entire code is an function, 
