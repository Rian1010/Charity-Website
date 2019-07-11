//unfinished

/*
queue()
    .defer(d3.json, "data/data3.json")
    .await(makeGraphs);

function makeGraphs(error, transactionsData) {
    var ndx = crossfilter(transactionsData);
    var parseDate = d3.time.format("%d/%m/%Y").parse;
    transactionsData.forEach(function(d) {
        d.date = parseDate(d.date);
    });
    var unemp_rate_genders_dim = ndx.dimension(dc.pluck('year'));
    var minDate = unemp_rate_genders_dim.bottom(1)[0].date;
    var maxDate = unemp_rate_genders_dim.top(1)[0].date;

    function female_unemployment_rate_by_country(name) {
        return function(d) {
            if (d.name === name) {
                return +d.spend;
            }
            else {
                return 0;
            }
        }
    }
    var femaleUnempRateDRC = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('DRC'));
    var femaleUnempRateMZ = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('MZ'));
    var femaleUnempRateUG = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('UG'));
    var femaleUnempRateTJ = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('TJ'));
    var femaleUnempRateYE = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('YE'));
    var femaleUnempRateHT = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('HT'));
    var femaleUnempRateET = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('ET'));
    var femaleUnempRateTZ = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('TZ'));
    var femaleUnempRateKG = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('KG'));
    var femaleUnempRateUZ = unemp_rate_genders_dim.group().reduceSum(female_unemployment_rate_by_country('UZ'));
    */
/*var tomSpendByMonth = date_dim.group().reduceSum(spend_by_name('Tom'));
var bobSpendByMonth = date_dim.group().reduceSum(spend_by_name('Bob'));
var aliceSpendByMonth = date_dim.group().reduceSum(spend_by_name('Alice'));
var compositeChart = dc.compositeChart('#composite-chart');*/
/*
    compositeChart
        .width(990)
        .height(200)
        .dimension(unemp_rate_genders_dim)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .yAxisLabel("Spend")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('green')
            .group(femaleUnempRateDRC, 'Democratic Republic of Congo'),
            dc.lineChart(compositeChart)
            .colors('red')
            .group(femaleUnempRateMZ, 'Mozambique'),
            dc.lineChart(compositeChart)
            .colors('yellow')
            .group(femaleUnempRateUG, 'Uganda'),
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(femaleUnempRateTJ, 'Tajikistan'),
            dc.lineChart(compositeChart)
            .colors('orange')
            .group(femaleUnempRateYE, 'Yemen'),
            dc.lineChart(compositeChart)
            .colors('lightblue')
            .group(femaleUnempRateHT, 'Haiti'),
            dc.lineChart(compositeChart)
            .colors('black')
            .group(femaleUnempRateET, 'Ethopia'),
            dc.lineChart(compositeChart)
            .colors('brown')
            .group(femaleUnempRateTZ, 'Tanzania'),
            dc.lineChart(compositeChart)
            .colors('purple')
            .group(femaleUnempRateKG, 'Kyrgyzstan'),
            dc.lineChart(compositeChart)
            .colors('pink')
            .group(femaleUnempRateUZ, 'Uzbekistan'),
            */
/*dc.lineChart(compositeChart)
.colors('green')
.group(tomSpendByMonth, 'Tom'),
dc.lineChart(compositeChart)
.colors('red')
.group(bobSpendByMonth, 'Bob'),
dc.lineChart(compositeChart)
.colors('blue')
.group(aliceSpendByMonth, 'Alice')*/
/* ])
        .brushOn(false)
        .render();
    dc.renderAll();
}*/

