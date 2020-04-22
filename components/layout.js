import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Justin Largo</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
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
          position: 'relative',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          bottom: 0,
        }}
      >
        <p style={{ marginBottom: 0 }}>Built with &#10084; by Justin Largo</p>
        <p style={{ marginTop: 0 }}> &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
