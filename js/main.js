(() => {
  'use strict'; // strict mode

  const project = [
    {
      titel: 'UZ Kinderhartfonds',
      description: 'Extern Project',
      content: 'Jongeren die een inspanningstest moeten afleggen kijken hier vaak tegenop. Ze weten niet wat hun te wachten staat of ze hebben het al eens gedaan en staan niet te springen om het opnieuw te doen. Men kan dit hen niet kwalijk nemen. Tijdens de inspanningstest dient men tot het fysieke uiterste te gaan, dit in combinatie met een intimiderende kamer vol met medische apparatuur zorgt er al snel voor dat de test niet als aangenaam wordt ervaren.',
      team: {
        teamMember1: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/tweet.png',
          teamOwner: true
        },
        teamMember2: {
          firstName: 'Frederick',
          lastName: 'De Dikker',
          thumbnailUrl: './assets/images/beep.png',
          teamOwner: false
        },
        teamMember3: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/bugs.png',
          teamOwner: false
        }
      },
      thumbnail: './assets/images/1.png',
      media: {
        media1:'./assets/images/1_2.png',
        media2:'./assets/images/1_3.png',
        media3:'./assets/images/1_4.png'
      },
      tag: {
        tag1:'loT',
        tag2:'Raspberry Pi',
        tag3: 'Node.js'
      },
      likes:'<i class="fas fa-thumbs-up"></i>834',
      views:'<i class="fas fa-eye"></i>3939',
      comments:{
        comment1:{
          writer:'Phillipe',
          date:'29/10/2019',
          content:'20 op 20! Proficiat!'
        },
        comment2:{
          writer:'Evelien',
          date:'29/10/2019',
          content:'Al je punten! WOW!'
        },
        comment3:{
          writer:'Olivier',
          date:'29/10/2019',
          content:'Hier je diploma!'
        }
      },
      dates: {
        dateCreation:'21/04/2018',
        dateModification:'20/06/2018',
        datePublication:'21/06/2018'
      },
    },
    {
      titel: 'Cesar',
      description: 'Intern Project',
      content: 'De briefing van deze opdracht voor het vak 2D Animatie luidde als volgt: maak een one minute video door gebruik te maken van ‘Vormator’ elementen. Vorminator bestaat uit acht vectorvormen, die the elements genoemd worden. Deze mogen door de ontwerpers gebruikt worden om composities te maken, maar je moet je hierbij wel aan een aantal regels houden.Victor: "Ik wou kleine elementen gebruiken die samenkomen tot een groot geheel of een groot wezen. De vorminator elementen waren perfect voor dit soort animatie en zo is uiteindelijk de video met het samengestelde skelet tot stand gekomen." De bedoeling van de opdracht was om het belang van beperkingen op creativiteit te tonen. De resultaten tonen aan dat je zelfs met een grote hoeveelheid restricties tot een verrassend resultaat kan komen.',
      team: {
        teamMember1: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/tweet.png',
          teamOwner: true
        },
        teamMember2: {
          firstName: 'Frederick',
          lastName: 'De Dikker',
          thumbnailUrl: './assets/images/bugs.png',
          teamOwner: false
        },
        teamMember3: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/beep.png',
          teamOwner: false
        }
      },
      thumbnail: './assets/images/2.png',
      media: {
        media1:'./assets/images/cesar1.png',
        media2:'./assets/images/cesar3.png',
        media3:'./assets/images/cesar2.png'
      },
      tag: {
        tag1: '2D Animatie',
        tag2: 'Audiovisual Design',
        tag3: ''
      },
      likes:'<i class="fas fa-thumbs-up"></i>933',
      views:'<i class="fas fa-eye"></i>2930',
      comments:{
        comment1:{
          writer:'noobMaster300',
          date:'22/06/2018',
          content:'Nice!'
        },
        comment2:{
          writer:'Jerry',
          date:'30/06/2018',
          content:'Top!'
        },
        comment3:{
          writer:'Tom',
          date:'31/06/2018',
          content:'Dat is geweldig.'
        }
      },
      dates: {
        dateCreation:'21/03/2018',
        dateModification:'20/05/2018',
        datePublication:'24/05/2018'
      },
    },
    {
      titel: '3Da03: oefening in Isometric Design',
      description: 'Intern project',
      content: 'De bedoeling van deze opdracht is een "stilleven" te maken in Isometric Design. Ook al komt er geen "Motion" aan te pas, toch moet het beeld een lengte hebben van 20 seconden. Maak er een boeiende 20 seconden van waarin ik me kan verliezen in een mooie verhaallijn, strak design of fijne details.',
      team: {
        teamMember1: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/beep.png',
          teamOwner: true
        },
        teamMember2: {
          firstName: 'Frederick',
          lastName: 'De Dikker',
          thumbnailUrl: './assets/images/bugs.png',
          teamOwner: false
        },
        teamMember3: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/tweet.png',
          teamOwner: false
        }
      },
      thumbnail: './assets/images/3.jpg',
      media: {
        media1:'./assets/images/3_1.jpg',
        media2:'./assets/images/3_2.jpg',
        media3:'./assets/images/3_3.jpg'
      },
      tag: {
        tag1: "Isometric Design",
        tag2: "3D",
        tag3: ""
      },
      likes:'<i class="fas fa-thumbs-up"></i>283',
      views:'<i class="fas fa-eye"></i>2989',
      comments:{
        comment1:{
          writer:'Jesse',
          date:'04/07/2018',
          content:'Ok.'
        },
        comment2:{
          writer:'Alec',
          date:'05/07/2018',
          content:'Nice man!'
        },
        comment3:{
          writer:'Lennert',
          date:'06/07/2018',
          content:'Chaud!'
        }
      },
      dates: {
        dateCreation:'20/02/2018',
        dateModification:'14/05/2018',
        datePublication:'03/07/2018'
      },
    },
    {
      titel: 'SnekTheMuseum',
      description: 'Intern Project',
      content: 'Het idee voor “snek the museum” is ontstaan uit een project voor “Apps for Ghent”. Dit is een initiatief om de open-data van gent maximaal te gaan benutten en de mogelijkheden ervan bij zoveel mogelijk mensen bekend te maken. Ons idee komt voort uit een andere populaire app, “surprise.me” . Dit is een app die voor u willekeurig gaat bepalen waar u op reis gaat, net voordat u vertrekt. Wij willen iets gelijkaardig creëren, maar dan voor Gentse musea. En dit met een toffe, speelse twist die u de musea beter leert kennen!',
      team: {
        teamMember1: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/bugs.png',
          teamOwner: true
        },
        teamMember2: {
          firstName: 'Frederick',
          lastName: 'De Dikker',
          thumbnailUrl: './assets/images/tweet.png',
          teamOwner: false
        },
        teamMember3: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/beep.png',
          teamOwner: false
        }
      },
      thumbnail: './assets/images/4.jpg',
      media: {
        media1:'./assets/images/4_1.jpg',
        media2:'./assets/images/4_2.png',
        media3:'./assets/images/4_3.jpg'
      },
      tag: {
        tag1:'React Native',
        tag2:'React Redux',
        tag3:'Node.js'
      },
      likes:'<i class="fas fa-thumbs-up"></i>2989',
      views:'<i class="fas fa-eye"></i>398293',
      comments:{
        comment1:{
          writer:'Tony',
          date:'29/06/2019',
          content:'I am Iron Man.'
        },
        comment2:{
          writer:'Steve',
          date:'30/06/2019',
          content:'Avengers asse...'
        },
        comment3:{
          writer:'Peter',
          date:'01/07/2019',
          content:'Thank you Mr.Stark.'
        }
      },
      dates: {
        dateCreation:'02/01/2019',
        dateModification:'30/05/2019',
        datePublication:'28/06/2019'
      },
    },
    {
      titel: 'Dream Time',
      description: 'Intern Project',
      content: 'De briefing van deze opdracht voor het vak "2D Animatie" luidde als volgt: animeer een titelsequentie/poëtische tekst of andere grafische elementen (of een combinatie van dit alles) in een organische/analoge omgeving..',
      team: {
        teamMember1: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/beep.png',
          teamOwner: true
        },
        teamMember2: {
          firstName: 'Frederick',
          lastName: 'De Dikker',
          thumbnailUrl: './assets/images/bugs.png',
          teamOwner: false
        },
        teamMember3: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/tweet.png',
          teamOwner: false
        }
      },
      thumbnail: './assets/images/5.jpg',
      media: {
        media1:'./assets/images/5_1.jpg',
        media2:'./assets/images/5_2.jpg',
        media3:'./assets/images/5_3.gif'
      },
      tag: {
        tag1:'Audiovisual Design',
        tag2:'',
        tag3:''
      }
      ,
      likes:'<i class="fas fa-thumbs-up"></i>298',
      views:'<i class="fas fa-eye"></i>1289',
      comments:{
        comment1:{
          writer:'A.A. Ron.',
          date:'07/03/2018',
          content:'Sorry.'
        },
        comment2:{
          writer:'Key',
          date:'08/03/2018',
          content:'Angry Translator.'
        },
        comment3:{
          writer:'Peele',
          date:'09/03/2018',
          content:'Get Out!'
        }
      },
      dates: {
        dateCreation:'11/12/2017',
        dateModification:'31/02/2018',
        datePublication:'06/03/2018'
      },
    },
    {
      titel: '3D Animation',
      description: 'Intern Project',
      content: 'In tegenstelling tot klassieke animatie wordt 3D animatie niet getekend maar gebouwd. Elementen worden geconstrueerd aan de hand van drie assen: de horizontale, de verticale en diepte-as. Dit zijn de drie dimensies waar het begrip "3D" naar verwijst. 3D animatie wordt niet met behulp van papier gemaakt, maar met de computer. Dit wordt ook wel Computer-Generated Imagery (CGI) genoemd. NMTrix is binnen dit vakgebied gespecialiseerd in karakteranimatie. Bij het creëren van karakters wordt eerst een skelet of frame gebouwd, waar vervolgens de rest (spieren, huid) aan worden toegevoegd. In de clip hieronder zie je het proces versneld gedemonstreerd.',
      team: {
        teamMember1: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/bugs.png',
          teamOwner: true
        },
        teamMember2: {
          firstName: 'Frederick',
          lastName: 'De Dikker',
          thumbnailUrl: './assets/images/beep.png',
          teamOwner: false
        },
        teamMember3: {
          firstName: 'Jan',
          lastName: 'Berg',
          thumbnailUrl: './assets/images/tweet.png',
          teamOwner: false
        }
      },
      thumbnail: './assets/images/6.jpg',
      media: {
        media1:'./assets/images/6_1.jpg',
        media2:'./assets/images/6_2.jpg',
        media3:'./assets/images/6_3.jpg'
      },
      tag: {
        tag1:'Audiovisual Design',
        tag2:'',
        tag3:''
      },
      likes:'<i class="fas fa-thumbs-up"></i>2398',
      views:'<i class="fas fa-eye"></i>92309',
      comments:{
        comment1:{
          writer:'Yvan',
          date:'09/02/2018',
          content:'Hoe ist nog?'
        },
        comment2:{
          writer:'Anthony',
          date:'10/02/2018',
          content:'Jirlijk!'
        },
        comment3:{
          writer:'Mike',
          date:'11/02/2018',
          content:'Baas!'
        }
      },
      dates: {
        dateCreation:'08/02/2018',
        dateModification:'27/04/2018',
        datePublication:'24/05/2018'
      },
    }]

  //   // Select the HTML element with id="box"
 
  const app = {
    initalize () {
      console.log('1. Application started.');
      console.log('2. Cache elements.');
      this.projectElement = document.querySelector('#project');
      this.projectSelectedElement = document.querySelector('.project-selected');
      this.projectDetailElement = document.querySelector('.project-detail');
      this.projectDetailElement.addEventListener('click', ev => this.showDetails(false));
      console.log(this.projectElement);


  if (this.projectElement !== null && this.projectSelectedElement !== null) {
        
        let tempStr = '';
        project.forEach((project, id) => {
        tempStr += `
        <div class= "project" data-id="${id}">
        
        <h1 class= "startName">${project.titel}</h1>
        <img class="image" src="${project.thumbnail}"></img>
        <p class="description">${project.description}</p>
        <p class="likes">${project.likes}</p>
        <p class="views">${project.views}</p>
        
        </div>
      `;
      
      });
    this.projectElement.innerHTML = tempStr;

      const projectElement = document.querySelectorAll('#project');
      projectElement.forEach((project) => {
      project.addEventListener('click', (ev) => {
        let id = (ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id);
        console.log(id);
      });
    });
    
    this.projectElement.addEventListener('click', (ev) => {
      let selected = '';
      for(let i = 0; i<6  ;i++) {
        selected = `
    <div class="main">
      <div class="detail">
      <h1 class="titel">${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].titel}</h1>

      <img class="image" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].thumbnail}></img>

      <p class="content">${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].content}</p>

      </div>
      <div class="tag">
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].tag.tag1}</p>
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].tag.tag2}</p> 
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].tag.tag3}</p>
      </div>

      <div class="teams">
      <p>TEAM</p>
      <div class="team">
      <p>Team member: ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember1.firstName} ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember1.lastName}
      </p>
      <img class="profile" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember1.thumbnailUrl}>
      </img>
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember1.teamOwner}
      </p>
      </div>
      <div class="team">
      <p>Team member: ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember2.firstName} ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember2.lastName}
      </p>
      <img class="profile" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember2.thumbnailUrl}>
      </img>
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember2.teamOwner}
      </p>
      </div>
      <div class="team">
      <p>Team member: ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember3.firstName} ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember3.lastName}
      </p>
      <img class="profile" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember3.thumbnailUrl}>
      </img>
      <p> ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].team.teamMember3.teamOwner}
      </p>
      </div>
      </div>

      <div class="media">
      <img class="image" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].media.media1}></img>
      <img class="image" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].media.media2}></img>
      <img class="image" src=${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].media.media3}></img>
      </div>

      <div class="comments">
      <p>COMMENTS</p>
      <div class="comment">
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment1.writer}:</p>
      <h3>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment1.content}</h3>
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment1.date}</p>
      </div>
      <div class="comment"> 
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment2.writer}:</p>
      <h3>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment2.content}</h3>
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment2.date}</p>
      </div>
      <div class="comment">
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment3.writer}:</p>
      <h3>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment3.content}</h3>
      <p>${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].comments.comment3.date}</p>
      </div>
      </div>

      <div class="dates">
      <p>DATES</p>
      <div class="date">
      <p>Date creation: ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].dates.dateCreation}</p>

      <p>Date modification: ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].dates.dateModification}</p>

      <p>Date publication: ${project[ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id].dates.datePublication}</p>
      </div>
      </div>
    </div>

    `;
    
    this.projectSelectedElement.innerHTML = selected
    this.showDetails(true);
    console.log(project[i].thumbnail);
    }});
    
    }
    },
    showDetails (isOpen) {
      if (isOpen) {
        this.projectDetailElement.classList.add('open');
      } else {
        this.projectDetailElement.classList.remove('open');
      }
    },
  };
  
  app.initalize();
})();