/* { "country": "DRC", "gdp": 475, "rank": 1, "gini-coefficient": 45.7, "gini-coefficient-year": 2016, "unemployment-rate": 46.10, "unemployment-rate-year": 2013},
    { "country": "MZ", "gdp": 502, "rank": 2, "gini-coefficient": 54.0, "gini-coefficient-year": 2014, "unemployment-rate": 25.04, "unemployment-rate-year": 2017},
    { "country": "UG", "gdp": 759, "rank": 3, "gini-coefficient": 42.8, "gini-coefficient-year": 2016, "unemployment-rate": 2.10, "unemployment-rate-year": 2017},
    { "country": "TJ", "gdp": 861, "rank": 4, "gini-coefficient": 34.0, "gini-coefficient-year": 2015, "unemployment-rate": 2.30, "unemployment-rate-year": 2018},
    { "country": "YE", "gdp": 913, "rank": 5, "gini-coefficient": 36.7, "gini-coefficient-year": 2014, "unemployment-rate": 12.90, "unemployment-rate-year": 2018},
    { "country": "HT", "gdp": 923, "rank": 6, "gini-coefficient": 41.1, "gini-coefficient-year": 2012, "unemployment-rate": 14.00, "unemployment-rate-year": 2017},
    { "country": "ET", "gdp": 1122, "rank": 7, "gini-coefficient": 39.1, "gini-coefficient-year": 2015, "unemployment-rate": 19.10, "unemployment-rate-year": 2018},
    { "country": "TZ", "gdp": 1159, "rank": 8, "gini-coefficient": 37.8, "gini-coefficient-year": 2011, "unemployment-rate": 10.30, "unemployment-rate-year": 2014},
    { "country": "KG", "gdp": 1266, "rank": 9, "gini-coefficient": 27.3, "gini-coefficient-year": 2017, "unemployment-rate": 3.20, "unemployment-rate-year": 2019},
    { "country": "UZ", "gdp": 1350, "rank": 10, "gini-coefficient": 35.3, "gini-coefficient-year": 2003, "unemployment-rate": 6.90, "unemployment-rate-year": 2018},
    { "year": 2015, "unemployment-rate-country": "DRC", "female-unemployment-rate": 4.37, "male-unemployment-rate-2015": 3.05},
    { "year": 2015, "unemployment-rate-country": "MZ", "female-unemployment-rate": 27.14, "male-unemployment-rate-2015": 23.06},
    { "year": 2015, "unemployment-rate-country": "UG", "female-unemployment-rate": 2.49, "male-unemployment-rate-2015": 1.37},
    { "year": 2015, "unemployment-rate-country": "TJ", "female-unemployment-rate": 11.1, "male-unemployment-rate-2015": 9.9},
    { "year": 2015, "unemployment-rate-country": "YE", "female-unemployment-rate": 26.64, "male-unemployment-rate-2015": 12.67},
    { "year": 2015, "unemployment-rate-country": "HT", "female-unemployment-rate": 15.98, "male-unemployment-rate-2015": 12.27},
    { "year": 2015, "unemployment-rate-country": "ET", "female-unemployment-rate": 7.2, "male-unemployment-rate-2015": 2.98},
    { "year": 2015, "unemployment-rate-country": "TZ", "female-unemployment-rate": 2.67, "male-unemployment-rate-2015": 1.59},
    { "year": 2015, "unemployment-rate-country": "KG", "female-unemployment-rate": 9.04, "male-unemployment-rate-2015": 6.54},
    { "year": 2015, "unemployment-rate-country": "UZ", "female-unemployment-rate": 7.77, "male-unemployment-rate-2015": 3.05},
    { "year": 2016, "unemployment-rate-country": "DRC", "female-unemployment-rate": 4.33, "male-unemployment-rate-2015": 3.06},
    { "year": 2016, "unemployment-rate-country": "MZ", "female-unemployment-rate": 26.97, "male-unemployment-rate-2015": 22.94},
    { "year": 2016, "unemployment-rate-country": "UG", "female-unemployment-rate": 2.65, "male-unemployment-rate-2015": 1.42},
    { "year": 2016, "unemployment-rate-country": "TJ", "female-unemployment-rate": 11.03, "male-unemployment-rate-2015": 9.85},
    { "year": 2016, "unemployment-rate-country": "YE", "female-unemployment-rate": 26.49, "male-unemployment-rate-2015": 12.2},
    { "year": 2016, "unemployment-rate-country": "HT", "female-unemployment-rate": 15.89, "male-unemployment-rate-2015": 12.26},
    { "year": 2016, "unemployment-rate-country": "ET", "female-unemployment-rate": 7.37, "male-unemployment-rate-2015": 3.05},
    { "year": 2016, "unemployment-rate-country": "TZ", "female-unemployment-rate": 2.74, "male-unemployment-rate-2015": 1.62},
    { "year": 2016, "unemployment-rate-country": "KG", "female-unemployment-rate": 8.75, "male-unemployment-rate-2015": 6.18},
    { "year": 2016, "unemployment-rate-country": "UZ", "female-unemployment-rate": 7.38, "male-unemployment-rate-2015": 7.61},
    { "year": 2017, "unemployment-rate-country": "DRC", "female-unemployment-rate": 4.33, "male-unemployment-rate-2015": 3.08},
    { "year": 2017, "unemployment-rate-country": "MZ", "female-unemployment-rate": 26.85, "male-unemployment-rate-2015": 22.84},
    { "year": 2017, "unemployment-rate-country": "UG", "female-unemployment-rate": 2.81, "male-unemployment-rate-2015": 1.45},
    { "year": 2017, "unemployment-rate-country": "TJ", "female-unemployment-rate": 10.96, "male-unemployment-rate-2015": 9.85},
    { "year": 2017, "unemployment-rate-country": "YE", "female-unemployment-rate": 28.32, "male-unemployment-rate-2015": 12.81},
    { "year": 2017, "unemployment-rate-country": "HT", "female-unemployment-rate": 15.85, "male-unemployment-rate-2015": 12.27},
    { "year": 2017, "unemployment-rate-country": "ET", "female-unemployment-rate": 7.54, "male-unemployment-rate-2015": 3.1},
    { "year": 2017, "unemployment-rate-country": "TZ", "female-unemployment-rate": 2.81, "male-unemployment-rate-2015": 1.65},
    { "year": 2017, "unemployment-rate-country": "KG", "female-unemployment-rate": 8.83, "male-unemployment-rate-2015": 6.25},
    { "year": 2017, "unemployment-rate-country": "UZ", "female-unemployment-rate": 7.07, "male-unemployment-rate-2015": 7.25},
    { "year": 2018, "unemployment-rate-country": "DRC", "female-unemployment-rate": 4.3, "male-unemployment-rate-2015": 3.1},
    { "year": 2018, "unemployment-rate-country": "MZ", "female-unemployment-rate": 26.72, "male-unemployment-rate-2015": 22.74},
    { "year": 2018, "unemployment-rate-country": "UG", "female-unemployment-rate": 2.96, "male-unemployment-rate-2015": 1.48},
    { "year": 2018, "unemployment-rate-country": "TJ", "female-unemployment-rate": 10.99, "male-unemployment-rate-2015": 9.85},
    { "year": 2018, "unemployment-rate-country": "YE", "female-unemployment-rate": 29.95, "male-unemployment-rate-2015": 12.86},
    { "year": 2018, "unemployment-rate-country": "HT", "female-unemployment-rate": 15.76, "male-unemployment-rate-2015": 12.13},
    { "year": 2018, "unemployment-rate-country": "ET", "female-unemployment-rate": 7.7, "male-unemployment-rate-2015": 3.15},
    { "year": 2018, "unemployment-rate-country": "TZ", "female-unemployment-rate": 2.87, "male-unemployment-rate-2015": 1.68},
    { "year": 2018, "unemployment-rate-country": "KG", "female-unemployment-rate": 8.92, "male-unemployment-rate-2015": 6.32},
    { "year": 2018, "unemployment-rate-country": "UZ", "female-unemployment-rate": 6.86, "male-unemployment-rate-2015": 6.94}
    
    { "country": "DRC", "gdp": 475, "rank": 1, "gini-coefficient": 45.7, "gini-coefficient-year": 2016, "unemployment-rate": 46.10, "unemployment-rate-year": 2013 },
    { "country": "MZ", "gdp": 502, "rank": 2, "gini-coefficient": 54.0, "gini-coefficient-year": 2014, "unemployment-rate": 25.04, "unemployment-rate-year": 2017 },
    { "country": "UG", "gdp": 759, "rank": 3, "gini-coefficient": 42.8, "gini-coefficient-year": 2016, "unemployment-rate": 2.10, "unemployment-rate-year": 2017 },
    { "country": "TJ", "gdp": 861, "rank": 4, "gini-coefficient": 34.0, "gini-coefficient-year": 2015, "unemployment-rate": 2.30, "unemployment-rate-year": 2018 },
    { "country": "YE", "gdp": 913, "rank": 5, "gini-coefficient": 36.7, "gini-coefficient-year": 2014, "unemployment-rate": 12.90, "unemployment-rate-year": 2018 },
    { "country": "HT", "gdp": 923, "rank": 6, "gini-coefficient": 41.1, "gini-coefficient-year": 2012, "unemployment-rate": 14.00, "unemployment-rate-year": 2017 },
    { "country": "ET", "gdp": 1122, "rank": 7, "gini-coefficient": 39.1, "gini-coefficient-year": 2015, "unemployment-rate": 19.10, "unemployment-rate-year": 2018 },
    { "country": "TZ", "gdp": 1159, "rank": 8, "gini-coefficient": 37.8, "gini-coefficient-year": 2011, "unemployment-rate": 10.30, "unemployment-rate-year": 2014 },
    { "country": "KG", "gdp": 1266, "rank": 9, "gini-coefficient": 27.3, "gini-coefficient-year": 2017, "unemployment-rate": 3.20, "unemployment-rate-year": 2019 },
    { "country": "UZ", "gdp": 1350, "rank": 10, "gini-coefficient": 35.3, "gini-coefficient-year": 2003, "unemployment-rate": 6.90, "unemployment-rate-year": 2018 },
    { "unemployment-rate-country": "DRC", "year": 2015, "female-unemployment-rate": 4.37, "male-unemployment-rate": 3.05},
    { "unemployment-rate-country": "MZ", "year": 2015, "female-unemployment-rate": 27.14, "male-unemployment-rate": 23.06},
    { "unemployment-rate-country": "UG", "year": 2015, "female-unemployment-rate": 2.49, "male-unemployment-rate": 1.37},
    { "unemployment-rate-country": "DRC", "year": 2016, "female-unemployment-rate": 4.33, "male-unemployment-rate": 3.06},
    { "unemployment-rate-country": "MZ", "year": 2016, "female-unemployment-rate": 26.97, "male-unemployment-rate": 22.94},
    { "unemployment-rate-country": "UG", "year": 2016, "female-unemployment-rate": 2.65, "male-unemployment-rate": 1.42},
    { "unemployment-rate-country": "DRC", "year": 2017, "female-unemployment-rate": 4.33, "male-unemployment-rate": 3.08},
    { "unemployment-rate-country": "MZ", "year": 2017, "female-unemployment-rate": 26.85, "male-unemployment-rate": 22.84},
    { "unemployment-rate-country": "UG", "year": 2017, "female-unemployment-rate": 2.81, "male-unemployment-rate": 1.45},
    { "unemployment-rate-country": "DRC", "year": 2018,  "female-unemployment-rate": 4.3, "male-unemployment-rate": 3.1},
    { "unemployment-rate-country": "MZ", "year": 2018, "female-unemployment-rate": 26.72, "male-unemployment-rate": 22.74},
    { "unemployment-rate-country": "UG", "year": 2018, "female-unemployment-rate": 2.96, "male-unemployment-rate": 1.48}
    */


