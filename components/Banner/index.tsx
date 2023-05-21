import { useEffect, useState } from 'react';
import styles from './Banner.module.css'

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll('.image');

    const nextImage = () => {
      // Hide the current active image
      images[activeIndex].classList.remove('active');

      // Increment the active index
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);

      // Show the next image after a delay (e.g., 3 seconds)
      setTimeout(() => {
        images[activeIndex].classList.add('active');
      }, 3000);
    };

    // Start the animation loop
    const animationLoop = setInterval(nextImage, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(animationLoop);
  }, [activeIndex]);

  return (
    <div className="header">
      <div className="image active">
        {/* Add your initial image content */}
        <div>
      <h1 className={styles.header}>Welcome to Movie Buff!</h1>
    </div>
      </div>
      <div className="image">
        {/* Add your second image content */}
      </div>
      <div className="image">
        {/* Add your third image content */}
      </div>
    </div>
  );
};

export default Banner;
