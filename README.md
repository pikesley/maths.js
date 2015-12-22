[![Build Status](http://img.shields.io/travis/pikesley/maths.js.svg?style=flat-square)](https://travis-ci.org/pikesley/maths.js)
[![Dependency Status](http://img.shields.io/gemnasium/pikesley/maths.js.svg?style=flat-square)](https://gemnasium.com/pikesley/maths.js)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://pikesley.mit-license.org)

# Minimum Viable TDJS

## How I Jasmined

* Add _gem 'jasmine'_ to your Gemfile
* `bundle`
* `jasmine init`
* This sets up some things:

```
    spec
    └── javascripts
        ├── helpers
        └── support
            ├── jasmine.yml
            └── jasmine_helper.rb
```

* _jasmine.yml_ specifies where your [specs](https://github.com/pikesley/maths.js/blob/master/spec/javascripts/maths_spec.js) and [code](https://github.com/pikesley/maths.js/blob/master/public/javascripts/maths.js) can be found
* Now you can run `rake jasmine` and point your browser at [http://localhost:8888/](http://localhost:8888/) to see it in action
* To run it in CI, there is `rake jasmine:ci`
