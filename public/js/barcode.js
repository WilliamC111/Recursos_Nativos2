async function scanBarcode(){

    if(!('BarcodeDetector' in window)){
        alert('No soportado');
        return;
    }

    const detector = new BarcodeDetector({
        formats:['qr_code']
    });

    console.log(detector);
}