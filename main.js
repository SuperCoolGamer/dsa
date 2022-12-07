Webcam.set({
    width:150,
    height:100,
    image_format:'jpeg',
    jpeg_quality:90
    });
    
    camera= document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function takeimage(){
    
        Webcam.snap(function(data_uri)
        {
            document.getElementById("Result").innerHTML ='<img id="captured_image"  src="'+data_uri+'"/> ';
        });
    
    }
    
    function modelLoaded(){
      console.log("Model Loaded");
     }
    
    console.log('ml5 version', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8eCPVC_ky/model.json',modelLoaded);
    
    function check()
    {
       img = document.getElementById('captured_image');
       classifier.classify(img, gotResult);
    
    }
    
    
    function gotResult(error, results)
    {
      if (error) {
        console.error(error);
      } else {
         console.log(results);
         document.getElementById("Object").innerHTML = "Object:" +results[0].label;
         document.getElementById("Accuracy").innerHTML = "Accuracy:" +results[0].confidence.toFixed(3);
      }
    
    
    }