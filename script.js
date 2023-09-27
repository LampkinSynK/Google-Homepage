
// funtion for searchbar to connect to google
searchUp = () => {
    let input = document.getElementById("searchbar").value;
    if (input){
    window.location.assign("https://www.google.com/search?q="+input);
    }
  }
  
  //redirect to google trends
  
  trendy = () => {
    window.location.assign("https://trends.google.com/trends/trendingsearches/daily?geo=US&hl=en-US");
  }
  
  // function for images searchbar to connect to google images
  
  searchUpimg = () => {
    let input = document.getElementById("searchbar").value;
    if (input){
    window.location.assign("https://www.google.com/search?tbm=isch&q="+input);
    }
  }
  
  
  // funtion for advanced search connected to google advanced search
  advSearch = () => {
    let important = document.getElementById("important").value;
    let exact = document.getElementById("exact").value;
    let any = document.getElementById("any").value;
    let minus = document.getElementById("minus").value;
    let firstRange = document.getElementById("firstRange").value;
    let secondRange = document.getElementById("secondRange").value;
    window.location.assign(`https://www.google.com/search?as_q=${important}&as_epq=${exact}&as_oq=${any}&as_eq=${minus}&as_nlo=${firstRange}&as_nhi=${secondRange}&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=`);
  }