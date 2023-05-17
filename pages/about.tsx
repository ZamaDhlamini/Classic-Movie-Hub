import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => {
  const images = [
    {
      src: 'dune-part-2-poster.jpg',
      alt: 'Image 1',
      caption: 'Dune Part two',
    },
    {
      src: 'the-flash-poster.jpg',
      alt: 'Image 2',
      caption: 'The Flash',
    },
    {
      src: 'oppenheimer.jpg',
      alt: 'Image 2',
      caption: 'Oppenheimer',
    },
    {
      src: 'fools-paradise.jpg',
      alt: 'Image 2',
      caption: 'Fools Paradise',
    },
    {
      src: 'the-flash-poster.jpg',
      alt: 'Image 2',
      caption: 'The Flash',
    },
    {
      src: 'the-flash-poster.jpg',
      alt: 'Image 2',
      caption: 'The Flash',
    },
    {
      src: 'the-flash-poster.jpg',
      alt: 'Image 2',
      caption: 'The Flash',
    },
    // Add more images as needed
  ];

  return(
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Movie Gallery</h1>
    <p>These are your movies</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}} >
    {images.map((image, index) => (
      <div key={index}>
        <img src={image.src} alt={image.alt} style={{width: '300px', height: '420px'}} />
        <p>{image.caption}</p>
    </div>
    ))}
    </div>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
  )
}

export default AboutPage
