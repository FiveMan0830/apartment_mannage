let show_data = [];
let datas = [];

let creatediv = str => text2html(`<td><div title="${str}">${str}</div></td>`);
let createop = str => text2html(`<option value="${str}">${str}</option>`);
let file_path = "./public/data.csv";

let file_data = await fetch(file_path).then(function(body){
    return body.text();
});

let data_table = file_data.split("\r\n").map(function (line) {
    return line.split(",");
});

let door_num_table = ["全部", 126, 128, 130, 132];
let floor_table = ["全部", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function sw_floor() {
    show();
}

function sw_door_num() {
    show();
}

function show() {
    let f_n = floor.value;
    let d_n = door_num.value;

    show_data = [];
    informations_tbody.innerHTML = '';
    datas.forEach(v => {
        if((f_n == v.floor && d_n == v.number)
        || (f_n == "全部" && d_n == v.number)
        || (f_n == v.floor && d_n == "全部")
        || (f_n == "全部" && d_n == "全部")) {
            informations_tbody.append(v.html);
            show_data.push(v);
        }
    })
}

floor.onchange = sw_floor;
door_num.onchange = sw_door_num;

floor_table.forEach((v) => {
    floor.append(createop(v.toString()));
});

door_num_table.forEach((v) => {
    door_num.append(createop(v.toString()));
});

initTable();

datas = data_table.map(row => {
    let r = {
        'floor': row[0],
        'number': row[1],
        'data': row[2],
        // '備註': row[3] 
    }

    let tr = document.createElement('tr');
    tr.append(creatediv(r.floor));
    tr.append(creatediv(r.number));
    tr.append(creatediv(r.data));
    // tr.append(creatediv(r.備註));

    r.html = tr;
    return r;
});

datas.shift();

show();
