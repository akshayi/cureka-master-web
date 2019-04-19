import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';


@Injectable({
  providedIn: 'root'
})
export class MixpanelServiceService {

  constructor() {
    mixpanel.init("f837f508df011d058b995472357cb9c1");
  }

  /**
   * Initialize mixpanel.
   *
   * @param {string} userToken
   * @memberof MixpanelService
   */
  init(userToken: string): void {
    mixpanel.init('your-project-token');
    mixpanel.identify(userToken);
  }

  /**
   * Push new action to mixpanel.
   *
   * @param {string} id Name of the action to track.
   * @param {*} [action={}] Actions object with custom properties.
   * @memberof MixpanelService
   */
  track(action): void {
    mixpanel.track(action);
  }
}
