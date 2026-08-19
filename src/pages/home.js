import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { initPage } from './navbar.js'

initPage('home')

const GREAT_WALL = 'https://images.pexels.com/photos/19031655/pexels-photo-19031655.jpeg?auto=compress&cs=tinysrgb&w=1600'
const SHANGHAI = 'https://images.pexels.com/photos/355034/pexels-photo-355034.jpeg?auto=compress&cs=tinysrgb&w=1600'
const PAGODA = 'https://images.pexels.com/photos/34644903/pexels-photo-34644903.jpeg?auto=compress&cs=tinysrgb&w=1600'

document.querySelector('#app').innerHTML = `
  <section class="hero-section">
    <div class="hero-bg" style="background-image: url('${GREAT_WALL}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <p class="mb-3" style="letter-spacing: 4px; font-size: 0.9rem; text-transform: uppercase;">Welcome to</p>
      <h1>Discover China</h1>
      <p>A land of ancient wonders, vibrant culture, and breathtaking landscapes. Explore 5,000 years of history and the dynamic spirit of modern China.</p>
      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <a href="/places.html" class="btn btn-accent btn-lg">Explore Places</a>
        <a href="/population.html" class="btn btn-outline-light btn-lg" style="border-radius: 50px; padding: 0.7rem 2rem; font-weight: 600;">Learn More</a>
      </div>
    </div>
  </section>

  <section class="py-5 my-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Why Visit China?</h2>
        <div class="accent-line"></div>
        <p class="section-subtitle">From the Great Wall to the skyline of Shanghai, China offers an unforgettable journey through time and culture.</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">🏯</div>
            <h4>Rich History</h4>
            <p>5,000 years of civilization with dynasties, emperors, and timeless traditions that shaped the world.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">🍜</div>
            <h4>World Cuisine</h4>
            <p>Eight great regional cuisines from spicy Sichuan to delicate Cantonese — a food lover's paradise.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">🏔️</div>
            <h4>Stunning Landscapes</h4>
            <p>From the karst peaks of Guilin to the vast Gobi Desert — nature's grandeur at every turn.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">🏙️</div>
            <h4>Modern Marvels</h4>
            <p>Futuristic cities, high-speed rail, and cutting-edge architecture blending old and new.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row align-items-center g-5 mb-5">
        <div class="col-lg-6 reveal-left">
          <img src="${SHANGHAI}" class="img-fluid rounded-4 shadow-lg w-100" style="height: 380px; object-fit: cover;" alt="Shanghai skyline at night">
        </div>
        <div class="col-lg-6 reveal-right">
          <h2 class="section-title text-start">A Land of Contrasts</h2>
          <div class="accent-line ms-0"></div>
          <p style="font-size: 1.1rem; opacity: 0.8;">China is a country where ancient traditions meet cutting-edge modernity. Walk through the Forbidden City in the morning and dine in a skyscraper in Shanghai by night. With 56 ethnic groups, 22 provinces, and landscapes ranging from tropical beaches to Himalayan peaks, every region tells a different story.</p>
          <p style="font-size: 1.1rem; opacity: 0.8;">Whether you're exploring the Terracotta Warriors, cruising the Li River, or tasting street food in Chengdu, China promises experiences that stay with you forever.</p>
          <a href="/places.html" class="btn btn-accent mt-3">Discover Places</a>
        </div>
      </div>
      <div class="row align-items-center g-5">
        <div class="col-lg-6 reveal-left order-lg-2">
          <img src="${PAGODA}" class="img-fluid rounded-4 shadow-lg w-100" style="height: 380px; object-fit: cover;" alt="Chinese pagoda reflection">
        </div>
        <div class="col-lg-6 reveal-right order-lg-1">
          <h2 class="section-title text-start">Cultural Heritage</h2>
          <div class="accent-line ms-0"></div>
          <p style="font-size: 1.1rem; opacity: 0.8;">Chinese culture spans millennia — from Confucian philosophy and calligraphy to traditional opera and festivals. The Spring Festival (Chinese New Year), Mid-Autumn Festival, and Dragon Boat Festival are celebrated with vibrant customs across the country.</p>
          <p style="font-size: 1.1rem; opacity: 0.8;">With 55 UNESCO World Heritage Sites, China preserves its past while embracing the future.</p>
          <a href="/contact.html" class="btn btn-outline-accent mt-3">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">China at a Glance</h2>
        <div class="accent-line"></div>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="1410">0</div>
            <div class="stat-label">Million People</div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="9596">0</div>
            <div class="stat-label">Thousand km² Area</div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="55">0</div>
            <div class="stat-label">UNESCO Sites</div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="56">0</div>
            <div class="stat-label">Ethnic Groups</div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]')
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.target)
        const duration = 2000
        const start = performance.now()
        function update(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * target).toLocaleString()
          if (progress < 1) requestAnimationFrame(update)
          else el.textContent = target.toLocaleString()
        }
        requestAnimationFrame(update)
        counterObserver.unobserve(el)
      }
    })
  }, { threshold: 0.5 })
  counters.forEach(c => counterObserver.observe(c))
}

animateCounters()
