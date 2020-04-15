document.addEventListener("DOMContentLoaded", function() {
  MicroModal.init({
    openTrigger: 'data-micromodal-open',
    closeTrigger: 'data-micromodal-close',
    openClass: 'is-open',
    disableFocus: false,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    debugMode: true
  });

  // Quiz 

  let page = 1

  const store = document.querySelectorAll('.store')
  const next = document.getElementById('next')
  const prev = document.getElementById('prev')
  const currentPage = document.getElementById('current-page')
  const header = document.querySelector('.header')

  changePage(page)

  prev.addEventListener('click', function() {
    if (page !== 1) {
      page--
      changePage(page)
    }
  })

  next.addEventListener('click', function() {
    if (page !== 6 && isCheck('question-' + page)) {
      page++
      changePage(page)
    }
  })

  function changePage(page){
    currentPage.innerHTML = page
    store.forEach(function(item, index) {
      if (page !== index + 1) {
        item.classList.add("d-none")
        item.classList.remove("d-block")
      }
      if (page === index + 1) {
        item.classList.remove("d-none")
        item.classList.add("d-block")
      }
    })

    if (page === 1) {
      prev.classList.add("hidden")
    } else {
      prev.classList.remove("hidden")
    }
    if (page === 6) {
      header.classList.add("d-none")
      next.classList.add("hidden")
    } else {
      header.classList.remove("d-none")
      next.classList.remove("hidden")
    }
  }

  function isCheck(name) {
    let arr = document.querySelectorAll('input[name="' + name + '"]:checked');
    if (arr.length > 0) return true
  }
  // End Quiz 

  // Submit
  const forms = document.querySelectorAll('.form')
  forms.forEach(function(item) {
    item.addEventListener('submit', function(e){
      e.preventDefault()
      sendData(this)
    })
  })
  
  function sendData(form) {
    const XHR = new XMLHttpRequest();
    const FD = new FormData(form);
    XHR.withCredentials = true;
    XHR.addEventListener("load", function() {
      let success = form.querySelector('.success');
      success.classList.add('active');
      setTimeout(function() {
        success.classList.remove('active');
        form.reset();
      }, 5000);
  
    });
    XHR.addEventListener("error", function() {
      console.log('Something went wrong.');
    });
    XHR.open("POST", "../mail.php", true);
    XHR.send(FD);
  }
  // End submit
});