document.addEventListener('DOMContentLoaded', function () {
    const mobileList = document.getElementById('mob');
    
    mobileList.addEventListener('click', function (event) {
        const target = event.target;
        
        if (target.tagName === 'LI') {
            const hiddenNumber = target.querySelector('.peida');
            
            if (hiddenNumber) {
                hiddenNumber.classList.remove('peida');
            }
        }
    });
});
