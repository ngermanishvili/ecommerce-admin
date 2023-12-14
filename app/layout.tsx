import type { Metadata } from 'next'

import Script from 'next/script'

import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `% | ${siteConfig.title}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <ModalProvider />
        {children}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script id="fb-chat" strategy="lazyOnload">
          {`
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "115850238226188");
              chatbox.setAttribute("attribution", "biz_inbox");

              window.fbAsyncInit = function() {
                FB.init({
                  xfbml: true,
                  version: 'v18.0'
                });
              };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              `}
        </Script>
      </body>
    </html>
  )
}
