const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

// Replace this with the company's verified official email before using the form.
const COMPANY_EMAIL = "skyworldglobalmanagement@gmail.com";
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  if (COMPANY_EMAIL === "skyworldglobalmanagement@gmail.com") {
    formStatus.textContent = "Please update COMPANY_EMAIL in script.js with your verified official email address before using this form.";
    formStatus.style.color = "#b45309";
    return;
  }
  const data = new FormData(contactForm);
  const subject = `Website enquiry: ${data.get("subject")}`;
  const body = [
    `Name: ${data.get("fullName")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Enquiry type: ${data.get("subject")}`,
    "",
    "Message:",
    data.get("message")
  ].join("\\n");
  formStatus.textContent = "Opening your email application. Please review and send the email there.";
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});