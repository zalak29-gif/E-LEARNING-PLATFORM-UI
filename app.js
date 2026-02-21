/* ══════════════════════════════
   LUMINA E-LEARNING — app.js
   Data · Page Router · Courses · Playlist · Heatmap · Q&A · Notes · Toast
══════════════════════════════ */

/* ──────────────────────────────
   DATA
────────────────────────────── */
const courses = [
  {
    id: 1, cat: 'Design', category: 'design',
    title: 'UI/UX Design Masterclass: Zero to Hero',
    desc: 'From wireframes to polished prototypes — master the complete design workflow.',
    lessons: 34, hours: '22h', level: 'Beginner',
    price: '₹1,299', old: '₹3,999', badge: 'pop',
    icon: '🎨', bg: 'linear-gradient(135deg,#1e3a5f,#0f2a45)',
    rating: '4.9', students: '18,400'
  },
  {
    id: 2, cat: 'Development', category: 'dev',
    title: 'Full Stack Web Development Bootcamp',
    desc: 'React, Node.js, MongoDB & more. Build real-world projects from day one.',
    lessons: 60, hours: '48h', level: 'Intermediate',
    price: '₹1,999', old: '₹5,999', badge: '',
    icon: '💻', bg: 'linear-gradient(135deg,#3d1a4a,#1a0a2e)',
    rating: '4.8', students: '32,100'
  },
  {
    id: 3, cat: 'Data Science', category: 'data',
    title: 'Python for Data Science & Visualization',
    desc: 'Pandas, NumPy, Matplotlib, Seaborn — the essential data science toolkit.',
    lessons: 45, hours: '30h', level: 'Beginner',
    price: 'Free', old: '', badge: 'free',
    icon: '📊', bg: 'linear-gradient(135deg,#1a3a2a,#0a2a1a)',
    rating: '4.7', students: '54,200'
  },
  {
    id: 4, cat: 'AI & ML', category: 'ai',
    title: 'Machine Learning A–Z: Hands-On Python',
    desc: 'Supervised, unsupervised learning, neural nets — complete ML roadmap.',
    lessons: 52, hours: '40h', level: 'Advanced',
    price: '₹2,499', old: '₹6,999', badge: 'new',
    icon: '🤖', bg: 'linear-gradient(135deg,#4a2a1a,#2a1a0a)',
    rating: '4.9', students: '11,800'
  },
  {
    id: 5, cat: 'Business', category: 'business',
    title: 'Product Management: Zero to PM',
    desc: 'Strategy, roadmaps, PRDs and stakeholder management — become a great PM.',
    lessons: 28, hours: '18h', level: 'Intermediate',
    price: '₹999', old: '₹2,999', badge: '',
    icon: '📋', bg: 'linear-gradient(135deg,#3a3a1a,#2a2a0a)',
    rating: '4.6', students: '9,200'
  },
  {
    id: 6, cat: 'Design', category: 'design',
    title: 'Motion Design with After Effects',
    desc: 'Create cinematic animations, transitions, and motion graphics professionals love.',
    lessons: 38, hours: '28h', level: 'Intermediate',
    price: '₹1,499', old: '₹4,499', badge: '',
    icon: '✨', bg: 'linear-gradient(135deg,#2a1a3a,#1a0a2a)',
    rating: '4.8', students: '7,600'
  },
  {
    id: 7, cat: 'AI & ML', category: 'ai',
    title: 'Large Language Models & Prompt Engineering',
    desc: 'Understand transformers, fine-tuning, and master prompting for real applications.',
    lessons: 24, hours: '16h', level: 'Advanced',
    price: '₹1,799', old: '₹4,999', badge: 'new',
    icon: '🧠', bg: 'linear-gradient(135deg,#1a2a3a,#0a1a2a)',
    rating: '5.0', students: '3,400'
  },
  {
    id: 8, cat: 'Development', category: 'dev',
    title: 'iOS Development with Swift 5',
    desc: 'Build beautiful native apps for iPhone and iPad using modern SwiftUI.',
    lessons: 44, hours: '36h', level: 'Intermediate',
    price: 'Free', old: '', badge: 'free',
    icon: '📱', bg: 'linear-gradient(135deg,#3a1a1a,#2a0a0a)',
    rating: '4.8', students: '21,900'
  },
  {
    id: 9, cat: 'Data Science', category: 'data',
    title: 'Advanced SQL & Database Design',
    desc: 'Joins, indexes, stored procedures and query optimization for pros.',
    lessons: 32, hours: '20h', level: 'Intermediate',
    price: '₹899', old: '₹2,499', badge: '',
    icon: '🗄️', bg: 'linear-gradient(135deg,#1a2a1a,#0a1a0a)',
    rating: '4.7', students: '15,600'
  },
  {
    id: 10, cat: 'Business', category: 'business',
    title: 'Digital Marketing Masterclass 2025',
    desc: 'SEO, paid ads, email marketing, social media — grow any business online.',
    lessons: 50, hours: '35h', level: 'Beginner',
    price: '₹1,199', old: '₹3,499', badge: 'pop',
    icon: '📣', bg: 'linear-gradient(135deg,#2a1a0a,#1a0a00)',
    rating: '4.6', students: '28,300'
  }
];

