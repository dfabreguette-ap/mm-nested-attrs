require "mm-nested-attrs/version"

module MmNestedAttrs
  module Rails
    class Engine < ::Rails::Engine
      config.before_initialize do
        if config.action_view.javascript_expansions
          config.action_view.javascript_expansions["mm-nested-attrs"] = %w(mm-nested-attrs)
        end
      end
    end
  end
end