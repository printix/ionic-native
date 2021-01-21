import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'IntuneSupport',
  plugin: 'cordova-plugin-intune',
  pluginRef: 'intuneSupport',
  repo: 'https://github.com/printix/cordova-plugin-intune.git',
  platforms: ['iOS'],
})
@Injectable()
export class IntuneSupport extends IonicNativePlugin {
  /**
   * Your plugin plugin functions go here.
   * Function names should match the ones in your .swift & .js files.
   * Otherwise you won't be able to execute them.
   * @param phrase {string} user input to echo
   * @param cb {fn} callback function
   */

  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  echo(phrase: string, cb: any): Promise<any> {
    return;
  }
}
