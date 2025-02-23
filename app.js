document.addEventListener("DOMContentLoaded", () => {
  const notes = document.querySelectorAll(".note");

  notes.forEach(note => {
    note.addEventListener("click", () => {
      note.classList.toggle("minimized");
    });
  });
});
