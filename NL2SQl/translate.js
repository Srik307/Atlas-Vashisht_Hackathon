const fetch = require("isomorphic-unfetch");

const converttosql = async (q, sc) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer YOUR_API_KEY`,
            },
            body: JSON.stringify({
                prompt: `Translate this natural language query into SQL:\n\n"${q}"\n\n${sc ? `Use this table schema:\n${sc}\n\n` : ''}`,
                temperature: 0.5,
                max_tokens: 20,
                n: 1,
                stop: "\\n",
                model: "gpt-3.5-turbo-instruct",
            }),
        });

        const data = await response.json();
        resolve(data.choices[0].text.trim());
    });
};

module.exports = {
    converttosql: converttosql
};
