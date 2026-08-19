import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { initPage } from './navbar.js'

initPage('contact')

const CONTACT_HERO = 'https://images.pexels.com/photos/20683315/pexels-photo-20683315.jpeg?auto=compress&cs=tinysrgb&w=1600'

document.querySelector('#app').innerHTML = `
  <section class="hero-section" style="min-height: 50vh;">
    <div class="hero-bg" style="background-image: url('${CONTACT_HERO}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1>Contact Us</h1>
      <p>Have questions about traveling to China? We'd love to hear from you.</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-7 reveal-left">
          <h2 class="section-title text-start">Send a Message</h2>
          <div class="accent-line ms-0"></div>
          <p style="font-size: 1.1rem; opacity: 0.8;">Whether you're planning a trip, have a question about Chinese culture, or want to share your experience, fill out the form below and we'll get back to you.</p>
          <form class="contact-form mt-4" id="contactForm">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">First Name</label>
                <input type="text" class="form-control" name="firstName" placeholder="Your first name" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control" name="lastName" placeholder="Your last name" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" placeholder="you@example.com" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Phone</label>
                <input type="tel" class="form-control" name="phone" placeholder="+1 (555) 000-0000">
              </div>
              <div class="col-12">
                <label class="form-label">Subject</label>
                <select class="form-control" name="subject">
                  <option>General Inquiry</option>
                  <option>Travel Planning</option>
                  <option>Cultural Question</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div class="col-12">
                <label class="form-label">Message</label>
                <textarea class="form-control" name="message" rows="5" placeholder="Tell us how we can help..." required></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-accent btn-lg w-100" style="border-radius: 0.75rem;">Send Message</button>
              </div>
            </div>
            <div id="formSuccess" class="alert mt-3 d-none" style="background: var(--page-accent-soft); color: var(--page-accent); border: 1px solid var(--page-border); border-radius: 0.75rem; padding: 1rem; text-align: center; font-weight: 600;">
              Thank you! Your message has been sent. We'll get back to you soon.
            </div>
          </form>
        </div>
        <div class="col-lg-5 reveal-right">
          <h2 class="section-title text-start">Get in Touch</h2>
          <div class="accent-line ms-0"></div>
          <div class="contact-info-card mt-4">
            <div class="contact-info-item">
              <div class="icon">📍</div>
              <div>
                <h5 class="mb-1">Address</h5>
                <p class="mb-0 opacity-75">Discover China Travel Center<br>Jianguomenwai Avenue<br>Chaoyang District, Beijing 100022<br>China</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="icon">📞</div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p class="mb-0 opacity-75">+86 10 6500 0000<br>Mon–Fri, 9:00 AM – 6:00 PM (CST)</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="icon">✉️</div>
              <div>
                <h5 class="mb-1">Email</h5>
                <p class="mb-0 opacity-75">info@discoverchina.com<br>travel@discoverchina.com</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="icon">🕐</div>
              <div>
                <h5 class="mb-1">Office Hours</h5>
                <p class="mb-0 opacity-75">Monday – Friday: 9 AM – 6 PM<br>Saturday: 10 AM – 4 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

const form = document.getElementById('contactForm')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const success = document.getElementById('formSuccess')
  success.classList.remove('d-none')
  form.querySelector('button[type="submit"]').textContent = 'Sent!'
  setTimeout(() => {
    form.reset()
    success.classList.add('d-none')
    form.querySelector('button[type="submit"]').textContent = 'Send Message'
  }, 4000)
})
