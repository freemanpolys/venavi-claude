# Dev Team Opus GLM 4.7 - Setting up ZDI with Claude Code (English Translation)

**Original Language**: French (fr)
**Source**: Local file
**File Path**: `/Users/jgaglo/Documents/screenshots-and-records/dev-team-opus-glm4_7.mov`
**Duration**: 00:14:54
**File Size**: 337M
**Translated**: 2026-01-15 11:02:14
**Translation Backend**: whisper.cpp (translate mode)

---

## English Translation

[00:00:00] Hello, welcome to this series of videos in which I test the code agents to have an autonomous code agent like Copilot.

[00:00:12] So if you remember well, the last time I started testing Claude and I showed you a little how to use Claude Code with other models.

[00:00:30] So in the last video I had tested Claude Code Pro C, Claude Router with GPT 5.2 and that's the configuration that I showed you.

[00:00:45] So from my experiments, I felt that GPT 5.2 wasn't doing as well as Opus.

[00:00:55] I'm a little stupid when I launch Claude Code with Pro C. Maybe it's Pro C that doesn't support all the endpoints that Anthropic uses for Claude Code. But maybe that's it, I don't know.

[00:01:13] But instead of using 5.2 with Claude Code, I think it would be better to use Codex. Because that's what OpenAI is working on.

[00:01:26] So for the little anecdote, when I launch Claude Code in a code repository with 5.2 and I take a Sonnet or an Opus, the response of Claude is different.

[00:01:43] With the Anthropic models, the code says "Hello, I'm in the code..." which is in Go. So what do you want to add as a feature?

[00:01:52] When I do it with 5.2, it just says "Hello" in the code. You tell me, "Ah, the code, the models are ready to code." In the code base with Claude.

[00:02:04] With 5.2, you have to tell it that you are in a code repository and so on.

[00:02:11] So I said to myself, "I'm going to waste time using this method."

[00:02:14] So for that, I said to myself, "Come on, I'm going with Anthropic."

[00:02:22] It's true that I didn't want to spend money, but I didn't want to waste time either.

[00:02:31] So I took the subscription of $17 which is 21 euros of TDC memory. It was quite interesting.

[00:02:50] I started coding and so on, but the limit I had was five hours, one hour and a half of five hours in which we had a quota. And this quota, I explode it very quickly.

[00:03:04] For example, the capture that I made you here, by seeing there, I'm at 100%, I have 4 hours and 15 minutes left for the renewal of the quota.

[00:03:17] So that means that in 45 minutes, I exploded the quota that I had to rent.

[00:03:26] So that means that I explode the quota very quickly. So I was looking for an alternative, the solutions to be able to always work with the one of 20 euros, not to go to 100, to 100 dollars, 200 dollars and everything.

[00:03:41] When I would have the money, I would go to 100 dollars or 200 dollars, but hey, I already wanted to use this one.

[00:03:51] I have a lot of tracks. The second track, the first track that is easy to use is to have another model that also interacts well with Cloud Code.

[00:04:06] And on the social networks, we have the JLM7 model from ZEDI. We also have the Bitmax, but according to the polls and everything, apparently the JLM7.4 works a little better with Cloud Code.

[00:04:15] So I started on it. So I took the adjustment of 6 dollars per month. I took it during the holiday period, so that cost me 3 dollars.

[00:04:27] But hey, from next month, I will pay 6 dollars per month. I took the light. And already in the light, you see that we have three times the use that the plan that is there, the entropic plan.

[00:04:35] So that's nice. And to tell you, since I use it, I have never reached the quota. If it is on the tools, web search, reader and all that.

[00:04:50] Here, for example, I have never reached the quota. I am always in it. You can also take the second one, which is 15 dollars, which has five times more quota than the pro plan.

[00:05:04] I arrived from Entropiq and apparently it is faster than the light. It's true that the light is a little slow, but hey, it does the job.

[00:05:13] Concretely, that's what I display as the leaderboard. So I have the M4.7. It is very close to Opus in terms of code.

[00:05:22] Okay, below we have GPT 5.2. Okay, so to tell you that it is a serious alternative for Cloud Opus.

[00:05:28] So how do I use it? So simple Cloud. I just have an alias. I could have used Cloud also directly, but it's because I use the Dangerous Keep Permission.

[00:05:38] For those who don't tire me out, ask me for permission for the basic tools. Okay, behind I have hooks to block dangerous things. And I have a function.

[00:05:48] All this is in my zshrh. So if you are a bash, it will be bash.rc. And here I have a function that is very simple.

[00:06:05] It uses the environment variables in Tropic and rather puts my token that I recover in my interface. I have zdai. And here is the url.

[00:06:17] The endpoint of zdai to be used for Tropic.

[00:06:27] And then I launch the same command again, but this time I just change the path of the settings. Because by default, Cloud itself sees it in home.cloud/settings.dison.

[00:06:39] So I created one called zdai.settings.dison and I use it. I will show you later how all this is done.

[00:06:52] And specifically, how do I use it to code? I use Opus. That's why I cram my tokens very quickly.

[00:07:02] As the ITech architect, I use it with the framework spec kit, which allows me to make the specifications, the plan, plan the tasks and create the tasks.

[00:07:16] I do it with Opus like that. It is well squared, it is well done and all that.

