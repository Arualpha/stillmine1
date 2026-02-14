// Assuming your JSON file is named 'data.json' in the src folder
import data from './config.json'; 

const root = document.getElementById('root');

// Simple function to render the UI
function renderApp() {
  root.innerHTML = `
    <div style="text-align: center; font-family: ${data.theme.fontFamily}; padding: 50px; color: white;">
      <img src="${data.media.mainBearGif}" alt="Bear" style="width: 200px; border-radius: 20px;" />
      <h1>${data.content.title}</h1>
      <p>${data.content.subtitle}</p>
      
      <div style="margin-top: 20px;">
        <button id="yesBtn" style="background: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; font-weight: bold; margin-right: 10px;">
          ${data.content.yesButtonText}
        </button>
        <button id="noBtn" style="background: #ff4d8d; color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer;">
          ${data.content.noButtonText}
        </button>
      </div>
    </div>
  `;

  // Basic "Yes" button click event
  document.getElementById('yesBtn').addEventListener('click', () => {
    alert(data.content.successMessage);
  });
}

renderApp();
