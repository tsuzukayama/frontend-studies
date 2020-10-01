import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@tsuzukayama/single-spa-react",
  app: () => System.import("@tsuzukayama/single-spa-react"),
  activeWhen: ["/"],
});
start({
  urlRerouteOnly: true,
});
