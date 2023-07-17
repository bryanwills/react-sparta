import React from 'react';
import styles from './Hero.module.css';


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      {/* <div className={styles.videoWrapper}> */}
      <div className="relative">
        {/* <iframe
          src="https://www.youtube.com/embed/i6QyL9nDlg8?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=i6QyL9nDlg8"
          title="Hero Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe> */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        <img className={styles['image-container']} src="/louisville.webp" alt="Hero" />
      </div>
      </div>
  );
};

export default Hero;
