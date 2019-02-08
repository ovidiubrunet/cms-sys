import {Injectable} from '@angular/core';
import {ScriptStore} from './script.store';
import { Asset } from '../models/asset';
import { environment } from 'src/environments/environment';

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

private scripts: any = {};

constructor() {
    ScriptStore.forEach((script: any) => {
        this.scripts[script.name] = {
            loaded: false,
            src: script.src
        };
    });
}
/**
 * is loading defined scripts array
 */
load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
}

/**
 *
 * @param scripts is loading scripts associated to template main.js
 */
loadAssets(scripts: Asset[]) {
  const promises: any[] = [];
  scripts.forEach((script) => {
    promises.push(this.loadScriptDynamically( environment.apiUrl + '/' + script.path));
  });
  return Promise.all(promises);
}

/**
 *
 * @param name  load script from script.store.ts
 */
loadScript(name: string) {
    return new Promise((resolve, reject) => {
        // resolve if already loaded
        if (this.scripts[name].loaded) {
            resolve({script: name, loaded: true, status: 'Already Loaded'});
        } else {
            // load script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            if (script.readyState) {  // IE
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({script: name, loaded: true, status: 'Loaded'});
                    }
                };
            } else {  // Others
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                };
            }
            script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    });
}

/**
 *
 * @param url load script from api
 */
loadScriptDynamically(url: string) {
  return new Promise((resolve, reject) => {
          // load script
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          if (script.readyState) {  // IE
              script.onreadystatechange = () => {
                  if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                  }
              };
          } else {  // Others
              script.onload = () => {
              };
          }
          document.getElementsByTagName('head')[0].appendChild(script);

  });
}


}
