// document.addEventListener("DOMContentLoaded",()=>{
//     function validateForm (){
//         const form = document.getElementById("resumeform")as HTMLFormElement;
//         if(!form.checkvalidity){
//             alert("please fill all required fields correctly")
//             return false;
//         }
//         return true
//     }
//     function generateResume(){
//         const name = (document.getElementById("name")as HTMLInputElement).value
//         const email = (document.getElementById("email")as HTMLInputElement).value
//         const phone = (document.getElementById("phone")as HTMLInputElement).value
//         const address = (document.getElementById("address")as HTMLInputElement).value
//         const skills = (document.getElementById("skills")as HTMLTextAreaElement).value
//         const education = (document.getElementById("education")as HTMLTextAreaElement).value
//         const experience = (document.getElementById("experience")as HTMLTextAreaElement).value
//         const picture = (document.getElementById("picture")as HTMLInputElement).files?.[0];
//         // populate resume
//         (document.getElementById("displayName") as HTMLElement).innerText =name;
//         (document.getElementById("displayEmail") as HTMLElement).innerText =email;
//         (document.getElementById("displayPhone") as HTMLElement).innerText =phone;
//         (document.getElementById("displayAddress") as HTMLElement).innerText =address;
//         (document.getElementById("displaySkills") as HTMLElement).innerText =skills;
//         (document.getElementById("displayEducation") as HTMLElement).innerText =education;
//         (document.getElementById("displayExperience") as HTMLElement).innerText =experience;
//         if(picture){
//             const reader = new FileReader();
//             reader.onload= function(e){
//                 (document.getElementById("displayPicture")as HTMLImageElement).src = e.target?.result as string;
//             };
//             reader.readAsDataURL(picture);
//         }
//     }
//     document.getElementById("resumeform")?.addEventListener("submit",function(event){
//         event.preventDefault();
//         if(validateForm()){
//             generateResume()
//         }
//     })
//     // generate resume 
//     document.getElementById("name")?.addEventListener("input",generateResume);
//     document.getElementById("picture")?.addEventListener("input",generateResume);
//     document.getElementById("phone")?.addEventListener("input",generateResume);
//     document.getElementById("address")?.addEventListener("input",generateResume);
//     document.getElementById("email")?.addEventListener("input",generateResume);
//     document.getElementById("skills")?.addEventListener("input",generateResume);
//     document.getElementById("education ")?.addEventListener("input",generateResume);
//     document.getElementById("experience")?.addEventListener("input",generateResume);
// })
// const workExperience =document.getElementById("wordExperience");
// const workSkills =document.getElementById("wordSkills");
// const workEducation =document.getElementById("wordEducation");
// workEducation?.addEventListener("input",(event)=>{
//     const updateEducation=(event.target as HTMLElement).innerText;
//     console.log(updateEducation)
// });
// workSkills?.addEventListener("input",(event)=>{
//     const updateSkills=(event.target as HTMLElement).innerText;
//     console.log(updateSkills)
// });
// workExperience?.addEventListener("input",(event)=>{
//     const updateExperience=(event.target as HTMLElement).innerText;
//     console.log(updateExperience)
// });
// Select form and output elements
var resumeForm = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
// Select input fields
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
var skillsInput = document.getElementById('skills');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var pictureInput = document.getElementById('picture');
// Output fields
var displayPicture = document.getElementById('displayPicture');
var displayName = document.getElementById('displayName');
var displayPhone = document.getElementById('displayPhone');
var displayEmail = document.getElementById('displayEmail');
var displayAddress = document.getElementById('displayAddress');
var displaySkills = document.getElementById('displaySkills');
var displayEducation = document.getElementById('displayEducation');
var displayExperience = document.getElementById('displayExperience');
// Function to update the resume output dynamically
var updateResume = function () {
    // Display picture if uploaded
    if (pictureInput.files && pictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayPicture.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(pictureInput.files[0]);
    }
    // Inject form data into resume output fields
    displayName.innerText = nameInput.value;
    displayEmail.innerText = emailInput.value;
    displayPhone.innerText = phoneInput.value;
    displayAddress.innerText = addressInput.value;
    displaySkills.innerText = skillsInput.value;
    displayEducation.innerText = educationInput.value;
    displayExperience.innerText = experienceInput.value;
    // Show the resume output
    resumeOutput.style.display = 'block';
};
// Attach input event listeners to update resume in real-time
[nameInput, emailInput, phoneInput, addressInput, skillsInput, educationInput, pictureInput, experienceInput].forEach(function (input) {
    input.addEventListener('input', updateResume);
});
// Display resume on form submission (optional)
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    updateResume();
});
