import React, { useState, ChangeEvent } from 'react';
import { Switch } from './switch';

export const SwitchExample: React.FC = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setState({ ...state, [name]: e.target.checked });
  };
  return (
    <>
      <Switch checked={state.checkedA} onChange={(e) => onChange(e, 'checkedA')} />
      <Switch checked={state.checkedB} onChange={(e) => onChange(e, 'checkedB')} />
    </>
  );
};

export default SwitchExample;
