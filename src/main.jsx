import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const quotes = [
  'Great things are built with passion and patience.',
  'Small steps still move you forward.',
  'Make room for the work you believe in.',
  'Your next idea can change everything.',
  'Keep going. The good part takes time.',
  'Progress is a practice, not a finish line.',
  'Start where you are. Build what comes next.',
  'Give your best ideas time to grow.',
];

function App() {
  const [number, setNumber] = useState(42);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [sequence, setSequence] = useState(0);
  const [direction, setDirection] = useState('left');

  function generateNext() {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setQuoteIndex((current) => (current + 1) % quotes.length);
    setSequence((current) => current + 1);
    setDirection((current) => (current === 'left' ? 'right' : 'left'));
  }

  return (
    <main className="page-shell">
      <section className="generator" aria-label="Number generator">
        <div className="number-stage" aria-live="polite" aria-atomic="true">
          <div className={`number-scene enter-${direction}`} key={sequence}>
            <div className="number-value">{number}</div>
            <p className="quote">“{quotes[quoteIndex]}”</p>
          </div>
        </div>

        <button className="generate-button" type="button" onClick={generateNext}>
          <span>Generate next</span><span className="button-arrow" aria-hidden="true">↗</span>
        </button>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
