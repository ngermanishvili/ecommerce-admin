import React from 'react'
import Script from 'next/script'

const ChatPlugin = () => {
    return (
        <div>
            <div>
                {/* Wrap your script tags in `Script` components from @next/script */}
                <Script
                    id="facebook-chatbox-config"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "115850238226188");
            chatbox.setAttribute("attribution", "biz_inbox");
          `,
                    }}
                />

                <Script
                    id="facebook-sdk"
                    strategy="lazyOnload"
                    src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
                />
            </div>
        </div>
    )
}

export default ChatPlugin