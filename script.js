function myfun(){
    var x= "Login";
    document.getElementById("val").value = x;

}

function my(){
    var y = "Logout";
    document.getElementById("val").value = y;
    
}

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzypRB3teWEJkWsKTJglXVVllTzkz5VPQ7DYc_cL1UIrz3Uab3-PzDgMSXG3sSAmJdp/exec'
        const form = document.forms['google-sheet']

        
      
        form.addEventListener('submit', e => {
         
           
var swa = (document.getElementById("text1").value);
           


     if(  ( document.getElementById("text1").value == "Janaki"
       && document.getElementById("text2").value == "janaki@123" ) ||
       ( document.getElementById("text1").value == "Mani"
       && document.getElementById("text2").value == "mani@123" ) ||
       ( document.getElementById("text1").value == "Poovarasan"
       && document.getElementById("text2").value == "poovarasan@123" ) ||
       ( document.getElementById("text1").value == "Ibrahim"
       && document.getElementById("text2").value == "ibrahim@123" ) ||
       ( document.getElementById("text1").value == "Subash"
       && document.getElementById("text2").value == "subash@123" ) ||
       ( document.getElementById("text1").value == "Meena"
       && document.getElementById("text2").value == "meena@123" ) ||
       ( document.getElementById("text1").value == "Priyanka"
       && document.getElementById("text2").value == "priyanka@123" ) ||
       ( document.getElementById("text1").value == "Bhuvana"
       && document.getElementById("text2").value == "bhuvana@123" ) ||
       ( document.getElementById("text1").value == "Prasanna"
       && document.getElementById("text2").value == "prasanna@123" ) ||
       ( document.getElementById("text1").value == "Syed"
       && document.getElementById("text2").value == "syed@123" ) ||
       ( document.getElementById("text1").value == "Rahul"
       && document.getElementById("text2").value == "rahul@123" ) ||
       ( document.getElementById("text1").value == "Lokesh"
       && document.getElementById("text2").value == "lokesh@123" ) ||
       ( document.getElementById("text1").value == "Muthu"
       && document.getElementById("text2").value == "muthu@123" )  ||
       ( document.getElementById("text1").value == "Giridharan"
       && document.getElementById("text2").value == "giridharan@123" )  ||
       ( document.getElementById("text1").value == "Santhosh"
       && document.getElementById("text2").value == "santhosh@123" )  ||
       ( document.getElementById("text1").value == "Krishnaraj"
       && document.getElementById("text2").value == "krishnaraj@123" )  ||
       ( document.getElementById("text1").value == "Rajesh"
       && document.getElementById("text2").value == "rajesh@123" )   )
 
           {
            e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)});
        // alert( document.getElementById("val").value);

         if(document.getElementById("val").value == "Login")
         {

          
          swal({
       title: "Hello"+" "+swa,
       text: "Have a great day!!!",
      
       confirmButtonText: "Ok"
        }). then(function() {
       window. location = "https://ancorainfotech.github.io/login/";
       });
         }
         else if(document.getElementById("val").value == "Logout")
         {
            swal({
       title: "Hello"+" "+swa,
       text: "Bye,Take Care!!!",
       
       confirmButtonText: "Ok"
        }). then(function() {
       window. location = "https://ancorainfotech.github.io/login/";
       });

         }
       document.getElementById("myform").reset();

        }

      else

     {
        swal({
      title: "Hello"+" "+swa,
      text: "Please enter you valid credentials",
      imageUrl:
        "http://www.ancorainfotech.com/images/page1-img5.jpg",
      imageSize: "50x50",
      confirmButtonText: "Ok"
      }). then(function() {
      window. location = "http://127.0.0.1:5500/index.html";
     });
        e.preventDefault();
        document.getElementById("myform").reset();
     }
        
        })



