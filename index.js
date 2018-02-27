export default function (kibana) {
    return new kibana.Plugin({
        uiExports: {
            visTypes: [
                'plugins/kibana-datepicker-plugin/datepicker'
            ]
        }
    });
};
