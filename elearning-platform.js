// â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const courses = [
    { id:1, cat:'Design', category:'design', title:'UI/UX Design Masterclass: Zero to Hero', desc:'From wireframes to polished prototypes â€” master the complete design workflow.', lessons:34, hours:'22h', level:'Beginner', price:'â‚¹1,299', old:'â‚¹3,999', badge:'pop', icon:'ðŸŽ¨', bg:'linear-gradient(135deg,#1e3a5f,#0f2a45)' },
    { id:2, cat:'Development', category:'dev', title:'Full Stack Web Development Bootcamp', desc:'React, Node.js, MongoDB & more. Build real-world projects from day one.', lessons:60, hours:'48h', level:'Intermediate', price:'â‚¹1,999', old:'â‚¹5,999', badge:'', icon:'ðŸ’»', bg:'linear-gradient(135deg,#3d1a4a,#1a0a2e)' },
    { id:3, cat:'Data Science', category:'data', title:'Python for Data Science & Visualization', desc:'Pandas, NumPy, Matplotlib, Seaborn â€” the essential data science toolkit.', lessons:45, hours:'30h', level:'Beginner', price:'Free', old:'', badge:'free', icon:'ðŸ“Š', bg:'linear-gradient(135deg,#1a3a2a,#0a2a1a)' },
    { id:4, cat:'AI & ML', category:'ai', title:'Machine Learning Aâ€“Z: Hands-On Python', desc:'Supervised, unsupervised learning, neural nets â€” complete ML roadmap.', lessons:52, hours:'40h', level:'Advanced', price:'â‚¹2,499', old:'â‚¹6,999', badge:'new', icon:'ðŸ¤–', bg:'linear-gradient(135deg,#4a2a1a,#2a1a0a)' },
    { id:5, cat:'Business', category:'business', title:'Product Management: Zero to PM', desc:'Strategy, roadmaps, PRDs and stakeholder management â€” become a great PM.', lessons:28, hours:'18h', level:'Intermediate', price:'â‚¹999', old:'â‚¹2,999', badge:'', icon:'ðŸ“‹', bg:'linear-gradient(135deg,#3a3a1a,#2a2a0a)' },
    { id:6, cat:'Design', category:'design', title:'Motion Design with After Effects', desc:'Create cinematic animations, transitions, and motion graphics professionals love.', lessons:38, hours:'28h', level:'Intermediate', price:'â‚¹1,499', old:'â‚¹4,499', badge:'', icon:'âœ¨', bg:'linear-gradient(135deg,#2a1a3a,#1a0a2a)' },
    { id:7, cat:'AI & ML', category:'ai', title:'Large Language Models & Prompt Engineering', desc:'Understand transformers, fine-tuning, and master prompting for real applications.', lessons:24, hours:'16h', level:'Advanced', price:'â‚¹1,799', old:'â‚¹4,999', badge:'new', icon:'ðŸ§ ', bg:'linear-gradient(135deg,#1a2a3a,#0a1a2a)' },
    { id:8, cat:'Development', category:'dev', title:'iOS Development with Swift 5', desc:'Build beautiful native apps for iPhone and iPad using modern SwiftUI.', lessons:44, hours:'36h', level:'Intermediate', price:'Free', old:'', badge:'free', icon:'ðŸ“±', bg:'linear-gradient(135deg,#3a1a1a,#2a0a0a)' },
  ];

  const lessons = [
    { num:1, title:'Introduction to Prototyping', dur:'8:12', done:true },
    { num:2, title:'Figma Basics: Frames & Components', dur:'15:44', done:true },
    { num:3, title:'Creating Navigation Flows', dur:'19:30', done:true },
    { num:4, title:'Auto-Animate & Smart Animate', dur:'22:05', done:false, playing:true },
    { num:5, title:'Scrollable Frames & Overlays', dur:'17:50', done:false },
    { num:6, title:'Interactive Components Deep Dive', dur:'28:15', done:false },
    { num:7, title:'Mobile Prototyping Best Practices', dur:'14:00', done:false },
    { num:8, title:'Handoff to Developers', dur:'11:30', done:false },
  ];

  // â”€â”€â”€ PAGE SWITCHING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.getElementById('nav-' + name).classList.add('active');
    window.scrollTo(0, 0);
  }

  // â”€â”€â”€ COURSES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function renderCourses(filter = 'all') {
    const grid = document.getElementById('courses-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter);
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
            <span>ðŸ“¹ ${c.lessons} lessons</span>
            <span>â±ï¸ ${c.hours}</span>
            <span>ðŸ“¶ ${c.level}</span>
          </div>
          <div class="course-footer">
            <div class="course-price">${c.price}${c.old ? `<span class="old">${c.old}</span>` : ''}</div>
            <button class="btn btn-primary" onclick="enrollCourse(event,'${c.title}')">Enroll Now</button>
          </div>
        </div>`;
      grid.appendChild(div);
    });
  }

  function filterCourses(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(cat);
  }

  function enrollCourse(e, title) {
    e.stopPropagation();
    showToast('ðŸŽ‰ You enrolled in "' + title.split(':')[0] + '"!');
  }

  // â”€â”€â”€ PLAYLIST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function renderPlaylist() {
    const container = document.getElementById('playlist-items');
    container.innerHTML = '';
    lessons.forEach(l => {
      const div = document.createElement('div');
      div.className = 'playlist-item' + (l.playing ? ' playing' : '');
      div.innerHTML = `
        <div class="pl-num">${l.playing ? 'â™ª' : l.num}</div>
        <div class="pl-info">
          <h5>${l.title}</h5>
          <p>${l.dur}</p>
        </div>
        ${l.done ? '<span class="pl-check">âœ“</span>' : `<span class="pl-dur">${l.dur}</span>`}`;
      div.onclick = () => {
        lessons.forEach(x => { x.playing = false; x.done = x.done; });
        l.playing = true;
        renderPlaylist();
        showToast('â–¶ Playing: ' + l.title);
      };
      container.appendChild(div);
    });
  }

  // â”€â”€â”€ TABS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function switchTab(name, btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + name).classList.add('active');
  }

  // â”€â”€â”€ HEATMAP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function renderHeatmap() {
    const grid = document.getElementById('heatmap');
    const levels = ['', 'h1', 'h2', 'h3', 'h4'];
    for (let i = 0; i < 112; i++) {
      const cell = document.createElement('div');
      const r = Math.random();
      const cls = r < 0.35 ? '' : r < 0.55 ? 'h1' : r < 0.72 ? 'h2' : r < 0.87 ? 'h3' : 'h4';
      cell.className = 'heatmap-cell ' + cls;
      grid.appendChild(cell);
    }
  }

  // â”€â”€â”€ TOAST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  // â”€â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  renderCourses();
  renderPlaylist();
  renderHeatmap();
