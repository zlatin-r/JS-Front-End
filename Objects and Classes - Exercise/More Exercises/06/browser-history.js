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

solve({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate",
            "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)