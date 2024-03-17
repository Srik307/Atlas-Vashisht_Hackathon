const fetch = require('node-fetch');

const converttosql = async (q,sc)=>{
  
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      prompt:`Translate this natural language query into SQL:\n\n"${q}"\n\n${sc ? `Use this table schema:\n${sc}\n\n` : ''}`,
      temperature: 0.5,
      max_tokens: 2048,
      n: 1,
      stop: "\\n",
      model: "gpt-3.5-turbo-instruct",
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
      logprobs: 10,
    }),
  });

  const data = await response.json();

  return data.choices[0].text.trim();
};

export default converttosql;
