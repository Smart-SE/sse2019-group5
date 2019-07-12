$(function() {

function display_bar(url_path, cvs, bgcolor){
    $.getJSON(url_path, function(balance) {
        var ctx = $(cvs).get(0);
        var data_ary = [];
        for (var bal in balance){
            if (bal != 'id'){
                data_ary.push(balance[bal]);
            }
        }
        //console.log(data_ary);

        var options = {
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            tooltips: {
                enabled: false
            }
        };

        var chart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: LABEL_LST,
                datasets: [{
                    label: DATA_LABEL_NAME,
                    data: data_ary,
                    backgroundColor: bgcolor
                }]
            }
            // options: options,
            // plugins: labelplugin
        });
    });
}

const LABEL_LST = ["エネルギー(kcal)", "タンパク質(g)", "脂質(g)", "糖質(g)", "食物繊維(g)", "カリウム(mg)", "カルシウム(mg)", "鉄(mg)", "マグネシウム(mg)", "リン(mg)", "ビタミンＡ(μg)", "ビタミンＢ１(mg)", "ビタミンＢ２(mg)", "ビタミンＢ６(mg)", "ビタミンＢ１２(mg)", "ナイアシン(mg)", "パントテン酸(mg)", "葉酸(μg)", "ビタミンＣ(mg)", "ビタミンＤ(μg)", "ビタミンＥ(mg)"]
const DATA_LABEL_NAME = '達成度(%)'
const BG_COLOR = ['red', 'royalblue', 'teal']
const CONS_URI = "http://localhost:3004/"
const CONS_PATH = "histories/"
var uri_path = CONS_URI + CONS_PATH

display_bar(url_path=uri_path + 1, cnv='#chart', bgcolor=BG_COLOR[0]);
display_bar(url_path=uri_path + 2, cnv='#chart_sub1', bgcolor=BG_COLOR[1]);
display_bar(url_path=uri_path + 3, cnv='#chart_sub2', bgcolor=BG_COLOR[2]);

});
