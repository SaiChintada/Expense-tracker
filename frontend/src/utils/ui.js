// ===== TOAST =====
export function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ===== DARK MODE TOGGLE =====
export function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// ===== CONFIRM DELETE =====
export function confirmDelete() {
  return window.confirm("Are you sure you want to delete?");
}