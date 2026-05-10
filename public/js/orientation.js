async function startOrientation() {

    const output =
        document.getElementById('orientationData');

    try {

        // iPhone / iOS
        if (
            typeof DeviceOrientationEvent !== "undefined" &&
            typeof DeviceOrientationEvent.requestPermission === "function"
        ) {

            const permission =
                await DeviceOrientationEvent.requestPermission();

            if (permission !== "granted") {

                alert("Permiso denegado");
                return;

            }

        }

        window.addEventListener(
            'deviceorientation',
            (event) => {

                output.innerHTML = `
                    Alpha: ${event.alpha?.toFixed(2)} <br>
                    Beta: ${event.beta?.toFixed(2)} <br>
                    Gamma: ${event.gamma?.toFixed(2)}
                `;

            }
        );

    } catch (error) {

        console.error(error);

    }

}