import React from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'How can I watch movies from your website?',
    answer: 'To watch movies from our website, follow these steps: 1. Go to our website and browse the available movies. 2. Click on the movie you want to watch. 3. On the movie page, you will see a "Watch Now" button. Click on it. 4. If you are not already logged in, you will be prompted to log in or create an account. 5. Once logged in, the movie will start playing in the video player.'
  },
  // Add more FAQ items as needed
];

const FAQPage: React.FC = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
