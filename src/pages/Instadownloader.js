import React, {useState} from 'react';
import { Navbar, Footer } from '../components';
import './instadownloader.css';
import { ScrollRestoration } from "react-router-dom";

async function getInstagramReelsData(reelsUrl) {
    const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=<url_to_http_resource>";
    const apiUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(
      reelsUrl
    )}`;
    const response = await fetch(proxyUrl + apiUrl);
    if (response.ok) {
      const reelsData = await response.json();
      return reelsData;
    } else {
      throw new Error("Failed to fetch Instagram Reels data");
    }
  }




function Instadownloader  () {
    const [reelsUrl, setReelsUrl] = useState("");
    const [error, setError] = useState(null);
  
    function allowUrlChange(event) {
      setReelsUrl(event.target.value);
      setError(null);
    }
  
    async function allowDownload() {
      try {
        const reelsData = await getInstagramReelsData(reelsUrl);
        const videoUrl = reelsData.thumbnail_url.replace("thumbnail", "video");
        const downloadLink = document.createElement("a");
        downloadLink.href = videoUrl;
        downloadLink.download = "instagram_reels.mp4";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
    <div>
      <div className='x2q__instareels-container'>
        <ScrollRestoration />
        <Navbar />
        <div className='x2q__instareels-content section__padding'>
        
        <input 
          type="text"
          value={reelsUrl}
          onChange={allowUrlChange}
          placeholder="Enter Instagram Reels URL"
        />
        <button  className = 'primarybtn'onClick={allowDownload}>Download</button>
        {error && <p>{error}</p>}
        
        </div>
        </div>
        <Footer />
      </div>
    );
  }

export default Instadownloader;
