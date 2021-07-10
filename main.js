function getData(){
				var url= 'https://api.dictionaryapi.dev/api/v2/entries/en_US/'+ document.getElementById('input').value;
				fetch(url).then((response)=>{
								return response.text();
				}).then((data)=>{
								/* get JSON object */
								const obj = JSON.parse(data)
								console.log(obj)
								var stringjson = JSON.stringify(obj[0].meanings[0].definitions[0].definition);
								var example = JSON.stringify(obj[0].meanings[0].definitions[0].example);
							 var part =	JSON.stringify(obj[0].meanings[0].partOfSpeech);
								var stringjson2 = JSON.stringify(obj);
								console.log(stringjson)
								console.log(stringjson2)
								document.getElementById('change').innerHTML=stringjson;
								document.getElementById('part').innerHTML=part;
		document.getElementById('uses').innerHTML=example;					
				})
				

}

function pressed(){
								
				
}

document.getElementById('btn').addEventListener('click',pressed)

document.getElementById('btn').addEventListener('click',getData)
