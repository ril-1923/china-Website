import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { initPage } from './navbar.js'

initPage('population')

const CROWD = 'https://images.pexels.com/photos/29714893/pexels-photo-29714893.jpeg?auto=compress&cs=tinysrgb&w=1600'
const STREET = 'https://images.pexels.com/photos/29585073/pexels-photo-29585073.jpeg?auto=compress&cs=tinysrgb&w=1600'

const cityData = [
  { city: 'Shanghai', pop: 24.87, rank: 1 },
  { city: 'Beijing', pop: 21.89, rank: 2 },
  { city: 'Chongqing', pop: 16.34, rank: 3 },
  { city: 'Tianjin', pop: 13.86, rank: 4 },
  { city: 'Guangzhou', pop: 12.81, rank: 5 },
  { city: 'Shenzhen', pop: 12.59, rank: 6 },
  { city: 'Chengdu', pop: 11.24, rank: 7 },
  { city: 'Nanjing', pop: 9.31, rank: 8 },
]

const maxPop = Math.max(...cityData.map(c => c.pop))

document.querySelector('#app').innerHTML = `
  <section class="hero-section" style="min-height: 60vh;">
    <div class="hero-bg" style="background-image: url('${CROWD}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1>Population</h1>
      <p>Home to 1.41 billion people — the world's second most populous nation and a tapestry of diverse communities.</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">By the Numbers</h2>
        <div class="accent-line"></div>
        <p class="section-subtitle">Key demographic figures that tell the story of China's vast population.</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="1410" data-suffix="M">0</div>
            <div class="stat-label">Total Population</div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="65" data-suffix="%">0</div>
            <div class="stat-label">Urban Population</div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="78" data-suffix=" yrs">0</div>
            <div class="stat-label">Average Life Expectancy</div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal-scale">
          <div class="stat-card">
            <div class="stat-number" data-target="56">0</div>
            <div class="stat-label">Recognized Ethnic Groups</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6 reveal-left">
          <h2 class="section-title text-start">Largest Cities</h2>
          <div class="accent-line ms-0"></div>
          <p style="font-size: 1.1rem; opacity: 0.8;">China's megacities are among the most populous in the world. Shanghai leads with nearly 25 million residents, followed by the capital Beijing. These urban centers are hubs of commerce, culture, and innovation.</p>
          <div class="mt-4">
            ${cityData.map(c => `
              <div class="mb-3 reveal">
                <div class="d-flex justify-content-between mb-1">
                  <span style="font-weight: 600;">${c.city}</span>
                  <span style="opacity: 0.7;">${c.pop}M</span>
                </div>
                <div style="background: var(--page-accent-soft); border-radius: 50px; height: 10px; overflow: hidden;">
                  <div class="bar-fill" data-width="${(c.pop / maxPop * 100).toFixed(0)}" style="background: var(--page-accent); height: 100%; width: 0; border-radius: 50px; transition: width 1.5s ease;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="col-lg-6 reveal-right">
          <img src="${STREET}" class="img-fluid rounded-4 shadow-lg w-100" style="height: 450px; object-fit: cover;" alt="Busy street in China">
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Ethnic Diversity</h2>
        <div class="accent-line"></div>
        <p class="section-subtitle">China officially recognizes 56 ethnic groups, with the Han majority making up about 91% of the population.</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle"> 汉 </div>
            <h4>Han</h4>
            <p>91.1% of the population. The majority ethnic group spread across all provinces.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle"> 壮 </div>
            <h4>Zhuang</h4>
            <p>China's largest minority with over 19 million people, mainly in Guangxi.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle"> 回 </div>
            <h4>Hui</h4>
            <p>Over 11 million people, predominantly Muslim, widely distributed across China.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle"> 藏 </div>
            <h4>Tibetan</h4>
            <p>Over 7 million people in Tibet and surrounding highland regions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.target)
        const suffix = el.dataset.suffix || ''
        const duration = 2000
        const start = performance.now()
        function update(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * target).toLocaleString() + suffix
          if (progress < 1) requestAnimationFrame(update)
          else el.textContent = target.toLocaleString() + suffix
        }
        requestAnimationFrame(update)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.5 })
  counters.forEach(c => observer.observe(c))
}

function animateBars() {
  const bars = document.querySelectorAll('.bar-fill')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        el.style.width = el.dataset.width + '%'
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.3 })
  bars.forEach(b => observer.observe(b))
}

animateCounters()
animateBars()
