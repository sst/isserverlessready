import {
  App,
  Api,
  Config,
  StackContext,
  ViteStaticSite,
} from "@serverless-stack/resources";

function MyStack({ stack, app }: StackContext) {
  const EO_KEY = new Config.Secret(stack, "EO_KEY");

  const api = new Api(stack, "api", {
    routes: {
      "POST /": "functions/lambda.handler",
    },
  });

  api.bind([EO_KEY]);

  const site = new ViteStaticSite(stack, "site", {
    path: "web",
    errorPage: "404.html",
    buildCommand: "yarn run build",
    customDomain:
      app.stage === "prod"
        ? {
            hostedZone: "iserverlessready.com",
            domainName: "preview.isserverlessready.com",
          }
        : undefined,
    environment: {
      PUBLIC_API_URL: api.url,
    },
  });

  stack.addOutputs({
    API: api.url,
    SITE: site.url,
  });
}

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(MyStack);
}
