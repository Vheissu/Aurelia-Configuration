import {Configure} from './configure';

export function configure(aurelia, configCallback) {
    aurelia.container.registerInstance(Configure, new Configure());
}
