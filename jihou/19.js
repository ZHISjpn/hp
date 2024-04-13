// ダイアログを表示する関数
function showDialog() {
    alert("ZHISが午後7時くらいをお知らせします。");
}

// 特定の時刻（毎日の午後7時0分0秒）にダイアログを表示する関数
function checkTimeAndShowDialog() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 毎日の午後7時0分0秒の場合にダイアログを表示
    if (hours === 19 && minutes === 0 && seconds === 0) {
        showDialog();
    }
}

// ページ読み込み時に実行
window.onload = function() {
    // 1秒ごとに時刻をチェック
    setInterval(checkTimeAndShowDialog, 1000); // 1秒ごとにチェック
};