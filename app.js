const roles = [
  "Blue Team Enthusiast",
  "Learner"
];

let index = 0;
let char = 0;
let deleting = false;
const el = document.getElementById("typing");

function type() {
  const current = roles[index];

  if (!deleting) {
    el.textContent = current.slice(0, ++char);
    if (char === current.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    el.textContent = current.slice(0, --char);
    if (char === 0) {
      deleting = false;
      index = (index + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 40 : 80);
}

type();