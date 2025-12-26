# Full Tutorial: Build an AI Life Co-Pilot with Claude Code in 25 Minutes | Alex Finn

**Channel**: Peter Yang
**Duration**: 25:50
**Published**: September 7, 2025
**URL**: https://www.youtube.com/watch?v=D0nDWQdN3F4
**Transcribed**: December 26, 2025
**Transcription Backend**: OpenAI Whisper (base model)

---

## Transcript

[00:00:00] What Claude Life is is an entire operating system basically for my life.

[00:00:06] Every Thursday I wake up, I type in slash newsletter researcher, it writes me a draft,

[00:00:12] I then go in the draft, edit it, make it my own, and say it's been a couple hours a week.

[00:00:17] It's basically a UN Claude, right? I built this startup.

[00:00:20] Exactly, being Claude, my $200 a month employee Claude code.

[00:00:24] Whatever task you do during the day, think how can I implement AI into this task?

[00:00:30] I think one of the most important skills you can have in 2025 is...

[00:00:39] Okay, welcome everyone. My guest today is Alex, a friend and fellow creator,

[00:00:43] and Alex has this insane setup where he uses Claude and cursor to do research,

[00:00:48] get a life of ice, and basically automate all his work and life.

[00:00:52] So I'm really excited to get him to show us his entire system today

[00:00:56] and talk about how you can set up something very similar.

[00:00:59] So welcome Alex.

[00:01:00] Good to be here Peter, I've been following your content for a very long time,

[00:01:05] so I'm happy to be on the show.

[00:01:06] So let's just dive right into it, let's talk about Claude.

[00:01:09] Like, what is it and what do you love so much about it?

[00:01:14] So there are a million different AI coding tools out there.

[00:01:17] They're kind of like your mainline AI coding tools like cursor,

[00:01:21] like Claude code, and they're like more prototyping tools like VO,

[00:01:24] VZero, Boll, Replicate.

[00:01:26] Claude code is my favorite.

[00:01:28] It's been my favorite since launch back, I think like in February it came out.

[00:01:32] It is the best, it's the most comparable to cursor, so it's basically an entire

[00:01:38] AI tool that builds you full scale complex code.

[00:01:42] So it can build you entire apps.

[00:01:45] I personally run it inside a development environment,

[00:01:48] so I can see the code run as it's being built and all that.

[00:01:52] But it is an AI agent.

[00:01:54] It's actually in honesty, just an AI agent period,

[00:01:58] but it's one they market as a code builder.

[00:02:00] So as we get later, I'll show you how I use it for things other than coding.

[00:02:03] But it's basically an AI agent, they market as a code builder.

[00:02:07] Yeah, and it's interesting to see how

[00:02:11] Claude code and cursor are kind of on this collision course,

[00:02:13] because you've literally like set up Claude inside cursor.

[00:02:17] So maybe you can show us how to do that, and also why you prefer it over the command line

[00:02:23] interface.

[00:02:24] Yeah, for sure.

[00:02:25] So let me share my cursor.

[00:02:31] Here we go.

[00:02:32] So this is cursor, it's just obviously a fork of VS code,

[00:02:36] but the one added benefit is this AI agent they put in here.

[00:02:41] But I don't like this AI agent as much.

[00:02:44] I don't think it's as intelligent as Claude code,

[00:02:47] which what I did here is I opened up my terminal control till day if you're on Mac.

[00:02:53] And basically all you need to do to install Claude code is you go on

[00:02:57] like,

[00:02:58] inthropic.com slash Claude code,

[00:03:00] and you paste in the command,

[00:03:02] that installs Claude code and boom,

[00:03:04] you have Claude code good to go.

[00:03:05] It's now in your terminal.

[00:03:07] And so it's made to run in any terminal.

[00:03:11] They didn't really intend you to run it in cursor, but that's what I do.

[00:03:15] Once you have install just type in Claude and enter,

[00:03:17] and it's good to go here.

[00:03:19] It just hit proceed.

[00:03:21] And basically I now have an AI agent running in my terminal inside cursor that can write me code

