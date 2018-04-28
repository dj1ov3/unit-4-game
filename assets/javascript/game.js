$(document).ready(function(){

    
    
    
    
        var numGoal = Math.floor(Math.random() *101) + 19;
        var wins = 0;
        var losses = 0;
        var currentNum = [0];
        var crystalValue = Math.floor(Math.random()*12)+ 1;
        var crystalObj = [$("#stone1"),$("#stone2"),$("#stone3"),$("#stone4")]

        var s1 = $("#stone1").val();
        var s2 = $("#stone2").val();
        var s3 = $("#stone3").val();
        var s4 = $("#stone4").val();
        
        
        
        
        
        
        //testing
        console.log(numGoal);
        // console.log(crystalValue);
    
    
        //when game starts assign each crystal a random number. and display the number to match
    
   
        $(".randomNum").text(numGoal);

        for(var i=0; i < crystalObj.length; i++){
            $("#stone1").val(Math.floor(Math.random()*12)+ 1);
            $("#stone2").val(Math.floor(Math.random()*12)+ 1);
            $("#stone3").val(Math.floor(Math.random()*12)+ 1);
            $("#stone4").val(Math.floor(Math.random()*12)+ 1);

        };



        


        //testing
        console.log($("#stone1").val());
        console.log($("#stone2").val());
        console.log($("#stone3").val());
        console.log($("#stone4").val());
        //------------------------------------------------------------------------------------------
    
     //on button click display and add to total score

    
        $("button").on("click", function(){
            
            currentNum = parseInt(currentNum) + parseInt($(this).val());

            $(".numberBox").text(currentNum);

            if(currentNum == numGoal){
                alert("You Win!")
                wins++;
                $("#wins").text("Wins: " + wins);

                currentNum = 0;
                $(".numberBox").text("");

                resetGame();

                //testing
                console.log($("#stone1").val());
                console.log($("#stone2").val());
                console.log($("#stone3").val());
                console.log($("#stone4").val());




            }else if(currentNum > numGoal){
                alert("You Lose!")
                losses++;
                $("#losses").text("Losses: " + losses);

                currentNum = 0
                $(".numberBox").text("");

                resetGame();


                //testing
                console.log($("#stone1").val());
                console.log($("#stone2").val());
                console.log($("#stone3").val());
                console.log($("#stone4").val());

            } else{};

        });
   




        function resetGame(){
            numGoal = Math.floor(Math.random() *101) + 19;
            


            $(".randomNum").text(numGoal);
            console.log(numGoal);


            for(var i=0; i < crystalObj.length; i++){
                $("#stone1").val(Math.floor(Math.random()*12)+ 1);
                $("#stone2").val(Math.floor(Math.random()*12)+ 1);
                $("#stone3").val(Math.floor(Math.random()*12)+ 1);
                $("#stone4").val(Math.floor(Math.random()*12)+ 1);

            };



        };

    
    
    
});