#encoding: utf-8
Gem::Specification.new do |s|
  s.name        = 'mm-nested-attrs'
  s.version     = '0.0.2'
  s.summary     = "MongoMapper gem for nested attributes"
  s.platform = Gem::Platform::RUBY
  s.description = "allows accepts_nested_attributes_for models"
  s.authors     = ["Sergiy Shevchik adapted by David F."]
  s.email       = 'dfabreguette@gmail.com'
  s.require_path= "lib"
  s.extra_rdoc_files = ["README.md"]
  s.files= Dir["lib/**/*"]  + ['app/assets/javascripts/mm-nested-attrs.js']
  s.required_ruby_version = '>= 1.9.3'
  s.homepage    =
    'https://github.com/dfabreguette-ap/mm-nested-attrs'
end
