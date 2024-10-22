// define the variable
const pic = document.getElementById("pic");
const numbers = document.getElementById("number");
let interval; // Declare interval variable outside of the functions
const icon = document.getElementById("icon");
const picks = Array.from({ length: 20 }, (_, i) => document.getElementById(`pick${i + 1}`));
const pick1 = document.getElementById("pick1");
const pick10 = document.getElementById("pick10");
const buttons = document.getElementById("button");
const btBlue = document.getElementById("button-blue");
const btRed = document.getElementById("button-red");
const stBlue = document.getElementById("st-blue");
const stRed = document.getElementById("st-red");



// the red first pick
btRed.addEventListener("click", () => {
    icon.classList.remove("switchs");
    icon.classList.add("arrow");
    pick1.classList.remove("blue");
    pick10.classList.add("red");

});
// the blue first pick
btBlue.addEventListener("click", () => {
    icon.classList.add("switchs");
    icon.classList.remove("arrow");
    pick1.classList.add("blue");
    pick10.classList.remove("red");


});



// start to blue first pick
stBlue.addEventListener("click", () => {
    buleStart();
});
// start red first pick
stRed.addEventListener("click", () => {
    redStart();

});
// the counter upload picture
let uploadCounts = {}; // Object to track upload counts for each uploader


// the counter number ban function
function counterBan() {
    clearInterval(interval);
    let counts = 40;
    interval = setInterval(() => {
        counts--;
        if (counts == 0) {
            clearInterval(interval);
            icon.classList.toggle("arrow");
            icon.classList.toggle("switchs");
            counterPick();
            numbers.innerHTML = "40";
        }
        numbers.innerHTML = counts;
    }, 1000);
}
// the counter number pick function
function counterPick() {
    clearInterval(interval);
    let counts = 30;
    interval = setInterval(() => {
        counts--;
        if (counts == 0) {
            clearInterval(interval);
            icon.classList.toggle("arrow");
            icon.classList.toggle("switchs");
            counterPick();
            numbers.innerHTML = "50";
        }
        numbers.innerHTML = counts;
    }, 1000);
}

