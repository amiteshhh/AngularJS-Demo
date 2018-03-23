
module.exports = function (grunt) {
  grunt.initConfig({
    //tasks in here in object notation
    less: {
      dev: {
        options: {
          compress: false
        },
        files: {
          "client/css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: ['client/app/**/*.js'],
        //tasks: ['default'],

      },
      html: {
        files: ['client/index.html', 'client/app/**/*.html'],
        //tasks: ['default'],
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less'],
      }
    },
    connect: {
      options: {
        open: true,
        livereload: true,
        useAvailablePort: true,
        hostname: 'localhost'
      },

      server: {
        options: {
          port: 80,
          base: 'client'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        port: 9999,
        singleRun: false,
        //browsers: ['PhantomJS'],
        logLevel: 'ERROR'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['less:dev', 'connect', 'watch']); 
};