[00:03:26] and do whatever I tell it to do.

[00:03:28] And I think we're going to boom me away with your Claude stuff.

[00:03:32] It's your Claude live projects, right?

[00:03:34] So can you open it up?

[00:03:36] Let's do it.

[00:03:36] So I put out a video,

[00:03:40] a few weeks now,

[00:03:42] about how I use Claude code to run my life.

[00:03:46] And I basically have been searching for a while.

[00:03:49] I knew Claude code was unbelievably powerful.

[00:03:52] I also knew that there were things it could do outside of coding that would be amazing.

[00:03:59] But I was kind of searching for those use cases.

[00:04:03] Because it's at its heart, just an AI agent, right?

[00:04:06] It's not, it's marketed as a coder.

[00:04:11] But really all it does is just do whatever you ask it to do.

[00:04:15] And so what I came up with over these last couple of months,

[00:04:19] I call Claude life.

[00:04:21] And let me pull that open.

[00:04:24] And basically what Claude life is, is an entire operating system basically for my life.

[00:04:34] And I have an entire system in it.

[00:04:38] I have a system of brain dumps, which are basically just notes I write and ideas I put out.

[00:04:44] I have things for YouTube, for my newsletter, for daily briefs or daily run downs of my life.

[00:04:50] These are all basically kind of automated processes that Claude code can go through with just a

[00:04:57] slash command. And for those who don't know at home, a slash command is a command,

[00:05:02] a custom command you can make by doing slash something.

[00:05:06] And so I built a whole bunch of slash commands that are totally custom that do specific things.

[00:05:13] I have one that tracks my mood.

[00:05:15] I have one that tracks a daily check-in.

[00:05:18] Every night I do a daily check-in where I ask what I did that day and tracks what I did that day.

[00:05:23] I have like a weekly run down one.

[00:05:25] And my favorite, which is the newsletter researcher.

[00:05:29] And what that is is I write a weekly newsletter.

[00:05:33] I have, as you are, you're a newsletter writer as well.

[00:05:36] I have 40,000 subscribers on my sub stack.

[00:05:40] I've been writing this newsletter for close to 40 years now.

[00:05:44] And it is one of the most rewarding content channels I have.

[00:05:50] But it's also one of the most exhausting, right?

[00:05:52] It takes up a lot of time as I write all my own newsletters.

[00:05:56] I do all the research all that.

[00:05:58] And so I wanted to find a way.

[00:05:59] A lot of people when they get to high levels of content,

[00:06:02] they kind of hire out the newsletter.

[00:06:04] They no longer kind of write the newsletter.

[00:06:06] They either hire out researchers or hire people to write them.

[00:06:09] I don't have any employees.

[00:06:10] I do everything myself.

[00:06:12] And so I wanted to come up with my own AI employee that does that.

[00:06:17] And so I built the newsletter researcher in my life OS as well.

[00:06:23] Yeah, so let us kind of ask you to go deep on that one.

[00:06:26] Yeah.

[00:06:26] Yeah.

[00:06:27] So I like step by step.

[00:06:29] Yeah.

[00:06:30] I have in here a folder in my life.

[00:06:35] So this is just a folder on my computer.

[00:06:38] This is a folder in my computer I opened up inside of cursor.

[00:06:42] And inside this folder, I created a bunch of subfolders for notes I take for

[00:06:48] brain dumps every day I go and I just brain dump whatever's on my mind.

[00:06:51] And then I have a newsletter folder.

[00:06:53] And in this newsletter folder, I have a file, a markdown file,

[00:06:56] everything needs to be marked down files called newsletter links.

[00:06:59] And I put in a bunch of my important links and competitors,

[00:07:02] including yourself that I think make fantastic newsletters.

[00:07:05] These are these are basically the only newsletters I read on a regular basis.

[00:07:08] So I put them all in here because I really like them and I'm inspired by them.

[00:07:13] And Claude code has the ability has a tool to do web searches and read the internet and

[00:07:20] scrape websites. And so I set up a slash newsletter researcher command which

[00:07:27] is all done with a prompt. You can put in a prompt and say,

