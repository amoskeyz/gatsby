import * as React from "react";
import { Script } from "gatsby";
import { Helmet } from "react-helmet";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you???re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet
        async={true}
        defer={false}
        onChangeClientState={(e) => {
          console.log(e);
        }}
      >
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-235378435-1"
        ></script> */}
      </Helmet>

      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>
          ??? you just made a Gatsby site! ????????????
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time. ????
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />

      <button
        onClick={
          () => {
            window.dataLayer.push({
              event: "click",
            });
            window.dataLayer.push({
              event: "promoId",
              promoId: 2,
            });
            window.SeerbitPay(
              {
                tranref: new Date().getTime(),
                currency: "NGN",
                description: "TEST",
                country: "NG",
                amount: "100.00",
                full_name: "test test", //optional
                email: "test@emaildomain.com", //optional
                vendorId: "attach yor sub-account ID", //optional
                callbackurl: "http://yourdomain.com",
                public_key: "SBTESTPUBK_t4G16GCA1O51AV0Va3PPretaisXubSw1", //replace this with your own public key
                setAmountByCustomer: false, //optional (set true to allow customer set the amount on the checkout)
              },
              function callback(response, close) {
                /*response of the tansaction*/
                /*close is a function to close the checkout*/
              },
              function close(close) {
                console.log(close); /*transaction close*/
              }
            );
          }
          // }
        }
      >
        Pay
      </button>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <Script
        async
        // strategy="off-main-thread"
        src="https://stg-checkout.seerbitapi.com/api/v2/seerbit.js"
        // forward={["SeerbitPay"]}
      />
      <Script
        async
        strategy="off-main-thread"
        src="https://www.googletagmanager.com/gtag/js?id=UA-235378435-1"
        forward={["dataLayer.push"]}
      />
      {/* <Script
        async
        strategy="off-main-thread"
        src="https://www.googletagmanager.com/gtm.js?id=UA-235378435-1"
      /> */}
      <Script async strategy="off-main-thread">
        {`
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                  var gaId = 'UA-235378435-1';
                  ga('create', gaId, 'auto');
                `}
      </Script>
      <Script async id="gtm-init" strategy="off-main-thread">
        {`
            (function(w,d,s,l,i){console.log('GTM - SCRIPT -', new Date());w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4LZB8K');
          `}
      </Script>
      <Script
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${"GTM-W4LZB8K"}`}
        strategy="off-main-thread"
        // forward={[`dataLayer.push`]}
      />
      <Script id="gtm-init" strategy="off-main-thread" async>
        {`
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' })
  `}
      </Script>

      {/* <Script
        strategy="off-main-thread"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-235378435-1"
      /> */}
      <Script async>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-235378435-1');`}
      </Script>
      <title>Home Page</title>
    </>
  );
};
