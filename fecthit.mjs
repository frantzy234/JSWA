

const factBox = document.querySelector('.dogFacts')
const picBox =document.querySelector('.dogPic')


export async function getDogPics(){
    let data = await fetch ('https://dog.ceo/api/breeds/image/random')
    let dogPic = await data.json();
    let image = document.createElement('img')
    image.setAttribute('src', dogPic.message)
    picBox.appendChild(image)


}

export async function getDogFacts() {
    try {
        let response = await fetch('https://dog-api.kinduff.com/api/facts?number=1'); 
        let data = await response.json();
        let fact = data.facts[0];
        let factElement = document.createElement('p');
        factElement.textContent = fact;
        factBox.innerHTML = '';
        factBox.appendChild(factElement);
    } catch (error) {
        console.error("error");
    }
}