[00:07:29] I want a newsletter researcher build the slash command, do this.

[00:07:33] And I can give you the prompt so you can put it, it's a pretty lengthy prompt.

[00:07:39] But basically it says, hey, go into my newsletter links, read all the newsletters in there,

[00:07:46] see what their latest newsletters are, see what the topics they're talking about are,

[00:07:52] see the language they're using, what the news are, anything important going on in their newsletters,

[00:07:57] then find what's trending, what's been talked about multiple times, what might fit in with my brand,

[00:08:03] and then write me a newsletter draft in my voice.

[00:08:08] And so if I go here and I go slash newsletter researcher

[00:08:11] and hit enter on that, the slash command will actually spin up a sub agent.

[00:08:18] The sub agent will now go and read newsletter URLs from the newsletter links.md which is this.

[00:08:29] It's going to fetch and analyze the posts from these newsletters. So it's going to go on

[00:08:33] adjusting well, she's Dan Coz, yours, Sahil Blooms, it's going to instantly kind of read all

[00:08:38] your past newsletters. It's going to identify trending topics and patterns. So if all you guys

[00:08:44] are talking about the same thing, you'll identify that, it will then create a newsletter draft

[00:08:50] and subject lines in my voice, right, because it's going to read through my newsletter.

[00:08:56] So read it in my voice and then create a draft in my voice and put a draft in here and as a

[00:09:02] folder with the drafts and for every draft that's written. And so now I sent my newsletter out

[00:09:06] on Thursdays. Every Thursday I wake up, I type in slash newsletter researcher. It writes me a

[00:09:13] draft, I then go into the draft, edit it, make it my own and saves me a couple hours a week.

[00:09:18] So where is the prompt? Do you have any file somewhere?

[00:09:22] I do. Let me show you. Yeah. And so I'll share this doc link. Let me make this bigger.

[00:09:31] Also, it shows the use you can share it with your audience, but each one of these, so I have

[00:09:35] I think five different slash commands I use for my life OS. Let's go to the newsletter researcher

[00:09:42] just so you can see how that works. Here's the prompt. Yeah. Creating newsletter research

[00:09:48] just that analyzes competitor newsletter and rights drafts. So it builds the slash command,

[00:09:53] right, the slash newsletter research slash command, which is all, it's just a, a markdown file

[00:09:59] in your directory that is specifically for slash commands. And then it builds the sub agent.

[00:10:04] So a content researcher sub agent that researches you, literally you your newsletter.

[00:10:11] And then a newsletter writer sub agent that then takes the research from the content researcher

[00:10:18] sub agent and writes the newsletter draft for me. And it builds it all out. Pretty, pretty simple

[00:10:26] prompt. And what do you put this prompt in your file? Like, is it part of the slash command?

[00:10:32] Oh, what do you paste the prompt into? Yeah. Just give it to Claude. Just give it a copy, paste it,

[00:10:39] go into Claude code. Right. So the setup is pretty simple. Yeah. I'll show you.

[00:10:45] So the setup for all this simple. Create a new folder on your computer. I do it in my documents

[00:10:50] folder. Yeah. Inside that include whatever context you want. So if you want to do what I did,

[00:10:57] which is the newsletter researcher, make a new folder in that directory for newsletter.

[00:11:02] Then create a markdown file with newsletter links, paste all the links in.

[00:11:07] And then open up Claude code and paste in that prompt from that document, which basically says,

[00:11:12] hey, set up this slash command and sub agent. Okay. Paste it in, hit enter, and Claude code goes in.

[00:11:18] And I think you can see here, yeah, it builds its own directory for commands. And it builds its own

[00:11:24] directory for sub agents. Oh, nice. That's it up for itself. Oh, that's interesting. Okay, so

[00:11:30] they probably save the newsletter research or prompt into commands, right? In that file.

[00:11:35] Well, it takes a prompt and sets up the command. So let's go into newsletter. So it's not

[00:11:42] directly saving the prompt. It's just taking the prompt and taking the instructions from the prompt

