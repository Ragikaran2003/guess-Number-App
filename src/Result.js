import React from "react";

function Result({secretNum , term}) {
    let result;

    if (term) {
        if (term > secretNum) {
            result = 'Higher'
        }else if (term < secretNum) {
            result = 'lower'
        }else if (term == secretNum){
            result = 'Number is correct'
        }else {
            result = 'Enter Valid Number'
        }
    }
    return <h3>You Guessed : {result}</h3>
}

export default Result;