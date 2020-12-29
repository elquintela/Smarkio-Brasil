const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: 'GBggpJhC6njXJCQ1WYHzX7x2K6--6_LizFI9nXDrtRAv' }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com'
});

module.exports.lerComentarios = function(id) {
const params = {
  text: 'Texto falado Brasil',
  voice: 'pt-BR_IsabelaVoice', // Optional voice
  accept: 'audio/wav'
};
textToSpeech
  .synthesize(params)
  .then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    fs.writeFileSync('audio.wav', repairedFile);
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  
  });
}