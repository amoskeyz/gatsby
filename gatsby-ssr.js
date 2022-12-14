import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="partytown-vanilla-config"
      dangerouslySetInnerHTML={{
        __html: `partytown = {
           resolveUrl(url, location) {
            console.log(url)
            if (url.hostname.includes('google-analytics')) {
              // Use a secure connection
              if (url?.protocol === 'http:') {
                url = new URL(url.href.replace('http', 'https'))
              }

              // Point to our proxied URL
              const proxyUrl = new URL(location.origin + '/__third-party-proxy')
              proxyUrl.searchParams.append('url', url)

              return proxyUrl
            }
             else if (url.hostname.includes('googletagmanager')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }

                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)

                return proxyUrl
              }

              else if (url.hostname.includes('www.google-analytics.com/analytics.js')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }

                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)

                return proxyUrl
              }

              return url
           }
         }`,
      }}
    />,
    // <script
    //   key="partytown-vanilla-config"
    //   dangerouslySetInnerHTML={{
    //     __html: `partytown = { debug: true }`,
    //   }}
    // />,
  ]);
};
