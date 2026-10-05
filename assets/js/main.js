/* ==========================================================
   Dr. K. Sandeep Reddy - site scripts
   Includes loader, language toggle (EN / Telugu), booking modal,
   toast, mobile menu
   ========================================================== */

let currentLang = 'EN';   // 'EN' or 'TEL'
try { currentLang = localStorage.getItem('doctor_lang') || 'EN'; } catch (e) {}

/* ---------- Includes ----------
   <div data-include="header"></div> is replaced with SITE_COMPONENTS.header
   (defined in assets/js/components.js). */
function loadIncludes() {
  document.querySelectorAll('[data-include]').forEach((el) => {
    const name = el.getAttribute('data-include');
    if (typeof SITE_COMPONENTS !== 'undefined' && SITE_COMPONENTS[name]) {
      el.outerHTML = SITE_COMPONENTS[name];
    } else {
      console.error('Missing component:', name, '- is assets/js/components.js loaded before main.js?');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadIncludes();
  applyLanguage(currentLang);

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const modal = document.getElementById('bookingModal');
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeBookingModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeBookingModal(); });

  // Opened with #aboutSection etc.? Jump there now that the header/footer exist.
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
});

/* ---------- Language ---------- */
function toggleLanguage() {
  currentLang = currentLang === 'EN' ? 'TEL' : 'EN';
  try { localStorage.setItem('doctor_lang', currentLang); } catch (e) {}
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const isEN = lang === 'EN';
  const label = document.getElementById('langLabel');
  const labelMobile = document.getElementById('langLabelMobile');
  if (label) label.innerText = isEN ? 'తెలుగులో చదవండి' : 'Switch to English';
  if (labelMobile) labelMobile.innerText = isEN ? 'తెలుగు' : 'English';
  document.documentElement.lang = isEN ? 'en' : 'te';

  // Shared text from assets/js/i18n.js
  document.querySelectorAll('[data-lang]').forEach((el) => {
    const key = el.getAttribute('data-lang');
    if (typeof I18N !== 'undefined' && I18N[lang] && I18N[lang][key]) el.innerText = I18N[lang][key];
  });

  // Page-specific text written directly in the HTML: data-en="..." data-te="..."
  document.querySelectorAll('[data-en][data-te]').forEach((el) => {
    el.innerText = el.getAttribute(isEN ? 'data-en' : 'data-te');
  });
}

/* ---------- Mobile menu ---------- */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
}

/* ---------- Booking modal ---------- */
function openBookingModal(procedureName) {
  const modal = document.getElementById('bookingModal');
  const select = document.getElementById('modalServiceSelect');
  if (!modal) return;
  if (procedureName && select) {
    const wanted = procedureName.toLowerCase();
    let idx = -1;
    for (let i = 0; i < select.options.length; i++) {          // exact match first
      if (select.options[i].value.toLowerCase() === wanted) { idx = i; break; }
    }
    if (idx === -1) {                                          // then partial match
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase().includes(wanted)) { idx = i; break; }
      }
    }
    if (idx !== -1) select.selectedIndex = idx;
  }
  modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.add('hidden');
}

/* ---------- Forms ----------
   These only show a confirmation message - no data is sent anywhere.
   To receive real bookings, connect Formspree / Google Forms / WhatsApp (see README). */
function handleModalFormSubmit(e) {
  e.preventDefault();
  closeBookingModal();
  showToast('Appointment request received! Our staff will contact you shortly.');
  e.target.reset();
}

function handleDirectFormSubmit(e) {
  e.preventDefault();
  showToast('Priority appointment request received for this service! Our staff will call you shortly.');
  e.target.reset();
}

/* ---------- Toast ---------- */
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const text = document.getElementById('toastText');
  if (!toast || !text) return;
  text.innerText = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}
