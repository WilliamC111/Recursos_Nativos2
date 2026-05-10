async function startMotion() {

    const output =
        document.getElementById('motionData');

    try {

        // iPhone / iOS
        if (
            typeof DeviceMotionEvent !== "undefined" &&
            typeof DeviceMotionEvent.requestPermission === "function"
        ) {

            const permission =
                await DeviceMotionEvent.requestPermission();

            if (permission !== "granted") {

                alert("Permiso denegado");
                return;

            }

        }

        window.addEventListener(
            'devicemotion',
            (event) => {

                const acc =
                    event.accelerationIncludingGravity;

                output.innerHTML = `
                    X: ${acc.x?.toFixed(2)} <br>
                    Y: ${acc.y?.toFixed(2)} <br>
                    Z: ${acc.z?.toFixed(2)}
                `;

            }
        );

    } catch (error) {

        console.error(error);

    }

}