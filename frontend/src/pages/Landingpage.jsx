import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

import {
  Wallet,
  BarChart3,
  PiggyBank,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Menu,
  X,
  TrendingUp,
  Target,
  CreditCard,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

import { useState } from "react";

export default function LandingPage() {

  const navigate = useNavigate();

  const [menuOpen,setMenuOpen]=useState(false);

  return (

<div className="landing">

{/* ================= NAVBAR ================= */}

<header className="navbar">

<div className="logo">

<div className="logo-icon">
<Wallet size={20}/>
</div>

<span>FinFlow</span>

</div>

<nav className={menuOpen ? "nav-links active":"nav-links"}>

<a href="#about">About</a>

<a href="#features">Features</a>

<a href="#how-it-works">How It Works</a>

<a href="#contact">Contact</a>

</nav>

<div className="nav-actions">

<button
className="login-btn"
onClick={()=>navigate("/login")}
>

Login

</button>

<button
className="register-btn"
onClick={()=>navigate("/register")}
>

Register

<ArrowRight size={18}/>

</button>

</div>

<div
className="mobile-menu"

onClick={()=>setMenuOpen(!menuOpen)}
>

{
menuOpen
?

<X/>

:

<Menu/>

}

</div>

</header>

{/* ================= HERO ================= */}

<section className="hero">

<div className="hero-glow hero-glow-one"></div>
<div className="hero-glow hero-glow-two"></div>
<div className="hero-grid"></div>

<div className="hero-left">

<div className="hero-tag">

<Sparkles size={16}/>

Modern Personal Finance Platform

</div>

<h1>

Manage Your Money

<span>

Smarter.

</span>

</h1>

<p>

Track expenses, monitor income,
create budgets, visualize reports
and build healthier financial habits —
all from one beautifully designed platform.

</p>

<div className="hero-buttons">

<button
className="primary-btn"
onClick={()=>navigate("/register")}
>

Get Started

<ArrowRight size={18}/>

</button>

<button
className="secondary-btn"
>

View Demo

</button>

</div>

<div className="hero-users">

<div className="mini-card">

<TrendingUp/>

<span>

Smart Analytics

</span>

</div>

<div className="mini-card">

<ShieldCheck/>

<span>

Secure Platform

</span>

</div>

<div className="mini-card">

<PiggyBank/>

<span>

Savings Goals

</span>

</div>

</div>

</div>

<div className="hero-right">

<div className="dashboard-card">

<div className="dashboard-header">

<div>

<p>Current Balance</p>

<h2>

₹2,02,662

</h2>

</div>

<div className="dashboard-badge">

+12%

</div>

</div>

<div className="chart">

<div className="bar h1"></div>

<div className="bar h2"></div>

<div className="bar h3"></div>

<div className="bar h4"></div>

<div className="bar h5"></div>

<div className="bar h6"></div>

<div className="bar h7"></div>

</div>

<div className="dashboard-grid">

<div>

<span>Income</span>

<strong>

₹3.4L

</strong>

</div>

<div>

<span>Expense</span>

<strong>

₹1.3L

</strong>

</div>

<div>

<span>Savings</span>

<strong>

62%

</strong>

</div>

</div>

<div className="recent-transactions">

<h4>

Recent Activity

</h4>

<div className="transaction">

<div>

Netflix

</div>

<span>

-₹799

</span>

</div>

<div className="transaction">

<div>

Salary

</div>

<span className="green">

+₹72,000

</span>

</div>

<div className="transaction">

<div>

Electricity

</div>

<span>

-₹2,450

</span>

</div>

</div>

</div>

</div>

</section>

{/* ================= ABOUT ================= */}

<section
id="about"
className="about-section"
>

<div className="section-title">

<span>

ABOUT FINFLOW

</span>

<h2>

Built for people who want complete
control over their finances.

</h2>

<p>

FinFlow combines budgeting,
expense tracking,
financial analytics
and savings management
into one elegant dashboard.

</p>

</div>

<div className="about-grid">

<div className="about-card">

<Wallet size={32}/>

<h3>

Easy Expense Tracking

</h3>

<p>

Track every transaction
with just a few clicks.

</p>

</div>

<div className="about-card">

<Target size={32}/>

<h3>

Goal Planning

</h3>

<p>

Create savings goals
and stay motivated.

</p>

</div>

<div className="about-card">

<BarChart3 size={32}/>

<h3>

Visual Analytics

</h3>

<p>

Understand spending habits
through beautiful charts.

</p>

</div>

</div>

</section>

{/* ================= FEATURES ================= */}

<section
id="features"
className="features-section"
>

<div className="section-title">

<span>
FEATURES
</span>

<h2>

Everything You Need
To Manage Money

</h2>

<p>

Designed to simplify your financial
journey with powerful tools.

</p>

</div>

<div className="features-grid">

<div className="feature-card">

<div className="feature-icon">

<Wallet size={32}/>

</div>

<h3>

Expense Tracking

</h3>

<p>

Track every transaction
with categories,
history and filters.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<PiggyBank size={32}/>

</div>

<h3>

Savings Goals

</h3>

<p>

Set targets and
monitor your progress
towards financial freedom.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<BarChart3 size={32}/>

</div>

<h3>

Interactive Reports

</h3>

<p>

Understand your
income and expenses
using beautiful charts.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<ShieldCheck size={32}/>

</div>

<h3>

Secure Platform

</h3>

<p>

Your financial information
remains protected
and private.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<Target size={32}/>

</div>

<h3>

Budget Planning

</h3>

<p>

Create monthly budgets
and control overspending.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<TrendingUp size={32}/>

</div>

<h3>

Growth Insights

</h3>

<p>

Analyze trends
and improve your
financial habits.

</p>

</div>

</div>

</section>

{/* ================= DASHBOARD ================= */}

<section
className="dashboard-preview"
>

<div className="section-title">

<span>

LIVE PREVIEW

</span>

<h2>

Your Complete
Financial Dashboard

</h2>

<p>

Clean.
Powerful.
Professional.

</p>

</div>

<div className="dashboard-preview-card">

<div className="preview-left">

<div className="preview-stat">

<h3>

Income

</h3>

<strong>

₹3,40,000

</strong>

</div>

<div className="preview-stat">

<h3>

Expenses

</h3>

<strong>

₹1,35,000

</strong>

</div>

<div className="preview-stat">

<h3>

Savings

</h3>

<strong>

₹2,05,000

</strong>

</div>

</div>

<div className="preview-chart">

<div className="line-chart">

<span></span>

</div>

</div>

</div>

</section>

{/* ================= HOW IT WORKS ================= */}

<section
id="how-it-works"
className="how-section"
>

<div className="section-title">

<span>

PROCESS

</span>

<h2>

Start In Minutes

</h2>

<p>

No complicated setup.
Just smarter finance.

</p>

</div>

<div className="timeline">

<div className="process-card">

<div className="number">

01

</div>

<h3>

Create Account

</h3>

<p>

Register in seconds
and personalize
your workspace.

</p>

</div>

<div className="process-card">

<div className="number">

02

</div>

<h3>

Add Transactions

</h3>

<p>

Track income,
expenses and
daily spending.

</p>

</div>

<div className="process-card">

<div className="number">

03

</div>

<h3>

Analyze Reports

</h3>

<p>

Visualize your
financial habits
with interactive charts.

</p>

</div>

<div className="process-card">

<div className="number">

04

</div>

<h3>

Reach Goals

</h3>

<p>

Improve savings,
budgeting and
financial discipline.

</p>

</div>

</div>

</section>

{/* ================= CTA ================= */}

<section
className="cta-section"
>

<div className="cta-card">

<h2>

Ready To Take
Control Of Your Money?

</h2>

<p>

Join FinFlow and experience
modern personal finance management.

</p>

<button

className="primary-btn"

onClick={()=>navigate("/register")}

>

Create Free Account

<ArrowRight size={18}/>

</button>

</div>

</section>

{/* ================= FOOTER ================= */}

<footer
id="contact"
className="footer"
>

<div className="footer-grid">

<div>

<h2>

FinFlow

</h2>

<p>

Track.
Budget.
Grow.

</p>

</div>

<div>

<h4>

Product

</h4>

<a href="#about">

About

</a>

<a href="#features">

Features

</a>

<a href="#how-it-works">

How It Works

</a>

</div>

<div>

<h4>

Contact

</h4>

<p>

support@finflow.com

</p>

<div className="socials">

<Github/>

<Linkedin/>

<Mail/>

</div>

</div>

</div>

<div className="footer-bottom">

© 2026 FinFlow.

</div>

</footer>

</div>

);

}