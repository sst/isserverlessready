import fetch from "node-fetch";
import { Config } from "@serverless-stack/node/config";
import { useJsonBody, ApiHandler } from "@serverless-stack/node/api";

const URL =
  "https://emailoctopus.com/api/1.6/lists/52740326-5fb7-11ed-9712-eb1e63425d12/contacts";

interface User {
  name: string;
  email: string;
}

function md5(str: string) {
  return require("crypto")
    .createHash("md5")
    .update(str)
    .digest("hex")
    .toString();
}

function url(method: string, email: string) {
  return method === "PUT" ? `${URL}/${md5(email.toLowerCase())}` : URL;
}

function request({ name: Name, email: email_address }: User, method: string) {
  return fetch(url(method, email_address), {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email_address,
      fields: { Name },
      status: "SUBSCRIBED",
      api_key: Config.EO_KEY,
    }),
  });
}

export const handler = ApiHandler(async (event) => {
  const user: User = useJsonBody();

  const response = await request(user, "POST");

  /**
  const create = await request(user, "POST");

  // If the user already exists, update their name
  if (create.status === 409) {
    const update = await request(user, "PUT");
    response = update;
  } else {
    response = create;
  }
  **/

  return {
    statusCode: response.status === 409 ? 200 : response.status,
    body: await response.text(),
    headers: { "Content-Type": "application/json" },
  };
});
