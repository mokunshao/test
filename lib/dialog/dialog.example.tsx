import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModel = () => {
    const close = modal(
      (
        <>
          <h1>你好</h1>
          <button type="button" onClick={() => close()}>close</button>
        </>
      ),
    );
  };
  return (
    <>
      <div>
        <h2>example 1</h2>
        <button type="button" onClick={() => setX(!x)}>set</button>
        <Dialog
          visible={x}
          buttons={
            [
              <button type="button" onClick={() => setX(false)}>Yes</button>,
              <button type="button" onClick={() => setX(false)}>No</button>,
            ]
          }
          onClose={() => setX(false)}
        >
          hello
        </Dialog>
      </div>
      <div>
        <h2>example 2</h2>
        <button type="button" onClick={() => setY(!y)}>set</button>
        <Dialog
          visible={y}
          buttons={
            [
              <button type="button" onClick={() => setY(false)}>Yes</button>,
              <button type="button" onClick={() => setY(false)}>No</button>,
            ]
          }
          onClose={() => setY(false)}
          closeOnClickMask={false}
        >
          hello
        </Dialog>
      </div>
      <div>
        <h2>example 3</h2>
        <button type="button" onClick={() => alert('hello')}>set</button>
      </div>
      <div>
        <h2>example 4</h2>
        <button type="button" onClick={() => confirm('hello', () => console.log(1), () => console.log(2))}>set</button>
      </div>
      <div>
        <h2>example 5</h2>
        <button type="button" onClick={openModel}>set</button>
      </div>
    </>
  );
};

export default DialogExample;
