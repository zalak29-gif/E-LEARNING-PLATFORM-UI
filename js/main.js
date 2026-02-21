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
