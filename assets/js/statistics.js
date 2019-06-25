//unfinished

queue()
    .defer(d3.json, 'assets/js/data.json')
    .await(createDataVis);

function createDataVis(error, gdpData) {
    var ndx = crossfilter(gdpData);

    show_country_selector(ndx);
    show_gdps(ndx);

    dc.renderAll();
}

function show_country_selector(ndx) {
    dim = ndx.dimension(dc.pluck('country'));
    group = dim.group()

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}

function show_gdps(ndx) {
    var name_dim = ndx.dimension(dc.pluck('country'));
    var draw_barchart_gdp_country = name_dim.group().reduceSum(dc.pluck('gdp'));
    dc.barChart('#gdp-per-capita-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(name_dim)
        .group(draw_barchart_gdp_country)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('GDP Per Capita ($)')
        .yAxis().ticks(8);

    var gc_dim = ndx.dimension(dc.pluck('country'));
    var draw_barchart_gc_country = gc_dim.group().reduceSum(dc.pluck('gini-coefficient'));
    dc.barChart('#gini-coefficient-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(gc_dim)
        .group(draw_barchart_gc_country)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('Gini Coefficient')
        .yAxis().ticks(8);

    var name_dim = ndx.dimension(dc.pluck('country'));
    var draw_barchart_gdp_country_pie = name_dim.group().reduceSum(dc.pluck('gini-coefficient'));
    dc.pieChart('#gdp-per-capita-pie-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(name_dim)
        .group(draw_barchart_gdp_country_pie);
}
/*var name_dim = ndx.dimension(dc.pluck('country'));
var draw_barchart_gdp_rank = name_dim.group().reduceSum(dc.pluck('rank'));
dc.barChart('#gdp-per-capita-chart-rank')
    .width(725)
    .height(270)
    .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    .dimension(name_dim)
    .group(draw_barchart_gdp_rank)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel('Country')
    .yAxisLabel('Rank')
    .yAxis().ticks(4);*/

/*
            var ndx = crossfilter(costsData);
            var name_dim = ndx.dimension(dc.pluck('country'));
            var costs_of_food = name_dim.group().reduceSum(dc.pluck('price'));

            dc.barChart('#costs-of-meals-chart')
                .width(725)
                .height(270)
                .margins({ top: 10, right: 50, bottom: 30, left: 50 })
                .dimension(name_dim)
                .group(costs_of_food)
                .transitionDuration(500)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .xAxisLabel('Country')
                .yAxisLabel('Price of Food ($)')
                .yAxis().ticks(4);

           

            var ndx = crossfilter(gini_index);
            var name_dim = ndx.dimension(dc.pluck('country'));
            var gini_coefficient = name_dim.group().reduceSum(dc.pluck('gini-index'));
            dc.barChart('#gini-index-chart')
                .width(725)
                .height(270)
                .margins({ top: 10, right: 50, bottom: 30, left: 50 })
                .dimension(name_dim)
                .group(gini_coefficient)
                .transitionDuration(500)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .xAxisLabel('Country')
                .yAxisLabel('Gini Index (%)')
                .yAxis().ticks(4);
*/
