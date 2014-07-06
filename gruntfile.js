module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            build: {
                files: {
                    'assets/css/style.min.css': '_components/sass/style.scss'
                }
            }
        },
        jshint: {
            uses_defaults: ['_components/js/site.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['_components/js/**/*.js'],
                dest: 'assets/js/site.min.js'
            }
        },
        // uglify: {
        //     build: {
        //         options: {
        //             banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        //                 '<%= grunt.template.today("yyyy-mm-dd") %> */'
        //         },
        //         files: {
        //             'assets/js/site.min.js': ['assets/js/site.min.js']
        //         }
        //     }
        // },
        watch: {
            js: {
                files: ['_components/js/**/*.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['_components/sass/style.scss'],
                tasks: ['buildcss']
            }
        }
    });

    grunt.registerTask('default',   ['build']);
    grunt.registerTask('build',     ['buildjs', 'buildcss']);
    grunt.registerTask('buildcss',  ['sass']);
    grunt.registerTask('buildjs',   ['jshint', 'concat']);
};