'use client';

import { FormEvent, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const nav = ['Home','Services','Process','Portfolio','Why Us','Testimonials','Contact'];
const stats = ['100+ Websites Delivered','10+ Mobile Applications','20+ Marketing Solutions','50+ Branding Projects','6+ Industries Served'];
const services = [
  ['✦','Design','UI/UX systems, brand identity, website design, and marketing creatives that make your business memorable.'],
  ['</>','Development','Corporate websites, web apps, e-commerce, mobile applications, and CMS platforms built to scale.'],
  ['↗','Marketing','SEO, social media, performance marketing, content, and lead-generation campaigns focused on ROI.'],
  ['AI','AI Solutions','Automation, intelligent workflows, analytics dashboards, and AI-powered business tools.'],
];
const process = ['Discover','Strategize','Build','Grow'];
const features = ['Design-First Approach','AI-Driven Solutions','Fast Delivery','Transparent Communication','Scalable Architecture','Long-Term Partnership'];
const projects = [
  ['Development','HealthTech Growth Hub','Web App • UX • Analytics','42% faster onboarding'],
  ['Design','Fintech Brand Refresh','Brand Identity • UI System','3.1x demo requests'],
  ['Marketing','Retail Performance Engine','SEO • Paid Ads • CRO','68% lower cost per lead'],
];
const testimonials = [
  ['AR','Ava Rodriguez','Founder, BrightCart','Escade turned our vision into a polished product and gave us a marketing engine that consistently brings qualified leads.'],
  ['MK','Marcus Khan','COO, NovaOps','Their team communicates clearly, ships quickly, and thinks strategically about every business outcome.'],
  ['SL','Sophia Lee','CMO, CloudNest','The redesign elevated our brand overnight. Our conversion rate and sales conversations improved within weeks.'],
];

function slug(label: string) { return label.toLowerCase().replaceAll(' ', '-'); }
const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: .6 } };

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .3], [0, -80]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };

  return <main className="overflow-hidden">
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-white/70 shadow-lg shadow-navy/5 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-navy">Escade <span className="text-sky">Technologies</span></a>
        <div className="hidden gap-7 lg:flex">{nav.map((item) => <a key={item} href={`#${slug(item)}`} className="text-sm font-semibold text-slate-700 transition hover:text-sky">{item}</a>)}</div>
        <a href="#contact" className="rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-sky">Book a Consultation</a>
      </nav>
    </header>

    <section id="home" className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f7ff,transparent_35%),linear-gradient(180deg,#fff,#f8fafc)] px-5 pt-32 lg:px-8">
      <Blob className="left-[-8rem] top-28" /><Blob className="right-[-10rem] top-52 delay-700" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div {...fade}>
          <p className="mb-5 inline-flex rounded-full border border-sky/30 bg-white/70 px-4 py-2 text-sm font-bold text-navy shadow-sm">AI-driven digital growth partner</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-navy md:text-7xl">Design. Build. <span className="gradient-text">Market. Scale.</span></h1>
          <p className="mt-6 text-xl font-medium leading-8 text-slate-700">We help businesses transform ideas into digital experiences through strategic design, powerful development, and result-driven marketing solutions.</p>
          <p className="mt-4 max-w-2xl text-slate-600">From startups launching their first product to enterprises modernizing their digital presence, we create solutions that drive growth and measurable outcomes.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a className="rounded-full bg-sky px-7 py-4 font-extrabold text-navy shadow-glow transition hover:-translate-y-1" href="#contact">Get Free Consultation</a><a className="rounded-full border border-navy/15 bg-white px-7 py-4 font-extrabold text-navy transition hover:-translate-y-1 hover:border-sky" href="#portfolio">View Our Work</a></div>
        </motion.div>
        <motion.div style={{ y: heroY }} className="relative h-[520px] rounded-[2rem] bg-navy p-6 shadow-2xl shadow-navy/25">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.45),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.18),transparent_25%)]" />
          {['Design','Development','Marketing','Analytics','AI Automation'].map((item, i) => <motion.div key={item} animate={{ y: [0, -14, 0] }} transition={{ duration: 3 + i*.35, repeat: Infinity }} className={`dark-glass absolute rounded-2xl p-5 text-white ${['left-8 top-12','right-8 top-24','left-12 bottom-24','right-12 bottom-14','left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'][i]}`}><span className="text-2xl font-black text-sky">{i === 4 ? 'AI' : '0'+(i+1)}</span><p className="mt-2 font-bold">{item}</p></motion.div>)}
        </motion.div>
      </div>
    </section>

    <Section id="trust" eyebrow="Proof" title="Trusted Digital Partner for Businesses of Every Size"><div className="grid gap-4 md:grid-cols-5">{stats.map(s => <Card key={s} className="text-center"><b className="text-3xl text-navy">{s.split(' ')[0]}</b><p className="mt-2 text-sm font-semibold text-slate-600">{s.replace(s.split(' ')[0]+' ','')}</p></Card>)}</div></Section>
    <Section id="services" eyebrow="Services" title="Everything You Need to Grow Digitally"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map(([icon,title,desc]) => <Card key={title} className="group hover:-translate-y-2"><div className="mb-5 grid size-14 place-items-center rounded-2xl bg-navy text-xl font-black text-sky transition group-hover:rotate-6 group-hover:bg-sky group-hover:text-navy">{icon}</div><h3 className="text-xl font-extrabold text-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">{desc}</p></Card>)}</div></Section>
    <Section id="process" eyebrow="Process" title="Our Proven Process"><div className="relative grid gap-6 md:grid-cols-4"><div className="absolute left-0 right-0 top-12 hidden h-1 bg-gradient-to-r from-navy via-sky to-navy md:block" />{process.map((p,i)=><Card key={p} className="relative text-center"><div className="mx-auto mb-5 grid size-20 place-items-center rounded-full bg-sky text-2xl font-black text-navy ring-8 ring-sky/15">{i+1}</div><h3 className="text-xl font-extrabold text-navy">{p}</h3><p className="mt-3 text-slate-600">We align insight, execution, and optimization to keep momentum high.</p></Card>)}</div></Section>
    <Section id="why-us" eyebrow="Why us" title="Why Businesses Choose Escade Technologies"><div className="grid gap-5 md:grid-cols-3">{features.map(f=><Card key={f}><h3 className="text-lg font-extrabold text-navy">✓ {f}</h3><p className="mt-3 text-slate-600">Premium craft, practical strategy, and measurable delivery for ambitious teams.</p></Card>)}</div></Section>
    <Section id="portfolio" eyebrow="Portfolio" title="Solutions That Deliver Results"><div className="mb-8 flex gap-3">{['Design','Development','Marketing'].map(f=><button key={f} className="rounded-full border border-sky/30 bg-white px-5 py-2 font-bold text-navy hover:bg-sky">{f}</button>)}</div><div className="grid gap-6 md:grid-cols-3">{projects.map(([industry,name,svc,out])=><Card key={name} className="bg-navy text-white"><p className="text-sm font-bold text-sky">{industry}</p><h3 className="mt-3 text-2xl font-extrabold">{name}</h3><p className="mt-4 text-slate-200">{svc}</p><p className="mt-8 rounded-2xl bg-white/10 p-4 font-bold text-sky">Outcome: {out}</p></Card>)}</div></Section>
    <Section id="testimonials" eyebrow="Testimonials" title="What Our Clients Say"><div className="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-4">{testimonials.map(([img,name,company,review])=><Card key={name} className="min-w-[320px] snap-center md:min-w-[420px]"><div className="mb-4 flex items-center gap-4"><div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-navy to-sky font-black text-white">{img}</div><div><b className="text-navy">{name}</b><p className="text-sm text-slate-500">{company}</p></div></div><p className="text-sky">★★★★★</p><p className="mt-4 leading-7 text-slate-600">“{review}”</p></Card>)}</div></Section>
    <section className="relative bg-navy px-5 py-24 text-white lg:px-8"><Blob className="left-1/4 top-8 opacity-40" /><div className="relative mx-auto max-w-4xl text-center"><h2 className="text-4xl font-extrabold md:text-6xl">Ready to Build Something Extraordinary?</h2><p className="mt-6 text-lg text-slate-200">Let's discuss how we can help your business design better experiences, build scalable solutions, and grow digitally.</p><div className="mt-9 flex justify-center gap-4"><a href="#contact" className="rounded-full bg-sky px-7 py-4 font-extrabold text-navy">Schedule a Call</a><a href="#contact" className="rounded-full border border-white/20 px-7 py-4 font-extrabold">Request a Proposal</a></div></div></section>
    <Section id="contact" eyebrow="Contact" title="Start Your Growth Conversation"><div className="grid gap-8 lg:grid-cols-2"><Card><h3 className="text-2xl font-extrabold text-navy">Let’s connect</h3><p className="mt-4 text-slate-600">Email: hello@escadetechnologies.com</p><p className="mt-2 text-slate-600">Phone: +1 (555) 012-2026</p><p className="mt-2 text-slate-600">Location: Serving clients worldwide</p><div className="mt-8 flex gap-3">{['LinkedIn','X','Instagram'].map(s=><a key={s} className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white" href="#">{s}</a>)}</div></Card><Card><form onSubmit={submit} className="grid gap-4">{['Name','Email','Phone','Company','Service Required'].map(field=><input key={field} required placeholder={field} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky" />)}<textarea required placeholder="Project Description" rows={5} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky" /><button className="rounded-full bg-navy px-6 py-4 font-extrabold text-white hover:bg-sky hover:text-navy">Send Inquiry</button>{sent && <p className="rounded-2xl bg-sky/15 p-4 font-bold text-navy">Thanks! Your inquiry has been received.</p>}</form></Card></div></Section>
    <footer className="bg-[#06182a] px-5 py-12 text-slate-300 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><Footer title="Quick Links" items={nav} /><Footer title="Services" items={['Design','Development','Marketing','AI Solutions']} /><Footer title="Industries Served" items={['SaaS','Retail','Healthcare','Finance','Education']} /><Footer title="Social Media" items={['LinkedIn','X','Instagram']} /></div><p className="mt-10 text-center text-sm">© 2026 Escade Technologies. All Rights Reserved.</p></footer>
  </main>;
}
function Section({id, eyebrow, title, children}: {id:string; eyebrow:string; title:string; children:React.ReactNode}) { return <section id={id} className="px-5 py-24 lg:px-8"><motion.div {...fade} className="mx-auto max-w-7xl"><p className="mb-3 font-extrabold uppercase tracking-[.25em] text-sky">{eyebrow}</p><h2 className="mb-12 max-w-3xl text-4xl font-extrabold text-navy md:text-5xl">{title}</h2>{children}</motion.div></section>; }
function Card({children,className=''}:{children:React.ReactNode; className?:string}) { return <motion.div {...fade} className={`glass rounded-[1.25rem] p-6 transition duration-300 ${className}`}>{children}</motion.div>; }
function Blob({className=''}:{className?:string}) { return <motion.div aria-hidden animate={{ scale: [1,1.15,1], rotate: [0,18,0] }} transition={{ duration: 9, repeat: Infinity }} className={`pointer-events-none absolute size-72 rounded-full bg-sky/30 blur-3xl ${className}`} />; }
function Footer({title,items}:{title:string;items:string[]}) { return <div><h3 className="mb-4 font-extrabold text-white">{title}</h3>{items.map(i=><p key={i} className="mb-2 text-sm">{i}</p>)}</div>; }
