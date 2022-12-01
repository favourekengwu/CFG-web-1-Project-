function getRadioValue( radioArray ) {
			  var i;
			  for ( i = 0; i < radioArray.length; i++ ) {
				if ( radioArray[ i ].checked ) { 
				  return radioArray[ i ].value;
				  }
				}
				return "";
			  } 
			  
			function getSelectedValue( selectList ) {
			  return selectList[ selectList.selectedIndex ].value;
			}
			
			function getSelectedText( selectList ) {
			   return selectList.options[ selectList.selectedIndex ].text;
			}
			
			function resetOrder() {
				document.getElementId( "order").innerHTML = "";
				}
			
			
			function displayBouquest ( bouquet ) {
				switch ( bouquet ) {
					case "white":
						document.getElementId( "order").innerHTML = document.getElementId( "product1").innerHTML;
						break; 
					case "pink":
						document.getElementId( "order").innerHTML = document.getElementId( "product2").innerHTML;
						break;
					case "red":
						document.getElementId( "order").innerHTML = document.getElementId( "product3").innerHTML;
						break;
					default:
						document.getElementId( "order").innerHTML = "";
					}
				}
			
			function CheckOptions( formRef ) {
			  var orderOption = getSelectedValue (formRef.bouguetOptions);
			  var choseBouquet = getRadioValue (formRef.colour);
			  var white_image = document.getElementId("whiteImg");
			  var pink_image = document.getElementId("pinkImg");
			  var red_image = document.getElementId("redImg");
			  
			  
			  if (order.Option.indexOf("Champagne") != -1) {
				if (white_image.src != "images/white-gift.jpeg") {
					white_image.src = "images/white-gift.jpeg";
					pink_image.src = "images/pink-gift.jpeg";
					red_image.src = "images/red-gift.jpeg";
					}
				}else {
					if (white_image.src != "images/white.jpeg") {
					white_image.src = "images/white.jpeg";
					pink_image.src = "images/pink.jpeg";
					red_image.src = "images/red.jpeg";
					}
				}
				displayBouquet (choseBouquet);			
			  
			  
			}