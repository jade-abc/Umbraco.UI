import { UUIProdConfig } from '../rollup-package.config';

export default UUIProdConfig({
  entryPoints: ['index', 'uui-button.element', 'uui-button.test'],
  bundles: ['index'],
});