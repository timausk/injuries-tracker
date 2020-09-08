const {daysDifference} = require('../../lib/dates');

(() => {
  const nowMs = Date.now();
  const injuries = document.querySelectorAll('.js-row-injured');
  for (const injury of injuries) {
    let tdTotalDays = injury.querySelector('.js-cell-total');
    let startMs = parseInt(injury.dataset.ms);
    let diff = daysDifference(startMs, nowMs);
    tdTotalDays.innerHTML = diff.toString();
    tdTotalDays.className = '';
  }
})();
