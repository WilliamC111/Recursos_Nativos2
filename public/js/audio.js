async function startRecording(){

    const stream =
        await navigator.mediaDevices.getUserMedia({
            audio:true
        });

    const recorder =
        new MediaRecorder(stream);

    recorder.start();

    console.log('Grabando...');
}