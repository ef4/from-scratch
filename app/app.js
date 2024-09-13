import Application from "@ember/application";
import Resolver from "ember-resolver";

import IndexRoute from "./routes/index.js";
import IndexTemplate from "./templates/index.gjs";

export default class App extends Application {
  modulePrefix = "from-scratch";
  Resolver = Resolver.withModules({
    "from-scratch/routes/index": IndexRoute,
    "from-scratch/templates/index": IndexTemplate,
  });
}
