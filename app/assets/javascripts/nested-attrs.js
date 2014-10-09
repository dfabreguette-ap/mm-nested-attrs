(function() {
    this.load_remove_sub_form_buttons = function() {
        var nested_fields_container, nested_fields_containers_container;
        jQuery(".sub-form-remove").each(function() {
            jQuery(this).show();
            return jQuery(this).click(function() {
                var destroy_attr_name, nested_fields_attr_wrapper, nested_fields_container;
                nested_fields_container = jQuery(this).parent();
                nested_fields_attr_wrapper = jQuery(nested_fields_container).attr("data-name-attr-wrapper");
                if (nested_fields_attr_wrapper) {
                    if (!jQuery(nested_fields_container).hasClass("new-subform-nested-fields")) {
                        destroy_attr_name = nested_fields_attr_wrapper + "[_destroy]";
                        jQuery(nested_fields_container).append('<input type="hidden" name="' + destroy_attr_name + '" value = "1"/>');
                        return jQuery(nested_fields_container).hide();
                    } else {
                        return jQuery(nested_fields_container).remove();
                    }
                }
            });
        });
        nested_fields_container = jQuery(".sub-form-remove").first().parent();
        nested_fields_containers_container = jQuery(nested_fields_container).parent();
        return jQuery(nested_fields_containers_container).find('.nested-fields').first().find('.sub-form-remove').hide();
    };

    this.get_nested_fields_attr_wrapper = function(nested_fields_container, input, fingerprint) {
        var name_attr, name_attr_regexp, name_attr_wrapper, regexp_results;
        name_attr_wrapper = "";
        if (typeof input === "undefined") {
            input = jQuery(nested_fields_container).find('input, select, textarea').first();
        }
        if (input && input.length > 0) {
            name_attr_regexp = /(^.*\[.*_attributes\]\[)(.*)(\]\[.*\]$)/;
            name_attr_wrapper = "";
            name_attr = jQuery(input).attr('name');
            regexp_results = name_attr_regexp.exec(name_attr);
            if (typeof fingerprint !== "undefined") {
                name_attr_wrapper = regexp_results[1] + fingerprint + regexp_results[3];
                jQuery(nested_fields_container).attr("data-name-attr-wrapper", regexp_results[1] + fingerprint + "]");
            } else {
                name_attr_wrapper = regexp_results[1] + regexp_results[2];
                name_attr_wrapper += "]";
                jQuery(nested_fields_container).attr("data-name-attr-wrapper", name_attr_wrapper);
            }
        }
        return name_attr_wrapper;
    };

    jQuery(function() {
        jQuery(".sub-form").each(function() {
            return jQuery(this).find(".nested-fields").each(function() {
                return get_nested_fields_attr_wrapper(jQuery(this));
            });
        });
        jQuery(".sub-form-add").click(function() {
            var new_nested_fields, new_nested_fields_container, new_nested_fields_fingerprint;
            new_nested_fields_container = jQuery(this).parent().find(".nested-fields").first().clone();
            new_nested_fields = jQuery(new_nested_fields_container).find('input, select, textarea');
            new_nested_fields_fingerprint = Date.now();
            jQuery(new_nested_fields).each(function() {
                var id_regexp, is_and_id_field, name_attr, new_name_attr;
                name_attr = jQuery(this).attr('name');
                id_regexp = /\[id\]$/;
                is_and_id_field = id_regexp.exec(name_attr);
                if (is_and_id_field !== null) {
                    return jQuery(this).remove();
                } else {
                    new_name_attr = get_nested_fields_attr_wrapper(new_nested_fields_container, jQuery(this), new_nested_fields_fingerprint);
                    return jQuery(this).attr("name", new_name_attr);
                }
            });
            jQuery(new_nested_fields_container).addClass("new-subform-nested-fields");
            jQuery(new_nested_fields_container).find("input:text").val("");
            jQuery(new_nested_fields_container).appendTo("#questions");
            return load_remove_sub_form_buttons();
        });
        return load_remove_sub_form_buttons();
    });

}).call(this);
