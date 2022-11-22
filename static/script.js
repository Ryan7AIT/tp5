// Au d�but de script.js
// D�clarez une variable "lignes", et l'initialiser � 0
lignes = 0;

// Au d�but de script.js
// D�clarez une variable "total_points", et l'initialiser � 0

total_points=0;

persons = [
	{
		nom:"nom-1",
		prenom:"prenom-1",
		points:5
	},
	{
		nom:"nom-2",
		prenom:"prenom-2",
		points:10
	},
	{
		nom:"nom-3",
		prenom:"prenom-3",
		points:15
	}			
]


// Appel de init()
init();

function init(){	
	// Utilisez la boucle for..of vue en cours 
	// pour parcourir les objets du tableau persons
	// et appeller doInsert sur chaque objet
	
	// A completer
	/*
		for(... of ...){
			doInsert(...);
		}
	*/

	
	// for(person of persons){
	// 	doInsert(person.nom, person.prenom, person.points);
	// }
}

function doInsertRowTable(num, nom, prenom, points){
	
	// R�cup�rer l'�l�ment tableau
	// const table = (A COMPLETER)
	const table = document.getElementsByTagName("table")[0];
	
	// Cr�er un �l�ment de type tr (ligne de tableau)
	// row = (A COMPLETER)
	row = document.createElement("tr");
	
	// Affecter � l'�l�ment row, la valeur "row" � son attribut "class", 
	// en utilisant la m�thode setAttribute
	// row.(A COMPLETER)
	row.setAttribute("class", "row");
	
	// Cr�er 5 �l�ments de type td (colonne de tableau)
	// col1 = (A COMPLETER)
	// col2 = (A COMPLETER)
	// col3 = (A COMPLETER)
	// col4 = (A COMPLETER)
	// col5 = (A COMPLETER)
	col1 = document.createElement("td");
	col2 = document.createElement("td");
	col3 = document.createElement("td");
	col4 = document.createElement("td");
	col5 = document.createElement("td");
	
	/*
		Remplir le contenu de chaque colonne avec les param�tres de la fonction
		num, nom, prenom, points, en utilisant innerText
		exemple:
			col1.innerText = num;
			
		remarqie:
			la derni�re colonne doit contenir un �l�ment input, 
			dont l'attribut type vaut checkbox
	*/
	// A compl�ter: REMLISSAGE DU CONTENU
	col1.innerText = num;
	col2.innerText = nom;
	col3.innerText = prenom;	
	col4.innerText = points;
	chbox = document.createElement("input");
	chbox.setAttribute("type", "checkbox");
	col5.append(chbox);
		
	/*
		En utilisant la m�thode setAttribute
		affecter les classes correspondantes pour chaque colonne
		exemple:
			col1.setAttribute("class", "col_number");		
	*/
	// A compl�ter: AFFECTATION DES CLASSES	
	col1.setAttribute("class", "col_number");
	col2.setAttribute("class", "col_text");	
	col3.setAttribute("class", "col_text");
	col4.setAttribute("class", "col_number");	
	col5.setAttribute("class", "col_chkbox");	
	
	//  A compl�ter: RAJOUTER LES COLONNES A LA LIGNE row avec la m�thode append()
	row.append(col1);
	row.append(col2);
	row.append(col3);
	row.append(col4);
	row.append(col5);	
	
	//  A compl�ter: RAJOUTER LA LIGNE row AU TABLEAU table
	table.append(row);
}

function doInsert(nom, prenom, points){	
	lignes++;
	num = lignes;
	total_points = total_points + points;			
	doInsertRowTable(num, nom, prenom, points);		
	update_summary();
}

function consoleTableau(){
	// A compl�ter
	console.log(persons);
}

function update_summary(){	
	// R�cup�rer l'�l�ment id = p1
	// element_lignes = ...(A COMPLETER)
	
	
	// R�cup�rer l'�l�ment id = p3
	// element_points = ...(A COMPLETER)
	
	
	// Avec innerText, modifiez le contenu de element_lignes
	// pour afficher le nombre de lignes (variables lignes)
	// element_lignes...(A COMPLETER)
	
	
	// Avec innerText, modifiez le contenu de element_points
	// pour afficher le total des points (variables total_points)
	// element_points...(A COMPLETER)

	element_lignes = document.getElementById("p1");
	element_points = document.getElementById("p3");
	element_lignes.innerText = lignes+" ligne(s)";
	element_points.innerText = "Total point(s)= "+total_points;
}

function doNewData(){		
	/*
	 if(nom est une chaine vide
	    ou prenom est une chaine vide
		ou points est vide)
			Aide:(pour points, utilisez (Number.isNaN(points)) 
				   qui retourne true si l'entier est vide, false sinon))
		{		   
			// corps du if
			utilisez la m�thode alert de window pour afficher le message
			"Formulaire incomplet !"
		} else{
			// corps du else
			Faire le traitement normal d'ajout			
		}
	*/
	
	
	elt_nom = document.getElementById("form_nom");
	elt_prenom = document.getElementById("form_prenom");
	elt_points = document.getElementById("form_points");
	
	nom = elt_nom.value;
	prenom = elt_prenom.value;
	points = parseInt(elt_points.value);
		
	if(nom=="" || prenom=="" || Number.isNaN(points))
		alert("Formulaire incomplet !");
	else{					
		doInsert(nom, prenom, points);
		persons.push({nom, prenom, points});

		elt_nom.value = "";
		elt_prenom.value = "";
		elt_points.value = "";
			
	}
}

function deleteRow(){
	if(lignes=0){
		alert("Tableau d�j� vide !");
	}else{		
		table = document.getElementsByTagName("table")[0];
		chkbox_list = table.querySelectorAll(".col_chkbox input");
		isOneChecked=false;
		for(let i=0; i<chkbox_list.length; i++){			
			if(chkbox_list[i].checked)
				isOneChecked = true;
		}
		if(isOneChecked!=true)
			alert("S�lectionnez au moins une ligne !");
		else{
				if (confirm('Voulez-vous vraiment supprimer les lignes ?')) {
				table = document.getElementsByTagName("table")[0];
				rows = table.getElementsByClassName("row");
				let i=0;
				while(i<rows.length){
					if(rows[i].lastChild.firstChild.checked){
						total_points = total_points - parseInt(rows[i].childNodes[3].innerText);
						rows[i].remove();	
						persons.splice(i,1);	
						i--;
						lignes--;
					}	
					i++;
				}
				alert("Ligne supprim�e avec succ�s !");				
				update_summary();				
			}
		}
	}
}



