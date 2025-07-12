
  export async function OpenRouter(query) {
     console.log("Using API Key:", process.env.REACT_APP_OPENROUTER_KEY);
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_OPENROUTER_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin,
      "X-Title": "Lexi Legal Assistant"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",

      messages: [
        {
          role: "system",
          content: "You are a legal assistant. Provide legal answers with case citations if applicable."
        },
        {
          role: "user",
          content: query
        }
      ]
    })
  });

  const result = await response.json();
  console.log("Raw OpenRouter Response:", result);

  if (result.error) {
    throw new Error(result.error.message || "OpenRouter API error");
  }

  const message = result?.choices?.[0]?.message?.content;
  if (!message) {
    throw new Error("Unexpected response from OpenRouter");
  }

  return {
    content: message,
    citationList: [
      {
        text: "Mock citation extracted from AI response.",
        source: "MockJudgment.pdf",
       link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"

      }
    ]
  };
}
