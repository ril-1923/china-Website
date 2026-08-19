import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { initPage } from './navbar.js'

initPage('currency')

const CURRENCY_IMG = 'https://images.pexels.com/photos/3943738/pexels-photo-3943738.jpeg?auto=compress&cs=tinysrgb&w=1600'
const CURRENCY_NOTES = 'https://images.pexels.com/photos/29915967/pexels-photo-29915967.jpeg?auto=compress&cs=tinysrgb&w=1600'

const RATES = {
  USD: { rate: 0.139, symbol: '$', name: 'US Dollar' },
  EUR: { rate: 0.128, symbol: '€', name: 'Euro' },
  GBP: { rate: 0.109, symbol: '£', name: 'British Pound' },
  JPY: { rate: 21.5, symbol: '¥', name: 'Japanese Yen' },
  KRW: { rate: 186, symbol: '₩', name: 'Korean Won' },
  INR: { rate: 11.65, symbol: '₹', name: 'Indian Rupee' },
  AUD: { rate: 0.213, symbol: 'A$', name: 'Australian Dollar' },
  CAD: { rate: 0.189, symbol: 'C$', name: 'Canadian Dollar' },
}

document.querySelector('#app').innerHTML = `
  <section class="hero-section" style="min-height: 55vh;">
    <div class="hero-bg" style="background-image: url('${CURRENCY_IMG}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1>Currency</h1>
      <p>The Chinese Yuan (CNY/¥) — one of the world's most traded currencies and a window into China's economic power.</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 reveal-left">
          <h2 class="section-title text-start">Yuan Converter</h2>
          <div class="accent-line ms-0"></div>
          <p style="font-size: 1.1rem; opacity: 0.8;">Enter an amount in Chinese Yuan (CNY) and instantly see its value in major world currencies. Rates are approximate for reference.</p>
          <div class="converter-card mt-4">
            <div class="mb-4">
              <label class="form-label fw-bold mb-2">Amount in Yuan (¥)</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" style="background: var(--page-accent-soft); color: var(--page-accent); font-weight: 700; border: 2px solid var(--page-border); border-right: none; border-radius: 0.75rem 0 0 0.75rem;">¥</span>
                <input type="number" id="cnyAmount" class="form-control" placeholder="Enter amount" value="100" min="0" style="border: 2px solid var(--page-border); border-radius: 0 0.75rem 0.75rem 0; padding: 0.75rem 1rem; font-size: 1.2rem; font-weight: 600;">
              </div>
            </div>
            <div id="converterResults"></div>
          </div>
        </div>
        <div class="col-lg-6 reveal-right">
          <img src="${CURRENCY_NOTES}" class="img-fluid rounded-4 shadow-lg w-100" style="height: 450px; object-fit: cover;" alt="Chinese currency notes">
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">About the Yuan</h2>
        <div class="accent-line"></div>
        <p class="section-subtitle">The Renminbi (RMB), meaning "People's Currency," is the official currency of China. Its primary unit is the Yuan (¥).</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">¥</div>
            <h4>Symbol & Code</h4>
            <p>Currency code: CNY. The symbol ¥ is shared with the Japanese Yen, both meaning "round."</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">🏦</div>
            <h4>Central Bank</h4>
            <p>Issued by the People's Bank of China (PBOC), which sets the daily reference rate.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">📊</div>
            <h4>Global Reserve</h4>
            <p>Part of the IMF's Special Drawing Rights basket since 2016 — a major global reserve currency.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 reveal">
          <div class="feature-card text-center">
            <div class="icon-circle">💳</div>
            <h4>Digital Yuan</h4>
            <p>China leads the world in developing a central bank digital currency (e-CNY).</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Banknote Denominations</h2>
        <div class="accent-line"></div>
        <p class="section-subtitle">Chinese paper currency comes in six denominations, each featuring iconic landscapes and cultural figures.</p>
      </div>
      <div class="row g-3 justify-content-center">
        ${[1, 5, 10, 20, 50, 100].map((denom, i) => `
          <div class="col-lg-2 col-md-4 col-sm-4 col-6 reveal-scale" style="transition-delay: ${i * 0.1}s">
            <div class="stat-card" style="padding: 2rem 1rem;">
              <div style="font-size: 2.5rem; font-weight: 900; color: var(--page-accent); font-family: var(--page-heading-font);">¥${denom}</div>
              <div class="stat-label mt-2">${denom === 1 ? 'Yuan' : 'Yuan'}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

function renderConversions(amount) {
  const results = document.getElementById('converterResults')
  results.innerHTML = Object.entries(RATES).map(([code, info]) => {
    const value = (amount * info.rate).toLocaleString('en-US', { maximumFractionDigits: 2 })
    return `
      <div class="d-flex justify-content-between align-items-center py-2 border-bottom" style="border-color: var(--page-border) !important;">
        <div>
          <span style="font-weight: 700; font-size: 1.1rem;">${info.symbol} ${code}</span>
          <div style="font-size: 0.8rem; opacity: 0.6;">${info.name}</div>
        </div>
        <div class="converter-result" style="font-size: 1.3rem;">${info.symbol}${value}</div>
      </div>
    `
  }).join('')
}

const input = document.getElementById('cnyAmount')
renderConversions(100)
input.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value) || 0
  renderConversions(val)
})
