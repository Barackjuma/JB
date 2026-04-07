const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const bookingForm = document.getElementById('booking-form');
const formNotice = document.getElementById('form-notice');

navToggle?.addEventListener('click', () => {
  mainNav?.classList.toggle('open');
});

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const name = formData.get('name')?.toString().trim() || 'Website visitor';
  const email = formData.get('email')?.toString().trim() || 'No email provided';
  const service = formData.get('service')?.toString().trim() || 'No service selected';
  const date = formData.get('date')?.toString().trim() || 'No preferred date';

  const subject = encodeURIComponent(`Booking request from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\nPreferred date: ${date}`);
  const mailtoLink = `mailto:barackjuma911@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
  formNotice.textContent = 'Thanks! Your request has been opened in your email client.';
  bookingForm.reset();
});
