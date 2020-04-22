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
        <div className="imageContainer">
          {albumURL === '' ? null : (
            <img
              src={albumURL}
              alt="album cover"
              className="pure-img rotateAlbum albumCover"
            />
          )}
          <img
            src={'/images/chandler.png'}
            alt="Chandler overlay"
            className="pure-img chandlerOverlay"
          />
        </div>
        <img
          src={'/images/fff.png'}
          alt="Chandler overlay"
          className="pure-img"
        />
      </div>
    </Layout>
  );
}
