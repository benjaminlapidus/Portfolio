    <script>
        var text = ["Aspiring Developer", "Student", "Aspiring Developer", "Climber"];
        var counter = 0;
        var elem = $("#greeting");
        setTimeout(change, 3500);
        setInterval(change, 3500);
        function change() {
            elem.fadeOut(function(){
                elem.html(text[counter]);
                counter++;
                if(counter >= text.length) { counter = 0; }
                elem.fadeIn();
            });
        }
    </script>
