function enableMultitouch() {

    const area =
        document.getElementById('touchArea');

    const output =
        document.getElementById('touchData');

    area.addEventListener(
        'touchmove',
        (event) => {

            event.preventDefault();

            output.innerHTML =
                `Dedos detectados: ${event.touches.length}`;

        },
        { passive: false }
    );

}