function startOrientation(){

    window.addEventListener(
        'deviceorientation',
        (event)=>{

            console.log(event.alpha);
            console.log(event.beta);
            console.log(event.gamma);

        }
    );
}