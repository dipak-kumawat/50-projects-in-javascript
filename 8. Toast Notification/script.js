const toastBox = document.getElementsByClassName('toastbox');


function showToast(){
    const  toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = "succeass";
    toastBox.appendChild(toast);
}