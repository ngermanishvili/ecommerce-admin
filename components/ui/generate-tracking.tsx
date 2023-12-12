"use client"
const GenerateTrackingCode = () => {
    function generateTrackingCode(): string {
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers: string = '0123456789';

        let trackingCode: string = 'CTAFT';
        for (let i: number = 0; i < 7; i++) {
            trackingCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        trackingCode += 'YQ';

        return trackingCode;
    }

    // Generate the tracking code
    const trackingCode: string = generateTrackingCode();

    return (
        <div>
            <h1>Generated Tracking ID</h1>
            <p>{trackingCode}</p>
        </div>
    );
}

export default GenerateTrackingCode;


