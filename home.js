let count = 0;
const callHistoryData=[]

const totalHardClick = document.getElementsByClassName("heart-btn");
for (let i = 0; i < totalHardClick.length; i++) {
    totalHardClick[i].addEventListener("click", function () {
        count += 1;
        parseInt(document.getElementById("heart").innerText = count)
    })
}

let call = 100;
const totalCall = document.getElementsByClassName("call-btn");
for (let i = 0; i < totalCall.length; i++) {
    totalCall[i].addEventListener("click", function () {
        if(call<20){
            alert("❌ You don't have enough coin. For calling minimum 20 coin needed")
            return
        }
   
        call -= 20;
        parseInt(document.getElementById("coin").innerText = call)
        
const card = this.closest(".cards");

   const name = card.querySelector("h4").innerText;
        const number = card.querySelector("h1").innerText;
        const data = {
            name: name,
            number: number,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const allData = document.getElementById("call-history")
        const div = document.createElement("div");
        div.className = "flex justify-between items-center gap-2 w-11/12 mx-auto rounded-lg bg-[rgba(250,250,250,1)] p-4";
        div.innerHTML = `
            <div>
                <h3 class="font-semibold text-lg">${data.name}</h3>
                <p class="text-[rgba(92,92,92,1)]">${data.number}</p>
            </div>
            <div>${data.date}</div>
        `;
        allData.appendChild(div);
        alert(`📞 Calling ${name} at ${number}...`)
    
    })
}
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("call-history").innerHTML = ""
    callHistoryData.length = 0
})

const copyButtons = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const card = this.closest(".cards");
    const number = card.querySelector("h1").innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert(`Your number is copied: ${number}`)
      ;
      count += 1;
        parseInt(document.getElementById("copy").innerText = count)
      
    });
   
  });

  
}