// the function of the blue first pick
function buleStart() {
    counterBan();


    function userBan(Ban1, arrow) {
        const allFilesUploaded = Array.from(Ban1).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.add("arrow");
            arrow.classList.remove("switchs");
            pick1.classList.remove("blue")
            pick10.classList.add("red");

        }
    }

    function userBan2(Ban2, arrow) {
        const allFilesUploaded = Array.from(Ban2).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick10.classList.remove("red");
            pick2.classList.add("blue")
        }
    }


    function userBan3(Ban3, arrow) {
        const allFilesUploaded = Array.from(Ban3).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick2.classList.remove("blue");
            pick9.classList.add("red")
        }
    }


    function userBan4(Ban4, arrow) {
        const allFilesUploaded = Array.from(Ban4).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick9.classList.remove("red");
            pick3.classList.add("blue")
        }
    }

    function userBan5(Ban5, arrow) {
        const allFilesUploaded = Array.from(Ban5).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick3.classList.remove("blue")
            pick8.classList.add("red");
        }
    }

    function userBan6(Ban6, arrow) {
        const allFilesUploaded = Array.from(Ban6).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Pick Hero";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick8.classList.remove("red");
            pick11.classList.add("blue");
        }
    }

    function userBan7(Ban7, arrow) {
        const allFilesUploaded = Array.from(Ban7).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick7.classList.remove("red");
            pick4.classList.add("blue");
        }
    }

    function userBan8(Ban8, arrow) {
        const allFilesUploaded = Array.from(Ban8).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick4.classList.remove("blue");
            pick6.classList.add("red");

        }
    }


    function userBan9(Ban9, arrow) {
        const allFilesUploaded = Array.from(Ban9).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick6.classList.remove("red");
            pick5.classList.add("blue");


        }
    }

    function userBan10(Ban10, arrow) {
        const allFilesUploaded = Array.from(Ban10).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pic.innerHTML = "Pick Hero";
            pick5.classList.remove("blue");
            pick17.classList.add("red");


        }
    }


    function userPick(picInput, arrow) {
        if (picInput.files.length > 0) {
            icon.classList.remove("switchs");
            icon.classList.add("arrow");
            counterPick();
            pic.innerHTML = "Pick Hero";
            pick11.classList.remove("blue");
            pick19.classList.add("red");
            pick20.classList.add("red");

        }
    }

    function userPick2(picInputs, arrow) {
        const allFilesUploaded = Array.from(picInputs).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pic.innerHTML = "Pick  Hero";
            counterPick();
            pick19.classList.remove("red");
            pick20.classList.remove("red");
            pick12.classList.add("blue");
            pick13.classList.add("blue");

        }
    }

    function userPick3(picInputs, arrow) {
        const allFilesUploaded = Array.from(picInputs).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pic.innerHTML = "Pick  Hero";
            counterPick();
            pick12.classList.remove("blue");
            pick13.classList.remove("blue");
            pick18.classList.add("red");

        }
    }

    function userPick4(picInput, arrow) {
        if (picInput.files.length > 0) {
            counterBan();
            pic.innerHTML = "Ban";
            pick18.classList.remove("red");
            pick7.classList.add("red");
        }
    }

    function userPick5(picInput, arrow) {
        if (picInput.files.length > 0) {
            counterBan();
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pic.innerHTML = "Pick Hero";
            pick17.classList.remove("red");
            pick14.classList.add("blue");
            pick15.classList.add("blue");
        }
    }

    function userPick6(picInputs, arrow) {
        const allFilesUploaded = Array.from(picInputs).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterPick();
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pic.innerHTML = "Pick Hero";
            pick14.classList.remove("blue");
            pick15.classList.remove("blue");
            pick16.classList.add("red")

        }
    }

    function userPick7(picInput, arrow) {
        if (picInput.files.length > 0) {

            pic.innerHTML = "Start the Match";
            pick16.classList.remove("red")
        }
    }




    function previewBeforeUpload(id, arrowElement, index) {
        if (!uploadCounts[id]) {
            uploadCounts[id] = 0;
        }

        const fileInput = document.querySelector("#" + id);
        if (!fileInput) {
            console.error("File input with id " + id + " not found.");
            return;
        }

        fileInput.addEventListener("change", function(e) {
            if (e.target.files.length === 0) {
                return;
            }
            uploadCounts[id]++; // Increment upload count for the specific uploader

            if (uploadCounts[id] >= 2) { // Check if upload count is greater than or equal to 2
                if (id === "file-11") {
                    userPick(e.target, arrowElement);
                } else if (id === "file-19" || id === "file-20") {
                    if (uploadCounts["file-19"] > 1 && uploadCounts["file-20"] > 1) {
                        userPick2([e.target], arrowElement);


                    }

                } else if (id === "file-12" || id === "file-13") {
                    if (uploadCounts["file-12"] > 1 && uploadCounts["file-13"] > 1) {
                        userPick3([e.target], arrowElement);


                    }

                } else if (id === "file-18") {
                    userPick4(e.target, arrowElement);
                } else if (id === "file-17") {
                    userPick5(e.target, arrowElement);
                } else if (id === "file-14" || id === "file-15") {
                    if (uploadCounts["file-14"] > 1 && uploadCounts["file-15"] > 1) {
                        userPick6([e.target], arrowElement);


                    }

                } else if (id === "file-16") {
                    userPick7(e.target, arrowElement);
                }



            }

            if (uploadCounts[id] >= 1) {
                if (id === "file-1") {
                    let Ban1 = document.querySelector("#file-1");
                    userBan(Ban1, arrowElement);
                } else if (id === "file-10") {
                    let Ban2 = document.querySelector("#file-10");
                    userBan2(Ban2, arrowElement);
                } else if (id === "file-2") {
                    let Ban3 = document.querySelector("#file-2");
                    userBan3(Ban3, arrowElement);
                } else if (id === "file-9") {
                    let Ban4 = document.querySelector("#file-9");
                    userBan4(Ban4, arrowElement);
                } else if (id === "file-3") {
                    let Ban5 = document.querySelector("#file-3");
                    userBan5(Ban5, arrowElement);
                } else if (id === "file-8") {
                    let Ban6 = document.querySelector("#file-8");
                    userBan6(Ban6, arrowElement);
                } else if (id === "file-7") {
                    let Ban7 = document.querySelector("#file-7");
                    userBan7(Ban7, arrowElement);
                } else if (id === "file-4") {
                    let Ban8 = document.querySelector("#file-4");
                    userBan8(Ban8, arrowElement);
                } else if (id === "file-6") {
                    let Ban9 = document.querySelector("#file-6");
                    userBan9(Ban9, arrowElement);
                } else if (id === "file-5") {
                    let Ban10 = document.querySelector("#file-5");
                    userBan10(Ban10, arrowElement);
                }
            }




            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }

    for (let i = 1; i <= 20; i++) {
        previewBeforeUpload("file-" + i, document.getElementById("icon"));
    }
}
// the end of the blue start 
function redStart() {
    counterBan();



    function userBan(Ban1, arrow) {
        const allFilesUploaded = Array.from(Ban1).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "hello";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick10.classList.remove("red")
            pick1.classList.add("blue");

        }
    }

    function userBan2(Ban2, arrow) {
        const allFilesUploaded = Array.from(Ban2).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick1.classList.remove("blue");
            pick9.classList.add("red")
        }
    }


    function userBan3(Ban3, arrow) {
        const allFilesUploaded = Array.from(Ban3).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.add("switchs");
            arrow.classList.remove("arrow");
            pick2.classList.add("blue");
            pick9.classList.remove("red")
        }
    }


    function userBan4(Ban4, arrow) {
        const allFilesUploaded = Array.from(Ban4).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.add("arrow");
            arrow.classList.remove("switchs");
            pick2.classList.remove("blue");
            pick8.classList.add("red")
        }
    }

    function userBan5(Ban5, arrow) {
        const allFilesUploaded = Array.from(Ban5).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.add("switchs");
            arrow.classList.remove("arrow");
            pick3.classList.add("blue")
            pick8.classList.remove("red");
        }
    }

    function userBan6(Ban6, arrow) {
        const allFilesUploaded = Array.from(Ban6).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Pick Hero";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick3.classList.remove("blue");
            pick20.classList.add("red");
        }
    }

    function userBan7(Ban7, arrow) {
        const allFilesUploaded = Array.from(Ban7).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick7.classList.add("red");
            pick4.classList.remove("blue");
        }
    }

    function userBan8(Ban8, arrow) {
        const allFilesUploaded = Array.from(Ban8).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pick7.classList.remove("red");
            pick5.classList.add("blue");

        }
    }


    function userBan9(Ban9, arrow) {
        const allFilesUploaded = Array.from(Ban9).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            pic.innerHTML = "Ban";
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pick6.classList.add("red");
            pick5.classList.remove("blue");

        }
    }

    function userBan10(Ban10, arrow) {
        const allFilesUploaded = Array.from(Ban10).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterBan();
            arrow.classList.remove("arrow");
            arrow.classList.add("switchs");
            pic.innerHTML = "Pick Hero";
            pick6.classList.remove("red");
            pick14.classList.add("blue");



        }
    }


    function userPick(picInput, arrow) {
        if (picInput.files.length > 0) {
            icon.classList.remove("arrow");
            icon.classList.add("switchs");
            counterPick();
            pic.innerHTML = "Pick Hero";
            pick11.classList.add("blue");
            pick12.classList.add("blue");
            pick20.classList.remove("red");

        }
    }

    function userPick2(picInputs, arrow) {
        const allFilesUploaded = Array.from(picInputs).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            arrow.classList.add("arrow");
            arrow.classList.remove("switchs");
            pic.innerHTML = "Pick  Hero";
            counterPick();
            pick19.classList.add("red");
            pick18.classList.add("red");
            pick12.classList.remove("blue");
            pick11.classList.remove("blue");

        }
    }

    function userPick3(picInputs, arrow) {
        const allFilesUploaded = Array.from(picInputs).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            arrow.classList.add("switchs");
            arrow.classList.remove("arrow");
            pic.innerHTML = "Pick  Hero";
            counterPick();
            pick13.classList.add("blue");
            pick19.classList.remove("red");
            pick18.classList.remove("red");

        }
    }

    function userPick4(picInput, arrow) {
        if (picInput.files.length > 0) {
            counterBan();
            pic.innerHTML = "Ban";
            pick13.classList.remove("blue");
            pick4.classList.add("blue");
        }
    }

    function userPick5(picInput, arrow) {
        if (picInput.files.length > 0) {
            counterBan();
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pic.innerHTML = "Pick Hero";
            pick14.classList.remove("blue");
            pick16.classList.add("red");
            pick17.classList.add("red");
        }
    }

    function userPick6(picInputs, arrow) {
        const allFilesUploaded = Array.from(picInputs).every(input => input.files.length > 0);
        if (allFilesUploaded) {
            counterPick();
            arrow.classList.remove("switchs");
            arrow.classList.add("arrow");
            pic.innerHTML = "Pick Hero";
            pick16.classList.remove("red");
            pick17.classList.remove("red");
            pick15.classList.add("blue");


        }
    }

    function userPick7(picInput, arrow) {
        if (picInput.files.length > 0) {

            pic.innerHTML = "Start the Match";
            pick15.classList.remove("blue")
        }
    }




    function previewBeforeUpload(id, arrowElement, index) {
        if (!uploadCounts[id]) {
            uploadCounts[id] = 0;
        }

        const fileInput = document.querySelector("#" + id);
        if (!fileInput) {
            console.error("File input with id " + id + " not found.");
            return;
        }

        fileInput.addEventListener("change", function(e) {
            if (e.target.files.length === 0) {
                return;
            }
            uploadCounts[id]++; // Increment upload count for the specific uploader

            if (uploadCounts[id] >= 2) { // Check if upload count is greater than or equal to 2
                if (id === "file-20") {
                    userPick(e.target, arrowElement);
                } else if (id === "file-11" || id === "file-12") {
                    if (uploadCounts["file-11"] > 1 && uploadCounts["file-12"] > 1) {
                        userPick2([e.target], arrowElement);


                    }

                } else if (id === "file-18" || id === "file-19") {
                    if (uploadCounts["file-18"] > 1 && uploadCounts["file-19"] > 1) {
                        userPick3([e.target], arrowElement);


                    }

                } else if (id === "file-13") {
                    userPick4(e.target, arrowElement);
                } else if (id === "file-14") {
                    userPick5(e.target, arrowElement);
                } else if (id === "file-16" || id === "file-17") {
                    if (uploadCounts["file-16"] > 1 && uploadCounts["file-17"] > 1) {
                        userPick6([e.target], arrowElement);


                    }

                } else if (id === "file-15") {
                    userPick7(e.target, arrowElement);
                }



            }

            if (uploadCounts[id] >= 1) {
                if (id === "file-10") {
                    let Ban1 = document.querySelector("#file-10");
                    userBan(Ban1, arrowElement);
                } else if (id === "file-1") {
                    let Ban2 = document.querySelector("#file-1");
                    userBan2(Ban2, arrowElement);
                } else if (id === "file-9") {
                    let Ban3 = document.querySelector("#file-9");
                    userBan3(Ban3, arrowElement);
                } else if (id === "file-2") {
                    let Ban4 = document.querySelector("#file-2");
                    userBan4(Ban4, arrowElement);
                } else if (id === "file-8") {
                    let Ban5 = document.querySelector("#file-8");
                    userBan5(Ban5, arrowElement);
                } else if (id === "file-3") {
                    let Ban6 = document.querySelector("#file-3");
                    userBan6(Ban6, arrowElement);
                } else if (id === "file-4") {
                    let Ban7 = document.querySelector("#file-4");
                    userBan7(Ban7, arrowElement);
                } else if (id === "file-7") {
                    let Ban8 = document.querySelector("#file-7");
                    userBan8(Ban8, arrowElement);
                } else if (id === "file-5") {
                    let Ban9 = document.querySelector("#file-5");
                    userBan9(Ban9, arrowElement);
                } else if (id === "file-6") {
                    let Ban10 = document.querySelector("#file-6");
                    userBan10(Ban10, arrowElement);
                }
            }




            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#" + id + "-preview img").src = url;
        });
    }

    for (let i = 1; i <= 20; i++) {
        previewBeforeUpload("file-" + i, document.getElementById("icon"));
    }
}

// the end of the redStart

// first uploaded
function upload(id) {
    document.querySelector("#" + id).addEventListener("change", function(e) {
        if (e.target.files.length == 0) {
            return;
        }
        uploadCounts[id]++;
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        document.querySelector("#" + id + "-preview img").src = url;

    });
}

for (let i = 1; i <= 20; i++) {
    upload("file-" + i);
}