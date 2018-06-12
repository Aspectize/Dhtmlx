# Dhtmlx
Dhmlx Aspectize Extension for Dhtmlx graph (https://dhtmlx.com/)

## 1 - Download

Download extension package from aspectize.com:
- in the portal, goto extension section
- browse extension, and find Dhtmlx
- download package and unzip it into your local WebHost Applications directory; you should have a Dhtmlx directory next to your app directory.

## 2 - Configuration

Add Dhtmlx as Shared Application in your application configuration file.
In your Visual Studio Project, find the file Application.js in the Configuration folder.

Add BootstrapDateTimePicker in the Directories list :
```javascript
app.Directories = "Dhtmlx";
```

## 3 - Include js and css

In your application.htm.ashx file, add the following lines:
```javascript
<!-- Dhtmlx -->
<script  type="text/javascript" src="~Dhtmlx/codebase/dhtmlxchart.js"></script>
<link rel="STYLESHEET" type="text/css" href="~Dhtmlx/codebase/dhtmlxchart.css">
```

## 4 - Usage

a/ Html

Insert the following html into your control:
```html
<div aas-name="MyChart" aas-type="Dhtmlx.DhtmlxChart" style="height:500px"></div>
```
    
b/ Binding
Binding is the same logic as a Grid:
- Use BindGrid to define data
- Use AddGridColumn of type Dhtmlx.DhtmlxAxis to add Axis. First column is the x Axis. Other columns are y Axis.

```javascript
myView.MyChart.BindGrid(myView.ParentData.MyData);
myView.MyChart.Type.BindData('line');
var cChartXAxis = myView.MyChart.AddGridColumn("Date", "Dhtmlx.DhtmlxAxis");
cChartXAxis.Label.BindData('');
cChartXAxis.Value.BindData(myView.MyChart.DataSource.MyXColumn);
cChartXAxis.Title.BindData("Semaine");
var cChartValue = myView.MyChart.AddGridColumn("Value", "Dhtmlx.DhtmlxAxis");
cChartValue.Title.BindData("My value");
cChartValue.Label.BindData(myView.MyChart.DataSource.MyValueColumn, "F1");
cChartValue.Value.BindData(myView.MyChart.DataSource.MyValueColumn, "F1");
cChartValue.ItemColor.BindData("#FFFFFF");
cChartValue.LineColor.BindData("#599EC8");
cChartValue.LineWidth.BindData(2);
cChartValue.ItemRadius.BindData(3);
cChartValue.ItemBorderColor.BindData("#599EC8");
cChartValue.ItemBorderWidth.BindData(1);
```
