async function openFileSystem(){

    try{

        const [fileHandle] =
            await window.showOpenFilePicker();

        const file = await fileHandle.getFile();

        alert(`Archivo: ${file.name}`);

    }catch(error){
        console.error(error);
    }
}