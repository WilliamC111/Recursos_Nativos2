function changeView(){

    if(!document.startViewTransition){
        alert('No soportado');
        return;
    }

    document.startViewTransition(()=>{
        document.body.classList.toggle('dark');
    });
}