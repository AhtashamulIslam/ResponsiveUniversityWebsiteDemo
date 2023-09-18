function sendEmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
const serviceID="service_s8soyj9";
const templateID="template_g9y2t6l";
emailjs.send(serviceID,templateID,params).then((res)=>{
    alert("Your message deliverd successfully");
    
})
.catch((e)=> console.log(e));

}
