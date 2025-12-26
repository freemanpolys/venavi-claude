# YouTube Notes – Instructions for Agents

This folder (`youtube/notes/`) stores **one markdown file per YouTube video** that is important or interesting.
Each file contains the video link, transcript, and my own notes so I can search and reuse the ideas later.

Agents working in this folder should follow these rules.

---

## 1. When to create a new note

Create a new note file in `youtube/notes/` when **all** of the following are true:

- I provide a **YouTube URL** for a video I care about, and
- I say (or clearly imply) that I want to keep notes / transcript for it.

Do **not** create files for every random link. Only for:

- Videos that are especially useful for my learning (Go, Angular, Azure, SaaS, etc.)
- Videos I might want to revisit or turn into content (YouTube, newsletter, SaaS docs)

---

## 2. File naming convention

Create one file per video using this pattern:

```text
YYYY-MM-DD-channel-or-topic-short-title.md
```

Where:

- `YYYY-MM-DD` is the date **I watched** (or the date you are creating the note)
- `channel-or-topic` is a short identifier for the channel or main topic
- `short-title` is a short readable slug for the video

Examples:

```text
2025-01-20-golang-concurrency-patterns.md
2025-01-21-angular-signals-intro.md
2025-01-22-azure-functions-best-practices.md
```

If you are unsure about the exact slug, pick something short and descriptive so I can recognize it later.

---

## 3. Standard template for each video note

Each video note file **must** follow this structure:

```markdown
# <VIDEO TITLE>

- **Channel**: <Channel Name>
- **Published**: <YYYY-MM-DD> (if known)
- **Watched on**: <YYYY-MM-DD>
- **YouTube URL**: https://www.youtube.com/watch?v=...

---

## 1. Quick summary (5–10 lines)

- Main idea of the video in my own words
- Who this is useful for
- Why this video is worth re-watching

---

## 2. Key points / timestamps

- `00:00` – Main problem the video addresses
- `05:23` – Important concept #1
- `12:10` – Example or demo I liked
- `21:45` – Technique / pattern to reuse
- `30:00` – Conclusion / key takeaway

(Adjust timestamps and bullets based on the actual video.)

---

## 3. Transcript

> Paste the transcript here (or at least the important sections).
> It is okay to paste only key chunks if the full transcript is huge.

---

## 4. My notes / ideas

- How this connects to my Go / Angular / Azure work
- Any SaaS ideas it inspired
- Things to try in my own projects
- Questions to revisit later
```

Agents may auto-fill the **Quick summary** and **Key points** sections using the transcript text I provide.

---

## 4. Transcript handling

- **Agents must NOT fetch transcripts from external services on their own.**
- I will paste in the transcript (or important parts) manually.
- Agents can then:
  - Summarize the transcript
  - Extract key points and timestamps (if they are visible in the text)
  - Clean up formatting (remove extra timestamps, ads, etc.)

If I do **not** provide a transcript, still create the file and leave the `Transcript` section with a note like:

```markdown
> Transcript not provided yet.
```

---

## 5. Relationship to the rest of the repo

- Use this folder for **per-video deep notes**.
- High-level mentions of what I watched today can go in daily notes or dashboards, but the full details live here.
- If a video strongly relates to a SaaS idea, Go/Angular/Azure architecture, or content project:
  - You may add a short link from the relevant project file to this video note.

Example cross-link:

```markdown
Related video note: `youtube/notes/2025-01-20-golang-concurrency-patterns.md`
```

---

## 6. What agents should NOT do

- Do not create code or scripts here; this folder is for **notes and transcripts**, not source code.
- Do not change file naming conventions without an explicit instruction from me.
- Do not mass-rename or restructure this folder unless I explicitly ask.
- Do not invent fake YouTube URLs.

---

## 7. Typical workflow for an agent

When I give you a new YouTube video to capture:

1. Take the URL and any extra info I give (title, channel, date watched).
2. Propose or create a filename using the naming convention.
3. Create the markdown file in `youtube/notes/` using the standard template.
4. Insert the URL and details I provided.
5. If I pasted a transcript:
   - Fill in **Quick summary**
   - Fill in **Key points / timestamps**
6. Leave **My notes / ideas** partly empty or with a few prompts so I can add my own thoughts later.

This keeps YouTube learning organized and easy to reuse for future content and projects.
