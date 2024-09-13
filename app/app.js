import Application from "@ember/application";
import Resolver from "ember-resolver";

import compatModules from '@embroider/core/entrypoint';

export default class App extends Application {
  modulePrefix = "from-scratch";
  Resolver = Resolver.withModules(compatModules);
}
