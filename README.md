📌 QR Code Generator

A simple and lightweight QR Code Generator built using HTML, CSS, and JavaScript.
Users can enter any text or link, and the app instantly creates a QR code using a free API.

🚀 Features

✔ Generate QR code from any text or URL

✔ No page reload — works instantly

✔ Uses free QR API

✔ Clean and responsive UI (HTML + CSS)

✔ Beginner-friendly JavaScript code

🖥️ Demo Screenshot

(Add your screenshot here)

![QR Code Generator Screenshot](your-image-link)

📂 Project Structure
/project-folder
│── index.html
│── style.css
│── script.js
│── README.md

🧪 How It Works

The app takes the user input and sends it to:

https://api.qrserver.com/v1/create-qr-code/


Example:

qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;


The generated QR code is displayed instantly without reloading the page.

🛠️ Technologies Used

HTML5 – Page structure

CSS3 – Styling and UI layout

JavaScript (Vanilla) – QR generation logic

📦 Installation & Usage

Clone this repository:

git clone https://github.com/your-username/your-repo-name.git


Open the folder.

Run:

index.html


Enter text or link → Click Generate → QR code appears.