queue()
    .defer(d3.json, "data/data.json")
    .defer(d3.json, "data/data2.json")
    .await(createDataVis)
/*
function createDataVis(error, countriesData, countriesData2, countriesData3, costData) {


    show_country_data(error, countriesData);
    show_country_data2(error, costData);

    //show_country_selector(ndx);
    //show_country_data(ndx);
    //show_country_data2(ndx);


    dc.renderAll();
}

function show_country_selector(ndx) {
    dim = ndx.dimension(dc.pluck('country'));
    group = dim.group()

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}*/

/*
function show_country_data(error, countriesData) {

    var ndx = crossfilter(countriesData);
    var country_dim = ndx.dimension(dc.pluck('country'));
    var unemp_rate_dim = ndx.dimension(dc.pluck('gdp'));

    // GDP per Capita Chart 

    var draw_barchart_gdp_country = country_dim.group().reduceSum(dc.pluck('gdp'));
    dc.barChart('#gdp-per-capita-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(country_dim)
        .group(draw_barchart_gdp_country)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('GDP Per Capita ($)')
        .yAxis().ticks(8);

    // Gini Coefficient Chart 

    var draw_barchart_gc_country = country_dim.group().reduceSum(dc.pluck('gini-coefficient'));
    dc.barChart('#gini-coefficient-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(country_dim)
        .group(draw_barchart_gc_country)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('Gini Coefficient')
        .yAxis().ticks(8);

    // Unemployment Rate Pie Chart

    var draw_unemployment_rate_pie = unemp_rate_dim.group().reduceSum(dc.pluck('unemployment-rate'));
    var minRate = unemp_rate_dim.bottom(1)[0].date;
    var maxRate = unemp_rate_dim.top(1)[0].date;
    dc.pieChart('#unemployment-rate-pie-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(unemp_rate_dim)
        .group(draw_unemployment_rate_pie);



    //Female Unemployment Rate

    var parseDate = d3.time.format("%d/%m/%Y").parse;
    countriesData.forEach(function(d) {
        var datedYears = new Date(d.year);
        d.year = datedYears;
    });

    var unemp_rate_year_dim = ndx.dimension(dc.pluck('year'));

    var minDate = unemp_rate_dim.bottom(1)[0].date;
    var maxDate = unemp_rate_dim.top(1)[0].date;

    var femaleUnemploymentRateDRC = unemp_rate_dim.group().reduceCount(function(d) {
        if (d.name === 'DRC') {
            return +d.femaleUnemploymentRate;
        }
        else {
            return 0;
        }
    });

    var femaleUnemploymentRateMZ = unemp_rate_dim.group().reduceCount(function(d) {
        if (d.name === 'MZ') {
            return +d.femaleUnemploymentRate;
        }
        else {
            return 0;
        }
    });

    var femaleUnemploymentRateUG = unemp_rate_dim.group().reduceCount(function(d) {
        if (d.name === 'UG') {
            return +d.femaleUnemploymentRate;
        }
        else {
            return 0;
        }
    });
    var compositeChart = dc.compositeChart('#unemployment-rate-female');

    compositeChart
        .width(990)
        .height(200)
        .dimension(unemp_rate_dim)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .yAxisLabel("Female Unemployment Rate")
        .xAxisLabel("Year")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('green')
            .group(femaleUnemploymentRateDRC, 'Democratic Republic of Congo'),
            dc.lineChart(compositeChart)
            .colors('red')
            .group(femaleUnemploymentRateMZ, 'Mozambique'),
            dc.lineChart(compositeChart)
            .colors('yellow')
            .group(femaleUnemploymentRateUG, 'Uganda'),
            dc.lineChart(compositeChart)
            .colors('blue')
        ])
        .brushOn(false)
        .render();
    dc.renderAll();
}

function show_country_data2(error, costData) {
    var ndx = crossfilter(costsData);
    var name_dim = ndx.dimension(dc.pluck('countryCostsData'));
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
}*/

