// Link for Teachable: https://teachablemachine.withgoogle.com/models/4RfD3FZHm/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true  });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4RfD3FZHm/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

Dog = 0;
Cat = 0;
Lion = 0;
Cow = 0;
Random = 0;

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("number_of_times").style.color = "rgb("+ random_r +", "+ random_g +", "+ random_b +")";
        document.getElementById("detected_sound").style.color = "rgb("+ random_r +", "+ random_g +", "+ random_b +")";
        document.getElementById("detected_sound").innerHTML = 'Detected Voice is of - ' + results[0].label;
        document.getElementById("number_of_times").innerHTML = "Detected Dog - " + Dog + " Detected Cat - " + Cat + " Detected Lion - " + Lion + " Detected Cow - " + Cow;

        if (results == "Barking(Dog)") {
            Dog = Dog + 1;
            document.getElementById("ear").src = "Dog.jpeg";
        } else if (results == "Meowing(Cat)") {
            Cat = Cat + 1;
            document.getElementById("ear").src = "Cat.png";
        } else if (results == "Roaring(Lion)") {
            Cat = Cat + 1;
            document.getElementById("ear").src = "Lion.jpeg";
        } else if (results == "Mooing(Cow)") {
            Lion = Lion + 1;
            document.getElementById("ear").src = "Cow.jpeg";
        } else {
            document.getElementById("ear").src = "ear.jpeg"
        }
    }
}