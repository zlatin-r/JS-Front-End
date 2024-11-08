function solve(input) {
    let [browserData, commands] = input.split(', ');

    for (let line of commands) {
        if (line !== 'Clear History and Cache') {
            let [action, site] = line.split(' ');
            if (action === 'Open') {
                browserData["Open Tabs"].push(site);
            } else if (action === 'Close') {
                if (browserData['Open Tabs'].includes(site)) {
                    browserData['Recently Closed'].push(site);

                }
            }
        }
    }

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