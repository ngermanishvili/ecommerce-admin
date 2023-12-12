
export function generateTrackingCode() {
    const prefix = 'D2D';
    const uniqueNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    return prefix + uniqueNumber;
}
