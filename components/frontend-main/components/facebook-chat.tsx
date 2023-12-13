"use client"
import Script from 'next/script'
import { useEffect } from 'react';


const FacebookChatSDK = () => {
    useEffect(() => {
        var chatbox = document.getElementById('fb-customer-chat');
        if (chatbox) {
            chatbox.setAttribute("page_id", "115850238226188");
        }
        if (chatbox) {
            chatbox.setAttribute("attribution", "biz_inbox");
        }
    }, []);

    return (
        <Script id="facebook-jssdk" strategy="afterInteractive">
            {`
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v18.0'
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
    );
};

export default FacebookChatSDK;
