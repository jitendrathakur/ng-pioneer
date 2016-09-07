import _ from 'lodash';
export const paths = {
  src: 'src',
  production: 'dist',
  development: '.tmp'
};

export const destination = function(mode, path) {
  return `${mode}${path}`;
}
