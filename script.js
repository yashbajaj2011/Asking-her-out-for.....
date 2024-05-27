function showSecondPage() {
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
}

function showThirdPage() {
    document.getElementById('secondPage').style.display = 'none';
    document.getElementById('thirdPage').style.display = 'block';
}

function showSuccessPage() {
    document.getElementById('thirdPage').style.display = 'none';
    document.getElementById('successPage').style.display = 'block';
}

function retry() {
    alert('Wrong choice, Please try again');
    document.getElementById('thirdPage').style.display = 'block';
}
