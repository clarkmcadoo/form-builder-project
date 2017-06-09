var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

var mainBody = document.querySelector("mainBody");


function createTitle(text){
    var mainBody = document.querySelector("#mainBody");
    var appTitle = document.createElement("h1");
    appTitle.textContent = text;
    mainBody.appendChild(appTitle);

}
createTitle("Sign Up For My Web App");



function buildForm(formArray){
    // loop through formArray [item, item]
    // if item.type = tel || text || email --> createInput(item);
    // item.type == text --> create text Area
    // if item.type = select --> createSelect(item)
    var mainBody = document.querySelector("#mainBody")

    for (i=0; i < formArray.length; i++){

        if(formArray[i].type == "text"){
            var formInput = document.createElement("input");
            formInput.setAttribute("type", "text");
            formInput.setAttribute("placeholder", formArray[i].label);
            formInput.setAttribute("id", formArray[i].id);
            mainBody.appendChild(formInput);
               
        }else if(formArray[i].type == "email"){
            var formInput = document.createElement("input");
            formInput.setAttribute("type", "email");
            formInput.setAttribute("placeholder", formArray[i].label);
            formInput.setAttribute("id", formArray[i].id);            
            mainBody.appendChild(formInput);

        }else if(formArray[i].type == "textarea"){
                var formInput = document.createElement("input");
                formInput.setAttribute("type", "textarea");
                formInput.setAttribute("placeholder", formArray[i].label);
                formInput.setAttribute("id", formArray[i].id);
                mainBody.appendChild(formInput);

        }else if(formArray[i].type == "tel"){
                var formInput = document.createElement("input");
                formInput.setAttribute("type", "tel");
                formInput.setAttribute("placeholder", formArray[i].label);
                formInput.setAttribute("id", formArray[i].id);
                mainBody.appendChild(formInput);

        }else if(formArray[i].type == "select"){
                var formSelect = document.createElement("select");
                mainBody.appendChild(formSelect);
                var formOption = document.createElement("option");  //Label "Select Language"
                formOption.textContent = formArray[i].label;
                formOption.setAttribute("selected", "true");
                formOption.setAttribute("disabled", "disabled"); 
                formSelect.appendChild(formOption);               
                for (j=0; j<formArray[i].options.length; j++){
                    var formOption = document.createElement("option");
                    formOption.textContent = formArray[i].options[j].label;
                    formSelect.appendChild(formOption);   
                }
        }
    }
}
buildForm(formData);
// function createInput(config, parentNode){
//     // create input
//     // input.type = config.type
//     // input.placeholder = config.lable
// }
// function createSelect(config, parentNode){
//     // create input
//     // input.type = config.type
//     // input.placeholder = config.lable
//     // loop through options
// }






