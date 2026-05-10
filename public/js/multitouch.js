function enableMultitouch(){

    document.body.addEventListener(
        'touchmove',
        (e)=>{

            console.log(
                e.touches.length
            );

        }
    );
}