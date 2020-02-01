const houseArray = ['Hufflepuff', 'Ravenclaw', 'Gryffindor', 'Slytherin'];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const jumboCreation = () => {
    const jumboData = `
    <div class="jumbotron">
    <h1 class="display-4">Welcome to Hogwarts, First Years!</h1>
    <p class="lead">Welcome one and all, to the one and only, Hogwarts School of Witchcraft and Wizardry!</p>
    <hr class="my-4">
    <p>We will be sorting all of the first years into one of four Houses: Hufflepuff, Ravenclaw, Slytherin and Gryffindor. When your name is called, please step forward and be sorted.</p>
    <a class="btn btn-primary btn-lg" a id="sortingList" href="#" role="button">Let's get Sorting!</a>
  </div>
    `;
    printToDom ('jumboHolder', jumboData);
};

jumboCreation();

const nameEntry = () => {
    const entryData = `
    <label for="entry" class="p-3 mb-2 bg-secondary text-white">Enter First Year's Name</label>
    <div class="input-group mb-3">
    <input type="text" input id="newStudent" class="form-control" placeholder="Neville Longbottom" aria-label="First year's name">
    <div class="input-group-append">
      <button class="btn btn-outline-primary" button id="Sort" type="button">Sort!</button>
    </div>
  </div>
    `;
    printToDom('entryHolder', entryData);
};

nameEntry();

const cardMaker = (studentList) => {
    const studentSorter = newStudent.value;
    let newStudentHouse = houseArray[Math.floor(Math.random() * houseArray.length)]
    let studentId = `
    <div class="card border border-dark" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${studentSorter}</h5>
      <p class="card-text">House: ${newStudentHouse}</p>
      <a href="#" a id="expel" class="btn btn-danger">Expel</a>
    </div>
  </div>
    `;
    printToDom('studentCard', studentId);
};

const houseSorting = (e) =>{
    document.getElementById('Sort').addEventListener('click', cardMaker);
}

houseSorting();

const expulsion = () =>{
    
}