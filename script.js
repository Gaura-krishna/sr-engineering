const header=document.getElementById('header');
const progress=document.getElementById('progress');
const nav=document.getElementById('nav');
const menuToggle=document.getElementById('menuToggle');

menuToggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',open);
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function updateScroll(){
  header.classList.toggle('scrolled',window.scrollY>20);
  const h=document.documentElement;
  progress.style.width=((window.scrollY/(h.scrollHeight-h.clientHeight))*100)+'%';
}
window.addEventListener('scroll',updateScroll);
updateScroll();

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav a:not(.nav-cta)')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

const form=document.getElementById('contactForm');
const toast=document.getElementById('toast');
form.addEventListener('submit',e=>{
  e.preventDefault();
  toast.classList.add('show');
  form.reset();
  setTimeout(()=>toast.classList.remove('show'),4000);
});
