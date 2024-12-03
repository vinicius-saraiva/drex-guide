import React, { useEffect } from 'react';
import posthog from 'posthog-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(siteConfig.customFields.posthogPublicKey, {
        api_host: siteConfig.customFields.posthogHost,
        capture_pageview: false,
        person_profiles: 'identified_only'
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.capture('$pageview');
    }
  }, [location.pathname]);

  return <>{children}</>;
} 