document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.circle button');
  const texts = document.querySelectorAll('.circle button p');
  const centerBtn = document.querySelector('.center')
  const centerIcon = document.querySelector('.center i')
  const circleButtons = document.querySelectorAll('.circle button');

  centerBtn.addEventListener('click', () =>{
    centerIcon.style.color = 'red';
  })

  icons.forEach((icon, index) => {
    icon.addEventListener('mouseover', () => {
      texts[index].style.opacity = '1';
    });
      
    icon.addEventListener('mouseout', () => {
      texts[index].style.opacity = '0';
    });

  });

  function hiddenState() {
    circleButtons.forEach((button) => {
      button.style.position = 'absolute';
      button.style.top = '50%'; 
      button.style.left = '50%';
      button.style.transform = 'translate(-50%, -50%)'; 
      button.style.opacity = '0'; 
      button.style.transition = 'all 0.5s ease';
    });

    centerBtn.addEventListener('click', () => {
      circleButtons.forEach((button, index) => {
        setTimeout(() => {
          button.style.opacity = '1'; 
          button.style.top = ''; 
          button.style.left = '';
          button.style.transform = ''; 
        }, index * 50);
      });
    });
    
  }
  hiddenState();

});


