window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

window.addEventListener('load', () => {
  document.querySelectorAll('.fade').forEach(el => el.classList.add('show'));
  animateCounters();
});

function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const prefix = el.dataset.prefix || '';
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = prefix + count;
      if (count >= target) clearInterval(timer);
    }, 20);
  });
}

const services = [
  { num: '01', title: 'Product Design',   desc: 'End-to-end UX/UI design for web and mobile — from research to pixel-perfect delivery.' },
  { num: '02', title: 'Brand Identity',   desc: 'Logos, systems, and visual languages that communicate who you are before you say a word.' },
  { num: '03', title: 'Design Strategy',  desc: 'Roadmaps and frameworks that align business goals with user needs.' },
  { num: '04', title: 'Startup Advisory', desc: 'Hands-on design support for founders navigating product-market fit.' },
];

document.getElementById('services-list').innerHTML = services.map(s => `
  <div class="service-item">
    <span class="service-num">${s.num}</span>
    <div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
    </div>
    <span class="service-arrow">↗</span>
  </div>
`).join('');

const projects = [
  { title: 'Fintech Dashboard', cat: 'Product Design', year: '2024', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { title: 'Brand Relaunch',    cat: 'Brand Identity', year: '2023', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80' },
  { title: 'SaaS Onboarding',   cat: 'UX Design',      year: '2023', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
];
 
document.getElementById('portfolio-grid').innerHTML = projects.map(p => `
  <div class="project-card">
    <div class="project-img-wrap">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="project-overlay"><span>View project ↗</span></div>
    </div>
    <div class="project-meta">
      <span class="project-cat">${p.cat}</span>
      <span class="project-year">${p.year}</span>
    </div>
    <div class="project-title">${p.title}</div>
  </div>
`).join('');
 