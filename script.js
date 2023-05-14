const btn = document.querySelector(".btn")
const liList = document.querySelector(".content-verses")
const verseRandom = document.querySelector(".daily-verse")
const headerContent = document.querySelector(".header-content")
const navBar = document.querySelector(".nav-bar")



btn.addEventListener("click", ()=>{
    const listBooks = document.querySelector(".list-books").value
    const listChapters = document.querySelector(".list-chapters").value
    // const listVerses = document.querySelector(".list-verses").value

    const apiURL = `https://bible-api.com/${listBooks}+${listChapters}?translation=almeida`

    fetch(apiURL).then((response)=>{
        response.json().then((dados)=>{
            const h2 = document.createElement("h2")
            h2.classList.add("titleh2")
            h2.innerHTML = `${dados.reference}
                <button data-reload="btnreload" class="btn-reload">Voltar</button>`
            liList.classList.add("altcolor")
            liList.append(h2)
            dados.verses.map((versos)=> {
                const {verse, text} = versos
                const li = document.createElement("li")
                li.innerHTML = ` 
                    <span class="span-verse">${verse}</span><span class="span-text">${text}</span>`
                liList.append(li)
                verseRandom.style.display = "none"
                headerContent.style.display = "none"
                navBar.style.display = "none"

            })
        })
    })
    
})

liList.addEventListener("click", (e)=> {
    const btnReload = e.target.dataset.reload
    if(btnReload){
        location.reload()
    }
    
})