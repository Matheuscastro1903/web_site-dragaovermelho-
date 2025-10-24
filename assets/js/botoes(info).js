// Índice do slide atual (começa no primeiro)
let slideIndex = 1;

// Mostra o slide inicial assim que a página carrega
showSlides(slideIndex);

//Função chamada pelos botões de navegação
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função chamada pelos pontinhos
function currentSlide(n) {
    //aqui é chamado diretamente por que não terá valores que
    //podem ser incompatíveis
  showSlides(slideIndex = n);
}

// Função principal que exibe o slide correto
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //pega todos os elementos da classe myslides e coloca em um array

  let dots = document.getElementsByClassName("dot"); //repete o mesmo processo do dot

  //slides.length=len(slides)

  //se o valor passar da quantidade de len(slides) irá voltar para o primeiro 
  if (n > slides.length) { slideIndex = 1 }

  if (n < 1) { slideIndex = slides.length }//se o valor for menor que 1,vai para o slide do tamanho do len(slides)

  //vai percorrer todos os índices de len(slides) e escondelos e mostra o desejado apenas depois
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //display: none significa que o elemento não ocupa espaço na página e não é visível
  }

  //for vai percorrer todos os dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //apenas o slide desejado é mostrado
  slides[slideIndex - 1].style.display = "block"; //sobrescreve o display: none daquele slide específico.
  //usa -1 pois é o mesmo princípio do array
  
  dots[slideIndex - 1].className += " active";
}
