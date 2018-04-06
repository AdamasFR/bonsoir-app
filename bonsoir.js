/**
 * Bonsoir ou Bonjour
 * - Renvoi la bonne interjection selon l'heure d'accès a l'api
 */
var Bonsoir = $.inherit(
	{
        interjectionSoir : ["Bonsoir","1800","0600"],
        interjectionJournee : ["Bonjour","0600","1800"],
        interjectionsMap : [[interjectionSoir],[interjectionJournee]],
        locale : "FR",
        /**
         * Point d'entrée
         */
		interjection : function()
		{
            // interjection retournée par défaut
            interjectionReturned = interjectionJournee;
            return interjectionReturned;
		}
	});

var bonsoir = new Bonsoir();
