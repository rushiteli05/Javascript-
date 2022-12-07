

        //strict mood

        "use strict"
        x = 3;
        console.log(x);



        var x = 7;

        var y = "7";
        console.log(x == y); true
        console.log(x === y); false


        var x = 3;
        var y = "rushi";

        // document.write(x + y);

        var x = 4;
        var y = 5;
        var z = "7";

        console.log(x + y + z)     //97


        var student = {
            name: "rushi",
            age: 25
        }


        delete student.age;





        const fruits = ["Banana", "Orange", "Apple", "Mango"];

        fruits.unshift("shubham");

        console.log(fruits);



        // var rushi =document.createElement("h2");

        // var t = document.createTextNode("This is new heading");

        // rushi.appendChild(t);

        // document.body.appendChild(rushi);






        //call...

        const youtube1 = {
            name: "rushikesh",
            age: 25,
            feature: function (rating, support) {
                console.log(` My Name is ${this.name},My age ${this.age} ,${rating}, ${support}`);
            }
        }
        youtube1.feature(5, "subscripe");

        const youtube2 = {

            name: "mayuresh",
            age: 23,
        };

        const youtube3 = {

            name: "Aditys",
            age: 33,
        };



        youtube1.feature.call(youtube2, 5, "subscribe channel");

        youtube1.feature.call(youtube3, 5, "subscribe channel");




        var rushu = {
            name: "shubham",
            age: 24,
            content: "pragmer"

        };

        function dada(hobby, badhabit) {
            console.log(this.name, this.age, this.content, hobby, badhabit);

        }

        dada.call(rushu, "cricket", "crying");



        // apply....

        let rushi1 = {
            name: "yougesh",
            hobby: "cricket",
            display: function (rating, support) {

                console.log(this.name, this.hobby, rating, support);

            }
        };

        let rushi2 = {
            name: "omkar",
            hobby: "devloper",
        }

        rushi1.display.apply(rushi2, [6, "subscripe"]);


        //bind..


        let rushi3 = {
            name: "dada",
            hobby: "devloper11",
        }


        let rushi4 = {
            name: "saheb",
            hobby: "devloper22",
        }


        let rushi5 = {
            name: "madam",
            hobby: "devloper33",
        }

        function shub(rating, support) {
            console.log(this.name, this.hobby, rating, support);

        };

        let rus = shub.bind(rushi4, 6, "follow");
        rus();

        let rus1 = shub.bind(rushi5, 6, "follow");
        rus1();


        //this...

        function dada(name, age, content, hobby, color) {

            this.fname = name;
            this.age = age;
            this.content = content;
            this.hobby = hobby;
            this.color = color;

        };

        var student1 = new dada("rushi", 35, "devloper", "basketball", "black");

        console.log(student1);



        //object...



        var rushi = " bhau";

        var rushi = " dada"; //decalred..

        rushi = 'ggh'; //reassign..

        console.log()







         //object...

         
        let shubham = {
            name: "saheb",
            hobby: "devloper22",
            city:"kolhapur",
            display : function (){
                console.log(this.name,this.hobby,this.city);
            },
            getname(){
            console.log(this.name,this.hobby);
        }

        };

        shubham.display();


    