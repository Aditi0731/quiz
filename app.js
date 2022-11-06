const questions = [{
        ques: "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correc: "a" 
    },
    {
        ques: "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b"
    },
    {
        ques: "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }
]
let index = 0;
let total=questions.length;
let right=0,
    wrong=0;
const quesbox=document.getElementById("quesbox")
const optioninputs=document.querySelectorAll('.options')

const loadquestion = () => {
   if(index == total)
   {
    return endquiz()
   }
   reset()
    const data = questions[index]
    quesbox.innertext = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.c;
    optionInputs[2].nextElementSibling.innerText = data.b;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = ()=> {
const data = questions[index];
const ans =getanswer()
if (ans == data.correct){
    right++;
}
else{
    wrong++;
}
index++;
loadquestion();
return;
}

const getanswer = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if(input.checked){
                answer=input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false

        }

    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thankyou for playing the quiz</h3>
    <h2> ${right}/${total} are correct </h2>
    </div>
    `
}
loadquestion();