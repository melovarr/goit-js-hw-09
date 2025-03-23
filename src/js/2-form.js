const formData = {email: "", message: ""};
const form = document.querySelector(".feedback-form");
const formKey = "feedback-form-state";
form.addEventListener("input", inputSave);
form.addEventListener("submit", formSubmit);
function inputSave(event){
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(formKey, JSON.stringify(formData));
}
if (localStorage.getItem(formKey)){
    try {
        const storageData = JSON.parse(localStorage.getItem(formKey));
        form.elements.email.value = storageData.email;
        form.elements.message.value = storageData.message;
        formData.email = storageData.email;
        formData.message = storageData.message;
    } catch (error) {
        console.log(error);
        
    }
}

function formSubmit(event){
    event.preventDefault();
    if (formData.email && formData.message){
        console.log(formData);
        localStorage.removeItem(formKey);
        formData.email = "";
        formData.message = "";
        form.reset();
        return;
    }
    alert("Fill please all fields")
}