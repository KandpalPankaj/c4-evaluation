function storeSearchterm(term) {

term.addEventListener("keypress",function(el){
if(el.code=="Enter")
{
  let searchbar=document.getElementById("searchbar").value
  localStorage.setItem("search_term",searchbar)
  window.location.href="search.html"
}
})


}

export default storeSearchterm