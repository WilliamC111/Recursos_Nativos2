async function captureScreen(){

    const stream =
        await navigator.mediaDevices.getDisplayMedia({
            video:true
        });

    console.log(stream);
}