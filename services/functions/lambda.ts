import fetch from "node-fetch";
import { Config } from "@serverless-stack/node/config";
import { useJsonBody, ApiHandler } from "@serverless-stack/node/api";

const URL =
  "https://emailoctopus.com/api/1.6/lists/52740326-5fb7-11ed-9712-eb1e63425d12/contacts";

interface User {
  name: string;
  email: string;
}

export const handler = ApiHandler(async (event) => {
  const { email: email_address, name: Name }: User = useJsonBody();

  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email_address,
      fields: { Name },
      status: "SUBSCRIBED",
      api_key: Config.EO_KEY,
    }),
  });

  return {
    body: await response.text(),
    headers: { "Content-Type": "application/json" },
    statusCode: response.status === 409 ? 200 : response.status,
  };
});
