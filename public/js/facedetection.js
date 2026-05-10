async function detectFace(){

    if(!('FaceDetector' in window)){
        alert('No soportado');
        return;
    }

    const detector = new FaceDetector();

    console.log(detector);
}