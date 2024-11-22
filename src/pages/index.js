import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

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
          <div className={styles.headerContainer}>
            <img 
              src={useBaseUrl('/img/newlogo.png')}
              alt="DREXpedia Logo" 
              className={styles.logo}
            />
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>DREXpedia</h1>
              <p className={styles.subtitle}>
                Learn everything about Digital Brazilian Real (CBDC)
              </p>
            </div>
          </div>

          <div className={styles.subscribeSection}>
            <form onSubmit={handleSubmit} className={styles.subscribeForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to stay informed"
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

          <div className={styles.contentSection}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>
                Brazilian Digital Currency Revolution
              </h2>
              <p className={styles.introText}>
                Brazil continues to revolutionize the global financial landscape, standing firmly at the 
                forefront of digital innovation. Following the remarkable success of PIX - the instant 
                payment system, and the implementation of Open Finance, Brazil is now embarking on its 
                next transformative journey: DREX, the digital version of the Brazilian Real.
              </p>
            </div>
            <div className={styles.brazilMapContainer}>
              <img 
                src={useBaseUrl('/img/map.png')}
                alt="Brazil Map" 
                className={styles.brazilMap}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 