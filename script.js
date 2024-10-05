const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const sentence = document.getElementById('sentenceCount');
const paragraph = document.getElementById('paragraphCount');

textInput.addEventListener('input', function () {
    const text = textInput.value.trim();
    const words = text.match(/\b\w+\b/g) || [];
    wordCount.textContent = words.length;
    charCount.textContent = text.length;
    const sentences = text.split(".") .filter(sentence => sentence.trim().length > 0);
    sentence.textContent = sentences.length;
    const paragraphs = text.split(/\n+/) .filter(paragraph => paragraph.trim().length > 0);
    paragraph.textContent = paragraphs.length;
});