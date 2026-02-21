# SNIPPETSPROUT -E-LEARNING-PLATFORM-UI

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: PARMAR ZALAK KANTILAL

*INTERN ID*: CTIS4007

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# SnippetSprout is an e-learning platform interface prototype built as a multi-section single-page frontend application.
It is implemented in HTML, CSS, and vanilla JavaScript, and from the current files it includes both a monolithic variant (elearning-platform.html + elearning-platform.js) and a cleaner modular architecture (index.html + *.js + *.css).
The modular version is the more evolved structure and reflects stronger engineering organization.

Completed tasks in SnippetSprout are extensive for a frontend-only app.
The platform includes a dashboard experience, course catalog page, “My Learning” tracking page, and watch/video lesson page, all switched through client-side page routing (showPage) by toggling active sections in the DOM.
This gives a multi-page app feel without backend routing. The navigation state is synchronized with section visibility, and smooth scroll reset is applied on page switch.

The Courses module is implemented with functional filtering and search.
Course cards are rendered from structured JS data (data.js), with category filters (design, dev, data, business, ai), dynamic empty-state handling when no results match, and enrollment actions that trigger UI feedback via toast notifications.
The data model includes metadata like title, level, lessons, hours, rating, badge, pricing, and theme visuals.

The My Learning module includes active/completed course summary UI plus an activity heatmap renderer (my-learning.js) that creates a 16-week style contribution grid (112 cells) with activity intensity tiers and tooltips.
This is a strong completed feature for engagement simulation. The Watch module includes embedded video iframe, lesson playlist rendering and selection behavior, tabbed panels (overview/notes/resources/Q&A), note capture in-memory, question posting in Q&A list, and action toasts (bookmark/share/complete feedback).

The UI layer is separated into thematic CSS modules (base, home-dashboard, courses, my-learning, video-player, responsive), which shows completed work in maintainable styling architecture.
There is also a duplicated elearning-css set used by the older monolithic page.
This indicates project evolution from single-file JS/CSS structure toward modular organization.

Runtime and platform: SnippetSprout currently runs fully in the browser with no backend services.
Data is local and simulated, user actions are frontend-state driven, and the YouTube lesson is embedded via iframe.
It can run on XAMPP or any static host. There is no Node/Vite build process in this project version.

Languages and technologies used are HTML5, CSS3, and JavaScript.
Functional coverage includes routing, rendering, filtering, search, playlist control, tab switching, notes/Q&A interactions, toast notifications, and responsive design.
In short, SnippetSprout is a feature-rich frontend e-learning prototype with most UX workflows already implemented at UI-logic level, ready for future backend integration if needed.

# OUTPUT

<img width="1919" height="913" alt="Image" src="https://github.com/user-attachments/assets/ccefad2c-574e-4b36-8d9b-388ad09c18ff" />

<img width="1919" height="920" alt="Image" src="https://github.com/user-attachments/assets/36aa0303-a8c6-4427-8010-3c2250492feb" />

<img width="1919" height="917" alt="Image" src="https://github.com/user-attachments/assets/ef49a4d5-5e16-46bd-8733-ceefadb141d0" />

<img width="1919" height="921" alt="Image" src="https://github.com/user-attachments/assets/68d625fe-df7f-470c-966b-a178bbaf6eae" />

<img width="1919" height="918" alt="Image" src="https://github.com/user-attachments/assets/19f577fc-f794-4c0a-899c-12492a4965ae" />

<img width="1919" height="920" alt="Image" src="https://github.com/user-attachments/assets/6309f0ee-2ae1-4705-9c83-2a1c8452a32d" />

<img width="1919" height="915" alt="Image" src="https://github.com/user-attachments/assets/4a02dfe4-1926-4fb8-b7fd-e088d2ad7b7d" />

<img width="1919" height="916" alt="Image" src="https://github.com/user-attachments/assets/19070b9d-f4b1-42f0-acf9-8cc5fdb6a8b3" />

<img width="1919" height="915" alt="Image" src="https://github.com/user-attachments/assets/2f383086-aabc-4eac-834f-970ff571c0c7" />

<img width="1919" height="919" alt="Image" src="https://github.com/user-attachments/assets/03be15de-b5f9-4d96-8115-2d699bf17a80" />

<img width="1919" height="918" alt="Image" src="https://github.com/user-attachments/assets/3a7753eb-8b16-4d49-bed9-4ca0874c9cbb" />

<img width="1919" height="917" alt="Image" src="https://github.com/user-attachments/assets/b43f01b7-a85c-471f-9c4e-8333c74427b7" />

<img width="1919" height="914" alt="Image" src="https://github.com/user-attachments/assets/283587d7-5088-4c70-a171-c56a4aff6575" />

<img width="1919" height="920" alt="Image" src="https://github.com/user-attachments/assets/893f85f1-cdda-44d8-b1a0-3211e0bd803b" />
