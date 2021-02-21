// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const emailValidator = require('email-validator');
const fetch = require('node-fetch');
const { WEBHOOK_URL } = process.env;

export default async (req, res) => {
  if (req.method != 'POST')
    return res.status(405).send();

  if (!WEBHOOK_URL)
    return res.status(500).json({
      msg: 'WEBHOOK_URL not found'
    });

  const { email, description } = req.body;
  if (!email || !description || !emailValidator.validate(email)) {
    return res.status(400).json({
      email,
      description
    });
  }

  const webhookBody = {
    // "content": description,
    "embeds": [
      {
        "title": `**New contact from https://abnerfs.dev/**`,
        "color": 15258703,
        "fields": [
          {
            "name": "**E-mail**",
            "value": email
          },
          {
            "name": "**Host**",
            "value": req.headers.host
          },
          {
            "name": "**Description**",
            "value": description
          }
        ]
      }
    ]
  }

  await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(webhookBody)
  });

  return res.status(200).send();
}
