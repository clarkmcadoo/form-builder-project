var formData = [
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current website url",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobil Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
];

var mainBody = document.querySelector("#mainBody");

function createTitle(text) {
  var appTitle = document.createElement("h1");
  appTitle.textContent = text;
  mainBody.appendChild(appTitle);
}
createTitle("Sign Up For My Web App");

// loop through formArray [item, item]
// if item.type = tel || text || email --> createInput(item);
// item.type == text --> create text Area
// if item.type = select --> createSelect(item)

function buildForm(formArray) {
  var mainBody = document.querySelector("#mainBody");
  for (i = 0; i < formArray.length; i++) {
    if (
      formArray[i].type == "text" ||
      formArray[i].type == "email" ||
      formArray[i].type == "tel"
    ) {
      createInput(formArray[i], mainBody);
    } else if (formArray[i].type == "textarea") {
      createTextArea(formArray[i], mainBody);
    } else if (formArray[i].type == "select") {
      createSelect(formArray[i], mainBody);
    }
  }
}
//<i class="fa fa-camera-retro fa-lg"></i> fa-lg
function createInput(config, parent) {
  var formInput = document.createElement("input");
  formInput.setAttribute("type", config.type);
  formInput.setAttribute("placeholder", config.label);
  formInput.setAttribute("id", config.id);
  parent.appendChild(formInput);
  var frontIcon = document.createElement("i");
  frontIcon.setAttribute("class", "fa " + config.icon + " fa-fw");
  formInput.appendChild(frontIcon);
}

function createTextArea(config, parent) {
  var formInput = document.createElement("textarea");
  formInput.setAttribute("type", config.type);
  formInput.setAttribute("placeholder", config.label);
  formInput.setAttribute("id", config.id);
  parent.appendChild(formInput);
}

function createSelect(config, parent) {
  var formSelect = document.createElement("select");
  parent.appendChild(formSelect);
  var formOption = document.createElement("option"); //Label "Select Language"
  formOption.textContent = config.label;
  formOption.setAttribute("selected", "true");
  formOption.setAttribute("disabled", "disabled");
  formSelect.appendChild(formOption);
  for (j = 0; j < config.options.length; j++) {
    var formOption = document.createElement("option");
    formOption.textContent = config.options[j].label;
    formSelect.appendChild(formOption);
  }
}

buildForm(formData);

function buildSubmitButton(text) {
  var submitButton = document.createElement("button");
  submitButton.textContent = text;
  mainBody.appendChild(submitButton);
}
buildSubmitButton("Submit Button");