[00:11:48] and setting up its own instructions inside the command's file. Dude, can I see the news?

[00:11:54] Can I see one of the sub agents? Like is it like another prompt? Like the newsletter writer or,

[00:11:58] yeah, so yeah. So newsletter writer, your Alex Finn newsletter ghost writer, specializing in

[00:12:04] creating engaging newsletters at blend AI insights, creator, growth strategies, and personal stories.

[00:12:09] And here's my voice. Here's how my, so I read and listen, I didn't write any of this. This

[00:12:15] all Claude code wrote this entire file. This is completely automatically made. What it did was

[00:12:20] it read my newsletters, right? It went to Alex Finn. AI, read my newsletters, and then to

[00:12:27] determine my voice and then created all these tasks and structures and everything by itself based

[00:12:32] on the prompt I showed you. Yeah, that's pretty wild. So basically it took your master prompt to make

[00:12:38] all these like command and sub agent sub folders. And for each one, it is wrote its own prompt

[00:12:42] based on the links that you give it. Right? That's basically why it did. It basically prompted itself

[00:12:47] to build its own structure of what it needs to do. Yeah, that, that is wild, dude.

[00:12:53] So, but, um, but of course you have to audit this. Read, read it. You don't just copy and paste

[00:12:59] whatever it come up with to your new newsletter. Yeah. AI is not at the place yet where you can

[00:13:06] say write this and then you copy and paste it in press send. It's just not there yet. It still

[00:13:11] feels a little too robotic and you can prompt it to a point where it feels more human.

[00:13:19] But I don't consciously feel good just copying and pasting AI content and

[00:13:23] hitting send. I wanted to feel my personal. I wanted to feel my own. So this is just the draft,

[00:13:28] right? I can show you what the draft looks like. Right? It gives you a few subject line options,

[00:13:33] builds you a draft. I then take the draft and I pretty much gut it, but then use the template

[00:13:39] in the structure to put in my own writing. Yeah. Yeah. I mean, I do this whole thing too,

[00:13:46] except I use cloud projects. It's love cloud code. The problem projects like I have to mount

[00:13:51] it pasting audit content and the research I do and I have to mount it how I like what topics I'm

[00:13:57] interested in writing about. Right? So it still works, but it's like way more manual than what you've

[00:14:02] set up here. Yeah, it's a lot more automatic. You can set up a lot more custom processes like

[00:14:09] because in cloud projects, which I still use projects for a lot of different things, but you can't

[00:14:13] set up slash commands or sub agents or things like that. And it's also not managed through your

[00:14:20] computer. Right? These are all local files. And so if I want to do a brain dump, I literally just

[00:14:26] open up a new file and start writing. Right? And so that's another advantage of this as well.

[00:14:31] And how did you like do you have a lot of stuff in here, man? Did you just like build more and more

[00:14:35] sub agents and slash commands over time? Or how did you do it? Yeah, anytime. I think one of the

[00:14:40] most important skills you can have in 2025 is being able to automatically during whatever task you

[00:14:50] do during the day, think how can I implement AI into this task? Right? The more you can have that

[00:14:59] kind of reflex as you work, the better you'll be and the more like tools and things you'll come up with.

[00:15:08] And so the reason why you see so many commands and sub agents here is as I'm working throughout the

[00:15:13] day, no matter what it is the task I'm doing, right? I have my list here and my notebook of all the

[00:15:18] tasks I got to do today. As I go down the tasks, I think, how can I set up a cloud sub agent that

[00:15:25] makes this easier? How can I set up a slash command that makes this faster? How can I use GPT-5,

[00:15:30] you know, to bounce ideas for this task to make it more efficient or whatever it is? And that's

[00:15:36] why you see so many commands and sub agents here is I'll be doing something. I'll be like,

[00:15:40] man, what are my goals this week? Why don't I just run this through cloud and I can automatically

[00:15:44] have it prompt my goals for the week? And that's why I see a sub agent for that here.

[00:15:49] Okay. So this is a wrap up this newsletter researcher. It looks like it did write a draft, right?

