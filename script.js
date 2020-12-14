var photos = [
 "https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=184376f73721b565014f1d24e5bf645c",  
 "https://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg",

 "https://static.boredpanda.com/blog/wp-content/uploads/2017/02/rescued-baby-sloths-conversation-fb.png",   
];

console.log(photos);

photos.forEach(function(item,photo){
    
     $(".cutties").append("<img src=" + photos[photo] + ">");
     });

$(".submit").click(function() {
    
    var inputValue = $(".inputLink").val();
    
    $(".inputLink").val("");
    
    $(".cutties").append("<img src=" + inputValue + ">");
    photos.push("");
    
    $(".cutties").empty();
    
    photos.forEach(function(item,photo){
     $(".cutties").append("<img src=" + photos[photo] + ">");
     });
    
});
