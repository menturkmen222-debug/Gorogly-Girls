import { useState, useCallback } from 'react';
import Home from '@/pages/Home';
import SplashScreen from '@/components/SplashScreen';

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleDone = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleDone} />}
      <div className={`page-wrap${splashDone ? ' page-entered' : ''}`}>
        <Home />
      </div>
    </>
  );
}

export default App;