[00:15:56] Yeah. So let me say, let me say, enter on here. Let's do it working. So 8, 11, so yeah, this is the draft.

[00:16:04] So let's see, why data beats gut every time. Last week I was talking to a creator with 50K

[00:16:10] followers who told me something that stopped me cold. I've been posting for two years myself no

[00:16:14] idea what works. This hit different because 18 months ago that was literally me. And it actually

[00:16:19] took back story about myself, the MongoDB moment. So I worked at MongoDB before I quit to do

[00:16:27] content and AI full time. Okay. And it included one of my stories in there. And it talked about how it

[00:16:34] led to me getting a following and building creator, buddy. And here's what's wild 95% of creators.

[00:16:40] I talked to our still flying blind AI integration gap that's costing growth. And it includes all

[00:16:45] this in here. And basically what it did is it probably saw you were talking about the creator economy.

[00:16:50] It probably showed Danco was talking about coming back from challenges and things like that in

[00:16:55] an awakening moment. And it kind of included all that in the newsletter draft. Yeah, that's great

[00:17:02] stuff, man. Okay, so let's wrap up this call life thing by looking at your slash commands and just

[00:17:09] do like a quick high level walkthrough of what each one does. Absolutely. So let me see. I'll make

[00:17:15] this even bigger for you here. Okay. Yeah. So I've done a lot of things with cloud sub agents and

[00:17:22] slash commands. A lot of different things in here. So I have a brain dump analysis. And so what I do

[00:17:28] every day is I have brain dumps in this folder. And I'll put in different brain dumps for my days

[00:17:34] in here. And I'll open up a markdown folder and just whatever's on my mind that day, whatever kind

[00:17:38] of thoughts opinions I have like today, I'll be I'll probably have a brain dump. And I'll be like I

[00:17:43] did a YouTube interview with Peter, YouTube interviews are really cool. Like you get a lot of

[00:17:48] information. I have it. Maybe I should do more YouTube interviews on my channel. Y'all I'll just

[00:17:52] brain dump things like that. Okay. And then I run the brain dump analysis. And let me make this

[00:17:59] a little bit smaller here. And basically what it does is it goes through it scans my brain dumps,

[00:18:06] my recent brain dumps I think from the last week. And it looks for insights and patterns

[00:18:11] recurring themes, evolution of ideas over time, key questions and breakthroughs hidden connections

[00:18:17] between thoughts. Yeah. In the goal of this is to find new pillars for my content. You know,

[00:18:25] I'm a believer in, you know, really good content and content creators have five to 10 pillars.

[00:18:34] And they just drive those pillars over and over and over and over and over again. Right? Like one

[00:18:40] of my pillars is anyone can build apps with AI and start a business that gives them financial freedom.

[00:18:46] Yeah. And I just include that pillar in my content over and over and over and over and over and over

[00:18:51] and over again. And so what this slash command does is help me find new pillars. It reads all my

[00:18:57] brain dumps and goes, you know, your thought you had here, you should make more content. Got it.

[00:19:02] So, so yeah, it actually looks at your brain dumps for the past like 30 days with my not just

[00:19:06] past day, right? Like it tries to find patterns over time. Yes, it analyzes all brain dumps from the

[00:19:11] last 30 days and tries to find patterns. Okay. That's awesome. Yeah. All right. Let's quickly go

[00:19:17] over some other ones. So I have a daily brief in this basically prompts me for prompts me to

[00:19:23] questions like how many followers do you now have? How many subscribers on YouTube do you have?

[00:19:28] What's your MRR? What's your ARR? How are you feeling? You know, what was a big challenge you had?

[00:19:33] And ask me those questions. I answer them and then it builds me a dashboard, which let's see here,

[00:19:40] where's my daily, my daily brief. Yeah. It basically goes in, actually, you know, it's not daily

[00:19:47] brief. It's a, is it under metrics? There's a weekly dashboard. It is that weekly dashboard. Yep.

[00:19:54] Yeah. And it gives me my, and it looks bad here. But if I actually open this up in Obsidian,

[00:19:59] it's well structured. Let me see if I can actually show you an example in Obsidian. Yeah.