[00:07:21] So, as it is well done, I show you a little, for example, it is a task. You see how well it is described. There are even bits of code to show you the implementation immediately.

[00:07:36] So the models, even if they are not top, even if the model is not top, by reading the implementation of the task it must be able to code.

[00:07:44] It is on this assumption that I left. So I stop there and now I pass my hand to GLM 4.7 from zdai like DevSenior to code the feature.

[00:07:54] So I use Ralf. I think you have heard about it. If you use everything that is VibeCoding, Ralf, it makes a loop until the task is done.

[00:08:05] So I make sure that GLM does the tasks and that the tasks are well done.

[00:08:12] And then I think of adding gmini to the team to design the front, but it is not done yet.

[00:08:23] So quickly I want to show you how it works to configure zdai. It is very simple to configure zdai in your tool.

[00:08:36] After having obtained the token, in the documentation there is Cloud Code which is there.

[00:08:46] When you come in, you have the Configure Environment Variable part. In this part you have the automatic part. With a helper, a tool that they made.

[00:08:56] You have the manual part that allows you to do that. So there you see, you just have to put your token, the timeout.

[00:09:05] Now if you don't want to do it manually, if you are on Mac, if you use the helper, I advise you to save your settings. You save it and launch the command.

[00:09:16] It will show you a prompt like that and it will configure things for you. I think it will ask you for the API key, something like that. And it configures the settings.

[00:09:30] So after when you have configured, you just have to do Cloud and it will use the API of zdai.

[00:09:38] But hey, as I wanted to use both of them, you see, so after it will configure the settings, I will rename them and I have a Cloud command that points to the settings that I want to use.

[00:09:52] So you can also manually add various environments to say ok you can use lm7, for sonnet use lm4.7 or for haiku use this one.

[00:10:03] But I advise you not to do it because they do it directly at home. If you want to do it at home, that's it.

[00:10:12] But they do it automatically in their API, which means that when they have other models, it will be automatic.

[00:10:20] On the other hand, if you do it manually, if there are other models, it is up to you to change.

[00:10:28] So to make sure that the command of your cloud points well on zdai, just when you launch to do /statue, you will see that you will have the URL that will be there.

[00:10:37] And you will see the information concerning you a little. In the cloud status, so you know that they type on the parts and addresses.

[00:10:49] The last thing to do is to configure their mcp-server. This mcp-server allows you to do web search, web read, they are there.

[00:11:02] So it's very simple to do too. I configured the vision too, I think that way you can pass images to cloud code.

[00:11:13] You can analyze the images, the videos. So how does it work?

[00:11:20] There is a quota on it, so you will see the quota. So it's always with the API keys, but they have... here is a bit of the command to do it.

[00:11:26] As you do cloud mcp add -s user it's the API key that has to be replaced. So you replace your API key, that's it.

[00:11:34] Now what it does, if you want, you can also do it manually. That's it, that's a bit of the config, your API key, etc.

[00:11:41] It's nice because how I use it, it replaces the cloud web search. So what it does is it writes directly in cloud.json.

[00:11:53] Which is the root of your home, your basic repertoire. So when I use the normal cloud too, it uses this web search, it allows me to decrease the number of tokens.

[00:12:05] That are used to search on the web. So that uses the ZDI tokens rather. So the search too, you have to install it.

[00:12:16] The other is the vision, so it's the same, the command is there. You just replace your API key and that's it.

[00:12:25] Web reader too. After searching, you have to read the content, so that's it. It's the same too.

[00:12:36] So it's these tools and this configuration that I do, and with the alias and the function, I get support between the two.

[00:12:47] That's how I use ZDI. I have other ways to decrease my use of tokens. I'm testing them. I'll share that with you in another video.

[00:13:01] And there, currently, we can see that I'm... There is ZDI which is working on the tasks created by cloud, with cloud code, with opus.

[00:13:11] On the spec kit, I use the spec kit, which allows me to have a pretty nice dashboard. You can see that the tasks are implemented.

[00:13:20] Currently, it's the one running. It's manual, so I have to go and test it to see if everything works well.

[00:13:29] But all of this has been implemented while I'm talking to you. So the unit tests, you see a little bit of that, that's it.

[00:13:39] It's everything that is created in a task by opus. And it's quite detailed so that any agent, read, and then code.

[00:13:47] Because the end of the code is already there, so I think it's a good workflow.

[00:13:49] That's what I wanted to share in this video. If you want to know the rest of this adventure, subscribe, subscribe.

[00:13:59] I will soon put a newsletter in place, so that I can push the things that I test from time to time before making videos.

[00:14:02] Because videos take time and energy to make. Thank you, see you later.

---

## Metadata

- **Original File**: `/Users/jgaglo/Documents/screenshots-and-records/dev-team-opus-glm4_7.mov`
- **Original Language**: French (fr)
- **Translation**: Automatic (whisper.cpp translate mode)
- **Format**: MOV (QuickTime)
- **Duration**: 00:14:54
- **File Size**: 337M

## Summary

This video explains how to configure and use ZDI (GLM 4.7) as an alternative to Claude Opus to reduce Claude Code usage costs. The author demonstrates their personal setup using Opus for architecture and planning (via SpecKit), and GLM 4.7 for code implementation (via Ralph Loop). They also show how to configure MCP servers for websearch, webread, and vision capabilities.
