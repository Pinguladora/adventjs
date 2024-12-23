function getCompleted(part, total) {
    const [partHour, partMin, partSec] = part.split(":").map(Number);
    const [totalHour, totalMin, totalSec] = total.split(":").map(Number);

    const partTime = partHour * 3600 + partMin * 60 + partSec;
    const totalTime = totalHour * 3600 + totalMin * 60 + totalSec;

    const gcd = (a, b) => {
        if (b === 0) return a;
        const tmp = gcd(b, a % b);
        return tmp;
    }
    const gcdSec = gcd(partTime, totalTime);

    return `${partTime / gcdSec}/${totalTime / gcdSec}`;
}

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5