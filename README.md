# Multi-Language Text-to-Speech Translator

A web app that translates user-entered text into multiple languages and converts the translated text into spoken audio — all in one simple flow.

## Features

- Real-time text translation using the Google Translate API
- Converts translated text into natural-sounding speech using gTTS (Google Text-to-Speech)
- Simple, responsive web interface for entering text, selecting a target language, and playing back the audio
- Built with a lightweight Flask backend

## Tech Stack

- **Backend:** Python, Flask
- **Translation:** Google Translate API
- **Text-to-Speech:** gTTS (Google Text-to-Speech)
- **Frontend:** HTML, CSS, JavaScript

## How It Works

1. User enters text and selects a target language
2. The backend translates the text using the Google Translate API
3. The translated text is converted to speech using gTTS
4. The generated audio is sent back and played directly in the browser

## Running Locally

```bash
# Clone the repo
git clone https://github.com/Pulipoojasree/Multi-Language-Text-To-Speech-Translator.git
cd Multi-Language-Text-To-Speech-Translator

# Install dependencies
pip install flask googletrans gTTS

# Run the app
python app.py
```

Then open `http://localhost:5000` in your browser.

## Author

**Puli Pooja Sree**
[GitHub](https://github.com/Pulipoojasree) · [LinkedIn](https://www.linkedin.com/in/pooja-sree-puli-894512407/)
