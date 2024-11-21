import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  // Replace this URL with your Mailchimp form action URL
  const MAILCHIMP_URL = 'YOUR_MAILCHIMP_FORM_URL';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(MAILCHIMP_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Layout
      title={siteConfig.title}
      description="The Complete DREX Knowledge Base">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          
          <div className={styles.features}>
            <h2>Your Gateway to DREX Knowledge</h2>
            <p>
              Stay updated with the latest developments in Brazil's Digital Real project,
              including new use cases, regulatory updates, and technical implementations.
            </p>
          </div>

          <div className={styles.subscribeSection}>
            <h3>Stay Informed</h3>
            <p>Subscribe to receive updates about DREX and DREXpedia</p>
            
            <form onSubmit={handleSubmit} className={styles.subscribeForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
            
            {status === 'success' && (
              <p className={styles.successMessage}>
                Thanks for subscribing! Please check your email to confirm.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
} 