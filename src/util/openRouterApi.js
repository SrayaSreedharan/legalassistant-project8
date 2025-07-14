export const OpenRouter = async (query) => {
  const apiKey = process.env.REACT_APP_OPENROUTER_KEY;

  if (!apiKey) {
    console.error("Missing API key");
    return { content: "Missing API key", citationList: [] };
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "Lexi Legal Assistant",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [{ role: "user", content: query }],
      }),
    });

    const result = await response.json();
    console.log("OpenRouter response:", result);

    if (!response.ok || result.error) {
      throw new Error(result.error?.message || "OpenRouter API error");
    }

    const content = result.choices?.[0]?.message?.content || "";

    // OPTIONAL: You could parse citations from the text here if needed
    const citationList = []; // update this if your content contains [1], [2] etc.

    return { content, citationList };
  } catch (err) {
    console.error("Fetch error:", err.message);
    return { content: "Failed to fetch response", citationList: [] };
  }
};
