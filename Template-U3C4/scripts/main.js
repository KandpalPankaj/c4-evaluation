async function apiCall(url) {
try{
    let res=await fetch(url);
    let data=await res.json();
    return data;
}
catch(err){
    console.log(' err', err);
}



}


function appendArticles(articles, main) {

    articles.map(function (el){

        let div=document.createElement("div");
        let top=document.createElement("h3");
        top.textContent=el.description;
        top.onclick=function(){
            localStorage.setItem("article",JSON.stringify(el));
            window.location.href="news.html"
        }
        div.append(top);
        main.append(div);
    })
  

}

export { apiCall, appendArticles }