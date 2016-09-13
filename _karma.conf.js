module.exports = config => {
  config.set({
  	frameworks: ['browserify', 'jasmine'],
    files: ['src/lib/users/context/context.controller.spec.js'],
    preprocessors: {
      'src/lib/users/context/context.controller.spec.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      transform: [ 'babelify' ]
    }
  })
}