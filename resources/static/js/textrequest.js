const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

module.exports.lerComentarios = function(id) {

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: 'GBggpJhC6njXJCQ1WYHzX7x2K6--6_LizFI9nXDrtRAv' }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/e59448d3-b384-4ff0-8bbb-dfce101e8977'
});

const params = {
  text: id,
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