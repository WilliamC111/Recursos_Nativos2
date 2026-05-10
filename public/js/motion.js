function startMotion(){

    window.addEventListener(
        'devicemotion',
        (event)=>{

            console.log(
                event.acceleration
            );

        }
    );
}