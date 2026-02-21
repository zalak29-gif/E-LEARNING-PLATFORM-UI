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
        <div style="font-size:3rem; margin-bottom:1rem;">Search</div>
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
          <span>Rating: ${c.rating}/5</span>
          <span>Lessons: ${c.lessons}</span>
          <span>Duration: ${c.hours}</span>
          <span>Level: ${c.level}</span>
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
  showToast('Enrolled in "' + title.split(':')[0].trim() + '"!');
}
