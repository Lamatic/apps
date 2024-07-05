import * as React from 'react'
import { useEffect, useState } from 'react';

// TODO: merge the data and icons from PageSocial with the social links in Footer

const FooterImpl: React.FC = () => {
  const [footerHtml, setFooterHtml] = useState<string>('');

  useEffect(() => {
    const getFooter = async () => {
      try {
        const response = await fetch('/api/footer');
        if (!response.ok) {
          throw new Error('Failed to fetch footer');
        }
        const html = await response.text();
        setFooterHtml(html);
      } catch (error) {
        console.error('Error fetching footer:', error);
      }
    };

    getFooter();
  }, []);

  return <div style={{width:"100vw"}} dangerouslySetInnerHTML={{ __html: footerHtml }} />;
};

export const Footer = React.memo(FooterImpl)
