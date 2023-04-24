function generateStars() {
   const starsContainer = document.querySelector('.stars-container');
   const numStars = 100;
   const starSize = 2;
   const starColor = 'white';
   const lineColor = 'rgba(255, 255, 255, 0.5)';
   const stars = [];
   for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;
      star.style.backgroundColor = starColor;
      stars.push(star);
      starsContainer.appendChild(star);
   }
   for (let i = 0; i < numStars; i++) {
      for (let j = i + 1; j < numStars; j++) {
         const line = document.createElement('div');
         line.classList.add('line');
         line.style.backgroundColor = lineColor;
         starsContainer.appendChild(line);
         animateLine(line, stars[i], stars[j]);
      }
   }
}

function animateLine(line, star1, star2) {
   const lineLength = getDistance(star1, star2);
   const angle = getAngle(star1, star2);
   line.style.width = `${lineLength}px`;
   line.style.transform = `rotate(${angle}rad) translate(-50%, -50%)`;
   line.style.top = `${(star1.offsetTop + star2.offsetTop) / 2}px`;
   line.style.left = `${(star1.offsetLeft + star2.offsetLeft) / 2}px`;
   line.style.opacity = '0';
   setTimeout(() => {
      line.style.opacity = '1';
   }, 1000);
   setTimeout(() => {
      animateLine(line, star1, star2);
   }, 5000);
}

function getDistance(star1, star2) {
   const x1 = star1.offsetLeft;
   const y1 = star1.offsetTop;
   const x2 = star2.offsetLeft;
   const y2 = star2.offsetTop;
   const xDiff = x2 - x1;
   const yDiff = y2 - y1;
   return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
}

function getAngle(star1, star2) {
   const x1 = star1.offsetLeft;
   const y1 = star1.offsetTop;
   const x2 = star2.offsetLeft;
   const y2 = star2.offsetTop;
   const xDiff = x2 - x1;
   const yDiff = y2 - y1;
   return Math.atan2(yDiff, xDiff);
}