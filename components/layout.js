import Head from 'next/head';
import { useEffect } from 'react';
import { initGA, logPageView } from '../analytics';
import './layout.css';

export default function Layout(props) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <Head>
        <title>Justin Largo</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Justin Largo is a software engineer and entrepreneur based in NJ."
        />
        <meta property="og:url" content="https://justinlargo.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Justin Largo" />
        <meta
          property="og:description"
          content="Justin Largo is a software engineer and entrepreneur based in NJ."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
          integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47"
          crossOrigin="anonymous"
        />
      </Head>
      <main>{props.children}</main>

      <footer
        style={{
          position: 'absolute',
          display: 'flex',
          flexFlow: 'column wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          bottom: '-10%',
          zIndex: 2,
          marginTop: 10,
        }}
      >
        <p style={{ marginBottom: 0 }}>Built by Justin Largo</p>

        <p style={{ marginTop: 0 }}> &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
