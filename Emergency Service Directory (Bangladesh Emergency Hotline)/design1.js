// card-heart // card vutton class
//  header-heart // header heart id



/*heart count increase functionality*/
const cardHearts = document.getElementsByClassName('card-heart');
for (const heart of cardHearts) {
    heart.addEventListener('click', function () {
        const a = document.getElementById('header-heart');
        const b = a.innerText;
        const c = parseInt(a.innerText);
        const d = c + 1;
        a.innerText = d;

    })

}





const callData = [];




/*Reusavle function for call vutton */

function callFeature(content, numver) {
    const text = document.getElementById(content).innerText;
    const num = document.getElementById(numver).innerText;
    // alert("Calling" + " " + text + " " + num);


    let a = document.getElementById('coin-count');
    let b = a.innerText;
    let c = parseInt(a.innerText);
    if (c >= 20) {
        let d = (c - 20);
        a.innerText = d;
        console.log(b);
        alert("Calling" + " " + text + " " + num);
    }

    else {
        alert('You do not have enough balance');
        return;
        

    }
    const data = {
        name: text,
        call: num,
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);

    const historyFCrad = document.getElementById('history-container');

    const div = document.createElement('div')
    div.innerHTML = `
        <div
                        id="history-body" class="w-[350px] h-[80px] bg-gray-100 rounded-[20px] mt-5 flex justify-between items-center p-5">

                        <!-- history vox content -->
                        <div>
                            <h1 class="font-bold text-[20px]">${data.name}</h1>
                            <p class="text-[20px]">${data.call}</p>

                        </div>

                        <!-- date content -->
                        <div>
                            <p class="text-[25px]">${data.date}</p>

                        </div>


                    </div>
       
       
       `
    historyFCrad.appendChild(div)
}



/*Card-1 call button functionality*/

//police-call....police call vutton id
//"police-text".....police text id
//"police-num".....police number id

document.getElementById('emergency-call').addEventListener('click', function (e) {

    e.preventDefault();
    callFeature ( 'emergency-text' , 'emergency-num' );


})




/*card 2 call vutton functionality*/

//police-call....police call vutton id
//"police-text".....police text id
//"police-num".....police number id

document.getElementById('police-call').addEventListener('click', function (e) {

    e.preventDefault();
    callFeature ( 'police-text' , 'police-num' );


})



/*Card 3 functionality */

//"fire-call"..cal vtn id
//fire-text...fire text id
//fire -num...fire num id

document.getElementById('fire-call').addEventListener('click', function (e) {

    e.preventDefault();

    callFeature('fire-text', 'fire-num');


})

/*Card 4 call vutton functionality*/
//"ambulance-call"...ambulance call vtn id
//ambulance-text...ambulance text id    
//ambulance-num...ambulance num id
document.getElementById('ambulance-call').addEventListener('click', function (e) {

    e.preventDefault();

    callFeature('ambulance-text', 'ambulance-num');


})


/*card 5 call vutton functionality*/
//"women-call"...disaster call vtn id    
document.getElementById('women-call').addEventListener('click', function (e) {

    e.preventDefault();

    callFeature('women-text', 'women-num');


})


/*card 6 call vutton functionality*/
//"cor-call"...corruption call vtn id
document.getElementById('cor-call').addEventListener('click', function (e) {

    e.preventDefault();

    callFeature('cor-text', 'cor-num');


})


/*card 7 call vutton functionality*/
//"elec-call"...electricity call vtn id
document.getElementById('elec-call').addEventListener('click', function (e) {

    e.preventDefault();

    callFeature('elec-text', 'elec-num');


})



/*clear history functionality*/

// id = clear-history...id of clear vutton
// id =   call-history....call history section 
// id="history-body"....call history body
//history-container ....call history container id(where history adds)
document.getElementById('clear-history').addEventListener('click', function (e) {
    e.preventDefault();
    const historyFCard = document.getElementById('history-container');
    historyFCard.innerText = "";

})


/*copy vuttton reusavle function */
function copyFeature (id){

    let a = document.getElementById('copy-count');
    let b = a.innerText;
    let c = parseInt(a.innerText);
    let d = c + 1;
    a.innerText = d;

    const num = document.getElementById(id).innerText;
    alert( num + " " + 'Number copied');
    navigator.clipboard.writeText(num);




}

/*copy button functionality(card-1)*/

// id="emergency-copy"....copy vutton id
// id="copy-count"....copy count vutton id
// "emergency-num" ....emergency number(999)

document.getElementById('emergency-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'emergency-num' );
})


/*copy button functionality(card-2)*/
// id="police-copy"....copy vutton id
//police-num....police number id
document.getElementById('police-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'police-num' );
})


//copy button functionality(card-3)*/
// id="fire-copy"....copy vutton id
//fire-num....fire number id
document.getElementById('fire-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'fire-num' );
})

/*copy button functionality(card-4)*/
// id="ambulance-copy"....copy vutton id
//ambulance-num....ambulance number id
document.getElementById('ambulance-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'ambulance-num' );
})

/*copy button functionality(card-5)*/
//id = women-copy....women copy vutton id
document.getElementById('women-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'women-num' );
})


/*copy button functionality(card-6)*/
//id = cor-copy....corruption copy vutton id
document.getElementById('cor-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'cor-num' );
})

/*copy button functionality(card-7)*/
//id = elec-copy....electricity copy vutton id
document.getElementById('elec-copy').addEventListener('click', function (e) {
    e.preventDefault();
   copyFeature ( 'elec-num' );
})