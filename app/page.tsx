export default function Page() {
  return (
    <main>
      <header role="banner">
        <nav aria-label="Main navigation">
          <a href="/">Bridge Collective</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#partners">Partners</a>
          <a href="#report">Annual Report</a>
          <a href="#donate">Donate</a>
        </nav>
      </header>

      <main id="main-content">
        <section aria-labelledby="hero-heading">
          <h1 id="hero-heading">A classroom for every child.</h1>
          <p>
            We fund the schools, train the teachers, and measure what works — so
            every child we reach today becomes a graduate tomorrow.
          </p>
          <button>Donate</button>
        </section>

        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading">Our Impact</h2>

          <article aria-label="2.4 million students reached across 31 countries since 2011">
            <div>2.4M</div>
            <h3>Students reached</h3>
            <p>Across 31 countries since 2011.</p>
          </article>

          <article aria-label="1,284 schools partnered in 14 countries, from Kenya to Guatemala">
            <div>1,284</div>
            <h3>Schools partnered</h3>
            <p>In 14 countries, from Kenya to Guatemala.</p>
          </article>

          <article aria-label="38,000 teachers trained and equipped with modern tools and methodology">
            <div>38K</div>
            <h3>Teachers trained</h3>
            <p>Equipped with modern tools and methodology.</p>
          </article>

          <article aria-label="3.1 times graduation lift - partner schools outperform national averages by 3 times">
            <div>3.1×</div>
            <h3>Graduation lift</h3>
            <p>Partner schools outperform national averages 3x.</p>
          </article>
        </section>
      </main>

      <footer role="contentinfo">
        <div>
          <h2>Bridge Collective</h2>
          <p>Funding schools, training teachers, and measuring impact.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Our Work</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#report">Annual Report</a>
            </li>
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <p>
            <a href="mailto:contact@bridgecollective.org">
              contact@bridgecollective.org
            </a>
          </p>
          <p>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>

        <nav aria-label="Social">
          <h3>Follow</h3>
          <ul>
            <li>
              <a href="https://twitter.com" aria-label="Twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://facebook.com" aria-label="Facebook">
                Facebook
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p>© 2026 Bridge Collective</p>
          <p>Registered charity 12345678</p>
        </div>

        <nav aria-label="Legal">
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility</a>
            </li>
          </ul>
        </nav>

        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
      </footer>
    </main>
  );
}
