let map = document.querySelector(".map");
let map_popup = document.querySelector(".map-popup");

if (map_popup){
	let map_close = map_popup.querySelector(".button-close");
	map.addEventListener("click", function(evt){
		evt.preventDefault();
		map_popup.classList.add("map-show");
	})

	map_close.addEventListener("click", function(evt){
		evt.preventDefault();
		map_popup.classList.remove("map-show");
	})
}

let writeus = document.querySelector(".write-us-button");
let writeus_popup = document.querySelector(".write-us");

if (writeus && writeus_popup){
	let writeus_close = writeus_popup.querySelector(".button-close");
	let writeus_name = writeus_popup.querySelector("#writeus-name");
	let writeus_email = writeus_popup.querySelector("#writeus-email");
	let writeus_letter = writeus_popup.querySelector("#writeus-letter");
	let writeus_submit = writeus_popup.querySelector(".write-us-button");
	let writeus_form = writeus_popup.querySelector("form");

	let is_storage_support = true;
	let storage_name = "";
	let storage_email = "";

	try{
		storage_name = localStorage.getItem("Device_name");
		storage_email = localStorage.getItem("Device_email");
	}
	catch{
		is_storage_support = false;
	}

	function action_submit(evt){
		if (!writeus_name.value || !writeus_email.value || !writeus_letter.value){
			evt.preventDefault();
			writeus_popup.classList.remove("modal-error");
			writeus_popup.offsetWidth = writeus_popup.offsetWidth;
			writeus_popup.classList.add("modal-error");
		}
		else if (is_storage_support){
			localStorage.setItem("Device_name",writeus_name.value);
			localStorage.setItem("Device_email",writeus_email.value);
		}
	}

	writeus.addEventListener("click", function(evt){
		evt.preventDefault();
		writeus_popup.classList.add("write-us-show");
		if (storage_name && storage_email){
			writeus_name.value = storage_name;
			writeus_email.value = storage_email;
			writeus_letter.focus();
		}
		else if (storage_name){
			writeus_name = storage_name;
			writeus_email.focus();
		}
		else{
			writeus_name.focus();
		}		
	})
	writeus_close.addEventListener("click", function(evt){
		evt.preventDefault();
		writeus_popup.classList.remove("write-us-show");
		writeus_popup.classList.remove("modal-error");
	})
	writeus_submit.addEventListener("click", action_submit);
	writeus_submit.addEventListener("submit", action_submit);
}