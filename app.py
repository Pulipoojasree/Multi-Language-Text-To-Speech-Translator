from flask import Flask, render_template, request, jsonify
from googletrans import Translator
from langdetect import detect
from gtts import gTTS
import os
import uuid

app = Flask(__name__)

translator = Translator()

# Language mapping
lang_map = {
    'te': 'te',
    'hi': 'hi',
    'ma': 'mr',
    'sp': 'es',
    'ge': 'de'
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text = data.get('text')
    lang = data.get('language')

    target_lang = lang_map.get(lang, 'en')
    translated = translator.translate(text, dest=target_lang)
    return jsonify({'translated_text': translated.text})



@app.route('/speak', methods=['POST'])
def speak_text():
    data = request.json
    text = data.get('text')

    try:
        lang = detect(text)
    except Exception as e:
        print("Language detection failed:", e)
        lang = 'en'

    try:
        tts = gTTS(text=text, lang=lang)
        filename = f"static/speech_{uuid.uuid4().hex}.mp3"
        tts.save(filename)
        return jsonify({'audio_url': '/' + filename})
    except Exception as e:
        print("gTTS failed:", e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False)
