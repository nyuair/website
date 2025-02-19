import React, { useEffect } from 'react';

const Noexist = () => {
  useEffect(() => {
    // apply the css element here
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        padding: 4px 0;
        border-bottom: 1px solid #dedee3;
        backdrop-filter: blur(8px);
        background-color: rgba(26, 27, 25, .29);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  });

  return (
    <div className='joinusbg'>
      <div className="noexitText joinusbg">
        <h1>Coming soon!</h1>
      </div>

    </div>
  );
};

export default Noexist;
