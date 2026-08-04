// =====================================
// DeKUT Smart Library Hub JavaScript
// =====================================


// ===============================
// DEMO SEARCH FUNCTION
// ===============================

function searchResource(){

    let searchInput = document.getElementById("searchInput");

    if(searchInput){

        let value = searchInput.value.toLowerCase().trim();


        if(value === ""){

            alert("Please enter a resource to search.");

        }

        else if(
            value.includes("book") ||
            value.includes("marketing") ||
            value.includes("programming")
        ){

            alert(
                "Resources found!\n\n" +
                "✓ Academic Books\n" +
                "✓ E-books\n" +
                "✓ Related Journals\n\n" +
                "Visit the Resources page for more details."
            );

        }

        else if(
            value.includes("journal") ||
            value.includes("research")
        ){

            alert(
                "Journal resources found!\n\n" +
                "You can access scholarly articles and research papers."
            );

        }

        else if(
            value.includes("past") ||
            value.includes("exam")
        ){

            alert(
                "Past papers available.\n\n" +
                "Select your course from the Past Papers section."
            );

        }

        else{

            alert(
                "No exact match found.\n\n" +
                "Try searching for books, journals, e-books, or past papers."
            );

        }

    }

}


// ===============================
// AI ASSISTANT DEMO
// ===============================


function sendMessage(){

    let input = document.getElementById("userMessage");
    let chatBox = document.getElementById("chatBox");


    if(input && chatBox){

        let message = input.value.toLowerCase().trim();


        if(message === ""){
            return;
        }


        // User message

        chatBox.innerHTML +=
        `
        <div class="user-message">
            ${input.value}
        </div>
        `;



        let reply = "";


        // AI Responses

        if(
            message.includes("book") ||
            message.includes("marketing")
        ){

            reply =
            "You can find marketing books in the Business section of the library.";

        }

        else if(
            message.includes("ebook") ||
            message.includes("e-book")
        ){

            reply =
            "Go to Resources → E-books to access available digital books.";

        }

        else if(
            message.includes("journal")
        ){

            reply =
            "Academic journals can be accessed through the Journals section.";

        }

        else if(
            message.includes("past")
        ){

            reply =
            "Past examination papers are available under Resources → Past Papers.";

        }

        else if(
            message.includes("apa") ||
            message.includes("reference")
        ){

            reply =
            "The library provides citation guides including APA referencing support.";

        }

        else if(
            message.includes("location") ||
            message.includes("where")
        ){

            reply =
            "Use the Library Guide page to view the library map and resource locations.";

        }

        else{

            reply =
            "I can help you find books, journals, e-books, past papers, and library services.";

        }



        // AI message

        setTimeout(()=>{

            chatBox.innerHTML +=
            `
            <div class="ai-message">
                ${reply}
            </div>
            `;


            chatBox.scrollTop = chatBox.scrollHeight;


        },500);



        input.value = "";

    }

}



// ===============================
// RESOURCE CARD POPUP
// ===============================


function showResource(type){

    alert(
        type +
        " resources are available through the DeKUT Smart Library Hub."
    );

}



// ===============================
// MOBILE NAVIGATION
// ===============================


function toggleMenu(){

    let nav = document.querySelector(".nav-links");


    if(nav){

        nav.classList.toggle("show");

    }

}



// ===============================
// CONTACT FORM DEMO
// ===============================


function submitForm(){

    alert(
        "Thank you for contacting DeKUT Smart Library Hub. " +
        "Your message has been received."
    );

}