$(document).ready(function(){

    // console.log("I'm using jquery");

    // JS-onclick is now just "click"
    // JS getElementsByTagName or querySelector is now just $("someTagName")
    $("h1").click(function(){

        $("h1:even").css({
            backgroundColor: "pink",
            color: "yellow"
        })
    
        $("h1:odd").css({
            backgroundColor: "purple",
            color: "yellow",
            border: "2px solid",
            borderRadius: "3px"
         })
    })

    // GUESS GAME CODE:
// grab element with id guess-btn and attach click event
    $("#guess-btn").click(function(){
        // console.log("guessing ... ")
        const randomNum = Math.floor(Math.random() * 11);
        console.log("randomNum => ", randomNum);
        // JS .value === jQ .val()
        // turn string into the number: use Number() or simply put "+" sign before
        const usersGuess = Number( $("input").val());
        // const usersGuess = +( $("input").val());

        console.log("usersGuess => ", usersGuess);
        if(randomNum == usersGuess){
            $("img").attr("src", "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif")
        } else {
            $("img").attr("src", "https://media.giphy.com/media/3og0IJXQEKwIdIEYpy/giphy.gif")
        }
    })

    //  = = =  = = = = = =  = = =  = = = =  = =
    // IRON MOVIE LIST


// my originally anon function became NAMED function ("clickOnLI") since I have to call it 
// multiple times: I have to call it when clicking on existing elements 
// on DOM ($(".movie-list li").click(clickOnLi))
//  and also I have to call it when creating new LIs on the DOM
    function clickOnLi(){
        // console.log("am i on the right track?");
        // "this" is the DOM element of the tag that I just clicked on
        // console.log($(this).html());

        const clickedLi = this;

        if($(clickedLi).hasClass("clicked")){
             // remove class from clicked list element
            $(clickedLi).removeClass("clicked")
        } else {
            // remove styling from previously clicked element
            $(".movie-list > li").removeClass("clicked");

            // add class on clicked list element
            $(clickedLi).addClass("clicked");
        }
        // "toggleClass" can be also used for the same purpose
        // $(clickedLi).toggleClass("clicked");

    }


    // get element(s) with class name "movie-list" and 
    // attach click event which executes "clickOnLi" function

    $(".movie-list li").click(clickOnLi);
        

    // ADD NEW MOVIE

    $(".add-movie-btn").click(function(){
        // console.log("adding movie ...");
        // get element with id "movie-title" and save its value in this variable:
        const newMovieTitle = $("#movie-title").val();
        // console.log(newMovieTitle);

        const newMovieDirector = $("#movie-director").val();
        // console.log(newMovieDirector);

        if(newMovieTitle === "" || newMovieDirector === ""){
            return;
        }
        // create new li with input values that user just put in
        const newLi = $(`<li> <b> ${newMovieTitle} </b> by ${newMovieDirector} <button>DELETE</button>  </li>`);
        // console.log(newLi);

        // when creating new LIs attach "clickOnLi" event
        newLi.click(clickOnLi);

        // append new movie on the DOM
        $(".movie-list").append(newLi);

        // clear the form
        // JS .innerHTML = "" === jQ .val("")
        $("#movie-title").val("");
        $("#movie-director").val("");
    })

    //  DELETE MOVIE FROM DOM
    // this version of delete will successfully delete ALREADY EXISTING DOM ELEMENTS
    // but it will not trace new ones:

    // $(".movie-list button").click(function(){
    //     $(this).closest("li").remove();
    // })


    // on click => will keep track of all newly created elements that are part of
    // ".movie-list" and are tag===button and it will attach click event which will execute following function
    $(".movie-list").on("click","button",function(){
        $(this).closest("li").remove();
    })


    //  = = = = = = = = = = = = = = = = = = = = = = = 
    // HEARTS EXAMPLE:
    $(".heart").click(function(){
        // "this" => refers to the element I just clicked on 
        const clickedHeart = this;
        // add the class "red" to the element I just clicked on
        $(clickedHeart).addClass("red");

        // add class "red" on all elements up to the clicked one
        $(clickedHeart).prevAll().addClass("red");

        // remove class "red" on all elements after the clicked one
        $(clickedHeart).nextAll().removeClass("red");
    })

    // = = = =  = = =  = =  = =  = =  =  =  =  = = 

    // ONCHANGE EXAMPLE:
    $("input, select").change(function(){
        console.log($(this).val());
    })

    $("h3").click(function(){
        $(this).fadeOut(2000);
        // $(this).hide(1000);
        $(this).toggle(2000);

        // setTimeout(function(){
        //     // $(this).fadeIn()
        //     $(this).html("Bye!");
        // }, 1000);


    })




  















})