import { useState } from 'react';
import Edit from './../../../public/edit.png';
import Done from './../../../public/done.png';

const EmailEditor = (props: { defaultEmail: any; onEmailChange: (arg0: any) => void; }) => {
  const [email, setEmail] = useState(props.defaultEmail);
  const [mode, setMode] = useState('idle');

  const handleEmailChange = (event: { target: { value: any; }; }) => {
    setEmail(event.target.value);
  };

  const handleEditClick = () => {
    setMode('edit');
  };

  const handleDoneClick = () => {
    setMode('idle');
    props.onEmailChange(email);
  };

  return (
    <div>
      {mode === 'edit' ? (
        <div style={{display:"flex",gap:"10px"}}>
          <input type="email" value={email} onChange={handleEmailChange} style={{background:"none"}}/>
          <button onClick={handleDoneClick} >
            <img src={Done} width="20" height="20" alt="Done" />
          </button>
        </div>
      ) : (
        <div style={{display:"flex",gap:"10px"}}>
          <p>{email}</p>
          <button onClick={handleEditClick}>
            <img src={Edit} width="20" height="20" alt="Edit" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailEditor;
