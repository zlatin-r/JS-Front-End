function solve(arr) {
    let gramGold = 67.51
    let oneBitcoin = 11949.16
    let totalMoney = 0
    let totalCoins = 0
    let firstPurchasedCoin = 0

    for (let i = 0; i < arr.length; i++) {
        let dailyGold = Number(arr[i]);

        if ((i + 1) % 3 === 0) {
            dailyGold *= 0.70
        }

        let earnedMoney = dailyGold * gramGold

        totalMoney += earnedMoney

        if (totalMoney >= oneBitcoin) {
            if (firstPurchasedCoin === 0) {
                firstPurchasedCoin = i + 1
            }
            while (totalMoney >= oneBitcoin) {
                totalMoney -= oneBitcoin
                totalCoins += 1
            }
        }
    }

    console.log(`Bought bitcoins: ${totalCoins}`)
    if (firstPurchasedCoin) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchasedCoin}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

solve([100, 200, 300])
solve([50, 100])
solve([3124.15, 504.212, 2511.124])
