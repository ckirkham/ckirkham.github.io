module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var projectConfig = {
        banner : '//  <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n',
        js_files : [
            '_components/js/modernizr.js',
            '_components/js/paper-full.min.js',
            '_components/js/skrollr.min.js',
            '_components/js/slick.min.js',
            '_components/js/waypoints.js',
            '_components/js/site.js'
        ]
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                style: 'expanded'
            },
            minified: {
                files: {
                    'assets/style.min.css': '_components/sass/style.scss'
                }
            }
        },
        jshint: {
            build: ['_components/js/site.js']
        },
        concat: {
            options: {
                separator: ';\n\n'
            },
            minified: {
                src: projectConfig.js_files,
                dest: 'assets/site.min.js'
            }
        },
        // uglify: {
        //     build: {
        //         options: {
        //             banner: projectConfig.banner
        //         },
        //         files: {
        //             'assets/js/site.min.js': ['assets/js/site.min.js']
        //         }
        //     }
        // },
        // htmlhint: {
        //     build: {
        //         options: {
        //             'tag-pair': true,
        //             'tagname-lowercase': true,
        //             'attr-lowercase': false,
        //             'attr-value-double-quotes': true,
        //             'doctype-first': true,
        //             'spec-char-escape': true,
        //             'id-unique': true,
        //             'head-script-disabled': true,
        //             'style-disabled': true
        //         },
        //         src: ['index.html']
        //     }
        // },
        // imagemin: {
        //     options: {
        //         cache: false
        //     },
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: '_components/images/',
        //             src: ['**/*.{png,jpg,gif}'],
        //             dest: 'assets/images/'
        //         }]
        //     }
        // },
        watch: {
            // html: {
            //     files: ['index.html'],
            //     tasks: ['htmlhint']
            // },
            js: {
                files: ['_components/js/**/*.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['_components/sass/**/*.scss'],
                tasks: ['buildcss']
            }
        }
    });
    
    grunt.registerTask('default',   []);
    grunt.registerTask('build',     ['buildcss', 'buildjs']);
    // grunt.registerTask('build',     ['buildcss', 'buildjs', 'imagemin']);
    grunt.registerTask('buildcss',  ['sass']);
    // grunt.registerTask('buildjs',   ['jshint', 'concat', 'uglify']);
    grunt.registerTask('buildjs',   ['jshint', 'concat']);
};