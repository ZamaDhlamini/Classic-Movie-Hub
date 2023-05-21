// pages/faq/index.tsx
import React from 'react';
import styles from './faq.module.css'; // Import CSS module styles

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  // FAQ items...
];

const FAQPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div className={styles.faqItem} key={index}>
          <h3 className={styles.question}>{item.question}</h3>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
