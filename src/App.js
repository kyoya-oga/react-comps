import React from 'react';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <div>
        <Button secondary onClick={handleClick}>
          <GoBell />
          <span>Button desu</span>
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          <span>wow</span>
        </Button>
      </div>
      <div>
        <Button warning>heihie</Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoDatabase />
          <span>bibibi</span>
        </Button>
      </div>
      <div>
        <Button danger>玉ねぎ</Button>
      </div>
    </div>
  );
}

export default App;
