function handleResize() {
    var form = document.querySelector('form');
    var screenWidth = window.innerWidth;
    
    if (screenWidth >= 768) {
      form.style.display = 'flex';
      form.style.flexWrap = 'wrap';
      form.style.justifyContent = 'space-between';
      
      var inputs = form.querySelectorAll('input');
      inputs.forEach(function(input) {
        input.style.width = 'calc(33.33% - 10px)';
        input.style.marginRight = '10px';
      });
    } else {
      form.style.display = 'block';
      form.style.marginLeft = 'auto';
      form.style.marginRight = 'auto';
      
      var inputs = form.querySelectorAll('input');
      inputs.forEach(function(input) {
        input.style.width = '100%';
        input.style.marginRight = '0';
      });
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();
  