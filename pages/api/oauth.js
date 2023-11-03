import fetch from "node-fetch";

const scope = ["identify", "guilds"].join(" ");

const OAUTH_QS = new URLSearchParams({
  client_id: "1168822115810672711",
  redirect_uri: "http://localhost:3000/api/oauth",
  response_type: "code",
  scope,
}).toString();

const OAUTH_URI = `https://discord.com/api/oauth2/authorize?${OAUTH_QS}`;

export default async function handler(req, res) {
  if (req.method !== "GET") return res.redirect("/");

  const { code = null, error = null } = req.query;

  if (error) {
    return res.redirect(`/?error=${req.query.error}`);
  }

  if (!code || typeof code !== "string") return res.redirect(OAUTH_URI);

  await fetch(`https://disgithook-api.tomatenkuchen.com/login?code=${code}`);

  res.redirect("/");
}
