import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { initPage } from './navbar.js'

initPage('places')

const PLACES_HERO = 'https://images.pexels.com/photos/38820609/pexels-photo-38820609.jpeg?auto=compress&cs=tinysrgb&w=1600'

const places = [
  {
    name: 'The Great Wall',
    region: 'Beijing',
    tag: 'Historic Wonder',
    img: 'https://images.pexels.com/photos/5504688/pexels-photo-5504688.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: "Stretching over 21,000 km, the Great Wall is one of the world's greatest architectural feats and a UNESCO World Heritage Site.",
  },
  {
    name: 'The Forbidden City',
    region: 'Beijing',
    tag: 'Imperial Palace',
    img: 'https://images.pexels.com/photos/20694743/pexels-photo-20694743.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: 'For 500 years, this vast palace complex was the political center of China, home to 24 emperors of the Ming and Qing dynasties.',
  },
  {
    name: 'Terracotta Army',
    region: "Xi'an",
    tag: 'Archaeological Marvel',
    img: 'https://images.pexels.com/photos/27905048/pexels-photo-27905048.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: "Over 8,000 life-sized clay soldiers guard the tomb of China's first emperor, Qin Shi Huang, discovered in 1974.",
  },
  {
    name: 'Li River & Guilin',
    region: 'Guangxi',
    tag: 'Natural Beauty',
    img: 'https://images.pexels.com/photos/36535023/pexels-photo-36535023.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: 'Cruise between dramatic karst limestone peaks along the Li River — a landscape immortalized in Chinese paintings for centuries.',
  },
  {
    name: 'Shanghai Bund',
    region: 'Shanghai',
    tag: 'Modern City',
    img: 'https://images.pexels.com/photos/30563118/pexels-photo-30563118.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: "Walk the historic Bund waterfront for stunning views of Shanghai's futuristic skyline, including the iconic Oriental Pearl Tower.",
  },
  {
    name: 'Three Pagodas',
    region: 'Yunnan',
    tag: 'Ancient Temple',
    img: 'https://images.pexels.com/photos/34644903/pexels-photo-34644903.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: "Dating back over 1,000 years, these elegant pagodas near Dali are among China's oldest surviving Buddhist structures.",
  },
  {
    name: 'Great Wall at Mutianyu',
    region: 'Beijing',
    tag: 'Scenic Hike',
    img: 'https://images.pexels.com/photos/1653823/pexels-photo-1653823.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: 'One of the best-preserved sections of the Great Wall, surrounded by lush forests and offering spectacular mountain views.',
  },
  {
    name: 'Lotus Pagoda',
    region: 'Taiwan',
    tag: 'Cultural Gem',
    img: 'https://images.pexels.com/photos/38341587/pexels-photo-38341587.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: 'The Dragon and Tiger Pagodas at Lotus Pond are vibrant examples of southern Chinese temple architecture, stunning at night.',
  },
  {
    name: 'Quanzhou Pagodas',
    region: 'Fujian',
    tag: 'Heritage Site',
    img: 'https://images.pexels.com/photos/20818504/pexels-photo-20818504.jpeg?auto=compress&cs=tinysrgb&w=940',
    desc: "Ancient twin pagodas rising above Quanzhou's old city — a testament to China's rich maritime Silk Road history.",
  },
]

document.querySelector('#app').innerHTML = `
  <section class="hero-section" style="min-height: 60vh;">
    <div class="hero-bg" style="background-image: url('${PLACES_HERO}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1>Places to Explore</h1>
      <p>From ancient wonders to natural paradises — discover the destinations that make China unforgettable.</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Iconic Destinations</h2>
        <div class="accent-line"></div>
        <p class="section-subtitle">Nine must-visit places that capture the essence of China's history, culture, and natural beauty.</p>
      </div>
      <div class="row g-4">
        ${places.map((p, i) => `
          <div class="col-lg-4 col-md-6 reveal-scale" style="transition-delay: ${(i % 3) * 0.15}s">
            <div class="place-card">
              <div class="place-img-wrap">
                <img src="${p.img}" class="place-img" alt="${p.name}">
              </div>
              <div class="card-body">
                <span class="tag">${p.tag}</span>
                <h4>${p.name}</h4>
                <p class="mb-2"><span style="opacity: 0.6;">📍 ${p.region}</span></p>
                <p>${p.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6 reveal-left">
          <h2 class="section-title text-start">Plan Your Journey</h2>
          <div class="accent-line ms-0"></div>
          <p style="font-size: 1.1rem; opacity: 0.8;">China's vast size means every region offers something unique. The north is home to imperial Beijing and the Great Wall, while the south boasts tropical landscapes and ancient trading ports. The west reveals Tibetan plateaus and Silk Road cities, and the east dazzles with modern metropolises.</p>
          <p style="font-size: 1.1rem; opacity: 0.8;">Spring (April–May) and autumn (September–October) are ideal for most regions, with mild weather and beautiful scenery.</p>
          <a href="/contact.html" class="btn btn-accent mt-3">Ask About a Trip</a>
        </div>
        <div class="col-lg-6 reveal-right">
          <div class="row g-3">
            <div class="col-6">
              <img src="https://images.pexels.com/photos/9030005/pexels-photo-9030005.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded-4 shadow" style="height: 200px; width: 100%; object-fit: cover;" alt="Chinese pagoda complex">
            </div>
            <div class="col-6">
              <img src="https://images.pexels.com/photos/36535024/pexels-photo-36535024.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded-4 shadow" style="height: 200px; width: 100%; object-fit: cover;" alt="Li River at sunset">
            </div>
            <div class="col-6">
              <img src="https://images.pexels.com/photos/687450/pexels-photo-687450.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded-4 shadow" style="height: 200px; width: 100%; object-fit: cover;" alt="Shanghai at dusk">
            </div>
            <div class="col-6">
              <img src="https://images.pexels.com/photos/5342720/pexels-photo-5342720.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded-4 shadow" style="height: 200px; width: 100%; object-fit: cover;" alt="Terracotta Army">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`
