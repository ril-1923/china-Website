const NAV_LINKS = [
  { href: '/', label: 'Home', page: 'home' },
  { href: '/population.html', label: 'Population', page: 'population' },
  { href: '/currency.html', label: 'Currency', page: 'currency' },
  { href: '/places.html', label: 'Places to Explore', page: 'places' },
  { href: '/contact.html', label: 'Contact', page: 'contact' },
]

export function renderNavbar(activePage) {
  const links = NAV_LINKS.map(link => {
    const isActive = link.page === activePage ? 'active' : ''
    return `<li class="nav-item"><a class="nav-link ${isActive}" href="${link.href}">${link.label}</a></li>`
  }).join('')

  return `
    <nav class="navbar navbar-expand-lg fixed-top site-navbar" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="/">
          <span class="me-2">中国</span>Discover China
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navMain">
          <ul class="navbar-nav">
            ${links}
          </ul>
        </div>
      </div>
    </nav>
  `
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5>Discover China</h5>
            <p class="opacity-75">Your gateway to exploring the rich culture, history, and beauty of China. From ancient wonders to modern marvels, discover what makes China extraordinary.</p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5>Explore</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="/">Home</a></li>
              <li class="mb-2"><a href="/population.html">Population</a></li>
              <li class="mb-2"><a href="/currency.html">Currency</a></li>
              <li class="mb-2"><a href="/places.html">Places to Explore</a></li>
              <li class="mb-2"><a href="/contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Quick Facts</h5>
            <ul class="list-unstyled">
              <li class="mb-2">Capital: Beijing</li>
              <li class="mb-2">Language: Mandarin</li>
              <li class="mb-2">Currency: Yuan (CNY)</li>
              <li class="mb-2">Population: 1.41 billion</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Connect</h5>
            <p class="opacity-75">Follow us for more stories about Chinese culture and travel.</p>
            <div class="d-flex gap-3 fs-4">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <p>&copy; 2026 Discover China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
}

export function initPage(activePage) {
  document.body.insertAdjacentHTML('afterbegin', renderNavbar(activePage))
  document.body.insertAdjacentHTML('beforeend', renderFooter())

  const navbar = document.getElementById('mainNav')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el)
  })
}
