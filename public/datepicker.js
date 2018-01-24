import './datepicker.less';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import visTemplate from './datepicker.html';
import optionsTemplate from './datepickerOptions.html';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { CATEGORY } from 'ui/vis/vis_category';
import { VisController } from './datepickerController';


const DatepickerVisProvider = (Private) => {
    const VisFactory = Private(VisFactoryProvider);

    return VisFactory.createAngularVisualization({
        name: 'time',
        title: 'Datepicker',
        icon: 'fa fa-calendar',
        description: 'Embedded dashboards do not display the time range or allow users to modify the time range. Use this to view and edit the time range in embedded dashboards.',
        visualization: VisController,
        visConfig: {
            template: visTemplate,
            defaults: {
                submit_right: false,
                hide_input: false,
                hide_calendar: false,
                language: 'en-us'
            }
        },
        editorConfig: {
            optionsTemplate: optionsTemplate,
        },
        requiresSearch: false,
        category: CATEGORY.OTHER,
        requestHandler: 'none',
        responseHandler: 'none'
    });
}

VisTypesRegistryProvider.register(DatepickerVisProvider);
export default DatepickerVisProvider;
