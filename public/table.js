function createth(name) {return text2html(`<th>${name}</th>`)}
let createlongtd = str => text2html(`<tr><td colspan="14">${str}</td></tr>`);

function initTable() {
    let tr = document.createElement('tr');
    tr.append(createth("樓層"));
    tr.append(createth("號碼"));
    tr.append(createth("住戶資料"));
    informations_thead.append(tr);
    informations_tbody.append(createlongtd("資料載入中"))
}