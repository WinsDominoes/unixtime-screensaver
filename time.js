setInterval(() => {
    let unixtime = Math.floor(Date.now() / 1000);
    document.getElementById('unixtimetext').innerText = unixtime;

    let y2k38 = Math.floor(2147483647 - unixtime);
    document.getElementById('epochalypsetext').innerText = y2k38;
}, 1000);
