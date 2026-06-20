import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
import dashboardImg from "../assets/dashboard.png";

const LandingPage = () => {

const navigate = useNavigate();

return (

<div className="landing-page">

<nav className="navbar">

<div className="logo">
◈ ExpenseFlow
</div>

<div className="nav-links">

<a href="#features">Features</a> <a href="#showcase">Dashboard</a> <a href="#contact">Contact</a>

</div>

<div className="nav-buttons">

<button
className="login-btn"
onClick={() => navigate("/login")}

>

Login </button>

<button
className="register-btn"
onClick={() => navigate("/register")}

>

Get Started </button>

</div>

</nav>

<section className="hero">

<div className="hero-content">

<span className="hero-badge">
Smart Personal Finance Platform
</span>

<h1>

Take Control Of <br />
Your Financial Future

</h1>

<p>

Track expenses, manage budgets,
analyze spending and grow your
savings using one intelligent platform.

</p>

<div className="hero-buttons">

<button
className="primary-btn"
onClick={() => navigate("/register")}

>

Get Started Free </button>

<button
className="secondary-btn"

>

View Dashboard </button>

</div>

</div>

</section>

<section
id="showcase"
className="showcase"
>

<h2>
Powerful Financial Dashboard
</h2>

<p>
Monitor all your finances in one place.
</p>

<img
src="/dashboard-preview.png"
alt="dashboard"
/>

</section>

<section
id="features"
className="features"
>

<h2>
Everything You Need
</h2>

<div className="feature-grid">

<div className="feature-card">

<h3>
Expense Tracking
</h3>

<p>
Track every transaction with ease.

</p>

</div>

<div className="feature-card">

<h3>
Budget Planning
</h3>

<p>
Stay within limits and avoid overspending.

</p>

</div>

<div className="feature-card">

<h3>
Financial Analytics
</h3>

<p>
Visual insights into your financial habits.

</p>

</div>

<div className="feature-card">

<h3>
AI Insights
</h3>

<p>
Receive intelligent financial suggestions.

</p>

</div>

</div>

</section>

<section className="benefits">

<h2>
Why ExpenseFlow?
</h2>

<div className="benefits-grid">

<div>
✓ Simple Interface
</div>

<div>
✓ Smart Analytics
</div>

<div>
✓ Secure Data
</div>

<div>
✓ Financial Growth
</div>

</div>

</section>

<section className="cta">

<h2>
Ready To Manage Your Money Smarter?
</h2>

<p>
Start tracking your finances today.

</p>

<button
onClick={() => navigate("/register")}

>

Create Free Account </button>

</section>

<footer
id="contact"
className="footer"
>

<h3>
ExpenseFlow
</h3>

<p>
Track. Manage. Grow.
</p>

<p>
© 2026 ExpenseFlow
</p>

</footer>

</div>

);

};

export default LandingPage;
