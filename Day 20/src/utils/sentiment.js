export const triggerSentimentWebhook = async (condition) => {
  const mood = {
    Rain: "low",
    Clear: "high",
    Clouds: "neutral",
  }[condition] || "mixed";

  await fetch("https://your-n8n-webhook-url.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood }),
  });
};
