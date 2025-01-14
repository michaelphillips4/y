import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_NOOFfbhA2",
  client_id: "7eq0r136ivj5d2ihon9fm8lb2n",
  redirect_uri: "http://localhost:5173/main.html",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)

