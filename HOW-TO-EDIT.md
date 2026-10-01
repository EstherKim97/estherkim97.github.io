# How to edit this site

Everything you will ever edit is in the **content** folder (and **public** for files).
After you click **Commit changes**, the site updates in 1–3 minutes.
Check the **Actions** tab: green check = live, red X = something to fix (the old site stays up).

## Where things are

| I want to change… | Edit this |
|---|---|
| Headline, intro, career strip, recruiter tracks, about page | `content/settings.yaml` |
| A project | `content/projects/<project>.md` |
| Résumé PDFs | `public/resumes/` (same file names) |
| Project screenshots | `public/screenshots/<project>/` |
| Hover covers (Higgsfield) | `public/covers/` |

## Add a new project

1. Open `content/projects/_TEMPLATE.md`, copy everything.
2. In `content/projects`, click **Add file → Create new file**, name it `my-project.md`, paste, fill in.
3. Commit. It appears in its group, in the filters, gets its own page, and is added to llms.txt.

- `group:` must be one of the names in `settings.yaml` → `groups`, spelled exactly.
- `tracks:` can only be `Applied AI` and/or `Health Data Science`.
- `featured: 1`–`5` puts it on the home page. Leave empty otherwise.
- `order:` sorts it inside its group (smaller = higher).
- `hidden: true` keeps it off the site.

## Orange boxes

Any text written as `[TO CONFIRM ...]` shows as an orange box. Replace it with the real text (or delete it) and it disappears.

## Add a new group

In `settings.yaml`, under `groups:`, add another `- name:` and `about:` block. Then use that name in project files.

## Contact form

Your email is never on the site. To turn on the form, make a free form at formspree.io
(it sends messages to your inbox), copy the form ID, and paste it into `formspree_id` in `settings.yaml`.

## If the update fails

Open the **Actions** tab → the red X → read the message. It usually names the file and the label,
e.g. `"group" must be one of: …`. Fix the spelling, commit again.
