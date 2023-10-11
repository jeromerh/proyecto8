//https://teachablemachine.withgoogle.com/models/CGe93Lpwh/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true}) 
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CGe93Lpwh/model.json",modelReady)
  }
  
  function modelReady(){
      classifier.classify(gotResults)
  }
  
  function gotResults(error,results){
      console.log("modelo cargado")
      if(error){
        console.error(error)
       } 
       else{
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("Escucho").innerHTML=results[0].label
        document.getElementById("Presición").innerHTML=(results[0].confidence*100).toFixed(2)
        document.getElementById("Escucho").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("Presición").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        img1=document.getElementById("cristiano_1")
        img2=document.getElementById("cristiano_2")
        img3=document.getElementById("messi_1")
        img4=document.getElementById("messi_2")
        
    
        if (results[0].label == "siu2") {
            img1.src = 'cristiano.png';
            img2.src = 'ronaldo2.gif';
            img3.src = 'leo_messi.jpg';
            img4.src = 'leo_messi.png';
          } else if (results[0].label == "aficion") {
            img1.src = 'cristiano.png';
            img2.src = 'cristiano2.jpg';
            img3.src = 'leo-messi2.gif';
            img4.src = 'leo_messi.png';
          } else if (results[0].label == "Class 4") {
            img1.src = 'cristiano.png';
            img2.src = 'cristiano2.jpg';
            img3.src = 'leo_messi.jpg';
            img4.src = 'leo-messi.gif';
          }else{
            img1.src = 'cristiano.gif';
            img2.src = 'cristiano2.jpg';
            img3.src = 'leo_messi.jpg';
            img4.src = 'leo_messi.png';
      
      
          }
      
       }
  }