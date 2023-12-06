//open mega menue
let megaMenue = document.querySelector(".mega-menue");
let otherLink = document.querySelector(".othelinks");
let close = document.querySelector(".close");
otherLink.onclick = function () {
    megaMenue.classList.add("open");
};
close.onclick = function () {
    megaMenue.classList.remove("open");
};
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        megaMenue.classList.remove("open");
    }
};

//slider in gallary section only

// let sliderNumberElement = document.getElementById("slide-num");
// let prevButton = document.getElementById("prev");
// let nextButton = document.getElementById("next");

// let sliderbox = Array.from(document.querySelectorAll(".slider-container .box"));
// let sliderCount = sliderbox.length;
// let bulletsElementUl = document.createElement("ul");
// for(var i = 0; i<sliderCount ; i++){
//     let bulletsItemLi = document.createElement("li");
//     bulletsItemLi.appendChild(document.createTextNode(i+1));
//     bulletsElementUl.appendChild(bulletsItemLi);
// }
// document.getElementById("bullets").appendChild(bulletsElementUl);

// let bulletsArr = Array.from(document.querySelectorAll(".bullets ul li"));

// let currentSlide = 1;

// dataIdetor();
// function dataIdetor(){
//     sliderNumberElement.textContent = `Slide #${currentSlide} Of ${sliderCount}`;

//     deleteAllActive();

//     sliderbox[currentSlide - 1].classList.add("active");
//     bulletsArr[currentSlide - 1].classList.add("active");

//     if(currentSlide === 1){
//         prevButton.classList.add("disabled");
//     }else{
//         prevButton.classList.remove("disabled");
//     }

//     if(currentSlide === sliderCount){
//         nextButton.classList.add("disabled");
//     }else{
//         nextButton.classList.remove("disabled");
//     }
// };

// prevButton.onclick = function prevSlide(){
//     if(currentSlide === 1){
//         return false;
//     }else{
//         currentSlide--;
//         dataIdetor();
//     }
// };
// nextButton.onclick = function nextSlide(){
//     if(currentSlide === sliderCount){
//         return false;
//     }else{
//         currentSlide++;
//         dataIdetor();
//     }
// };
// for(var i = 0; i < bulletsArr.length; i++){
//     bulletsArr[i].onclick = function(){
//         currentSlide = parseInt(this.textContent);
//         dataIdetor();
//     }
// }

// function deleteAllActive(){
//     sliderbox.forEach((box)=>{
//         box.classList.remove("active");
//     });
//     bulletsArr.forEach((li)=>{
//         li.classList.remove("active");
//     });
// };

//slider for more one section with dynamic function
function initializeSlider(sectionId) {
    let sliderNumberElement = document.getElementById(`${sectionId}-slide-num`);
    let prevButton = document.getElementById(`${sectionId}-prev`);
    let nextButton = document.getElementById(`${sectionId}-next`);

    let sliderbox = Array.from(
        document.querySelectorAll(`#${sectionId} .slider-container .box`)
    );
    let sliderCount = sliderbox.length;
    let bulletsElementUl = document.createElement("ul");

    for (let i = 0; i < sliderCount; i++) {
        let bulletsItemLi = document.createElement("li");
        bulletsItemLi.appendChild(document.createTextNode(i + 1));
        bulletsElementUl.appendChild(bulletsItemLi);
    }

    document.getElementById(`${sectionId}-bullets`).appendChild(bulletsElementUl);

    let bulletsArr = Array.from(
        document.querySelectorAll(`#${sectionId} .bullets ul li`)
    );

    let currentSlide = 1;

    dataIdetor();

    function dataIdetor() {
        sliderNumberElement.textContent = `Slide #${currentSlide} Of ${sliderCount}`;

        deleteAllActive();

        sliderbox[currentSlide - 1].classList.add("active");
        bulletsArr[currentSlide - 1].classList.add("active");

        if (currentSlide === 1) {
            prevButton.classList.add("disabled");
        } else {
            prevButton.classList.remove("disabled");
        }

        if (currentSlide === sliderCount) {
            nextButton.classList.add("disabled");
        } else {
            nextButton.classList.remove("disabled");
        }
    }

    prevButton.onclick = function prevSlide() {
        if (currentSlide === 1) {
            return false;
        } else {
            currentSlide--;
            dataIdetor();
        }
    };

    nextButton.onclick = function nextSlide() {
        if (currentSlide === sliderCount) {
            return false;
        } else {
            currentSlide++;
            dataIdetor();
        }
    };

    for (let i = 0; i < bulletsArr.length; i++) {
        bulletsArr[i].onclick = function () {
            currentSlide = parseInt(this.textContent);
            dataIdetor();
        };
    }

    function deleteAllActive() {
        sliderbox.forEach((box) => {
            box.classList.remove("active");
        });
        bulletsArr.forEach((li) => {
            li.classList.remove("active");
        });
    }
}

