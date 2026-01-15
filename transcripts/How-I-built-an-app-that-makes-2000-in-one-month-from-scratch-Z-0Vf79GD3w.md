# How I built an app that makes $2,000 in one month (from scratch)

**Channel**: Arthur Builds Stuff
**Duration**: 01:04:05
**Published**: 2026-01-10
**URL**: https://www.youtube.com/watch?v=Z-0Vf79GD3w
**Language**: English
**Transcribed**: 2026-01-15 15:27:56
**Transcription Backend**: whisper.cpp (medium model)

---

## Transcript

[00:00:00] Okay, so I challenged myself to build an app that reaches $2,000 of monthly profits starting
[00:00:05] from scratch as a student.
[00:00:06] I thought 30 days max. Well, that's what I thought because a lot's gonna go wrong.
[00:00:19] Apple rejections, content strategies that completely flop and eating $0 thinking it's over.
[00:00:25] And you'll see it ends up a lot closer to 60 days.
[00:00:28] Through this challenge, I'm going to test different ideas, different strategies.
[00:00:31] But most importantly, I'm going to prove to you that even as a CS student doing a remote internship,
[00:00:36] you can build something that actually makes money.
[00:00:38] But before we start, who I am and why should you care?
[00:00:41] I'm Arthur, I'm 20, fourth year of computer science.
[00:00:44] Last year, I co-founded an AI startup for doctors.
[00:00:47] We raised money, built for months, but long story short, that was a complete failure.
[00:00:52] We never talked to users, ignore market fit and build features nobody wanted.
[00:00:56] But that failure taught me more than all my classes combined.
[00:00:59] So that's why I started this YouTube channel.
[00:01:01] To prove that you don't need the perfect idea, you don't need funding,
[00:01:04] and you don't even need to know everything.
[00:01:06] Stop waiting and start building.
[00:01:08] In this video, I'm showing everything, no filter.
[00:01:10] How I found the idea, build it, failed it and iterated until people actually started paying money.
[00:01:16] No fake timeline, no VC money and no going viral.
[00:01:19] Just a regular student with $200 of ad budget testing until something works.
[00:01:24] If you're watching this, it means something worked.
[00:01:26] Let's build.
[00:01:27] I need to find an app idea, but I'm not trying to invent something revolutionary.
[00:01:33] I want something that's already proven to work just with a different angle or target market.
[00:01:38] The goal is to build as fast as possible an MVP, minimum viable product.
[00:01:42] Basically, the simplest version of the app to test if people will actually pay for this.
[00:01:46] So I go straight to the app store.
[00:01:48] I'm scrolling through the top grossing apps and I notice that affirmation apps are everywhere.
[00:01:52] These are literally apps that just show you motivational quotes.
[00:01:55] One feature, that's it.
[00:01:57] Perfect for what I want.
[00:01:58] It's super simple to build, quick to test, no complex feature.
[00:02:01] I don't know the top three.
[00:02:02] I am daily affirmations and daily motivation.
[00:02:05] They are literally identical.
[00:02:07] Same quote, same design, same everything.
[00:02:10] Now here's where it gets interesting.
[00:02:11] I'll actually be on exchange next semester in those countries.
[00:02:14] And Nordic countries are known to have brutal winters.
[00:02:17] We are talking about four hours of sunlight per day and huge seasonal depressions.
[00:02:22] That's my opportunity.
[00:02:23] Same app concept, but actually designed for people going through dark winters.
[00:02:26] Warm UI, cozy feeling, and quotes that acknowledge their reality.
[00:02:30] So here's my process.
[00:02:31] I screenshot everything from the IAM app to understand the patterns.
[00:02:35] Every screen, every flow, and holy ****, the onboarding is painful.
[00:02:39] More than 40 questions.
[00:02:40] But right after this marathon onboarding, they hit you with a three-day free trial pop-up.
[00:02:44] Just like Duolingo, pay now or start the trial.
[00:02:47] It's quite smart, but aggressive.
[00:02:48] The app is actually dead simple.
[00:02:50] Swipe to see and like quotes.
[00:02:51] Literally TikTok, but for affirmations.
[00:02:54] Then I open Figma.
[00:02:55] That's where you design apps before coding.
[00:02:57] I'm dumping all these screenshots in, but I'm not keeping all this.
[00:03:00] Their onboarding is way too long for me.
[00:03:02] I'm keeping maybe 15 screens max.
[00:03:04] Tomorrow, we will actually start designing our app.
[00:03:07] Yesterday, I mapped out what features I need.
[00:03:09] Today, it's all about design.
[00:03:10] I want to make this app feel cozy and warm, not a robot sending you those quotes.
[00:03:15] Now you might think I'm wasting time not starting coding right now,
[00:03:18] but I want to plan everything to know the button size, the screens, the shapes, and the colors.
[00:03:23] My code flows way faster when I know exactly what I want to do.
[00:03:27] The first thing for inspiration is this website called Dribble.
[00:03:30] It's basically Pinterest, but for designers.
[00:03:32] I want to find UI elements I really love
[00:03:34] and that could match the cozy and warm mood we're going for.
[00:03:37] So to create my brand and app identity, I need to create a mascot.
[00:03:41] I'm following this tutorial from Chris Rarock, who's a solo app developer
[00:03:45] who's making those cute little mascots for his apps.
[00:03:48] And he's recently made a video explaining his whole process creating those mascots with GPT,
[00:03:53] so I just followed it.
[00:03:54] ChatGPT suggested me a Kendall character, and I think that's perfect.
[00:03:58] A little Kendall that keeps glowing even when everything's dark.
[00:04:01] That's literally the whole concept of the app.
[00:04:03] I'm calling him Glow, our little Kendall friend.
[00:04:06] Now for the actual UI components.
[00:04:08] I'm using Cloud to help me generate IDs for the color palette, input, and button styles.
[00:04:13] It's not perfect at all, but that's also a good base.
[00:04:16] I'm not a designer, so with this, I can have a pretty good base to start the coding part.
[00:04:20] Let the coding begins.
[00:04:21] We'll start by creating the basic structure.
[00:04:23] For that, I'm opening the terminal and I create a new expo project.
[00:04:27] All right, I've just set it up a new expo project.
[00:04:30] So here is the blank project.
[00:04:32] I set up the server, so it's running on the simulator.
[00:04:35] So I'm just following the basic get started.
[00:04:38] It's really well made and quite easy to follow.
[00:04:40] You just have to run a few commands and you have your basic app running there.
[00:04:45] Now the base is created.
[00:04:47] We need to add all the other features.
[00:04:48] We won't have any login or sign up on the app because we will store everything on device.
[00:04:53] That's way easier for us.
[00:04:55] The only thing that we have to set up right now is notifications.
[00:04:58] But we won't use a complex system with the server backend and so on.
[00:05:02] The app will work by itself.
[00:05:03] So even on airplane mode, it will work.
[00:05:06] I'm using Cloud Code to quickly test the notifications just to be sure that it works as expected.
[00:05:12] So you can send test notifications.
[00:05:14] You also have them on the notification center just there.
[00:05:16] And then if you click on them up, it opens the app.
[00:05:20] Now the fun part, that first onboarding screen.
[00:05:22] This is so important.
[00:05:24] This is where users decide if they trust your app or delete it.
[00:05:27] One chance to make them feel welcome.
[00:05:29] I'm translating my Figma design into React Native Code,
[00:05:32] then positioning Glow, our Kendall mascot, right in the center.
[00:05:35] The mascot animation is key.
[00:05:37] I want him to do this little bounce when the screen loads like he's excited to meet you.
[00:05:41] After an hour of tweaking, the first screen is perfect.
[00:05:44] It feels warm.
[00:05:45] It feels welcoming.
[00:05:46] It doesn't feel like every other app.
[00:05:48] Glow is coming to life.
[00:05:49] Today's mission is to build the entire onboarding flow and somehow figure out the widgets.
[00:05:53] Apparently, you need to code in native language for widgets.
[00:05:56] So it will be Swift for iOS.
[00:05:58] I'll only start with iOS for now.
[00:06:00] But I've never used Swift in my whole life.
[00:06:02] So that's going to be interesting.
[00:06:03] First, I need to create an animation for when users allow notifications.
[00:06:08] You know, sometimes you hesitate.
[00:06:09] So that's why I want to create an animation to make this whole process about notifications
[00:06:14] a bit less invasive.
[00:06:15] I'm using Jitter for this.
[00:06:16] Think of it as Canva, but for animations.
[00:06:18] They have templates for everything.
[00:06:20] Loading animations, success dates, whatever.
[00:06:23] I'm taking their notification template and customizing it.
[00:06:26] Now for the next three hours, I coded all the onboarding screens.
[00:06:29] And honestly, it's just copy pasting components and changing text.
[00:06:33] Super repetitive.
[00:06:34] So I'm speed running through this part because I'm just typing the same React Native components
[00:06:38] over and over.
[00:06:39] I'm done with the onboarding.
[00:06:40] I just wanted to quickly show you what it looks like.
[00:06:43] So this screen was the screen we made yesterday with the animation.
[00:06:46] Then I ask your name, so whatever.
[00:06:49] I ask for your age.
[00:06:51] It will be very useful for analytics.
[00:06:53] Then how do you identify?
[00:06:54] So female, male, or prefer not to say.
[00:06:57] Then how do you improve your mental health?
[00:06:59] That's also for analytics.
[00:07:00] If I want to add some categories and so on.
[00:07:03] A screen about the benefits of daily affirmations.
[00:07:05] Because you don't necessarily know why and what it is for.
[00:07:08] The notifications part.
[00:07:10] So here's the animation we made this morning.
[00:07:12] I'll just show you again.
[00:07:14] You can choose how many notifications you want per day.
[00:07:17] And the time, the start, and end time.
[00:07:19] I wanted to create a daily habit thing a bit like Duolingo.
[00:07:23] So you have to check the app every day.
[00:07:25] For attention-based app, it's amazing.
[00:07:27] Then you can choose the categories.
[00:07:29] So what type of codes do you want?
[00:07:31] Then the widgets.
[00:07:32] It's only a fake screen for now because I don't even know how to code widgets.
[00:07:36] And then the special offer screen.
[00:07:38] Exactly like the IAM app.
[00:07:39] Because if you want to pay now, you can.
[00:07:42] So that's it for the onboarding.
[00:07:43] There are lots of screens.
[00:07:44] But actually it's really fast to complete everything.
[00:07:47] The onboarding is finally done.
[00:07:48] Now it's time for the unknown.
[00:07:50] The widgets.
[00:07:51] So here's the thing about widgets.
[00:07:53] Expo can do them.
[00:07:54] So that's going to be pretty fun.
[00:07:55] Because I have to write native code and I'm so bad at Swift.
[00:07:58] But I'm following this tutorial from a guy who explains how to implement those widgets.
[00:08:02] Which is exactly what I need.
[00:08:04] The concept is actually really simple.
[00:08:06] A widget is just a tiny app that lives on your own screen.
[00:08:09] It can do much.
[00:08:10] Just display information and have a few interactions like simple buttons.
[00:08:14] So for me, that's perfect because I just want to display basic code.
[00:08:18] So only text.
[00:08:19] That's probably going to be pretty easy to do.
[00:08:21] Guys, just look at that.
[00:08:23] I've made two widgets.
[00:08:24] So the first one is the small squared one and a full width one.
[00:08:27] I've also added the mascot at the bottom left.
[00:08:30] And it looks like he's looking at the coat.
[00:08:32] I think it looks really nice.
[00:08:34] And when you click on it, it just opens the app.
[00:08:36] So that's really basic.
[00:08:37] Actually, the widget will fetch a random coat every hour and show it.
[00:08:41] So it will change throughout the day.
[00:08:43] Today was actually a good day.
[00:08:44] We implemented so much.
[00:08:45] We made all the onboarding screens and the two widgets.
[00:08:48] Tomorrow is going to be interesting.
[00:08:50] I'll try to implement in-app subscriptions with Revenue Cats.
[00:08:54] And I think I have to buy a new Apple Developer account.
[00:08:56] Because my current one is linked to my startup.
[00:08:59] And I want to differentiate them.
[00:09:00] Today is the expensive day.
[00:09:02] That's time to actually set up payments.
[00:09:04] Because a business without revenue is just an expensive hobby.
[00:09:07] And I'll start by buying a new Apple Developer account.
[00:09:09] So that should be good.
[00:09:11] We are just waiting the processing time.
[00:09:13] It should be a few hours.
[00:09:14] But we can start the Revenue Cat part right now.
[00:09:16] Because that's going to be a bit long.
[00:09:17] Let me quickly explain how app monetization works.
[00:09:20] Because nobody breaks this down.
[00:09:22] When someone pays on your app, Apple and Google just take a 30% cut.
[00:09:26] Which is huge.
[00:09:26] But Apple made a small business program.
[00:09:28] Which just reduces the 30% cut to 15%.
[00:09:32] So you have 85% of the global price left to you.
[00:09:35] That's where Revenue Cat comes in.
[00:09:37] They handle all the painful stuff.
[00:09:38] Recip validation, subscription status, the whole mess.
[00:09:42] And it's free if you make under $2500 per month.
[00:09:45] Which is perfect for starting out.
[00:09:46] Setting up Revenue Cat with Apple is a mess.
[00:09:49] I need to create something called an API key.
[00:09:51] Which is basically a password that lets Revenue Cat talk to Apple.
[00:09:54] I'm going through Apple's dashboard and I download my key.
[00:09:57] Then I upload it to Revenue Cat.
[00:09:59] Next, I name my project and add the bundle ID.
[00:10:02] Which is the unique code that identifies it.
[00:10:04] But before creating it, Apple wants to know everything.
[00:10:07] Will you use the camera, the localization, and so on.
[00:10:10] Finally creating the app in App Store Connect with the bundle ID.
[00:10:13] Then I copy to Revenue Cat.
[00:10:15] One more key to upload, the purchase key.
[00:10:17] Which is another password specifically for payments.
[00:10:20] After 30 minutes of back and forth between dashboards, Revenue Cat is finally connected.
[00:10:24] Now the fun part, creating the actual subscriptions.
[00:10:27] I'm making two options.
[00:10:29] Monthly for $10 and yearly for $40 with a 3 days free trial.
[00:10:33] That's a huge difference but I want people committing long term.
[00:10:36] The pricing gets tricky though because I need different prices for Nordic countries.
[00:10:40] Each country needs its own price point because currencies are different.
[00:10:44] Now building the actual paywall in the app.
[00:10:46] What's brilliant about Revenue Cat is they have paywall templates.
[00:10:50] I chose this clean one with three sections.
[00:10:52] Hero image at the top where glow our mascot will go.
[00:10:55] Testimonials in the middle and pricing cards at the bottom.
[00:10:59] Once it looks perfect, one click to publish.
[00:11:01] Now comes the slightly technical part, adding this to my app code.
[00:11:05] Installing the Revenue Cat library, adding my API credentials and creating a custom build.
[00:11:10] I've integrated the paywall on the app so you have the yearly and monthly plan.
[00:11:14] The yearly has a 3 days free trial because I think that's way better for conversion.
[00:11:18] So it's in test mode but you can directly pay there.
[00:11:21] So that's it for the in-app payments.
[00:11:24] Now I want to quickly create a SuperBase database because it's getting quite late.
[00:11:28] I want to store all the data linked to the onboarding and the in-app feedbacks
[00:11:32] because I want to have some analytics that will guide me through the iterations.
[00:11:36] I'm keeping this dead simple.
[00:11:38] Two tables, one for users with onboarding answers
[00:11:41] and another one for feedbacks like feature requests.
[00:11:43] So when user finishes onboarding, I just send their choices to SuperBase.
[00:11:47] Tomorrow's mission is finishing all the app content.
[00:11:50] We're so close to having something real.
[00:11:52] Today was a marathon.
[00:11:53] Literally 8 hours straight of coding to finish every single screen in the app.
[00:11:57] From the home screen with categories to the settings,
[00:12:00] the strict tracker and the favorite section.
[00:12:02] Everything.
[00:12:03] That's the day the app revealed so I'll show you exactly what I've added today.
[00:12:07] Everything that I've coded.
[00:12:09] So first thing first, the swipe feature.
[00:12:11] You can swipe up and down like TikTok.
[00:12:13] You can also like the code by clicking on the heart
[00:12:16] or double clicking on the coat.
[00:12:18] I've also made a cool animation with the mascot at the bottom left.
[00:12:22] So if you click on him, he'll do a little jump and wear glasses.
[00:12:25] So he looks like he's reading the coat with you.
[00:12:28] And if you click again on him, he'll just disappear at the bottom left.
[00:12:31] I've also added categories.
[00:12:33] So if you click at the bottom right, you can choose between other categories.
[00:12:37] So let's choose the favorites, for instance.
[00:12:39] I've also added the mix.
[00:12:40] So if you want to select multiple categories, you can.
[00:12:44] You just click there and select them.
[00:12:46] And it will create your own mix.
[00:12:48] And the last thing is all the settings things.
[00:12:51] So you can see your streak and modify your name, your gender,
[00:12:55] and also make a feedback.
[00:12:56] So if you want to send features request or whatever, that's here.
[00:13:00] Today was actually an amazing day because I finished the app.
[00:13:03] I mean, I'm not done yet because I have to submit it to the app store
[00:13:07] and maybe they'll reject it.
[00:13:09] So tomorrow I'll create the different policies
[00:13:11] and the landing page to submit everything to the app store.
[00:13:14] And the process will be between 24 and 48 hours for the review to happen.
[00:13:19] So fingers crossed for tomorrow, I won't publish that app so bad.
[00:13:23] And if it works first try, that would be amazing.
[00:13:25] I've created a new Next.js project.
[00:13:27] And honestly, Claude wrote 90% of it.
[00:13:30] I tweaked the styling and tried to add the exact same look as the app.
[00:13:33] The whole process is blazing fast when you're not trying to be fancy.
[00:13:36] And I've also made some assets in Figma.
[00:13:38] Just iPhone mockups with our app screens inside.
[00:13:41] That's not perfect, but it looks professional enough.
[00:13:43] The landing page is done in one hour.
[00:13:46] It's very basic, it's purely UI.
[00:13:48] So you have a little description on the left and a screenshot on the right.
[00:13:51] I've also made three cards explaining the different features.
[00:13:54] So the widget, the notification and the categories.
[00:13:58] That's really basic.
[00:13:59] I've added two policies.
[00:14:00] So the privacy policy and the terms of use.
[00:14:03] Those are mandatory if you want to publish your app because Apple requires them.
[00:14:07] I've written everything with ChatGPT and it's okay for now because it's the beginning.
[00:14:11] I've described in details how the app works.
[00:14:14] But if the app grows, I'll rewrite them with a lawyer.
[00:14:16] Now the submission part.
[00:14:18] With Expo, it's stupidly simple.
[00:14:20] EAS Build to create the package and EAS Submit to send it to Apple.
[00:14:24] EAS handles all the complicated signing certificates and provisioning profiles
[00:14:28] that used to make developers cry.
[00:14:30] I'm heading to the airport right now because I have a flight to Bangkok to see my girlfriend.
[00:14:34] She's there on her exchange semester so I'll spend one month with her.
[00:14:38] I'll submit the app from the airport so the timing is actually perfect.
[00:14:41] Apple usually takes 24 to 48 hours to review the app and my flight is in 6 hours.
[00:14:47] So while I'm in the air, Apple will be reviewing Glow.
[00:14:50] Wait, I forgot the App Store Assets.
[00:14:52] The real pain.
[00:14:53] Screenshots for all the different iPhone sizes.
[00:14:55] I'm at the airport right now trying to design these in Figma.
[00:14:58] I used a template with a clean background, screenshots of the app, and some explanation text.
[00:15:03] Nothing fancy but it needs to be done before I can submit.
[00:15:06] I'm submitting from my gate and when I land, we'll know if we approved or rejected.
[00:15:11] Guess who's back, I just landed in Bangkok.
[00:15:13] I'm in the Chatuchak district right now which is right in the heart of the city.
[00:15:17] Check out this view from here, that's beautiful and that will be my new office for the next few weeks.
[00:15:22] Now the sad part, Apple rejected Glow.
[00:15:24] That's not a big deal because the issue is so stupid.
[00:15:27] So in App Store Connect, there is this section called Privacy where you have to list everything
[00:15:31] your app collects, name, email, that kind of stuff.
[00:15:34] But there is a checkbox for each data type asking you if you're using it for tracking purposes.
[00:15:40] Which in Apple language means advertising or reselling this data to third parties.
[00:15:44] And my dumb ass checked yes on everything without even reading.
[00:15:48] So Apple thinks I'm building the next Facebook, stealing all your data,
[00:15:51] when really I just store your name to say "Hey Sarah" on the app.
[00:15:55] The reviewer was actually really nice about it.
[00:15:57] It just told me there was a mismatch between my privacy policy and what I entered in App Store Connect.
[00:16:02] And in my case, it's pretty simple to fix it.
[00:16:05] I just have to modify the App Store Connect part so no code to change.
[00:16:09] The fix takes 5 minutes, unchecking all the tracking boxes
[00:16:12] and making sure it's now reflecting properly what I'm actually doing with this data.
[00:16:16] Also adding a comment explaining exactly what changed
[00:16:19] so the next reviewer doesn't have to dig through everything.
[00:16:22] And this is actually super common.
[00:16:24] Most apps get rejected on first submission for tiny things like this.
[00:16:27] Privacy policy mismatch like in my case or forgot to test on iPad or whatever.
[00:16:32] It's actually Apple's way of keeping quality high.
[00:16:35] So I'm resubmitting the app right now.
[00:16:36] See you in 48 hours when hopefully we're actually live.
[00:16:39] It's been 5 days, 5 whole days.
[00:16:42] I don't know why it took so long but Apple finally reviewed and accepted the app so we're finally live.
[00:16:46] But right now, nobody knows we exist and it's time to change that.
[00:16:50] First, App Store Optimization or ASO which is basically SEO but for apps.
[00:16:56] If you don't optimize for the right keywords, there is too much competition so you're invisible.
[00:17:01] For this, I'm using this tool called Astro.
[00:17:03] And I'm smiling because that's a pure banger.
[00:17:05] This tool is exactly what you need to find and spot the right keywords.
[00:17:10] It will show you for every keyword the competition by country.
[00:17:13] The strategy is really basic.
[00:17:15] You need to find popularity above 20 and difficulty under 50.
[00:17:19] So you can check the keywords used by other apps to have some ideas or just try by hand.
[00:17:24] Like asking ChatGPT what would be right keywords for my app and describing your app.
[00:17:29] And you also have some suggestions here that you can try.
[00:17:32] This is a pretty good keyword in Norway, health which means health in Norwegian.
[00:17:37] The popularity is nearly at 70 and the difficulty is under 50 at 46.
[00:17:42] So that might be a keyword that I want to keep.
[00:17:45] Now for the launch strategy, I need users, I need feedbacks and create some initial traction.
[00:17:49] So I want to try something making the app completely free with a lifetime access of the pro version.
[00:17:54] No payment, no subscription, just download the app and keep it forever.
[00:17:58] I won't make any money from this but that's not the point.
[00:18:00] I really want to have some downloads and some app store feedbacks to start that initial traction.
[00:18:05] The next part is leveraging my YouTube community so that's you guys.
[00:18:09] I already make take content on this channel and you guys are literally my first users.
[00:18:14] So I'm creating YouTube shorts documenting the whole process exactly like this video but in short formats.
[00:18:19] I quickly wrote the script in Ocean, then recorded my voice and then edited the video in Premiere Pro.
[00:18:24] I created two different shorts.
[00:18:26] I post one every two days and hopefully we'll get some downloads.
[00:18:29] So the first few days are crucial.
[00:18:31] If we can get to 100 downloads and some feedbacks, the app store will do its algorithm thing
[00:18:37] and start to show us to more people.
[00:18:39] I'll probably back in a few days when we'll get some interesting news.
[00:18:42] The rhythm's been slower lately, less filming and more analyzing.
[00:18:45] I wanted to gather some real data before adjusting the strategy.
[00:18:49] So let me show you where we're at.
[00:18:50] Current downloads, nearly 900 so let's break down the traffic sources.
[00:18:54] We can see that AppRefer made the most downloads.
[00:18:57] What is AppRefer? It's simply when an app like Instagram just sent a user to my app store page
[00:19:03] and then they download the app.
[00:19:04] We can see the details by clicking there.
[00:19:06] WeChat made nearly 200 downloads.
[00:19:08] WeChat is a chat app used in Asia.
[00:19:11] A lot of Chinese people use WeChat to chat and actually I had lots of Chinese downloads.
[00:19:16] So I think someone shared the app on a group or whatever and it drove lots of traffic.
[00:19:20] Then AppRaven with app guns free.
[00:19:23] It was an old method to promote your app but I didn't do anything but I still had traffic.
[00:19:29] I just checked and I have a page there but automatically created that drove some traffic.
[00:19:34] And then Telegram and some other apps.
[00:19:36] I also made one single Reddit post because the other ones got banned.
[00:19:41] On the productivity app subreddit, I just explained,
[00:19:44] "Hey, the app is free for now. Do you want to test it?"
[00:19:46] And I got 10 upvotes and nearly 3,000 views.
[00:19:50] Now YouTube, I made two shorts that got 20,000 views in total.
[00:19:54] And I put a special link there to really track how many users clicked on the link.
[00:19:58] Here is the tracking.
[00:20:00] We got nearly 300 clicks, which is really good.
[00:20:03] But then when we check in app store, the web refers.
[00:20:06] We can see that tap it.
[00:20:08] So the tool that I used just made 10 downloads.
[00:20:11] That's actually a really bad conversion for 20,000 views to have only 10 downloads.
[00:20:16] But that was pretty normal because my audience on YouTube are only developers.
[00:20:20] So they don't really look for affirmation apps.
[00:20:23] The last thing is Revenue Cat.
[00:20:24] If we check non-subscription that more than 600 people just claim their free trial.
[00:20:30] It doesn't mean that we will have lots of subscriptions after that.
[00:20:33] It was free so obviously lots of people claimed it.
[00:20:36] But I wanted to share it with you.
[00:20:37] I also got some reviews because at the beginning,
[00:20:40] the goal of that lifetime free access was to have some traffic
[00:20:44] and some reviews on the app store.
[00:20:46] I got eight ratings with two one-star review, which makes an average of four out of five.
[00:20:51] That's actually pretty bad two one-star reviews, but whatever.
[00:20:55] And one of those one-star reviews was someone complaining that they couldn't buy premium.
[00:21:00] Obviously because the app was free.
[00:21:01] I don't know why I deserve a one-star review for that.
[00:21:04] Keep in mind that you have to answer those comments.
[00:21:07] You're not answering to that angry guy.
[00:21:08] You're actually showing to all the future users that you give a shit.
[00:21:12] I made a straightforward answer explaining how sorry for the confusion.
[00:21:16] It was actually an offer and here's how you can claim your free trial.
[00:21:20] And maybe when you're really nice in the comments,
[00:21:22] they could change the review but I don't really think so.
[00:21:25] The app store keywords need work though because I'm getting downloads but retention sucks.
[00:21:30] Only 15% of users came back day two so people downloaded but expected something else.
[00:21:36] So I'm tweaking less generic keywords and more specific ones.
[00:21:39] The title now has two to three main keywords and subtitle as supporting ones.
[00:21:44] This tells Apple exactly who to show the app to.
[00:21:46] I'm doing this before driving new traffic
[00:21:49] because I really want good stats on those new specific keywords.
[00:21:52] Apple ranking system is actually a black box,
[00:21:54] but we know that they rank apps based on the most recent reviews.
[00:21:59] So new reviews on new keywords equals higher ranking.
[00:22:02] From now on, I'm only cutting updates based on actual data.
[00:22:06] I noticed that only two-thirds of users actually allow notifications
[00:22:10] which kills the whole concept of daily codes.
[00:22:13] I'm adding a new screen before the permission pop-up
[00:22:16] explaining that notifications are a core feature of the app.
[00:22:19] And if they still say no, there is another screen after that
[00:22:22] that will explain them that they're really missing something from the app.
[00:22:25] And I will obviously measure if this improved the rate.
[00:22:28] As I said, I'm only cutting two things from now.
[00:22:31] Stuff from user feedbacks already got dozens of suggestions
[00:22:34] and improvements to key metrics.
[00:22:36] My key metrics are simply retention, conversion, and user demographics.
[00:22:40] The most important one is retention by far
[00:22:43] because if users log in daily on the app, I won't have any problem to convert them.
[00:22:47] Now that we know the app works and traffic sources are identified,
[00:22:51] it's time for the real game, organic content creation.
[00:22:53] Today is day 18 and that's time to go all-in in organic content.
[00:22:57] For TikTok, I just spent the last few days just warming up the account.
[00:23:00] It means liking, commenting, and interacting with the type of post you want to target.
[00:23:05] But I didn't post anything because I want the TikTok algorithm to flag me in that niche,
[00:23:09] so when I'll start to post, it will know exactly who to show my content to.
[00:23:14] The key is testing different hooks, so only change the beginning of the video
[00:23:18] just to see which one grabs the most attention
[00:23:20] and then all-in on that kind of video.
[00:23:23] And the strategy is really simple, we'll post only three formats.
[00:23:26] The first type is POV videos, like POV you finally found a wellness app for z-zonal depression.
[00:23:32] That kind of video is really easy to make and works pretty well
[00:23:35] if you can identify your users' problems.
[00:23:37] The second type is product demos, like here's my morning routine with Glow.
[00:23:41] Here you just want to show your app's features.
[00:23:43] For me, it will be widgets on the home screen, opening the app, and swiping through codes.
[00:23:47] People love seeing apps in action.
[00:23:49] The third and last one is results or transformation,
[00:23:52] like I used this app for three weeks, here's what's changed.
[00:23:55] It's before and after vibes but targeted for your niche.
[00:23:58] The plan for the next few days is actually pretty simple but really exhausting.
[00:24:02] Just create 10 to 20 pieces of content and post 2 to 3 per day.
[00:24:06] I just want to see what hits and then just iterate and create more content of that kind.
[00:24:11] It's a numbers game, most will flop for sure, but we only need one to pop off.
[00:24:15] I'm also setting up a link tree, that's the link in BioTool everyone uses.
[00:24:19] One link that leads to the app store also shows everything.
[00:24:23] Plus it tracks clicks so I know exactly where the traffic comes from.
[00:24:26] Quick Reddit update, I'm still posting every day on one or two subreddits.
[00:24:30] And yesterday I posted on the expo subreddit and the team actually reached out.
[00:24:34] They want me to write a blog post about the whole process and that's freaking sick.
[00:24:39] As an expo developer, to be able to write a blog post on their own website feels amazing.
[00:24:44] I'm also getting emails and DMs from users about what they like,
[00:24:48] what features they like to see added and how they're using the app.
[00:24:51] This engagement is so valuable for truly understanding how to help them the most.
[00:24:55] This is the grind phase, no more coding unless something's broken.
[00:24:59] Just trading content, content and more content.
[00:25:01] The app works and people like it when they find it,
[00:25:04] now we need to be sure that they will find it.
[00:25:06] It's day 22 and I've posted about 15 videos on my TikTok account and only 2 broke the 2000 views.
[00:25:13] And that converted to exactly 2 trial signups and they both cancelled immediately.
[00:25:19] I'll keep posting because you never know what might randomly blow up.
[00:25:22] But it's time to prepare plan B, paid ads.
[00:25:25] Right now when someone downloads the app from TikTok, I have no idea where it came from.
[00:25:30] But TikTok needs to know okay this guy came from this ad or this one to really optimize the ad.
[00:25:36] So I'm installing the TikTok events SDK, adding tracking codes and making sure it
[00:25:40] fires when someone installs the app, opens the app and starts a trial.
[00:25:44] While updating the code, I'm adding the most requested feature, dark mode.
[00:25:48] I got at least 20 messages asking for it and glow looks even cuter on dark backgrounds.
[00:25:54] That part took ages like literally 6 or 7 hours of coding because it was so hard.
[00:26:00] Let me show you what happened.
[00:26:01] When you create a campaign in the TikTok ads manager, you can select app promotion and app
[00:26:05] install. So TikTok will optimize the campaign to gather the most app installs per dollar spent.
[00:26:11] You have 3 choices, the first one is to connect to a mobile measurement partner,
[00:26:15] which is super expensive like a few cents per app install, which is way too expensive for me.
[00:26:20] Or you can select I don't use a mobile measurement partner service,
[00:26:24] but this won't really work because TikTok won't have enough data or
[00:26:28] just data at all to optimize the campaign. The last choice is to use TikTok events SDK,
[00:26:33] which is not supported by react native or expo.
[00:26:36] So I had to build my own library with native code on top of a broken library.
[00:26:41] It was super exhausting, but it finally works.
[00:26:43] I'm submitting the new app version to Apple.
[00:26:46] The update includes TikTok attribution tracking, dark mode, and a clearer onboarding.
[00:26:50] So everything should be set up. I'll keep posting on TikTok while waiting for
[00:26:54] Apple team to review the app. And in the next few days,
[00:26:57] I'll show you exactly how to set up a TikTok ad campaign.
[00:27:01] Everything from the video to the different settings.
[00:27:04] It's day 23 and the app is already accepted by Apple. It went so quick.
[00:27:08] We will now create the campaign on the TikTok ads manager.
[00:27:11] The first thing is to explain to TikTok, why do you want to spend money on ads?
[00:27:15] Is it to get views, to get interactions, to get sales?
[00:27:18] For us, it's app install. So we will switch to the full version, confirm.
[00:27:23] And there we can see app promotion and we'll select smart campaign.
[00:27:27] TikTok will target by itself the best audience. We won't have to set up anything.
[00:27:31] Then iOS 14 dedicated campaign. We want to only target iOS users
[00:27:36] because our app is only on iOS app. And let's select the app we created yesterday.
[00:27:41] So by default, the goal will be click, but we don't want click, we want install.
[00:27:46] Then the budget. So how much money do you want to spend per day?
[00:27:50] At the beginning of this challenge, I told that we will use in total $200 from my money.
[00:27:56] Daily spend should be at least $50 per day. Here it's in euros, so a bit less like 45 euros per day.
[00:28:04] But because we have so low budget, I'll only use something like 25 to 30 euros.
[00:28:10] Then the schedule. We won't touch anything because this campaign is a test campaign.
[00:28:14] It will run for three days to see which creative is the best.
[00:28:17] And then we will put all the remaining money on the last creative.
[00:28:21] Then there is the audience targeting. So which country do you want to target?
[00:28:25] In my case, it will be Nordic countries. So I'll add three or four of them.
[00:28:30] Then there is the minimum age. I won't touch this, but you can select 18 or 25 years old.
[00:28:38] I would say that 25 years old should be better, but I'm not really sure. So I will leave 18.
[00:28:45] We won't touch anything on placement. And then the best part, add generation.
[00:28:50] That's here that we can add our creatives. I will simply just add video or image and use
[00:28:56] TikTok posts. So the posts that I've made are now listed here and I can select two of them,
[00:29:03] for instance. Through those creatives, I try to target different parts of the app.
[00:29:07] So one will showcase, for instance, the widget. One will showcase the notifications and so on.
[00:29:13] I just forgot to mention one parameter, which is languages. Just select your app language
[00:29:19] so that users you're targeting will speak the language of your app. For me, it will be
[00:29:23] just English. I'm quickly editing three new TikToks to have more samples for the campaign.
[00:29:28] Then back to the TikTok dashboard to import the post I just made. I'm testing six different
[00:29:33] videos in this campaign and finally we can click on publish. Hopefully we will make some conversion
[00:29:38] because with $100 of ads, we will get lots of traffic. So fingers crossed and I'll keep you
[00:29:44] updated if anything happened. Day 24, my ads got approved and ran for one day, but from the logs,
[00:29:50] I'm not sure I'm perfectly sending the TikTok payload for the attribution part. So I'm posing
[00:29:55] the TikTok campaign and making a quick update to batch it. Exactly like last time when I implemented
[00:30:00] that mode, this time I also implement a new feature and this will be themes. So I change a bit the UI.
[00:30:06] On the top left, you now have a premium button. If you click on it and you're not subscribed,
[00:30:10] the paywall will open. I also changed a bit the paywall just to show what features you unlock
[00:30:15] when you pay. The new feature is on the bottom right. It's only a premium feature and you can select
[00:30:20] a new background for your affirmations. Lots of users ask for it because the other affirmations
[00:30:25] app are doing the same, so I just implemented it. And when approved by Apple, I'll just resume
[00:30:30] the TikTok campaign for the last two days. Today is day 26, I guess, and I have two good news,
[00:30:37] two really good news. First, I was scrolling on Reddit and I found this post about Apple ads.
[00:30:42] On the app store, you can pay Apple to make an ad and have better ranking on some keywords.
[00:30:48] I read the post and I saw in the comments that Apple gave $100 credits. So I immediately created
[00:30:55] an account on Apple ads. And a few minutes later, I received this email. We've applied your $100
[00:31:02] promo credit to your account. I've added a few trending keywords to hopefully rank on them,
[00:31:07] but it's free credit, so we'll see what happened. The second good news is on TikTok ads. I've created
[00:31:12] a new account for this challenge and I saw this thing get up to $6,000 as credit for new accounts.
[00:31:20] The offer is pretty simple. If you spend $200, they'll give you $200 in ad credits. So in total,
[00:31:27] with Apple, we will have $300 of credits by only spending $200, which is amazing. That's $500 in
[00:31:34] total. Really good news for today. It's day 31. I'm finally back in France and today I wanted to
[00:31:39] show you the TikTok ads results because I have all the data. As you'll see, results are really bad,
[00:31:44] but you have to keep running your ads for at least three days because TikTok algorithm works
[00:31:49] really well, but you have to give him time. If you cut it too early, it won't have time to really
[00:31:55] target the right audience and show your ad to the right people. Here are the results. You can post
[00:32:00] the video if you want to check in details, but what matters is the budget. So I spend 30 euros
[00:32:06] every day. I got nearly 100 downloads per day. I have a trial to ped ratio really low, even 0%.
[00:32:13] 10 people started a trial, but nobody ped. And due to that really low conversion from trial to ped,
[00:32:19] our gross profit is really bad. We lost nearly every money we spent, nearly 60 euros, so something
[00:32:26] like 55, and we spent 60 euros in total. That really low conversion is due to the fact that
[00:32:31] people start a trial, but then don't see the real value because they cancel their trial
[00:32:37] something like two or three minutes just after starting it. And I'm not lying on the onboarding
[00:32:43] or during the paywall, so I think they don't see the value. That's why I want to change two things.
[00:32:49] During the onboarding, I'll ask more questions to really target the users and create a for you
[00:32:54] section in the app to recommend some categories based on your answers during the onboarding.
[00:32:59] And I also create a tutorial, so when you finish the onboarding,
[00:33:03] you'll have a few screens explaining how the app works and how to change categories and so on.
[00:33:08] I'm done coding the new onboarding and the for you sections, so I'll just show you how it looks.
[00:33:22] As before, you have different questions during the onboarding. What's your name? How old are you?
[00:33:27] What's your gender? And so on. Then you'll have some more personal questions that I'll use to
[00:33:32] really target the user and try to recommend the best categories that will match his mood
[00:33:37] or current situations. Finally, I finished the onboarding. Now the tutorial starts,
[00:33:42] so welcome to Glow. I'll show you around and help you get started. The goal of this tutorial is just
[00:33:47] to show the category button and how it works. I made a bouncy animation to make the user tap
[00:33:53] on the category badge. As you can see, there is a new section called for you, which contains four
[00:33:57] categories. So let's select growth. Don't forget to install the widgets and that's all for him.
[00:34:02] And now the whole UI appears. So that's how I actually onboard users now trying to explain
[00:34:09] the features. At the top, I added a light goal because I want users on their first session to
[00:34:14] really use the app to understand everything in it. It's really basic, so you can understand
[00:34:18] everything in one minute. I submitted the app to app review two hours ago and it's already accepted
[00:34:24] by Apple. It went really quick. So I resumed the TikTok campaigns. I mean, I didn't resumed it. I
[00:34:30] created a new one because I want to have a new learning phase with that new app, with the new
[00:34:34] onboarding and tutorial. So we will have to wait again for three days with a 30 euros daily budget.
[00:34:41] And this morning I also created this analytics dashboard with cloud code to keep track of the
[00:34:45] key metrics like revenue per install, download to trial. And if we check the detailed view,
[00:34:51] we can see screen per screen during the onboarding where users quit the app. So I really know which
[00:34:56] screen should be removed or kept. I'll keep you updated in a few days, maybe when the TikTok ad
[00:35:02] campaign will have enough learning to be relevant. Today is day 32 and I was just thinking about what
[00:35:09] would happen if I translated all the ads in native languages. Because for now, all my ads and even the
[00:35:16] app is in English, but I'm targeting countries that don't speak natively English. For instance,
[00:35:21] let's say Norway, they speak Norwegian. What would happen if the ad was in Norwegian? And the second
[00:35:27] part of the question is what would happen if the app was translated to Norwegian? Would we have more
[00:35:32] conversion in app and through the ad? We already spent half the budget during the test campaign
[00:35:37] and now we resumed it for 3 days so it will be the other 100 euros left, but I really won't test it.
[00:35:43] I received some direct messages through Reddit, some emails, and some comments on YouTube asking
[00:35:49] about specific parts of developing a mobile app. And I thought about creating a Discord, somewhere
[00:35:54] where I could share some resources about the idea, how to validate it, the design, the development,
[00:36:00] and even the marketing part, exactly like this video. The goal is also to talk every day about
[00:36:04] your project, where you're at, and how we could help you. Maybe someone went through the exact
[00:36:10] same thing and could help you to debug, to create a better paywall, or even to create some better ads.
[00:36:15] There will be a small onboarding with a few questions. Where are you in your app journey?
[00:36:20] So let's say currently building. Then what's your current MRO status? So not launched yet.
[00:36:26] And what do you need the most help with? Let's say marketing and growth. And when you arrive,
[00:36:32] it will give you different roles, and people will be able to help you. And I've created
[00:36:36] different categories. So the getting started, the community one, the roadmap, where I'll explain
[00:36:42] everything step by step to launch your own mobile app. And then the journey again, step by step,
[00:36:48] the idea, the design, the development, the paywall and monetization, and the marketing and growth.
[00:36:53] All the community will be able to talk there and exchange the different tips, the different news,
[00:36:59] and we'll grow together. So if you want some help, motivation, and join a community,
[00:37:04] just join the discord and we will spend time together. That's going to be pretty fun,
[00:37:08] and we will learn a lot. I won't teach you how to make $1 million through your app,
[00:37:12] because I never did. The goal is just to share knowledge and help each other
[00:37:16] to build a few thousand dollars per month app and just have fun through learning.
[00:37:26] Today is the end of day 34, and I have really nice news. We've made nearly $160 by spending
[00:37:34] only 30 euros on ads. I resumed the campaign three days ago, and I've only a three days free trial,
[00:37:40] so users converted today. The key learning is that trying to improve your onboarding can have a huge
[00:37:46] impact on sales. Talking about ads, I've spent nearly all the budget, so I spent 180 euros,
[00:37:52] six days at 30 euros per day. And as I told you, there is a TikTok promotion that gave me 180 euros
[00:37:58] of free credits if I spent 180. They actually gave me 172, which is nearly 180. For the next five to
[00:38:07] six days, we will only run on free credits for my ads, which will cost nothing and will be only
[00:38:13] profit. Talking about conversion, here is my user Jennifer Knoll for the 21st, and I think I can
[00:38:19] improve it just a bit because right now only 76% of people who installed the app completed the
[00:38:25] onboarding, and that seems a bit low. I want to make it 80 or 85%. That way we will have more
[00:38:32] paywall shown and then probably more conversion at the end. I looked for tips online, and I found
[00:38:38] this article on Revenue Cat website, which just explains how to fix your funnel. And from this
[00:38:44] article, there are two key things I want to implement to hopefully improve again the onboarding.
[00:38:49] The first thing is called commitment psychology, and it's used in apps like Flow or Geolingo and
[00:38:55] Headway where they ask you to commit. So just like here, tap to commit, committing to goals,
[00:39:01] boost motivation. And apparently doing this just before showing the paywall can improve dramatically
[00:39:07] the paywall conversion. So I'll add that. And I've also seen on these screenshots at the bottom,
[00:39:15] right there, that there is a completion bar during the onboarding that I completely missed.
[00:39:20] In my onboarding, users don't really know where they're at, and adding this can really improve
[00:39:25] it, at least I think. So we will try that. I'll show you what I've implemented. So the first thing
[00:39:30] is the progress bar. You can now see at the top, there is a progress bar that will fill during the
[00:39:36] onboarding. A regular thing that everyone thinks about, but I literally forgot to add it. And I
[00:39:41] think just that can really improve the onboarding completion. We will see tomorrow after I submit
[00:39:46] this app to a preview. Now the commitment part, I literally copy pasted the example from Revenue Cat.
[00:39:52] So it looks like that. I, Arthur, will use Glow to feel more self-confident. And if you hold your
[00:39:58] finger, the fingerprints behind will just fill. And at the end, it shows the paywall. It's a three
[00:40:04] steps paywall. So it's really important during the onboarding that you show only one information per
[00:40:10] screen. The first one is only explaining that we offer three days free trial. The next one is there
[00:40:16] will be a reminder one day before. And the next one, what you will get by subscribing. It's really
[00:40:22] important to explain to the user what you will get if you pay for it. And don't create one paywall
[00:40:27] with all this information. Just create different screens. That's really important because users
[00:40:33] won't read everything and they could miss an information. That's it for the onboarding. I'll
[00:40:37] build the app and send it to a preview. And tomorrow we will see if the onboarding completion
[00:40:41] is just a bit better. Let me show you a quick tip. I was submitting my app to App Store Connect.
[00:40:46] Submitting my build to just add it to the App Store. But I'm using EIS Submit and I'm only
[00:40:52] a free user. So I'm on the free TRQ, which is really long. Sometimes one hour, sometimes even
[00:40:58] two hours. I looked for an alternative and there is this app called Transporter. It's an app from
[00:41:04] Apple. You just open it and sign in with your Apple account. Take the build you made and drag
[00:41:10] and drop the file on the Transporter app. To add them, you just have to click on the Deliver button
[00:41:14] and this build will be sent to App Store Connect in something like five minutes. So you just keep
[00:41:20] the whole EIS queue, which is way faster if you're only submitting to App Store and not Play Store.
[00:41:26] With the end of day 35 and today we gained two new paying customers for a total of 80 dollars.
[00:41:32] The new app version with the new onboarding got approved last night and it had a huge impact on
[00:41:37] onboarding completion because today we are at 83% and yesterday we were at 74%. So hopefully this
[00:41:43] trend will continue in the next few days. Also today we got 10 premium purchases, which means
[00:41:48] that 10 users started a free trial. That's pretty good that I spent only 180 euros in that expense
[00:41:54] because it's approximately 200 dollars. So that's going to be way better for me to just track
[00:42:00] everything in dollars. Today is day 36 and we made 164 dollars of revenue. That's four new paying
[00:42:07] customers. Here is the user journey funnel for today and we can see that onboarding completion
[00:42:12] went down just a bit. So I'll wait a few days to see if the trend continues or not. Talking about
[00:42:17] onboarding, in the next few days I'm going to test lots of things. I'll keep the ads running because
[00:42:22] it's driving really good traffic to the app, more than 200 downloads per day. But I think our stats
[00:42:27] are still a bit low. We could increase onboarding completion but also really increase trial start
[00:42:32] rates which is still really low. I'll try different things to improve the onboarding like different
[00:42:38] messages, different screen orders, different paywalls. And when the combination seems pretty
[00:42:43] good we will just increase ad spend to drive more revenue. From now on the formula is pretty simple,
[00:42:49] just try to improve the onboarding to drive more conversion and then spend more on TikTok ads to
[00:42:54] obviously make more revenue. To abitest my different paywalls I'm using the experiments feature
[00:42:59] from post hog. I just created a new experiment called onboarding. I created four variants which
[00:43:05] is no pact so I removed one specific screen, the full onboarding obviously, one with a bit less
[00:43:11] questions and another one with less questions but at a different spot. And then you have to specify
[00:43:16] what kind of metrics do you want to track. I set it up two metrics, the onboarding completion rate
[00:43:22] and the onboarding conversion rate. That means that when a new user arrives on the app he will
[00:43:27] get a random variant, for instance no pact. We will measure if he completes the onboarding
[00:43:33] and converts during the onboarding. With a huge pool of users we're going to have lots of results
[00:43:38] and we will be able to measure which variant is the best and that's going to be the one that we
[00:43:43] will pick for production later. Day 46, long time no see but it feels really good because the last
[00:43:49] days were really interesting. I think my work starts to pay off. That's the part I love the most,
[00:43:54] you see some traction so it seems it kind of works. You just test new things through abitest,
[00:44:01] then you gather some data, some feedbacks and then iterate on it and that's the same cycle you have
[00:44:06] to repeat again and again. And really small changes like just swapping a few screens during
[00:44:11] onboarding can have a huge impact on your trial start rate or just revenue. I didn't run any ads
[00:44:16] during four days because I waited Apple review team to review the new app with the abitest for
[00:44:22] the onboarding and it got pretty long because the app got rejected the first time so I had to submit
[00:44:27] it twice. During that time I had a few trials through organic conversions so one or two per
[00:44:33] day which is a really really good sign. Now let me show you how the abitest looks like in post-hug.
[00:44:38] In a few days more than 300 people went through the onboarding and went through the abitest. I
[00:44:44] had four variants, the control which is the basic onboarding flow, one without a specific screen,
[00:44:50] one with less personal questions and one without a few specific screens about personal plan. My
[00:44:56] primary metric was just onboarding completion and we can see that the no-packed variant was
[00:45:01] really better than the three other ones. And then if we look at onboarding conversion so who started
[00:45:07] a trial through the onboarding process we can see that again the no-packed is really better but the
[00:45:13] less personal so when I removed a few questions about you like how do you feel right now and so
[00:45:18] on drove no conversion so just three screens removed drove no conversion and that's why you
[00:45:24] have to abitest because really small changes can change everything for your conversion and revenue
[00:45:30] so these variants seems to be the best one. This is my app store connect page and yesterday I received
[00:45:36] a very cool email let me show you in the payments and financial reports we got for the last month
[00:45:43] 800 more than 800 usd which is amazing quick clarification on the challenge rules because
[00:45:50] I said that I only use 200 of my own money for tiktok ads and that's still true I haven't spent
[00:45:56] a single dollar more than that but the other thing with app revenue when someone buys a subscription
[00:46:02] I don't actually get the money right away apple holds it for 30 to 45 days before paying me out
[00:46:08] so let's say I've made 50 euros from the app this week this money exists and it's mine but I can't
[00:46:14] touch it yet so I'm just sitting there waiting while my ads could be running what I did is
[00:46:19] basically I loaned myself the money I fronted it from my own pocket temporarily knowing that
[00:46:24] it's coming back when apple pays out this cash flow problem is actually so common that revenue
[00:46:28] cat announced they are building a feature to fix it so they would do exactly what I'm doing to myself
[00:46:34] but with their own money and they would take a percentage obviously like a tax on the revenue
[00:46:39] you made but they would give you the money instantly anyways I just want it to be transparent now let
[00:46:44] me show you the revenue cat dashboard what it looks like currently we have 22 active trials and
[00:46:50] 37 active subscriptions our mo is only at $143 but our revenue is nearly $1,500 I think I'm going to
[00:47:00] keep this challenge going until we hit $2,000 in profits not revenue in one single month I'm going
[00:47:06] to keep abby testing for at least one week because I want to abby test prices paywalls and finish the
[00:47:12] onboarding test but honestly it's getting repetitive and I think the core lesson is done from here is
[00:47:17] just scaling so doing the exact same thing but just with bigger numbers bigger expense so bigger
[00:47:23] revenue and reinvest reinvest and reinvest I'll show you how to make $2,000 of profit per month
[00:47:29] but continuing feels like more the same let's get back to the interesting things I'm going to show
[00:47:34] you my current paywall which is this one it looks like that and I just show you how your fruit trial
[00:47:40] works this one works pretty well from my statistics and I've created a second variance which is the
[00:47:47] claim variance it's really similar but uh the the box here changed and I just copied this one from
[00:47:55] this video from superwall superwall is exactly like revenue cats but they have a really cool podcast
[00:48:01] where they show everything about apps and interview different people and I copied this paywall let me
[00:48:07] show you how it looks because I thought it looked really nice and could really fit our onboarding
[00:48:13] I'm gonna abby test the paywall too and to abby test with revenue cats you just go to the experiments
[00:48:19] tab create a new experiment so you can name it then select the experiment type this one is going
[00:48:25] to be a paywall design you choose the primary metric which is initial conversion rate enrollment
[00:48:31] criteria everyone and then you select the two variants you want to abby test and revenue cat will
[00:48:37] just exactly like post hog send different paywalls to different users and measure the impact this
[00:48:43] morning I discovered a new tiktok ads feature I just wanted to show you I've made a basic script
[00:48:48] which just analyze the trial repartition on every day it looks like that so I store all my revenue
[00:48:55] cat data on my computer and then I can see the different trial distribution by hour with my
[00:49:01] current time zone and that way I can see when I'm converting the most and knowing that when you go
[00:49:08] on tiktok ads on the budget and schedule part you can go to more option and select specific time of
[00:49:15] the day I've selected the best time for me and that way my ads are only running on those times
[00:49:21] which should maximize the conversion that's a quick tip I found that I'm not really sure if that
[00:49:26] works but I thought that was pretty smart to test and the last thing I wanted to show you which is
[00:49:31] apple ads I don't know what I did wrong but it's not working and it's not spending any money I've
[00:49:36] tried different cpt bid and I think I just have to wait maybe my keywords aren't very smart I don't
[00:49:43] know but I got only four downloads for now this is not working I mean that was free money so we
[00:49:50] don't care but yeah that's not the best strategy I ever tried that's it for today I showed you
[00:49:56] lots of things I'm gonna keep the ads running and I really want to to just reach the two thousand
[00:50:03] dollars of profits for the last 28 days I'm gonna keep updating you and show you how it goes hey so
[00:50:09] today is day let me check 49 and I wanted to change a bit because in the last few days I worked a lot
[00:50:15] for school that's soon the Christmas holidays and I have lots of homework about my internship and
[00:50:21] some papers to do so I wanted to dedicate a few hours today to ship a new feature the feature is
[00:50:26] pretty basic it's called practice and you want to have some voice reading some affirmations for you
[00:50:32] in a story like UI that's pretty simple let's go coding to create this feature I'm gonna use a model
[00:50:38] called a text to speech model because I want to give some AI model some text like the affirmation
[00:50:44] text and I'm gonna have back some audio file containing a robot just reading the text I gave
[00:50:50] him every day when you open the app I'm gonna download the last audio files from super base
[00:50:55] that are generated with the Gemini API I was submitting my app to app review and I wanted to
[00:51:00] show you one small setting that I changed a few days ago on App Store Connect that literally made
[00:51:06] me some money so when you go in subscriptions you have the billing rice period and actually this was
[00:51:12] switched off I made it to three days when there is a billing problem like the credit card didn't work
[00:51:18] or any any kind of problem Apple will just try again to charge the credit card in three days
[00:51:24] and during that time the customer just keep the premium or free trial and that's that's just how
[00:51:29] it works so when sometimes the billing isn't working for whatever reason it just tries to
[00:51:35] charge again one day after and another day after just switching this on made me three or four new
[00:51:41] subscriptions which is amazing because I did nothing more it just tried to charge again when
[00:51:47] there was some error also I changed the name to be even more explicit so now it's glow daily
[00:51:52] affirmations and nothing more talking about keywords let me show you how astro looks like
[00:51:58] currently my rankings are getting better every day but I'm still not perfect at all and in some
[00:52:04] countries like Denmark I'm pretty good that's why I have some natural downloads every day
[00:52:10] because my rankings are getting better every day I also ended the onboarding habit test on post-hoc
[00:52:17] and that's the no-pack version that got the most conversions so that's the one that I kept on my
[00:52:22] onboarding for instance yesterday we got 136 downloads and 17 free trials started which is
[00:52:29] pretty good that means that 12.5 percent of users that installed the app started a trial and currently
[00:52:37] today we only had 29 downloads but we have six new trials started which is a 20.6 percent conversion
[00:52:45] rate from all the people who downloaded the app which is even better the onboarding looks pretty
[00:52:50] good I'm really happy with those results and I'm just going to keep updating and trying to improve
[00:52:55] it even more until the Christmas holidays I'm submitting the new app to app review and I really
[00:53:01] hope this new feature will drive even more trials we're gonna see I'll keep you updated obviously
[00:53:07] today is day 54 and we've made three conversions so far so that's more than $120 for one single day
[00:53:14] and yesterday was my best day so far I've made seven conversions in one single day which is just
[00:53:21] impressive actually and that's more than $278 I don't know if you remember but a few weeks ago
[00:53:28] when I tried organic marketing I've made different posts on Reddit and one on the expo subreddit and
[00:53:35] I've had the expo team commenting and just said oh you could write an article about the widgets
[00:53:41] that could be really interesting and guess what yesterday really late at night in France the
[00:53:46] article went out so I have my own article on the expo blog which is crazy again I just talk about
[00:53:54] how I implemented widgets it's pretty basic article but still really cool and the expo team
[00:54:01] was so cool they even sent me a free t-shirt and obviously I asked for an internship we never know
[00:54:07] I've also started the experiment so to test different paywall variants here is how it looks
[00:54:12] so far the b-variant is apparently the best one so far I'm gonna wait again more than 50 conversions
[00:54:19] per paywall to know which one is the best apparently that's what revenue catch recommends also here is
[00:54:26] the current dashboard so our current stats revenue nearly 2100 dollars looking pretty good and
[00:54:33] talking about abitest I also learned a few days ago that you could abitest your app store front page
[00:54:40] so that's on app store connect on product page optimization and you can create a test I'd like
[00:54:45] to only test the app icon apparently it can have a huge impact so let's see I've made uh three four
[00:54:54] new variants I'm just gonna create the test I mean I'm not sure about that one but you know what
[00:55:01] let's test tomorrow I'd like to show you the different tiktoks videos that I've made so you
[00:55:07] can see what worked and what didn't day 55 so first thing first the revenue cat dashboard we
[00:55:14] have 39 active trials 61 active subscriptions and 2400 revenue in the last 28 days and today I wanted
[00:55:22] to show you the different ads that I ran and which one worked the best let me show you my tiktok so
[00:55:28] I tried lots of formats really lots of them the one that worked the best in terms of cost per click
[00:55:35] so the one that cost me the less to have one download was this one at less than 10 cents per
[00:55:42] download which is crazy good it looks like that there is a rhythmic music and a default iOS
[00:55:49] wallpaper with the earth and the sun moving around it depending on the time of the day
[00:55:54] this one worked really well too I just took a video from youtube and I did the exact same thing
[00:56:00] with the earth just after it with another trendy music and the last format which worked also pretty
[00:56:07] well was this one I actually paid a girl 20 dollars per video and she made three videos of five seconds
[00:56:14] it worked really well because it's tiktok native format like vertical screen and so on I tried
[00:56:21] really lots of different formats even pinterest videos like glow up in one month these formats
[00:56:28] work crazy well like the cost per click is freaking low but I couldn't get downloads after the click
[00:56:34] so my app isn't what people were waiting for after clicking on it but if you have a glow up app just
[00:56:43] try these formats that's freaking amazing it works so well I tried different type of pinterest glow up
[00:56:49] things and all of them worked really well with a very low cost per click so try it by yourself if
[00:56:56] you have an app matching that kind of format tomorrow I'll make different videos to just show
[00:57:02] you step by step exactly how to set up the subscriptions how to set up app store connect
[00:57:07] dashboard and revenue cat and everything the different setups can be really tricky sometimes
[00:57:13] so that's why I'm really happy with what I'm building because I'm sure it will help you and
[00:57:17] I think I'm gonna create a new app from scratch especially for the discord because I want to build
[00:57:23] with you so we will be all together starting from scratch or from different steps I think that can
[00:57:29] be really interesting I'm really hyped by all this and start again a new app with all the community
[00:57:35] that's going to be pretty sick I bought the app sprint domain name and in a few days I'll create
[00:57:40] a very basic landing page for all of that to look pretty clean day 56 let's start with revenue cat
[00:57:48] oh maybe just tiktok ads I had this new coupon like 100 euros for free again I think tiktok ads
[00:57:56] really wants to keep their customers so they offer you lots of free ad credits at the beginning
[00:58:03] and then when you start spending they stop to give you free ad credits but we add again 100
[00:58:09] euros of free ad credits which is approximately something like 115 dollars crazy good again we
[00:58:16] won't spend that much on ads I mean we used lots of credits but it wasn't that expensive then for
[00:58:24] the revenue cat part here is the current dashboard so we are at 46 trials 66 active subscriptions
[00:58:33] and the revenue is nearly 2600 today I also filmed some part of the course so I filmed this one
[00:58:44] about how to set up your revenue cat dashboard how to set up your app store connect dashboard
[00:58:51] how to link them because it might be quite challenging so I'm uploading all of that to
[00:58:56] youtube the discord for you to have access to it so yeah pretty good day the revenue is steady like
[00:59:03] every day we have between five and seven eight conversion which is amazing we have a really
[00:59:11] really good download to trial conversion let me show you today we had 50 downloads
[00:59:18] 50 onboarding completed amazing and eight conversion eight trial started so that means
[00:59:27] that we have a 16% conversion from download to trial which is again really nice I think we might
[00:59:34] have the the sweet spot the onboarding is pretty good the payroll is pretty good everything yeah
[00:59:41] everything seems to work today is day 57 and that might be our last day together because I think we
[00:59:47] hit our threshold of $2,000 of profit right now we are at $2,800 of revenue in the last 28 days
[00:59:56] and I think it's a bit more than the $2,000 of profit so let me create a notion and show you
[01:00:02] all the different stats our current conversion rate our current trial rate and everything so you
[01:00:09] know in details where we at I've made three lines the green one is the profits the blue one the
[01:00:16] revenue and the red one the ad spent the revenue is simply the money that users paid the profit
[01:00:22] is the revenue minus apple cut which is 15% minus ad spent so that's actually the money left in my
[01:00:29] pocket at the end we've made a really good profit because I had lots of free credits on tiktok ads
[01:00:35] which really helped us to recap the tiktok ads I ran 20 days of ads at $35 per day so that would
[01:00:43] have been a $700 of ad spent but I had two coupons on the tiktok ads dashboard so two times they gave
[01:00:52] me three credits the first time $210 and the second time $150 so nearly half the ad spent
[01:01:00] was actually three credits from tiktok and I also spent $60 for the three videos to pay the girl on
[01:01:07] tiktok and yeah I have my different videos I think the best things to remember from this experiment
[01:01:14] is just only optimize your onboarding try to spend nearly 90% of your time on the onboarding just try
[01:01:21] to improve every step every conversion during the onboarding because that's where all the money is
[01:01:27] left like more than 80% of conversions or during the onboarding so work on that trust me that's
[01:01:34] way more important than the app itself that seems crazy but that's the case and switch on the grace
[01:01:39] period I mean I had lots of money coming from that nearly 10% of the revenue is coming from that
[01:01:46] so trust me turn on that just grace period you'll gain some money now the interesting numbers my
[01:01:52] current download to trial rate is in average more than 14% and my trial to pay rate is a bit more
[01:02:01] than 31% which is also pretty good so that means that if I have 100 downloads I will have 14 trials
[01:02:09] started and at the end for trial conversion I'll earn $164 for 100 downloads that means that for
[01:02:18] every download I earn $1.64 I also wanted to show you my different reviews I have 55 ratings in
[01:02:25] total with like good ones I got premium for free because on the reddit campaigns I offered those
[01:02:32] but yeah some some really really nice ratings we are currently at 4.7 out of 5 which is quite good
[01:02:40] so I might view that if you watch this video so far I'm pretty sure that you have an idea of any
[01:02:47] kind of project sitting in the back of your head maybe an app maybe a website or something
[01:02:52] completely different like creating a wooden table it actually doesn't matter and I know what you're
[01:02:57] thinking because I was there too like I don't know enough I'll start later but that's not the
[01:03:03] right mindset I've built things that nobody used I've spent a lot of money on things that didn't
[01:03:10] work I tried and failed a lot but that's exactly how I learned I didn't know anything I started
[01:03:16] something learned in the process failed learned from that failure and again and again learning
[01:03:22] by doing and failing is actually the best way of learning and don't try to build anything
[01:03:28] just for the result like if you want to be rich or create something I don't know revolutionary
[01:03:34] don't work only for the result trust me you have to enjoy the whole process enjoy learning enjoy
[01:03:41] failing because you'll spend lots of time just in the process and spend a little little time
[01:03:48] at the end like at the result so if you want your life to be enjoyable trust me you have
[01:03:54] to enjoy the process try to fall in love with learning because at the end I truly think that
[01:03:59] that's the only way to make it sustainable and worth it all right that's it see you in the next one

---

## Metadata

- Video ID: Z-0Vf79GD3w
- Views: 31785
- Likes: 2069
- Upload Date: 2026-01-10
