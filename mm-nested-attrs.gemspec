#encoding: utf-8
Gem::Specification.new do |s|
  s.name        = 'mm-nested-attrs'
  s.version     = '0.0.1'
  s.summary     = "MongoMapper gem for nested attributes"
  s.platform = Gem::Platform::RUBY
  s.description = "allows accepts_nested_attributes_for models"
  s.authors     = ["Sergiy Shevchik adapted by David F."]
  s.email       = 'dfabreguette@gmail.com'
  s.require_path= "lib"
  s.extra_rdoc_files = ["README.md"]
  s.files= FileList['lib/mm-nested-attrs.rb','app/assets/*']
  s.required_ruby_version = '>= 1.9.3'
  s.homepage    =
    'https://github.com/dfabreguette-ap/mm-nested-attrs'
end
