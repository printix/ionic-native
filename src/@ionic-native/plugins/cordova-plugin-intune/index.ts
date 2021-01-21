import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'IntunePlugin',
  plugin: 'cordova-plugin-intune',
  pluginRef: 'IntunePlugin',
  repo: 'https://github.com/printix/cordova-plugin-intune.git',
  platforms: ['iOS'],
})
@Injectable()
export class IntunePlugin extends IonicNativePlugin {
  /**
   * Your plugin plugin functions go here.
   * Function names should match the ones in your .swift & .js files.
   * Otherwise you won't be able to execute them.
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  yourFunctionName(): Promise<any> {
    return;
  }
}
