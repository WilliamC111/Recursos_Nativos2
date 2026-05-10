async function registerBiometric(){

    try{

        const publicKey = {
            challenge: new Uint8Array(32),
            rp:{
                name:"PWA Demo"
            },
            user:{
                id:new Uint8Array(16),
                name:"usuario@test.com",
                displayName:"Usuario"
            },
            pubKeyCredParams:[
                {
                    type:"public-key",
                    alg:-7
                }
            ]
        };

        const credential =
            await navigator.credentials.create({
                publicKey
            });

        console.log(credential);

    }catch(error){
        console.error(error);
    }
}