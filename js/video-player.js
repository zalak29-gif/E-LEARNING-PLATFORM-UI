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

