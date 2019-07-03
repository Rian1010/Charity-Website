//unfinished

queue()
    .defer(d3.json, 'assets/js/data.json')
    .await(createDataVis);

function createDataVis(error, gdpData) {
    var ndx = crossfilter(gdpData);

    show_country_selector(ndx);
    show_country_data(ndx);



    dc.renderAll();
}

function show_country_selector(ndx) {
    dim = ndx.dimension(dc.pluck('country'));
    group = dim.group()

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}


function show_country_data(ndx) {
    
    /* GDP per Capita Chart */
    
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
        
    /* Gini Coefficient Chart */

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

    /* Unemployment Rate */

    var unemp_rate_dim = ndx.dimension(dc.pluck('country'));
    var draw_barchart_unemployment_rate_pie = gc_dim.group().reduceSum(dc.pluck('unemployment-rate'));
    var minRate = unemp_rate_dim.bottom(1)[0].date;
    var maxRate = unemp_rate_dim.top(1)[0].date;
    dc.pieChart('#unemployment-rate-pie-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(unemp_rate_dim)
        .group(draw_barchart_unemployment_rate_pie);



    /* Female Unemployment Rate */

    var unemp_rate_year_dim = ndx.dimension(dc.pluck('year'));
    var unemp_rate_genders_dim = unemp_rate_year_dim.group().reduceSum(dc.pluck('female-unemployment-rate-2015'));

    function female_unemployment_rate_by_country(country) {
        return function(d) {
            if (d.country === country) {
                return +d.country;
            }
            else {
                return 0;
            }
        }
    }
    var femaleUnempRateDRC = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('DRC'));
    var femaleUnempRateMZ = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('MZ'));
    var femaleUnempRateUG = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('UG'));
    var femaleUnempRateTJ = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('TJ'));
    var femaleUnempRateYE = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('YE'));
    var femaleUnempRateHT = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('HT'));
    var femaleUnempRateET = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('ET'));
    var femaleUnempRateTZ = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('TZ'));
    var femaleUnempRateKG = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('KG'));
    var femaleUnempRateUZ = unemp_rate_year_dim.group().reduceSum(female_unemployment_rate_by_country('UZ'));


    var compositeChart = dc.compositeChart('#unemployment-rate-female');

    compositeChart
        .width(990)
        .height(400)
        .dimension(unemp_rate_year_dim)
        .x(d3.time.scale())
        .yAxisLabel("Female Unemployment Rate")

        .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
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
