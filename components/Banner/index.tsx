import { useEffect, useState } from 'react';
import styles from './Banner.module.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    './the-avengers-movie-poster-banners-.jpg',
    '../../public/Dune-Banner.jpg',
    './jujutsu-kaisen-banner.jpg',
  ];

  return (
    <div className={styles.header}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === activeIndex ? styles.active : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
