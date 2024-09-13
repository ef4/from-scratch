import Application from 'from-scratch/app';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart } from 'ember-qunit';

globalThis.EmberENV = {}

export function start() {
  setApplication(Application.create({
    rootElement: '#ember-testing',
    autoboot: false,
  }));

  setup(QUnit.assert);

  qunitStart();
}
