

window.onload = () => {

    //theme area

    let themeBtn = document.querySelector(".theme-btn");

    const changeTheme = () => {
        document.body.classList.toggle("dark");
        let isThemeDark = document.body.classList.contains("dark");
        themeBtn.textContent = isThemeDark ? "Light Mode" : "Dark Mode";
        localStorage.setItem("isThemeDark", document.body.classList.contains("dark") ? "dark" : "light");
    }

    if (localStorage.getItem("isThemeDark") == "dark") {
        changeTheme();
    }

    themeBtn.addEventListener("click", changeTheme);

    //clock area

    let hoursHand = document.querySelector(".hours");
    let minutesHand = document.querySelector(".minutes");
    let secondsHand = document.querySelector(".seconds");

    const updateTime = () => {

        let currentDate = new Date();

        let hoursDeg = (currentDate.getHours() % 12) * 360 / 12;
        let minutesDeg = currentDate.getMinutes() * 360 / 60;
        let secondsDeg = currentDate.getSeconds() * 360 / 60;

        hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
        minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
        secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    }

    updateTime();

    setInterval(updateTime, 1000);











}
