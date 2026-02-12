export function injectStyles() {
  if (typeof document === "undefined") return;

  if (document.getElementById("toastfytime-styles")) return;

  const style = document.createElement("style");
  style.id = "toastfytime-styles";
  style.innerHTML = `

.toastfytime-container {
  position: fixed;
  z-index: 9999;
}

.toastfytime-container.top-right {
  top: 20px;
  right: 20px;
}

.toastfytime-container.top-left {
  top: 20px;
  left: 20px;
}

.toastfytime-container.bottom-right {
  bottom: 20px;
  right: 20px;
}

.toastfytime-container.bottom-left {
  bottom: 20px;
  left: 20px;
}

.toastfytime-container.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ===================== */
/* THEME VARIABLES */
/* ===================== */

html[data-toast-theme="light"] {
  --toast-text: #111827;
  --toast-shadow: rgba(0, 0, 0, 0.15);
  --toast-progress: rgba(0, 0, 0, 0.2);
}

html[data-toast-theme="dark"] {
  --toast-text: #ffffff;
  --toast-shadow: rgba(0, 0, 0, 0.6);
  --toast-progress: rgba(255, 255, 255, 0.4);
}

/* ===================== */
/* TOAST BASE */
/* ===================== */

.toastfytime-toast {
  background: var(--bg);
  color: var(--toast-text);
  padding: 14px 18px;
  margin-bottom: 12px;
  border-radius: 10px;
  min-width: 250px;
  animation: slideIn 0.3s ease;
  position: relative;
  overflow: hidden;
  font-weight: 500;
  box-shadow: 0 8px 20px var(--toast-shadow);
  backdrop-filter: blur(6px);
  transition: transform 0.2s ease;
}

.toastfytime-toast:hover {
  transform: translateY(-2px);
}

/* ===================== */
/* TYPE COLORS */
/* ===================== */

.toastfytime-toast.success { --bg: #16a34a; }
.toastfytime-toast.error { --bg: #dc2626; }
.toastfytime-toast.info { --bg: #2563eb; }
.toastfytime-toast.warning { --bg: #d97706; }

/* ===================== */
/* PROGRESS BAR */
/* ===================== */

.toastfytime-progress {
  height: 4px;
  background: var(--toast-progress);
  position: absolute;
  bottom: 0;
  left: 0;
  animation: progress linear forwards;
}

/* ===================== */
/* ANIMATIONS */
/* ===================== */

@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}

@keyframes slideIn {
  from { transform: translateX(100%) scale(0.95); opacity: 0; }
  to { transform: translateX(0) scale(1); opacity: 1; }
}
`;

  document.head.appendChild(style);
}


