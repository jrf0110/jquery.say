module.exports = function( grunt ){
  grunt.loadTasks('./tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-named-modules');
  grunt.loadNpmTasks('grunt-express-server');

  var config = {
    pkg: grunt.file.readJSON('package.json')

  , watch: {
      jshint: {
        // Concat jshint.all
        files: [],
        tasks: ['jshint'],
        options: {
          spawn: false,
        }
      }
    }

  , jshint: {
      // define the files to lint
      all: ['*.js', 'src/*.js'],
      options: {
        ignores: ['node_modules', 'public/jam/**', 'public/bower_components/**', 'public/js/*.js'],
        laxcomma: true,
        sub: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  };

  config.watch.jshint.files = config.watch.jshint.files.concat(
    config.jshint.all
  );

  config.watch.grouper.files = config.watch.grouper.files.concat(
    config.requireGrouper.components.dirs.map( function( dir ){
      return dir + '/*/*.js';
    })
  );

  grunt.initConfig( config );

  grunt.registerTask( 'default', [
    'jshint'
  ]);
};
