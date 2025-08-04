// middleware.js
export function middleware(request) {
  const allowedUserAgents = ["https://uniswap.org", "https://coingecko.com", "https://coinmarketcap.com", "https://trustwallet.com/"];
  const userAgent = request.headers.get("user-agent") || "";

  const allowed = allowedUserAgents.some(agent =>
    userAgent.includes(agent)
  );

  if (!allowed) {
    return new Response("Access Denied", { status: 403 });
  }

  return; // Allow access
}
