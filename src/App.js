import { useState } from 'react';
import './App.css';

import { CodatLink } from '@codat/link-sdk';
import '../node_modules/@codat/link-sdk/index.css';

const App = () => {
  document.title = "link-sdk-sample-project";

  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false)
  const [connections, setConnections] = useState([])

  const [companyId, setCompanyId] = useState('')

  const startConnecting = () => {
    if(companyId === '') {
      alert('Add a valid company ID')
    } else {
      setOpen(true)
    }
  }

  const reset = () => {
    setOpen(false);
    setConnections([]);
    setCompanyId('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>link-sdk-sample-project</h1>

        <p>Add a company ID below to begin linking financial data</p>

        <form>
          <label htmlFor="companyId">Company ID:</label>
          <input type="text" id="companyId" name="companyId" value={companyId} onChange={(e) => setCompanyId(e.target.value)}/>
        </form>

        {
          !complete && <button onClick={() => startConnecting()}>Start connecting</button>
        }

        <hr/>

        <h4>Connection IDs</h4>

        <p>As you establish valid connections, those connection IDs will appear here.</p>

        {
          connections.length >= 1
          ? connections.map((id, i)=><div key={i}>{id}</div>)
          : <div><i>No connections</i></div>
        }

        {
          open && <div className="Modal">
              <CodatLink
                companyId={companyId}
                onConnection={(newConnectionId) => setConnections([...connections, newConnectionId.connectionId])}
                onFinish={() => {
                  setComplete();
                  setOpen(false);
                }}
                onClose={() => reset()}
                onError={(error) => {
                  setOpen(false);
                  alert(error);
                }}
              />
            </div>
        }
      </header>
    </div>
  );
}

export default App;
