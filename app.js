/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.ajax
({
  type: "POST",
  url: "https://onesignal.com/api/v1/notifications",
  dataType: 'json',
  headers: {
    "Authorization": "Basic API_KEY",
    "Content-Type": "application/json; charset=utf-8"
  },
  data: { 
  appid="9b9e0fb8-d687-4eae-a47c-0e4faaba4e79"
  contents={en:'enviar'}
  included_segments:['subscribe users']
    },
  success: function enviartexto(){
    alert('Mensaje Enviado'); 
  }
});

