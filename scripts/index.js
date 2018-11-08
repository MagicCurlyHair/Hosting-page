(function slider(){
  const selectors = [...document.getElementsByClassName("slider-dot")];
  const comments = [...document.getElementsByClassName("comment")];
  let active = 0;
  let timer = setInterval(nextComment, 5000);
  comments[0].style.display = "block";
  selectors[0].className += " selected";
  selectors.forEach(selector => {
    selector.addEventListener("click", handleClick);
  })
  function handleClick(event){
    const commentId = event.target.dataset.id;
    changeComment(commentId);
  }
  function changeComment(id){
    if (typeof id !== "string"){
      id = id.toString(10);
    }
    comments.forEach(comment => {
      const selector = selectors[comment.dataset.id];
      if (comment.style.display == "block" && comment.dataset.id !== id){
        comment.style.display = "none";
        selector.className = selector.className.replace(" selected", "");
      }
      else if (comment.style.display !== "block" && comment.dataset.id === id){
        comment.style.display = "block";
        selector.className += " selected";
        active = parseInt(id, 10);
        clearInterval(timer);
        timer = setInterval(nextComment, 5000);
      }
    });
  }
  function nextComment(){
    let next = 0;
    active === comments.length - 1 ? next = 0: next = active + 1;
    changeComment(next);
  }
}());