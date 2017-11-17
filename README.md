ckirkham.github.io
==================

h1. This is the codebase for my website

It is automatically transformed by "Jekyll":http://github.com/mojombo/jekyll into a static site whenever I push this repository to GitHub.

h1. License

The following directories and their contents are Copyright Christian Kirkham. You may not reuse anything therein without my permission:

* _posts/
* assets/images/
* _projects/

All other directories and files are MIT Licensed. Feel free to use the HTML and CSS as you please. If you do use them, a link back to http://ckirkham.github.io/ would be appreciated, but is not required.

The site contains the following
============
Rich snippets Scheme microdata
Google Analytics
A Bourbon / Neat grid
A visual grid overlay
A PaperScript animation
No internal pages
Mobile collapisble nav
Favicon
Adaptable size icons

Instructions
============
'jekyll serve' or 'bundle exec jekyll serve'
'npm install'
'grunt watch'

Other
============
// Clean up duplicate gems
gem cleanup NAME
gem list NAME
gem uninstall
// For jekyll exec errors
bundle clean --force

If Jekyll gem isn't working
============
$ gem sources --remove https://rubygems.org/
$ gem sources -a http://rubygems.org/
$ gem install jekyll

If you need Bundler
============
gem install bundler
bundle install
