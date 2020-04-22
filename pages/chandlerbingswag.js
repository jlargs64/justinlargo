import { useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import Link from 'next/link';

export default function ChandlerBingSwag() {
  const [albumName, setAlbumName] = useState('');
  const [albumURL, setAlbumURL] = useState('');
  function handleChange(event) {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&api_key=ff4da49cf67d499155af8d199da5d753&format=json&limit=5`,
      )
      .then((res) => {
        const albums = res.data.results.albummatches.album;

        setAlbumURL(albums[0].image[3]['#text']);
      });
    setAlbumName(event.target.value);
  }

  return (
    <Layout>
      <div style={{ margin: '1.5em 1em' }}>
        <Link href="/">
          <a className="backButton">&larr; Go home</a>
        </Link>
      </div>
      <div className="container">
        <h1>Chandler Bing Swag</h1>
        <p>
          <em>Can I BE anymore in love with this album!</em>
        </p>
        <input
          type="text"
          id="albumName"
          name="albumName"
          className="searchBar"
          placeholder="Search for an album..."
          onChange={handleChange}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            width: '60%',
            height: '50%',
            marginBottom: '10%',
          }}
        >
          {albumURL === '' ? null : (
            <img
              src={albumURL}
              alt="album cover"
              className="pure-img rotateAlbum"
              style={{
                zIndex: 0,
                top: '53%',
                left: '19%',
                position: 'absolute',
                height: '40%',
                width: '54%',
              }}
            />
          )}
          <img
            src={
              'https://cdn140.picsart.com/241848734010212.png?type=webp&to=min&r=640'
            }
            alt="Chandler overlay"
            className="pure-img"
            style={{
              zIndex: 1,
              top: 0,
              left: 0,
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>

      <style jsx>
        {`
          .backButton {
            border: 1px solid black;
            border-radius: 10px;
            padding: 0.5em;
            color: black;
            text-decoration: none;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100%;
            width: 100%;
          }

          .container h1 {
            font-size: 2.5em;
            margin-bottom: 0;
            word-wrap: break-word;
            text-align: center;
          }

          .searchBar {
            border-radius: 8px;
            margin: 1em;
            padding: 8px 8px;
            font-size: larger;
            width: 60%;
            box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.2);
          }

          .footer {
            position: absolute;
            display: flex;
            justify-content: center;
            width: 100%;
            bottom: 0;
          }

          .rotateAlbum {
            -webkit-transform: rotate(8deg);
            -ms-transform: rotate(8deg);
            transform: rotate(8deg);
          }
        `}
      </style>
    </Layout>
  );
}