[00:20:05] Boom. Here we go. Let me share my screen. I'll actually show you. So it builds a dashboard for me

[00:20:12] that looks like this. So massive week tracks my creator buddy ARR. How many paying subscribers I

[00:20:19] have? My followers. And I can see like how close I am to my goals for my trends over weeks.

[00:20:27] Insights around my life. So what's working for me? What is in action items? I should do the next

[00:20:32] week to keep improving. It basically asks me four or five questions and builds me this entire dashboard

[00:20:37] of how close I'm getting to my goals. I just do this every day. That's great. Yeah. It's like a

[00:20:43] motivational coach and like an analyst at the same time. Exactly. And like this is none of this has

[00:20:48] to do with code, right? This is all just clawed doing tasks for me. And not many people realize

[00:20:55] clawed code actually does way more than just coding. Yeah. I mean, that's what I want to dive into.

[00:21:00] Yeah. So is that like one more you want to show her? Yeah, let's do that. Let me go back up here.

[00:21:06] What's a good one here? Oh, let's see. Daily. Daily brief. So I do this every morning.

[00:21:16] And what daily brief does is it actually searches the web for the latest news and anything I'm

[00:21:23] interested in. So AI, tech, entrepreneurship, creativity, I go in and set up me opening up

[00:21:31] you know, CNN.com or Wall Street Journal, whatever. This actually will go search the web because

[00:21:39] again, clawed code has a web searching tool. Find all the latest news. Give me a daily brief on

[00:21:46] like everything that's going on. Anything important that happened overnight. Give me the publication date,

[00:21:50] the source name, why it matters and build me priority updates industry trends, opportunities,

[00:21:56] researches and studies, tool updates, people to watch. And I just literally just do slash daily

[00:22:03] brief, hit enter. It goes builds all that. And then you can see exactly what it comes up with here,

[00:22:12] which is priority updates, YouTube cracks down AI generated content tells you the source when

[00:22:18] it was published, why it matters. Give me an angle so like a hot take I can have about it if I

[00:22:23] want to create content around it. And gives me a whole bunch of news stories from overnight that

[00:22:29] it just goes and researches for me. Do you give it like publication links or no, you just tell

[00:22:34] it to look up. Yeah. Wow. Just searches for itself. And you probably didn't make this prompt

[00:22:41] from scratch, right? You probably just got clawed to make it. Exactly. So I went to clawed and I said,

[00:22:48] I want to build a sub agent that slash command that spawns sub agents that goes and does research for

[00:22:57] me. Yeah. I'm the internet for the latest stories about tech and AI and all that. Please build me a

[00:23:03] prompt. I can put in a clawed code that will build this out for me that also gets me other interesting

[00:23:08] and relevant pieces of information. And the reason why I do that is clawed is so creative and

[00:23:15] thanks so much outside the box that I wanted to build the prompt for me so that it comes up with

[00:23:20] other things. It can include in that sub agent that I didn't even think of. Yeah. That's what built

[00:23:25] this. And then you can always modify it afterwards. Yeah. Exactly. All right. All right. So I guess the

[00:23:32] TRDR from this interview is set up your clawed live project and whenever you have something kind of

[00:23:39] you want to do every week or maybe every day. Like set up a tail clawed to set up a slash command

[00:23:45] and a sub agent to just do it for you. That's kind of TRDR, right? Yeah. I'd say that's the TLDR

[00:23:51] and I would say just experiment, right? Yeah. Reserve time every day just to talk to clawed and see

[00:23:58] what it can do. I think a lot of people go with very specific ideas of what they want. But like this

[00:24:03] all came from me being like, oh, I'm going to spend the next hour on my couch with my MacBook right

[00:24:08] in front of my face just seeing what clawed code can do. And that's what spawned all this.

[00:24:15] Spend time experimenting and you'll come up with cool ideas like this.

[00:24:19] Awesome. Alex. So where can people find you online and also your startup?

[00:24:26] You can find me online two places. YouTube at Alex beneficial. If you just search Alex,

