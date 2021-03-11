const p = document.querySelectorAll('p');

p.forEach(function (p) {
  if (p.textContent.toLowerCase().includes('the')) {
    p.remove();
  }
});
