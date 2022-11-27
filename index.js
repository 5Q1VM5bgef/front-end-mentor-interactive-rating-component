let ratingChosen = 0

document.getElementById('myBtn').addEventListener('click', changeCard)
document.getElementById('1').addEventListener('click', setRating1)
document.getElementById('2').addEventListener('click', setRating2)
document.getElementById('3').addEventListener('click', setRating3)
document.getElementById('4').addEventListener('click', setRating4)
document.getElementById('5').addEventListener('click', setRating5)


function changeBg() {

}

function changeCard() {

    if (ratingChosen !== 0) {
        document.getElementById('chosen-rating').innerHTML = ratingChosen
    
        document.getElementById("fc").style.display = 'none';
        document.getElementById("tc").style.display = 'flex';
    } else {
        alert('Choose a rating to continue!')
    }

}

function clearRating() {
    document.getElementById('1').style.backgroundColor = 'var(--medium-grey)';
    document.getElementById('2').style.backgroundColor = 'var(--medium-grey)';
    document.getElementById('3').style.backgroundColor = 'var(--medium-grey)';
    document.getElementById('4').style.backgroundColor = 'var(--medium-grey)';
    document.getElementById('5').style.backgroundColor = 'var(--medium-grey)';
}

function setRating1() {
    ratingChosen = 1
    clearRating();
    document.getElementById('1').style.backgroundColor = 'var(--orange)';
}
function setRating2() {
    ratingChosen = 2
    clearRating();
    document.getElementById('2').style.backgroundColor = 'var(--orange)';
}
function setRating3() {
    ratingChosen = 3
    clearRating();
    document.getElementById('3').style.backgroundColor = 'var(--orange)';
}
function setRating4() {
    ratingChosen = 4  
    clearRating();
    document.getElementById('4').style.backgroundColor = 'var(--orange)';
}
function setRating5() {
    ratingChosen = 5
    clearRating();
    document.getElementById('5').style.backgroundColor = 'var(--orange)';
}