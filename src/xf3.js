import { UserManager } from 'oidc-client-ts';

const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_NOOFfbhA2",
    client_id: "7eq0r136ivj5d2ihon9fm8lb2n",
    redirect_uri: window.location.origin + "/main",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "7eq0r136ivj5d2ihon9fm8lb2n";
    const logoutUri = window.location.origin + "/index.html";
    const cognitoDomain = "https://eu-west-2nooffbha2.auth.eu-west-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};