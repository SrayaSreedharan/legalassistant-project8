export const OpenRouter = async (query) => {
  console.log("API Key from env:", process.env.REACT_APP_OPENROUTER_KEY); 

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "Lexi Legal Assistant"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      }),
    });

    const result = await response.json();
    console.log("OpenRouter response:", result);

    if (!response.ok || result.error) {
      throw new Error(result.error?.message || "OpenRouter API error");
    }

    return result.choices[0].message.content;

  } catch (err) {
    console.error("Fetch error:", err.message);
    return "Failed to fetch AI response.";
  }
};
