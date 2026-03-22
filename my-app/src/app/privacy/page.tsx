import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Footer from '@/app/components/footer/Footer'
import '../legal.css'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Bluedate collects, uses, and protects your personal data under Indian law.',
}

export default function PrivacyPolicy() {
  return (
    <div className="LegalPage">
      <Navbar />
      <main className="LegalPage__main">
        <div className="LegalPage__in">

          <div className="LegalPage__header">
            <p className="LegalPage__label">Legal</p>
            <h1 className="LegalPage__title">Privacy Policy</h1>
            <p className="LegalPage__meta">Effective date: 22 March 2026 &nbsp;·&nbsp; Last updated: 22 March 2026</p>
          </div>

          <div className="LegalPage__body">

            <p className="LegalPage__intro">
              Bluedate (&ldquo;Bluedate&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the
              privacy of every user. This Privacy Policy explains how we collect, use, share, and
              safeguard your personal data when you access our website (<strong>bluedate.io</strong>)
              and application (<strong>app.bluedate.io</strong>). It is governed by and compliant with
              the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the
              <strong> Information Technology Act, 2000</strong>, and the <strong>IT (Reasonable
              Security Practices and Procedures and Sensitive Personal Data or Information)
              Rules, 2011</strong>.
            </p>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">1. Who We Are</h2>
              <p>
                Bluedate is the <strong>Data Fiduciary</strong> as defined under the DPDP Act, 2023.
                We determine the purpose and means of processing your personal data.
              </p>
              <ul>
                <li><strong>Company name:</strong> Bluedate</li>
                <li><strong>Registered in:</strong> India</li>
                <li><strong>Contact:</strong> privacy@bluedate.io</li>
              </ul>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">2. Personal Data We Collect</h2>
              <p>We collect the following categories of personal data:</p>
              <h3 className="LegalPage__h3">a) Data you provide directly</h3>
              <ul>
                <li>Name, email address, phone number (WhatsApp)</li>
                <li>College / university name, year of study</li>
                <li>Gender, age, and date of birth</li>
                <li>Preferences, interests, and date feedback</li>
                <li>Profile photographs (if any)</li>
              </ul>
              <h3 className="LegalPage__h3">b) Data collected automatically</h3>
              <ul>
                <li>IP address, browser type, device identifiers</li>
                <li>Pages visited, time spent, referral source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              <h3 className="LegalPage__h3">c) Sensitive Personal Data or Information (SPDI)</h3>
              <p>
                Under the IT (SPDI) Rules, 2011, certain data such as your sexual preferences and
                biometric data are classified as sensitive. We collect only the minimum data
                necessary for matching and will obtain your explicit consent before processing
                any SPDI.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">3. How We Use Your Data</h2>
              <p>We process your data only for the following specified, lawful purposes:</p>
              <ul>
                <li>To create and manage your account</li>
                <li>To generate your weekly curated match using our AI algorithm</li>
                <li>To send your match details via WhatsApp</li>
                <li>To improve matching accuracy based on your feedback</li>
                <li>To send service-related communications</li>
                <li>To comply with legal obligations under Indian law</li>
                <li>To prevent fraud, abuse, and ensure platform safety</li>
              </ul>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal data to third parties
                for marketing purposes.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">4. Data Sharing</h2>
              <p>Your personal data is shared strictly on a need-to-know basis:</p>
              <ul>
                <li>
                  <strong>Your match:</strong> Only the information necessary to facilitate your
                  date (e.g., first name, college, contact details) is shared with your weekly
                  match — and vice versa.
                </li>
                <li>
                  <strong>Service providers:</strong> Trusted third-party vendors who assist us
                  in operating the platform (e.g., cloud hosting, messaging), bound by
                  confidentiality agreements.
                </li>
                <li>
                  <strong>Law enforcement:</strong> When required by a court order, government
                  authority, or applicable Indian law.
                </li>
              </ul>
              <p>
                Your data is <strong>never publicly displayed</strong> on any profile or feed.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">5. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as necessary
                to provide services. You may request deletion at any time (see Section 7). Upon
                account deletion, we will erase your personal data within <strong>30 days</strong>,
                except where retention is required by law (e.g., financial records for 7 years
                under the Companies Act, 2013).
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">6. Cookies</h2>
              <p>
                We use essential cookies necessary for the functioning of our platform and
                analytics cookies to understand usage patterns. You may disable non-essential
                cookies through your browser settings. Continued use of the platform constitutes
                consent to essential cookies.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">7. Your Rights under the DPDP Act, 2023</h2>
              <p>
                As a Data Principal under the DPDP Act, 2023, you have the following rights:
              </p>
              <ul>
                <li><strong>Right to information:</strong> Know what personal data we process and for what purpose.</li>
                <li><strong>Right to access:</strong> Obtain a summary of your personal data held by us.</li>
                <li><strong>Right to correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data.</li>
                <li><strong>Right to grievance redressal:</strong> Raise concerns with our Grievance Officer.</li>
                <li><strong>Right to nominate:</strong> Nominate another person to exercise your rights in the event of death or incapacity.</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time; withdrawal does not affect lawfulness of prior processing.</li>
              </ul>
              <p>
                To exercise any of these rights, write to us at <strong>privacy@bluedate.io</strong>.
                We will respond within <strong>30 days</strong>.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">8. Security</h2>
              <p>
                We implement reasonable security practices as mandated by the IT (SPDI) Rules,
                2011, including encryption in transit (TLS), access controls, and periodic
                security audits. While we take all reasonable steps to protect your data, no
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">9. Children&apos;s Privacy</h2>
              <p>
                Bluedate is intended for users aged <strong>18 years and above</strong>. We do
                not knowingly collect personal data from anyone under 18. If we become aware that
                a minor has provided us with data, we will delete it immediately. Parents or
                guardians may contact us at privacy@bluedate.io.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">10. Grievance Officer</h2>
              <p>
                In accordance with the Information Technology Act, 2000 and the IT (Intermediary
                Guidelines and Digital Media Ethics Code) Rules, 2021, we have appointed a
                Grievance Officer:
              </p>
              <ul>
                <li><strong>Name:</strong> Grievance Officer, Bluedate</li>
                <li><strong>Email:</strong> grievance@bluedate.io</li>
                <li><strong>Response time:</strong> Within 15 days of receipt of complaint</li>
              </ul>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Material changes will be
                communicated via email or an in-app notice. Continued use of the platform after
                the effective date constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="LegalPage__section">
              <h2 className="LegalPage__h2">12. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of India. Any disputes arising
                shall be subject to the exclusive jurisdiction of the courts located in India.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
