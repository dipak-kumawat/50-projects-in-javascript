const toastBox = document.querySelector('.toastbox');



function showToast(message){
    const  toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;
    toastBox.appendChild(toast);
    
    setTimeout(() =>{
        toast.remove();
    }, 3000)
}


