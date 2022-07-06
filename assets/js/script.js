const range_slider = document.getElementById('range');
const label_slider = document.getElementById('label')

range_slider.addEventListener('input', function() {
  const value = range_slider.value;
  label_slider.innerHTML = value;
  label_slider.style.left = (value / 1.25) + '%';
})