const lessons = [
  { num: 1, title: 'Introduction to Prototyping',         dur: '8:12',  done: true,  playing: false },
  { num: 2, title: 'Figma Basics: Frames & Components',   dur: '15:44', done: true,  playing: false },
  { num: 3, title: 'Creating Navigation Flows',           dur: '19:30', done: true,  playing: false },
  { num: 4, title: 'Auto-Animate & Smart Animate',        dur: '22:05', done: false, playing: true  },
  { num: 5, title: 'Scrollable Frames & Overlays',        dur: '17:50', done: false, playing: false },
  { num: 6, title: 'Interactive Components Deep Dive',    dur: '28:15', done: false, playing: false },
  { num: 7, title: 'Mobile Prototyping Best Practices',   dur: '14:00', done: false, playing: false },
  { num: 8, title: 'Handoff to Developers',               dur: '11:30', done: false, playing: false },
];

/* ──────────────────────────────
   PAGE ROUTER
────────────────────────────── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const page = document.getElementById('page-' + name);
  const nav  = document.getElementById('nav-' + name);

  if (page) page.classList.add('active');
  if (nav)  nav.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ──────────────────────────────
   COURSES — render & filter
────────────────────────────── */
let currentFilter = 'all';
let currentSearch = '';

function renderCourses() {
  const grid = document.getElementById('courses-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = courses.filter(c => {
    const matchCat    = currentFilter === 'all' || c.category === currentFilter;
    const matchSearch = c.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        c.cat.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        c.desc.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:4rem 2rem; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:1rem;">🔍</div>
        <h3 style="font-size:1.1rem; margin-bottom:0.5rem;">No courses found</h3>
        <p>Try a different search or filter.</p>
      </div>`;
    return;
  }

  filtered.forEach((c, i) => {
    const div = document.createElement('div');
    div.className = 'course-card';
    div.style.animationDelay = (i * 0.07) + 's';
    div.innerHTML = `
      <div class="course-thumb" style="background:${c.bg}">
        <div class="course-thumb-icon">${c.icon}</div>
        ${c.badge ? `<div class="course-badge badge-${c.badge}">${c.badge}</div>` : ''}
      </div>
      <div class="course-body">
        <div class="course-cat">${c.cat}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="course-meta">
          <span>⭐ ${c.rating}</span>
          <span>📹 ${c.lessons} lessons</span>
          <span>⏱️ ${c.hours}</span>
          <span>📶 ${c.level}</span>
        </div>
        <div class="course-footer">
          <div class="course-price">
            ${c.price}
            ${c.old ? `<span class="old">${c.old}</span>` : ''}
          </div>
          <button class="btn btn-primary" onclick="enrollCourse(event,'${c.title}')">Enroll Now</button>
        </div>
      </div>`;
    grid.appendChild(div);
  });
}

function filterCourses(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = cat;
  renderCourses();
}

function searchCourses(query) {
  currentSearch = query;
  renderCourses();
}

function enrollCourse(e, title) {
  e.stopPropagation();
  showToast('🎉 Enrolled in "' + title.split(':')[0].trim() + '"!');
}

/* ──────────────────────────────
   PLAYLIST
────────────────────────────── */
function renderPlaylist() {
  const container = document.getElementById('playlist-items');
  if (!container) return;
  container.innerHTML = '';

  lessons.forEach((l, idx) => {
    const div = document.createElement('div');
    div.className = 'playlist-item' + (l.playing ? ' playing' : '');

    div.innerHTML = `
      <div class="pl-num">${l.playing ? '♪' : l.num}</div>
      <div class="pl-info">
        <h5>${l.title}</h5>
        <p>${l.dur}</p>
      </div>
      ${l.done
        ? '<span class="pl-check">✓</span>'
        : `<span class="pl-dur">${l.dur}</span>`
      }`;

    div.addEventListener('click', () => {
      lessons.forEach(x => { x.playing = false; });
      l.playing = true;
      renderPlaylist();
      showToast('▶ Playing: ' + l.title);
    });

    container.appendChild(div);
  });
}

/* ──────────────────────────────
   TABS (Watch page)
────────────────────────────── */
function switchTab(name, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const target = document.getElementById('tab-' + name);
  if (target) target.classList.add('active');
}

/* ──────────────────────────────
   NOTES (Watch page)
────────────────────────────── */
const savedNotes = [];

function saveNote() {
  const notepad = document.getElementById('notepad');
  if (!notepad) return;
  const text = notepad.value.trim();
  if (!text) { showToast('⚠️ Please write something first.'); return; }

  savedNotes.push(text);
  notepad.value = '';
  renderNotes();
  showToast('📝 Note saved!');
}

function renderNotes() {
  const container = document.getElementById('saved-notes');
  if (!container) return;
  container.innerHTML = '';
  savedNotes.slice().reverse().forEach(note => {
    const div = document.createElement('div');
    div.className = 'saved-note-item';
    div.textContent = note;
    container.appendChild(div);
  });
}

/* ──────────────────────────────
   Q&A (Watch page)
────────────────────────────── */
function postQuestion() {
  const input = document.getElementById('qa-input');
  const list  = document.getElementById('qa-list');
  if (!input || !list) return;
  const text = input.value.trim();
  if (!text) { showToast('⚠️ Please type a question first.'); return; }

  const item = document.createElement('div');
  item.className = 'qa-item';
  item.style.animation = 'fadeIn 0.3s ease';
  item.innerHTML = `
    <div class="qa-avatar" style="background:var(--gold-muted); color:var(--gold)">Z</div>
    <div class="qa-body">
      <h6>You <span>Just now</span></h6>
      <p>${text}</p>
      <div class="qa-reply" style="color:var(--text-muted); font-style:italic;">⏳ Awaiting instructor reply...</div>
    </div>`;

  list.appendChild(item);
  input.value = '';
  item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  showToast('✅ Question posted!');
}

/* ──────────────────────────────
   ACTIVITY HEATMAP
────────────────────────────── */
function renderHeatmap() {
  const grid = document.getElementById('heatmap');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 0; i < 112; i++) {
    const cell = document.createElement('div');
    const r = Math.random();
    const cls = r < 0.35 ? ''    :
                r < 0.55 ? 'h1'  :
                r < 0.72 ? 'h2'  :
                r < 0.87 ? 'h3'  : 'h4';
    cell.className = 'heatmap-cell ' + cls;

    // Tooltip on hover
    const hours = cls === ''   ? 0  :
                  cls === 'h1' ? 1  :
                  cls === 'h2' ? 2  :
                  cls === 'h3' ? 3  : 4;
    cell.title = hours === 0 ? 'No activity' : `${hours}h learned`;
    grid.appendChild(cell);
  }
}

/* ──────────────────────────────
   TOAST NOTIFICATION
────────────────────────────── */
let toastTimer = null;

function showToast(msg) {
  const toast   = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ──────────────────────────────
   INIT — runs on page load
────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  renderPlaylist();
  renderHeatmap();

  // Allow pressing Enter in Q&A input to post
  const qaInput = document.getElementById('qa-input');
  if (qaInput) {
    qaInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') postQuestion();
    });
  }

  // Allow pressing Enter in search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchCourses('');
      }
    });
  }
});