initializeSlider("Gallery");
// initializeSlider("section has slider just in mobile"); //will write in function updateContainerClass() when width <767 as large screen doesn't have slider

// make some sections have a slider in mobalil sceene only bay add class sliderContainer
function updateContainerClass() {
    var container = document.getElementById("sliderContainer");

    if (window.innerWidth > 767) {
        container.classList.remove("slider-container");
        container.classList.add("container");
    } else {
        container.classList.remove("container");
        container.classList.add("slider-container");

        initializeSlider("Testimonials");
    }
}

// Initial call to set the initial class based on the screen width
updateContainerClass();

// Add event listener to update the class when the window is resized
window.addEventListener("resize", function () {
    deleteMultibleUL("Testimonials"); //to remove multible ul when resize
    updateContainerClass();
});

function deleteMultibleUL(sectionId) {
    var existingUl = document.querySelector(`#${sectionId}-bullets ul`);
    if (existingUl) {
        existingUl.remove();
    }
}




//scroll persentage line
let scrollLine = document.querySelector(".scroller");
let height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scrollLine.style.width = `${(scrollTop / height) * 100}%`;
});

//onscroll functions for (scroll top, skill progress, stats counter).
let up = document.querySelector(".up");

let progSection = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".our-skills .the-progress span");

let statsSection = document.querySelector(".stats");
let statsCounter = document.querySelectorAll(".stats .box .number");
let started = false; //counter started? no
window.onscroll = function () {
    //scroll top icon:-
    // this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");       or:-
    document.documentElement.scrollTop >= document.documentElement.clientHeight
        ? up.classList.add("show")
        : up.classList.remove("show");

    //skill progress:-
    if (window.scrollY >= progSection.offsetTop - window.innerHeight / 2) {
        progSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

    //stats Counter:-
    if (window.scrollY >= statsSection.offsetTop - window.innerHeight / 2) {
        if (!started) {
            statsCounter.forEach((span) => {
                let goal = parseInt(span.dataset.goal);
                let currentCount = span.textContent;
                let counter = setInterval(() => {
                    span.textContent = ++currentCount;
                    if (currentCount === goal) {
                        clearInterval(counter);
                    }
                }, 1000 / goal);
            });
        }
        started = true;
    }
};
up.onclick = function () {
    window.scrollTo({ top: 0 });
};

//time handel for events section
let countDownDate = new Date("Jun 30,2026 23:59:59").getTime();
let counter = setInterval(() => {
    let datenow = new Date().getTime();
    let dateDiff = countDownDate - datenow;
    //get time unites
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    //handel to print in screen
    document.querySelector(".events .days").innerHTML =
        days < 100 ? `0${days}` : days < 10 ? `00${days}` : days;
    document.querySelector(".events .hours").innerHTML =
        hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .seconds").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

//handel texterea Request A Discount
let count = document.querySelector(".discount .form .count");
let progress = document.querySelector(".discount .form .progress");
let textArea = document.querySelector(".discount .form .textarea");
let maxLength = textArea.getAttribute("maxlength");
count.innerHTML = maxLength;
textArea.oninput = function () {
    count.innerHTML = maxLength - this.value.length;
    progress.style.width = `${(this.value.length / maxLength) * 100}%`;
    // count.innerHTML <= 5 ? count.classList.add("zero") : count.classList.remove("zero");/
    if (count.innerHTML <= 5) {
        count.classList.add("nearZeroCnt");
        progress.classList.add("nearZeroProg");
    } else {
        count.classList.remove("nearZeroCnt");
        progress.classList.remove("nearZeroProg");
    }
};
