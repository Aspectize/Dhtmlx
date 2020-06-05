/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.NewChartBuilder = {

    aasService: 'NewChartBuilder',
    aasPublished: false,

    initCSS: false,

    tips:{},

    Build: function (controlInfo) {

        var This = this;
        if (!this.initCSS) {
            var style = document.createElement('style');
            style.innerHTML = ".hidden.dhx_chart_legend_item { display: block !important; visibility: visible !important; }";
            document.body.appendChild(style);
        }

        function buildChartAxisInfo(axis, name, type) {

            if (type === 'pie') {

                return {
                    alpha: axis.AlphaTransparency,
                    //fill: axis.LineColor,
                    value: '#' + name + '#',
                    label: '#' + name + 'Label#',
                    color: '#' + name + 'Color#',
                    tooltip: '#' + name + 'ToolTip#',
                    pieInnerText: '#' + name + 'Title#'
                    //item: { radius: axis.ItemRadius, borderColor: axis.ItemBorderColor, color: axis.ItemColor, borderWidth: axis.ItemBorderWidth },
                    //line: { color: axis.LineColor, width: axis.LineWidth }
                };

            } else {

                return {
                    alpha: axis.AlphaTransparency,
                    fill: axis.LineColor,
                    value: '#' + name + '#',
                    label: '#' + name + 'Label#',
                    tooltip: '#' + name + 'ToolTip#',
                    color: axis.LineColor,
                    item: { radius: axis.ItemRadius, borderColor: axis.ItemBorderColor, color: axis.ItemColor, borderWidth: axis.ItemBorderWidth },
                    line: { color: axis.LineColor, width: axis.LineWidth }
                };
            }
        }

        function buildLegendEntryForPie(title, color) {

            return {
                text: title,
                color: color,
                toggle: false
            };
        }

        function buildLegendEntry(axis) {

            return {
                text: axis.Title,
                color: axis.LineColor,
                toggle: true
            };
        }

        function scaleData(scale, cp) {

            if (scale === 1) return cp.data;

            var allYs = cp.allYs;
            var yCount = allYs.length;

            var data = [];
            for (var n = 0; n < cp.data.length; n++) {

                var d = cp.data[n];

                var dNew = {};
                for (var k in d) dNew[k] = d[k];

                for (var i = 0; i < yCount; i++) dNew[allYs[i]] /= scale;

                data.push(dNew);
            }

            return data;
        }
        function buildDhtmlxChart(control) {

            var cp = control.aasChartProperties;

            var savedData = [];
            var dat

            if (cp.dxChart && cp.MustRebuildChart) {
                control.innerHTML = '';
                cp.dxChart = null;
                savedData = cp.data;

                //#region Adjust for Displayed Data
                var otherYAxis = [];
                var axisY = null;
                for (var k = 0; k < cp.allYs.length; k++) {

                    var yColumn = cp.allYs[k];

                    var a = cp.AllAxis[yColumn];

                    if (a.Display) {

                        if (!axisY) {
                            axisY = yColumn;
                        } else otherYAxis.push(yColumn);
                    }
                }
                cp.yAxis = axisY;
                cp.otherYAxis = otherYAxis;
                //#endregion
            }

            if (cp.dxChart === null) {

                if (!window.dhtmlXChart && !window.dhx) throw new Error('Missing DHTMLX integration scripts in the app.ashx file ?');

                var chartType = controlInfo.PropertyBag.Type;
                var isPie = (chartType === 'pie');

                var hasOrigin = (controlInfo.PropertyBag.Origin !== 1234567890);


                var xAxis = cp.xAxis;
                var yAxis = cp.yAxis;
                var otherYAxis = cp.otherYAxis;

                var info = { view: chartType, container: control.id };

                if (hasOrigin) info.origin = controlInfo.PropertyBag.Origin;

                var isPie = (chartType === 'pie');

                if (isPie) {

                    info.gradient = controlInfo.PropertyBag.PieGradient;
                    info.shadow = controlInfo.PropertyBag.PieShadow;

                    var cx = controlInfo.PropertyBag.PieCx;
                    var cy = controlInfo.PropertyBag.PieCy;
                    var r = controlInfo.PropertyBag.PieRadius;

                    if (cx) info.x = cx;
                    if (cy) info.y = cy;
                    if (r) info.radius = r;
                }

                if (yAxis) {
                    var cai = buildChartAxisInfo(cp.AllAxis[yAxis], yAxis, chartType);
                    for (var k in cai) info[k] = cai[k];
                }

                var min = controlInfo.PropertyBag.yStart;
                var max = controlInfo.PropertyBag.yEnd;
                var step = controlInfo.PropertyBag.yStep;

                if (console && console.log) console.log('min ' + min + ' max = ' + max);

                var scale = 1;
                var unit = '';
                var prefixType = controlInfo.PropertyBag.AutoUnitType;

                var kilo = 1000;
                var kCents = 100 * kilo;
                var mega = 1000 * kilo;
                var mCents = 100 * mega;
                var giga = 1000 * mega;

                switch (prefixType) {
                    case 'U': break;

                    case 'M': // Money in Cents K (100 000), M (100 000 000)
                        if (max > mCents) {

                            scale = mCents;
                            unit = 'M';

                        } else if (max > kCents) {

                            scale = kCents;
                            unit = 'K';
                        }
                        break;

                    case 'S': // Standard Metric K (1000), M (1000 000), G (1000 000 000)
                        if (max > giga) {

                            scale = giga;
                            unit = 'G';

                        } else if (max > mega) {

                            scale = mega;
                            unit = 'M';

                        } else if (max > kilo) {

                            scale = kilo;
                            unit = 'K';
                        }
                        break;
                }

                if (controlInfo.PropertyBag.UnitPrefix !== unit) {

                    controlInfo.PropertyBag.UnitPrefix = unit;
                    Aspectize.UiExtensions.Notify(control, 'OnUnitPrefixChanged', unit);
                }

                if (scale !== 1) {

                    min /= scale;
                    max /= scale;
                    step /= scale;
                }

                info.lines = controlInfo.PropertyBag.hLines;
                info.disableItems = !controlInfo.PropertyBag.ShowPoints;

                var xAxisObj = {

                    title: cp.AllAxis[xAxis].Title,
                    template: '#' + xAxis + 'Label#',
                    lines: controlInfo.PropertyBag.vLines
                };

                var yAxisObj = {

                    start: getGraphBegin(min, max, step),
                    end: getGraphEnd(min, max, step),
                    step: getGraphStep(min, max, step)
                };

                if (chartType !== 'barH') {

                    info.xAxis = xAxisObj;
                    info.yAxis = yAxisObj;

                } else {

                    info.xAxis = yAxisObj;
                    info.yAxis = xAxisObj;
                }

                if (controlInfo.PropertyBag.DisplayLegend) {

                    var legend = {
                        layout: controlInfo.PropertyBag.Legendlayout,
                        align: controlInfo.PropertyBag.LegendAlign,
                        valign: controlInfo.PropertyBag.LegendvAlign,
                        //marker: { width: 15, radius: 3 },
                        values: []
                    };

                    info.legend = legend;
                    if (isPie) {

                        var fTitle = yAxis + 'Title';
                        var fColor = yAxis + 'Color';
                        for (var k = 0; k < cp.data.length; k++) {

                            var d = cp.data[k];

                            legend.values.push(buildLegendEntryForPie(d[fTitle], d[fColor]));
                        }

                    } else {

                        if (yAxis) {
                            legend.values.push(buildLegendEntry(cp.AllAxis[yAxis]));
                            for (var k = 0; k < otherYAxis.length; k++) {
                                legend.values.push(buildLegendEntry(cp.AllAxis[otherYAxis[k]]));
                            }
                        }
                    }
                }

                //Bug DHTMLX
                var myTips = This.tips[control.id];
                if (myTips) {
                    for (var n = 0; n < myTips.length; n++) {
                        var tip = myTips[n];

                        if (tip.remove) {
                            tip.remove();
                        } else {
                            if (tip.parentNode) {
                                tip.parentNode.removeChild(tip);
                            }
                        }
                        
                    }
                }
                //Bug DHTMLX

                var chart = new dhtmlXChart(info);

                //Bug DHTMLX
                This.tips[control.id] = [];
                var allTips = document.querySelectorAll('.dhx_tooltip');
                for (var n = 0; n < allTips.length; n++) {
                    var tip = allTips[n];
                    if (tip.dataset && !tip.dataset.isTip) {

                        tip.dataset.isTip = true;
                        This.tips[control.id].push(tip);
                    }
                }
                //Bug DHTMLX
                for (var i = 0; i < otherYAxis.length; i++) {

                    var axisName = otherYAxis[i];

                    chart.addSeries(buildChartAxisInfo(cp.AllAxis[axisName], axisName, chartType));
                }

                if (cp.data.length > 0) {

                    Aspectize.ProtectedCall(chart, chart.parse, scaleData(scale, cp), 'json');

                } else Aspectize.ProtectedCall(chart, chart.refresh);

                cp.dxChart = chart;
                cp.data = savedData;

            } else {

                var dxc = cp.dxChart;

                if (cp.data.length > 0) {

                    Aspectize.ProtectedCall(dxc, dxc.parse, scaleData(scale, cp), 'json');

                } else Aspectize.ProtectedCall(dxc, dxc.refresh);
            }

            cp.MustRebuildChart = false;
        }

        function buildAxisProperties(index, title) {

            var colors = ['#000000', '#D4D4D4', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

            var color = colors[index % colors.length];

            return {
                Title: title, ShowLine: false,
                Start: null, End: null, Step: null,
                AlphaTransparency: 0.3, LineColor: color, LineWidth: 1,
                ItemColor: color, ItemBorderColor: '#000000', ItemRadius: 4, ItemBorderWidth: 1,
                PointWidth: 50,
                Display: true
            };
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

            //control.style.height = '350px';
            control.style.height = '100%';
            control.style.width = '100%';
            control.style.minHeight = '100%';
            control.style.minWidth = '100%';

            if (control.parentNode.width) {
                control.style.width = control.parentNode.width;
            }

            control.parentNode.style.overflowX = "auto";
            control.parentNode.style.overflowY = "hidden";

            var chartType = this.PropertyBag.Type;

            var columnInfos = controlInfo.columnInfos;

            var axisCount = columnInfos.length;
            var xAxis = (axisCount > 1) ? columnInfos[0].name : null;
            var yAxis = (axisCount > 1) ? columnInfos[1].name : null;

            var allYs = [];
            if (yAxis) allYs.push(yAxis);

            if (chartType !== 'pie') {
                for (var n = 2; n < axisCount; n++) allYs.push(columnInfos[n].name);
            }

            var otherYAxis = [];
            for (var n = 1; n < allYs.length; n++) otherYAxis.push(allYs[n]);

            control.aasChartProperties = {

                dxChart: null,
                MustRebuildChart: false,
                xAxis: xAxis, yAxis: yAxis, allYs: allYs, otherYAxis: otherYAxis, AllAxis: {},
                data: [],

                SetAxisProperty: function (axis, property, value) {

                    if (property !== 'Value') {
                        
                        var a = this.AllAxis[axis];

                        if (a && (a.Display || property === 'Display') && (property in a) && (a[property] !== value)) {

                            a[property] = value;
                            this.MustRebuildChart = true;
                        }
                    }
                },

                AddData: function (chartItem) {

                    this.data.push(chartItem);
                },

                RefreshData: function (id, field, value) {

                    if (id) {

                        var index = this.dxChart.indexById(id);

                        if (index !== -1) {

                            chartData = this.data[index];

                            if (chartData[field] !== value) {

                                chartData[field] = value;
                                this.dxChart.remove(id);
                                this.dxChart.add(chartData, index);
                            }
                        }

                    } else {

                        buildDhtmlxChart(control);
                    }
                }
            };

            control.aasChartProperties.AllAxis[xAxis] = buildAxisProperties(0, xAxis);
            control.aasChartProperties.AllAxis[yAxis] = buildAxisProperties(1, yAxis);

            for (var i = 0; i < otherYAxis.length; i++) {
                control.aasChartProperties.AllAxis[otherYAxis[i]] = buildAxisProperties(2 + i, otherYAxis[i]);
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
            control.aasChartProperties.data = [];

            controlInfo.PropertyBag.yStart = +1E308;
            controlInfo.PropertyBag.yEnd = -1E308;
            controlInfo.PropertyBag.yStep = 0;

            controlInfo.PropertyBag.xStart = +1E308;
            controlInfo.PropertyBag.xEnd = -1E308;
            controlInfo.PropertyBag.xStep = 0;
        }

        controlInfo.RowCreated = function (control, rowId, cellControls) {

            var chartItem = { id: rowId };

            var isPie = control.aasControlInfo.PropertyBag.Type === 'pie';

            for (var n = 0; n < cellControls.length; n++) {

                var cellControl = cellControls[n];

                var axn = cellControl.aasAxisName;
                var v = cellControl.aasControlInfo.PropertyBag.Value;
                var l = cellControl.aasControlInfo.PropertyBag.Label;
                var t = cellControl.aasControlInfo.PropertyBag.ToolTip;

                //#region Calcul du min et du max
                var cp = control.aasChartProperties;
                var pb = control.aasControlInfo.PropertyBag;
                if (axn === cp.xAxis) {

                    if (v < pb.xStart) {

                        pb.xStart = v;
                        cp.MustRebuildChart = true;
                    }

                    if (v > pb.xEnd) {

                        pb.xEnd = v;
                        cp.MustRebuildChart = true;
                    }

                } else {

                    if (v < pb.yStart) {

                        pb.yStart = v;
                        cp.MustRebuildChart = true;
                    }

                    if (v > pb.yEnd) {

                        pb.yEnd = v;
                        cp.MustRebuildChart = true;
                    }
                }
                //#endregion

                chartItem[axn] = v;
                chartItem[axn + 'Label'] = l;
                chartItem[axn + 'ToolTip'] = t;

                if (isPie) {

                    chartItem[axn + 'Color'] = cellControl.aasControlInfo.PropertyBag.ItemColor;
                    chartItem[axn + 'Title'] = cellControl.aasControlInfo.PropertyBag.Title;
                }
            }

            control.aasChartProperties.AddData(chartItem);
        };

        controlInfo.GridRendered = function (control, rowControls) {

            var xAxis = control.aasChartProperties.xAxis;

            var rowCount = rowControls.length;

            control.aasRowCount = rowCount;

            var currentWidth = control.clientWidth;

            var pointWidth = control.aasChartProperties.AllAxis[xAxis].PointWidth;

            if (currentWidth < rowCount * pointWidth) {
                control.style.width = rowCount * pointWidth + 'px';
            }
            else {
                var clientWidth = control.parentNode.clientWidth;

                if (clientWidth > 1) clientWidth--;

                control.style.width = clientWidth + 'px';
            }

            control.aasChartProperties.RefreshData();
        };

        controlInfo.OnCurrentIndexChanged = function (control, currentIndex) {

        };
    }

};

Global.NewAxisBuilder = {

    aasService: 'NewAxisBuilder',
    aasPublished: false,

    Build: function (controlInfo) {

        var dataProperties = {};

        function translateToObjectProperty(p) {

            var obj = null;
            var property = null;

            if (p.indexOf('Line') === 0) obj = 'line';
            else if (p.indexOf('Item') === 0) obj = 'item';
            else obj = 'yAxis';

            switch (obj) {

                case 'line':
                case 'item': {

                    var stripedObj = p.substring(4);
                    property = stripedObj[0].toLowerCase() + stripedObj.substring(1);
                }

                case 'yAxis': {

                    property = (p === 'ShowLine') ? 'lines' : p.toLowerCase();
                }
            }

            return { Obj: obj, Property: property };
        }

        controlInfo.CreateInstance = function (ownerWindow, id) {

            var control = Aspectize.createElement('div', ownerWindow);

            controlInfo.ChangePropertyValue = function (property, newValue) {

                control.aasChartProperties.SetAxisProperty(control.aasAxisName, property, newValue);

                this.PropertyBag[property] = newValue;
                var axn = control.aasAxisName;

                switch (property) {

                    case 'Value': control.aasChartProperties.RefreshData(control.aasRowId, axn, newValue); break;

                    case 'Label':
                    case 'ToolTip': control.aasChartProperties.RefreshData(control.aasRowId, axn + property, newValue); break;
                }
            };

            return control;
        };
    }
};


