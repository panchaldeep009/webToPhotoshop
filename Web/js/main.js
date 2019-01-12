function runWait(){
    let fbId = document.querySelector('#fb_id').value,
        notExist = true;
    setInterval(function(){ 
        fetch(`data.php`)
            .then(response => response.json())
            .then(data => {
                data.forEach(it => {
                    if(it.ps_usr_data == fbId){
                        notExist = false;
                    }
                });
            });
        if(notExist){
            location.reload();
        }
    }, 3000);
}
