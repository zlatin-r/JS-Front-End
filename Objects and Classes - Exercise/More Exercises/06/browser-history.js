function solve(browserData, commands) {

    function addActionToLogs(el, arr) {
        arr.push(el);
    }

    function clearHistory(obj) {
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].length = 0;
            }
        }
    }

    for (let line of commands) {
        if (line !== 'Clear History and Cache') {
            let [action, site] = line.split(' ');

            if (action === 'Open') {
                browserData["Open Tabs"].push(site);
                addActionToLogs(line, browserData['Browser Logs']);
            } else if (action === 'Close') {
                if (browserData['Open Tabs'].includes(site)) {
                    browserData['Recently Closed'].push(site);
                    browserData['Open Tabs'] = browserData['Open Tabs'].filter(tab => tab !== site);
                    addActionToLogs(line, browserData['Browser Logs']);
                }
            }
        } else {
            clearHistory(browserData)
        }
    }
    console.log(browserData['Browser Name']);
    console.log(`Open Tabs: ${browserData['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserData['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserData['Browser Logs'].join(', ')}`);
}

solve({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)