[00:24:31] then I'm sure you'll find me. And then X at Alex spin X, create a bunch of content about

[00:24:37] a both those platforms. And then I launched a startup in January this year. So about eight months ago

[00:24:44] now called creator buddy, which is basically an AI that's built on the Twitter algorithm, the Twitter

[00:24:51] API. It pulls in all your posts and can tell you what's working well. What isn't working well for

[00:24:57] you, what you should talk more about and just helps you come up with way more ideas that perform well

[00:25:02] on X and been going pretty well. We have I think close to 600 paid subs now. We're up to $300,000

[00:25:10] ARR. So all one man show built the entire thing myself. So it's awesome and you can try it for free.

[00:25:17] It's basically you and claw right that built this startup. Exactly. Being clawed.

[00:25:23] My $200 a month employee clawed code. Yeah, that's great. All right, man. Well, I really admire

[00:25:28] the hustle and the energy man, but maybe you're trying too much coffee. But yeah, I dream coffee

[00:25:35] and pre-work out all day. So maybe I should slow it down a little bit. Cool dude. All right, well,

[00:25:40] I hope to see you online and for those of you listening or watching, we'll put links to Alex's

[00:25:44] problems in the description. Yeah, appreciate you Peter. This was great. All right, man.

---

## Summary

This tutorial demonstrates how Alex Finn uses Claude Code to build "Claude Life" - a complete life operating system that automates various daily tasks through custom slash commands and sub-agents.

### Key Topics Covered:

1. **Claude Life OS** - Using Claude Code as a complete life operating system
2. **Newsletter Researcher** - Automated newsletter research and draft generation that saves hours weekly
3. **Brain Dump Analysis** - Pattern recognition in daily notes over 30 days to identify content pillars
4. **Daily Brief** - Automated news aggregation and briefing
5. **Weekly Dashboard** - Metric tracking and motivational insights
6. **Setting up Claude Code inside Cursor**
7. **Creating custom slash commands and sub-agents**

### Setup Process:

1. Install Claude Code from anthropic.com/claude-code
2. Run it inside Cursor terminal (or any terminal)
3. Create folder structure with markdown files
4. Use Claude to generate prompts that build custom slash commands and sub-agents
5. Let Claude Code automatically create its own command and sub-agent directories

### Key Philosophy:

> "One of the most important skills you can have in 2025 is being able to automatically during whatever task you do during the day, think how can I implement AI into this task?"

### Newsletter Researcher Workflow:

- Analyzes competitor newsletters (Dan Koe, Sahil Bloom, Peter Yang, etc.)
- Identifies trending topics and patterns
- Generates newsletter drafts in your voice
- Saves a couple hours per week
- Still requires editing to maintain personal touch

### Brain Dump Analysis:

- Scans 30 days of notes
- Looks for insights, patterns, recurring themes
- Evolution of ideas over time
- Helps identify new content pillars

### Daily Brief:

- Searches web for latest news in AI, tech, entrepreneurship
- Provides priority updates, industry trends, opportunities
- Includes publication date, source, why it matters
- Suggests angles for content creation

### Weekly Dashboard:

- Tracks metrics (followers, MRR, ARR, goals)
- Shows progress toward goals
- Provides insights and action items
- Acts as motivational coach and analyst

### Alex Finn's Results:

- 40,000 newsletter subscribers
- Built Creator Buddy startup (AI tool for X/Twitter) to $300K ARR with 600 paid subscribers
- One-man show, built entirely with Claude Code
- Describes Claude Code as his "$200/month AI employee"

---

## Metadata

- **Video ID:** D0nDWQdN3F4
- **Views:** 61,951
- **Likes:** 1,454
- **Upload Date:** September 7, 2025
- **Channel ID:** UCnpBg7yqNauHtlNSpOl5-cg
- **Description:** Today, I want to share a new episode with Alex Finn. Alex is a founder who has built a complete "Claude Life" operating system to automate research, curate AI news, analyze brain dumps, and more. I asked him to walk through exactly how to set up this system using Claude Code slash commands and sub-agents in just 25 minutes.
