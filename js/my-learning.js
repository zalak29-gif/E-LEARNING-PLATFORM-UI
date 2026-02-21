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

