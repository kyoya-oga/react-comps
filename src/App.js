import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Button desu
        </Button>
      </div>
      <div>
        <Button danger outline>
          wow
        </Button>
      </div>
      <div>
        <Button warning>heihie</Button>
      </div>
      <div>
        <Button secondary rounded>
          bibibi
        </Button>
      </div>
      <div>
        <Button danger>玉ねぎ</Button>
      </div>
    </div>
  );
}

export default App;
