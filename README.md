# Kibana-Datepicker-Plugin
Kibana embedded dashboards do not allow user to select time to filter data. This Plugin includes a new Visualization in Kibana to pick date, similar to Kibana's absolute timepicker.

## Input or Calendar
Using this plugin it is possible to select date by typing on an input or by selecting it in a calendar.

![Alt_Text](https://cloud.githubusercontent.com/assets/12500687/24299298/8409b8f2-1087-11e7-9797-fd30ee748cb3.png)

# Install
```bash
cd KIBANA_HOME/plugins
git clone https://github.com/CristianWeiland/kibana-datepicker-plugin.git
vim KIBANA_HOME/plugins/kibana-datepicker-plugin/package.json //set version to match kibana version
```

# Uninstall
```bash
./bin/kibana-plugin remove kibana-datepicker-plugin
```
