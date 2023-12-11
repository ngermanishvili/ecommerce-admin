import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Add the Messenger chat plugin code here */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var chatbox = document.createElement('div');
                chatbox.id = 'fb-customer-chat';
                chatbox.className = 'fb-customerchat';
                document.body.appendChild(chatbox);

                chatbox.setAttribute('page_id', 'YOUR_PAGE_ID'); // Replace with your Facebook Page ID
                chatbox.setAttribute('attribution', 'biz_inbox');
                
                window.fbAsyncInit = function() {
                  FB.init({
                    xfbml: true,
                    version: 'v18.0',
                  });
                };
                
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `,
            }}
          />
          {/* End of Messenger chat plugin code */}
        </head>
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
