let  toastBox = document.querySelector('.toastbox');
let Success = '<i class="fa-regular fa-circle-check"></i>Successfully submitted';
let error = '<i class="fa-regular fa-circle-xmark"></i>Please fix the error!';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';


function showToast(msg){
    const  toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    
    setTimeout(() =>{
        toast.remove();
    }, 3000)
}
if(msg.includes('error')){
    toast.classList.add('error');
    document.toast.style.Color = 'orange';
}
if(msg.includes('invalid')){
    toast.classList.add('invalid');
}

