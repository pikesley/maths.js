JASMINE_VERSION = File.readlines('Gemfile.lock').select { |l| l.match /\ jasmine\ / }[0].strip.split(' ')[1][1...-1]

import "#{ENV['GEM_HOME']}/gems/jasmine-#{JASMINE_VERSION}/lib/jasmine/tasks/jasmine.rake"

task default: :'jasmine:ci'
