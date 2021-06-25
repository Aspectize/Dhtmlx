/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.NewChartBuilder2 = {

    aasService: 'NewChartBuilder2',
    aasPublished: false,

    Build: function (controlInfo) {

        function buildDhtmlxChart(control) {

            var cp = control.aasChartProperties;

            if (cp.dxChart && cp.MustRebuildChart) {
                control.innerHTML = '';
                cp.dxChart = null;
            }

            if (cp.dxChart === null) {

                if (!window.dhtmlXChart && !window.dhx) throw new Error('Missing DHTMLX integration scripts in the app.ashx file ?');

                var chartType = controlInfo.PropertyBag.Type;

                var info = {
                    type: chartType,
                    css: "dhx_widget--bg_white dhx_widget--bordered",
                    scales: cp.Scales,
                    series: cp.Series
                    /*legend: legend
                    
                    scales: {
                        "bottom": {
                            text: "Month"
                        },
                        "left": {
                            maxTicks: 1,
                            max: 100,
                            min: 0
                        }
                    },*/
                    //series: [
                    //{
                    //    id: "A",
                    //    value: "company A",
                    //    color: "#81C4E8",
                    //    fill: "#81C4E8"
                    //},
                    //{
                    //    id: "B",
                    //    value: "company B",
                    //    color: "#74A2E7",
                    //    fill: "#74A2E7"
                    //},
                    //{
                    //    id: "C",
                    //    value: "company C",
                    //    color: "#5E83BA",
                    //    fill: "#5E83BA"
                    //}
                    //],
                    //legend: {
                    //    series: ["A", "B", "C"],
                    //    halign: "right",
                    //    valign: "top"
                    //}
                }

                cp.Legend.halign = controlInfo.PropertyBag.LegendAlign;
                cp.Legend.valign = controlInfo.PropertyBag.LegendvAlign;

                var displayLegend = controlInfo.PropertyBag.DisplayLegend;

                if (displayLegend) {
                    info.legend = cp.Legend;
                }

                var chart = new dhx.Chart(control.id, info);
                cp.dxChart = chart;

                chart.data.parse(cp.Data);
            }

            cp.MustRebuildChart = false;
        }

        controlInfo.CreateInstance = function (ownerWindow, id) {

            var chart = Aspectize.createElement('div', ownerWindow);

            chart.aasSubControls = {};

            return chart;
        };

        controlInfo.ChangePropertyValue = function (property, newValue) {

            this.PropertyBag[property] = newValue;
        };

        controlInfo.InitGrid = function (control) {

            control.style.height = '100%';
            control.style.width = '100%';
            control.style.minHeight = '100%';
            control.style.minWidth = '100%';

            if (control.parentNode.width) {
                control.style.width = control.parentNode.width;
            }

            control.parentNode.style.overflowX = "auto";
            control.parentNode.style.overflowY = "hidden";

            var columnInfos = controlInfo.columnInfos;

            control.aasChartProperties = {
                dxChart: null,
                MustRebuildChart: false,
                Scales: {},
                Series: [],
                Data: [],
                Legend: { series: [] },

                SetAxisProperty: function (axis, property, value) {

                    if (property !== 'Value') {

                        var index = this.Series.findIndex(item => item.id == axis);

                        if (index !== -1) {
                            var serie = this.Series[index];

                            var axeProperty = '';

                            switch (property) {
                                //case 'Title': axeProperty = 'value';
                                case 'ItemColor': axeProperty = 'color'; break;
                                case 'LineColor': axeProperty = 'fill'; break;
                                case 'AlphaTransparency': axeProperty = 'alpha'; break;
                                case 'Label': axeProperty = 'showText'; value = true; break;
                            }

                            if (axeProperty) {
                                serie[axeProperty] = value;
                                this.MustRebuildChart = true;
                            }
                        }
                    }
                },

                AddData: function (chartItem) {
                    this.Data.push(chartItem);
                },

                RefreshData: function (id, field, value) {
                    if (id) {

                        for (var i = 0; i < this.Data.length; i++) {
                            var chartData = this.Data[i];

                            if (chartData.id == id) {
                                if (chartData[field] !== value) {
                                    chartData[field] = value;
                                }
                                break;
                            }

                        }

                        //var index = this.Data.findIndex(item => item.id == id);

                        //if (index !== -1) {

                        //    var chartData = this.Data[index];

                        //    if (chartData[field] !== value) {

                        //        chartData[field] = value;
                        //    }
                        //}

                    }
                }
            };

            var xAxis = columnInfos[0];

            control.aasChartProperties.Scales.bottom = {
                text: xAxis.name + 'Label',
                grid: false
            };
            control.aasChartProperties.Scales.left = {
                maxTicks: 3,
                max: 10,
                min: 0,
                showText: true
            };

            for (var i = 1; i < columnInfos.length; i++) {
                var columnInfo = columnInfos[i];

                var axe = {
                    id: columnInfo.name,
                    value: columnInfo.name
                };

                control.aasChartProperties.Series.push(axe);

                control.aasChartProperties.Legend.series.push(columnInfo.name);
            }

            buildDhtmlxChart(control);
        };

        controlInfo.InitCellControl = function (control, cellControl, rowId, rowIndex, columnIndex, columnName) {

            cellControl.aasChartProperties = control.aasChartProperties;
            cellControl.aasAxisName = columnName;
            cellControl.aasRowId = rowId;
        };

        controlInfo.BeforeRender = function (control, rowCount) {

            control.aasChartProperties.MustRebuildChart = true;
            control.aasChartProperties.Data = [];

        }

        controlInfo.RowCreated = function (control, rowId, cellControls) {

            var chartItem = { id: rowId };

            var scales = control.aasChartProperties.Scales;

            for (var n = 0; n < cellControls.length; n++) {

                var cellControl = cellControls[n];

                var axn = cellControl.aasAxisName;
                var v = cellControl.aasControlInfo.PropertyBag.Value;

                if (n == 0) {
                    var l = cellControl.aasControlInfo.PropertyBag.Label;
                    chartItem[axn + 'Label'] = l;
                } else if (n > 0 && scales) {
                    var min = scales.left.min;
                    var max = scales.left.max;
                    var delta = (max - min);

                    var pow = 1

                    while (delta > 10) {

                        delta = delta / 10;
                        pow++;
                    }

                    var step = Math.pow(10, pow - 1);

                    //var step = Math.floor((max - min) / 5);

                    if (v < min) {

                        while (v < min) {
                            min -= step;
                        }
                        scales.left.min = min;
                    } else if (max < v) {

                        while (max < v) {
                            max += step;
                        }
                        scales.left.max = max;
                    }
                }
                chartItem[axn] = v;
            }

            control.aasChartProperties.AddData(chartItem);
        };

        controlInfo.GridRendered = function (control, rowControls) {
            buildDhtmlxChart(control);
            //control.aasChartProperties.RefreshData();
        };
    }

};

Global.NewAxisBuilder2 = {

    aasService: 'NewAxisBuilder2',
    aasPublished: false,

    Build: function (controlInfo) {

        controlInfo.CreateInstance = function (ownerWindow, id) {

            var control = Aspectize.createElement('div', ownerWindow);

            controlInfo.ChangePropertyValue = function (property, newValue) {

                control.aasChartProperties.SetAxisProperty(control.aasAxisName, property, newValue);

                this.PropertyBag[property] = newValue;

                if (property == 'MaxTicks' && newValue) {
                    control.aasChartProperties.Scales.left.maxTicks = newValue;
                }

                var axn = control.aasAxisName;

                switch (property) {

                    case 'Value': control.aasChartProperties.RefreshData(control.aasRowId, property, newValue); break;

                    //case 'Label':
                    //case 'ToolTip': control.aasChartProperties.RefreshData(control.aasRowId, property, newValue); break;
                }
            };

            return control;
        };
    }
};


