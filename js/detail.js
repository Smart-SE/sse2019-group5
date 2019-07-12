$(function() {

function display_bar(url_path, cvs, data_label_id, bgcolor){
    const DATA_LABEL_NAME = ['比率(%)','量']
    const LABEL_LST = ["エネルギー(kcal)", "タンパク質(g)", "脂質(g)",
        "糖質(g)", "食物繊維(g)", "カリウム(mg)",
         "カルシウム(mg)", "鉄(mg)", "マグネシウム(mg)", "リン(mg)", "ビタミンＡ(μg)",
         "ビタミンＢ１(mg)", "ビタミンＢ２(mg)", "ビタミンＢ６(mg)", "ビタミンＢ１２(mg)", 
         "ナイアシン(mg)", "パントテン酸(mg)", "葉酸(μg)", "ビタミンＣ(mg)", 
         "ビタミンＤ(μg)", "ビタミンＥ(mg)"]
    const CONS_TARGET_INGS = ["energy","protein","lipid",
        "sugar","dietary_fiber","potassium",
        "calcium", "iron","magnesium","rin","vitamin_a",
        "vitamin_b1","vitamin_b2","vitamin_b6","vitamin_b12",
        "niacin","pantothenic_acid","folic_acid","vitamin_c",
        "vitamin_d","vitamin_e"
        ];
        // "sodium",

    $.getJSON(url_path, function(balance) {
        var ctx = $(cvs).get(0);
        var data_ary = [];
        for (var bal in balance){
            if (CONS_TARGET_INGS.indexOf(bal) >= 0){
                console.log(bal);
                data_ary.push(balance[bal]);
            }
        }
        console.log(data_ary);

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
                    label: DATA_LABEL_NAME[data_label_id],
                    data: data_ary,
                    backgroundColor: bgcolor
                }]
            }
            // options: options,
            // plugins: labelplugin
        });
    });
}


//--------------------------------------------------
// event litenter

const BG_COLOR = ['royalblue', 'red', 'teal']

$('#btn_weekly').on('click', function() {
    const CONS_URI = "http://localhost:3004/"
    const CONS_PATH = "histories/"
    var uri_path = CONS_URI + CONS_PATH
    var btn = $(event.relatedTarget);
    console.log(btn);
    var course_id = btn.data('button'); // bottonの値を引き継げない！！
    console.log("clicked with "+ course_id);
    course_id = 1
    display_bar(url_path=uri_path + course_id, cnv='#weekly_chart', data_label_id=0,bgcolor=BG_COLOR[0]);
});


$('#btn_course').on('click', function() {
    const CONS_URI = "http://localhost:3004/"
    const CONS_PATH = "histories/"
    var uri_path = CONS_URI + CONS_PATH
    var btn = $(event.relatedTarget);
    console.log(btn);
    var course_id = btn.data('button'); // bottonの値を引き継げない！！
    console.log("clicked with "+ course_id);
    course_id = 1
    display_bar(url_path=uri_path + course_id, cnv='#course_chart', data_label_id=0,bgcolor=BG_COLOR[2]);
});


$('#btn_menu1').on('click', function() {
    const CONS_URI = "http://localhost:3004/"
    const CONS_PATH = "ingredients/"
    var uri_path = CONS_URI + CONS_PATH
    var btn = $(event.relatedTarget);
    console.log(uri_path)
    console.log(btn);
    var menu_id = btn.data('button'); // bottonの値を引き継げない！！
    console.log("ingredient clicked with "+ menu_id);
    menu_id = 1
    display_bar(url_path=uri_path + menu_id, cnv='#ingredient_chart', data_label_id=1,bgcolor=BG_COLOR[1]);
});


$('#btn_menu2').on('click', function() {
    const CONS_URI = "http://localhost:3004/"
    const CONS_PATH = "ingredients/"
    var uri_path = CONS_URI + CONS_PATH
    var btn = $(event.relatedTarget);
    console.log(uri_path)
    console.log(btn);
    var menu_id = btn.data('button'); // bottonの値を引き継げない！！
    console.log("ingredient clicked with "+ menu_id);
    menu_id = 198
    display_bar(url_path=uri_path + menu_id, cnv='#ingredient_chart', data_label_id=1,bgcolor=BG_COLOR[1]);
});

$('#btn_menu3').on('click', function() {
    const CONS_URI = "http://localhost:3004/"
    const CONS_PATH = "ingredients/"
    var uri_path = CONS_URI + CONS_PATH
    var btn = $(event.relatedTarget);
    console.log(uri_path)
    console.log(btn);
    var menu_id = btn.data('button'); // bottonの値を引き継げない！！
    console.log("ingredient clicked with "+ menu_id);
    menu_id = 79
    display_bar(url_path=uri_path + menu_id, cnv='#ingredient_chart', data_label_id=1,bgcolor=BG_COLOR[1]);
});


});
