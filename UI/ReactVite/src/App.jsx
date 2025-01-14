// App.js

import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7eq0r136ivj5d2ihon9fm8lb2n";
    const logoutUri = window.location.origin + "/index.html";
    const cognitoDomain = "https://eu-west-2nooffbha2.auth.eu-west-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div className="center">

<details>
        <summary>User Info</summary>
       
        <pre> Hello: {auth.user?.profile.email} </pre>
        Access token: <p className="code-wrap" id="access-token">{auth.user?.access_token}</p>
        ID token: <p className="code-wrap" id="id-token">{auth.user?.id_token}</p>
        Refresh token: <p className="code-wrap" id="refresh-token">{auth.user?.refresh_token}</p>
    </details>
  

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className="center">
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}
  
export default App;
