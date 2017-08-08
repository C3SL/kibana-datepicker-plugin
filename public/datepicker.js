import 'plugins/kibana-datepicker-plugin/datepicker.less';
import 'plugins/kibana-datepicker-plugin/datepickerController';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import visTemplate from 'plugins/kibana-datepicker-plugin/datepicker.html';
import optionsTemplate from 'plugins/kibana-datepicker-plugin/datepickerOptions.html';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

VisTypesRegistryProvider.register(DatepickerVisProvider);

    function DatepickerVisProvider(Private) {
        const TemplateVisType = Private(TemplateVisTypeProvider);

        return new TemplateVisType({
            name: 'time',
            title: 'Datepicker',
            icon: 'fa-calendar',
            description: 'Embedded dashboards do not display the time range or allow users to modify the time range. Use this to view and edit the time range in embedded dashboards.',
            template: visTemplate,
            params: {
                editor: optionsTemplate,
                defaults: {
                    submit_right: false,
                    hide_input: false,
                    hide_calendar: false,
                    language: 'en'
                }
            },
            requiresSearch: false
        });
    }

export default DatepickerVisProvider;
