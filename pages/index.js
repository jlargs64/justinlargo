import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="splash-container">
        <div className="splash">
          <h1 className="splash-head">Justin Largo</h1>
          <h2 className="splash-subhead">Software Engineer and Entrepreneur</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <h2>Check out my apps!</h2>
          <div className="apps">
            <Link href="/chandlerbingswag">
              <div className="card">
                <h3 className="card-title">Chandler Bing Swag</h3>
                <p>Have Chandler Bing hold your favorite album!</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="content">
          <h2>About me</h2>
          <p>
            I'm Justin and I'm a student at Siena College, class of 2021! My
            main hobbies are creating things that I think are cool and playing
            rugby.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .splash-container {
            background: #1f8dd6;
            z-index: 1;
            overflow: hidden;
            width: 100%;
            height: 50%;
            top: 0;
            left: 0;
            position: fixed !important;
          }
          .splash {
            /* absolute center .splash within .splash-container */
            width: 80%;
            height: 50%;
            margin: auto;
            position: absolute;
            top: 20px;
            left: 0;
            bottom: 0;
            right: 0;
            text-align: center;
            text-transform: uppercase;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          }
          /* This is the main heading that appears on the blue section */
          .splash-head {
            font-size: 20px;
            font-weight: bold;
            color: white;
            border: 3px solid white;
            padding: 1em 1.6em;
            font-weight: 100;
            border-radius: 5px;
            line-height: 1em;
            width: 20%;
          }

          /* This is the subheading that appears on the blue section */
          .splash-subhead {
            color: white;
            letter-spacing: 0.05em;
            opacity: 0.9;
          }
          .content-wrapper {
            position: absolute;
            top: 40%;
            width: 90%;
            min-height: 12%;
            z-index: 2;
            background: white;
            padding-left: 10%;
          }
          .card {
            border: 1px solid black;
            border-radius: 10px;
            width: 40%;
            height: 20%;
            padding: 1em;
            margin: 1em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
            box-shadow: 8px 8px 2px 1px rgba(0, 0, 0, 0.2);
          }
          .card-title {
            font-weight: 700;
            margin-bottom: 0;
          }
          .card:hover {
            border: 1px solid gray;
            color: gray;
            cursor: pointer;
          }
          .content {
            padding: 1em 1em 3em;
          }
          .apps {
            display: flex;
            flex-flow: row wrap;
          }
        `}
      </style>
    </Layout>
  );
}