function createDataVis(error, countriesData, countriesData2) {


    show_country_data(error, countriesData);

    //show_country_selector(ndx);
    //show_country_data(ndx);
    //show_country_data2(ndx);


    dc.renderAll();
}

function show_country_data(error, countriesData) {

    var ndx = crossfilter(countriesData);
    var country_dim = ndx.dimension(dc.pluck('country'));
    var draw_barchart_gdp_country = country_dim.group().reduceSum(dc.pluck('gdp'));

    // GDP per Capita Chart 

    dc.barChart('#gdp-per-capita-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(country_dim)
        .group(draw_barchart_gdp_country)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('GDP Per Capita ($)')
        .yAxis().ticks(8);

    var country_dim = ndx.dimension(dc.pluck('country'));
    var gini_coefficient_dim = country_dim.group().reduceSum(dc.pluck('gini-coefficient'));

    // Gini Coefficient Chart 

    dc.barChart('#gini-coefficient-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(country_dim)
        .group(gini_coefficient_dim)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('Gini Coefficient')
        .yAxis().ticks(8);

    // Unemployment Rate Pie Chart
    var composite = dc.compositeChart("#unemployment-rate-female")

    var draw_unemployment_rate_pie = country_dim.group().reduceSum(dc.pluck('unemployment-rate'));
    var minRate = country_dim.bottom(1)[0].date;
    var maxRate = country_dim.top(1)[0].date;
    dc.pieChart('#unemployment-rate-pie-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(draw_unemployment_rate_pie);


    //Female Unemployment Rate

    var parseDate = d3.time.format("%Y").parse;
    countriesData.forEach(function(d) {
        var datedYears = new Date(d.year);
        d.year = datedYears;
    });

    var unemp_rate_year_dim = ndx.dimension(dc.pluck('unemployment-rate-country')),
        femaleUnempRateDRC = unemp_rate_year_dim.group().reduceCount(dc.pluck('DRC')),
        femaleUnempRateMZ = unemp_rate_year_dim.group().reduceCount(dc.pluck('MZ')),
        femaleUnempRateUG = unemp_rate_year_dim.group().reduceCount(dc.pluck('UG'));


    var minDate = unemp_rate_year_dim.bottom(1)[0].date;
    var maxDate = unemp_rate_year_dim.top(1)[0].date;


    composite
        .width(768)
        .height(480)
        .x(d3.scale.linear().domain([2015, 2018]))
        .yAxisLabel("Unemployment Rate")
        .xAxisLabel("Year")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(composite)
            .dimension(unemp_rate_year_dim)
            .colors('orange')
            .group(femaleUnempRateDRC, "DRC")
            .dashStyle([2, 2]),
            dc.lineChart(composite)
            .dimension(unemp_rate_year_dim)
            .colors('blue')
            .group(femaleUnempRateMZ, "MZ")
            .dashStyle([5, 5]),
            dc.lineChart(composite)
            .dimension(unemp_rate_year_dim)
            .colors('grey')
            .group(femaleUnempRateUG, "UG")
            .dashStyle([8, 8])
        ])

        .brushOn(false)
        .render();

    /*
        var femaleUnemploymentRateDRC = unemp_rate_year_dim.group().reduceCount(function(d) {
            if (d.name === 'DRC') {
                return +d.femaleUnemploymentRate;
            }
            else {
                return 0;
            }
        });

        var femaleUnemploymentRateMZ = unemp_rate_year_dim.group().reduceCount(function(d) {
            if (d.name === 'MZ') {
                return +d.femaleUnemploymentRate;
            }
            else {
                return 0;
            }
        });

        var femaleUnemploymentRateUG = unemp_rate_year_dim.group().reduceCount(function(d) {
            if (d.name === 'UG') {
                return +d.femaleUnemploymentRate;
            }
            else {
                return 0;
            }
        });
        var compositeChart = dc.compositeChart('#unemployment-rate-female');

        compositeChart
            .width(990)
            .height(200)
            .dimension(unemp_rate_year_dim)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .yAxisLabel("Female Unemployment Rate")
            .xAxisLabel("Year")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                .colors('green')
                .group(femaleUnemploymentRateDRC, 'Democratic Republic of Congo'),
                dc.lineChart(compositeChart)
                .colors('red')
                .group(femaleUnemploymentRateMZ, 'Mozambique'),
                dc.lineChart(compositeChart)
                .colors('yellow')
                .group(femaleUnemploymentRateUG, 'Uganda'),
                dc.lineChart(compositeChart)
                .colors('blue')
            ])
            .brushOn(false)
            .render();*/
}

/*
function show_country_data2(error, countriesData) {

    var ndx = crossfilter(countriesData);
    var country_dim = ndx.dimension(dc.pluck('country'));
    var gini_coefficient_dim = country_dim.group().reduceSum(dc.pluck('gini-coefficient'));

    // Gini Coefficient Chart 

    dc.barChart('#gini-coefficient-chart')
        .width(725)
        .height(270)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(country_dim)
        .group(gini_coefficient_dim)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxisLabel('Gini Coefficient')
        .yAxis().ticks(8);
}
*/

// Costs of Meals Chart


/*function createDataVis2(error, costData) {
    var ndx = crossfilter(costData);

    show_country_data2(ndx);

    dc.renderAll();
}*/




// Female Unemployment Rate
/*

function createDataVis3(error, unemploymentData) {
    var ndx = crossfilter(unemploymentData);
    var parseDate = d3.time.format("%d/%m/%Y").parse;
    unemploymentData.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    var unemp_rate_genders_dim = ndx.dimension(dc.pluck('year'));

    var minDate = unemp_rate_genders_dim.bottom(1)[0].date;
    var maxDate = unemp_rate_genders_dim.top(1)[0].date;

    var femaleUnemploymentRateDRC = unemp_rate_genders_dim.group().reduceSum(function(d) {
        if (d.name === 'DRC') {
            return +d.femaleUnemploymentRate;
        }
        else {
            return 0;
        }
    })

    var femaleUnemploymentRateMZ = unemp_rate_genders_dim.group().reduceSum(function(d) {
        if (d.name === 'MZ') {
            return +d.femaleUnemploymentRate;
        }
        else {
            return 0;
        }
    })

    var femaleUnemploymentRateUG = unemp_rate_genders_dim.group().reduceSum(function(d) {
        if (d.name === 'UG') {
            return +d.femaleUnemploymentRate;
        }
        else {
            return 0;
        }
    });
    var compositeChart = dc.compositeChart('#unemployment-rate-female');

    compositeChart
        .width(990)
        .height(200)
        .dimension(unemp_rate_genders_dim)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .yAxisLabel("Female Unemployment Rate")
        .xAxisLabel("Year")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('green')
            .group(femaleUnemploymentRateDRC, 'Democratic Republic of Congo'),
            dc.lineChart(compositeChart)
            .colors('red')
            .group(femaleUnemploymentRateMZ, 'Mozambique'),
            dc.lineChart(compositeChart)
            .colors('yellow')
            .group(femaleUnemploymentRateUG, 'Uganda'),
            dc.lineChart(compositeChart)
            .colors('blue')
        ])
        .brushOn(false)
        .render();
    dc.renderAll();
}*/
/*var femaleUnempRateDRC = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('DRC'));
var femaleUnempRateMZ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('MZ'));
var femaleUnempRateUG = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('UG'));
var femaleUnempRateTJ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('TJ'));
var femaleUnempRateYE = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('YE'));
var femaleUnempRateHT = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('HT'));
var femaleUnempRateET = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('ET'));
var femaleUnempRateTZ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('TZ'));
var femaleUnempRateKG = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('KG'));
var femaleUnempRateUZ = unemp_rate_genders_dim.group().reduceCount(female_unemployment_rate_by_country('UZ'));

var compositeChart = dc.compositeChart('#unemployment-rate-female');

compositeChart
    .width(990)
    .height(200)
    .dimension(unemp_rate_genders_dim)
    .x(d3.time.scale().domain([minDate, maxDate]))
    .yAxisLabel("Spend")
    .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
    .renderHorizontalGridLines(true)
    .compose([
        dc.lineChart(compositeChart)
        .colors('green')
        .group(femaleUnempRateDRC, 'Democratic Republic of Congo'),
        dc.lineChart(compositeChart)
        .colors('red')
        .group(femaleUnempRateMZ, 'Mozambique'),
        dc.lineChart(compositeChart)
        .colors('yellow')
        .group(femaleUnempRateUG, 'Uganda'),
        dc.lineChart(compositeChart)
        .colors('blue')
        .group(femaleUnempRateTJ, 'Tajikistan'),
        dc.lineChart(compositeChart)
        .colors('orange')
        .group(femaleUnempRateYE, 'Yemen'),
        dc.lineChart(compositeChart)
        .colors('lightblue')
        .group(femaleUnempRateHT, 'Haiti'),
        dc.lineChart(compositeChart)
        .colors('black')
        .group(femaleUnempRateET, 'Ethopia'),
        dc.lineChart(compositeChart)
        .colors('brown')
        .group(femaleUnempRateTZ, 'Tanzania'),
        dc.lineChart(compositeChart)
        .colors('purple')
        .group(femaleUnempRateKG, 'Kyrgyzstan'),
        dc.lineChart(compositeChart)
        .colors('pink')
        .group(femaleUnempRateUZ, 'Uzbekistan'),

    ])
    .brushOn(false)
    .render();
dc.renderAll();
}*/



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






/*
DRC F: https://www.theglobaleconomy.com/Democratic-Republic-of-the-Congo/

DRC M: https://www.theglobaleconomy.com/Democratic-Republic-of-the-Congo/Male_unemployment/

MZ F: https://www.theglobaleconomy.com/Mozambique/Female_unemployment/

MZ M: https://www.theglobaleconomy.com/Mozambique/Male_unemployment/

UG F: https://www.theglobaleconomy.com/Uganda/Female_unemployment/

UG M: https://www.theglobaleconomy.com/Uganda/Male_unemployment/

TJ F: https://www.theglobaleconomy.com/Tajikistan/Female_unemployment/

TJ M: https://www.theglobaleconomy.com/Tajikistan/Male_unemployment/

YE F: https://www.theglobaleconomy.com/Yemen/Female_unemployment/

YE M: https://www.theglobaleconomy.com/Yemen/Male_unemployment/

HT F: https://www.theglobaleconomy.com/Tajikistan/Male_unemployment/

HT M: https://www.theglobaleconomy.com/Haiti/Male_unemployment/

ET F: https://www.theglobaleconomy.com/Ethiopia/Female_unemployment/

ET M: https://www.theglobaleconomy.com/Ethiopia/Male_unemployment/

TZ F: https://www.theglobaleconomy.com/Tanzania/Female_unemployment/

TZ M: https://www.theglobaleconomy.com/Tanzania/Male_unemployment/

KG F: https://www.theglobaleconomy.com/Kyrgyzstan/Female_unemployment/

KG M: https://www.theglobaleconomy.com/Tanzania/Male_unemployment/

UZ F: https://www.theglobaleconomy.com/Uzbekistan/Female_unemployment/

UZ M: https://www.theglobaleconomy.com/Uzbekistan/Male_unemployment/
*/
