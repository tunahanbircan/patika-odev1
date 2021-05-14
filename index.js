function getName() {
    const name = prompt('Adınız nedir?');
    document.getElementById('myName').innerText = name;
  }
  
  function getTime(date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
  
    return {
      h: h < 10 ? `0${h}` : h,
      m: m < 10 ? `0${m}` : m,
      s: s < 10 ? `0${s}` : s,
    }
  }
  
  function showDateTime(currentTime, currentDay) {
    return `${currentTime.h}:${currentTime.m}:${currentTime.s} ${currentDay}`;
  };
  
  function getDateTime() {
   const date = new Date();
   let currentDay = date.getDay();
  
   const week = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  
   currentDay = week[currentDay - 1];
   const currentTime = getTime(date);
  
   const dateTime = showDateTime(currentTime, currentDay);
  
   document.getElementById('myClock').innerText = dateTime;
   document.getElementById('myClock').textContent = dateTime;
  
   setTimeout(getDateTime, 1000);
  }
  
  getName();
  getDateTime();