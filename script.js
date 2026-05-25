function navigateTo(screen) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));

  // Show selected screen
  document.getElementById(`${screen}-screen`).classList.remove('hidden');
}
