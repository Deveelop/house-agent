

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <img src="hero-image.jpg" alt="Landlord and Tenant" className="hero-image" />
        <div className="hero-content">
          <h1>Find your perfect home or tenant effortlessly!</h1>
          <p>The streamlined platform for landlords and tenants to connect directly.</p>
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section className="benefits">
        <h2>Landlord Benefits</h2>
        <ul>
          <li>Reduce costs on estate agent fees.</li>
          <li>Find qualified tenants quickly and easily.</li>
          <li>Simplify property management with online tools.</li>
        </ul>
        <h2>Tenant Benefits</h2>
        <ul>
          <li>Wider selection of properties to choose from.</li>
          <li>Convenient search filters to find your perfect match.</li>
          <li>Connect directly with landlords and avoid intermediaries.</li>
        </ul>
      </section>

      {/* Call to Action Buttons */}
      <section className="cta">
        <a href="/signup/landlord" className="btn btn-primary">Landlords: Sign Up & List Your Property</a>
        <a href="/search" className="btn btn-secondary">Tenants: Find Your New Home Now</a>
      </section>

      {/* Additional Information (Optional) */}
      <section className="features">
        <h2>More Features You'll Love</h2>
        <div className="feature-card">
          <i className="fas fa-envelope"></i>
          <h3>Secure Messaging</h3>
          <p>Communicate directly with landlords or tenants.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-search"></i>
          <h3>Saved Searches</h3>
          <p>Never miss your dream home - save your search criteria.</p>
        </div>
        {/* Add more feature cards for other functionalities */}
      </section>

    </div>
  );
}

export default LandingPage;
