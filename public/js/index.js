document.getElementById(`theme`).addEventListener(`click`,function(){
    let x=document.getElementById(`theme-dark`);
    let y=document.getElementById(`dropdownMenuButton2`);
    let z=document.getElementById(`dropdownMenuButton1`);
    console.log(x.classList.contains(`theme-dark`));
    if(x.classList.contains(`theme-dark`))
    {
        console.log("changing to light");
    x.classList.add(`theme-light`);
    x.classList.remove(`theme-dark`);
    y.classList.remove(`btn-secondary`);
    y.classList.add(`btn-light`);
    z.classList.remove(`btn-secondary`);
    z.classList.add(`btn-light`);
    }
    else
    {
        console.log("changing to dark");
    x.classList.add(`theme-dark`);
    x.classList.remove(`theme-light`);
    y.classList.add(`btn-secondary`);
    y.classList.remove(`btn-light`);
    z.classList.add(`btn-secondary`);
    z.classList.remove(`btn-light`);
    }
});
