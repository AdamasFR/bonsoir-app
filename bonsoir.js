/**
 * Bonsoir ou Bonjour
 * - Renvoi la bonne interjection selon l'heure d'accès a l'api
 */
var Bonsoir = $.inherit({
      interjectionSoir: [{
            fullname: "Bonsoir",
            abbrv: "bsr",
            startHour: "1800",
            endHour: "0600"
      }],
      interjectionJournee: [{
            fullname: "Bonjour",
            abbrv: "bjr",
            startHour: "0600",
            endHour: "1800"
      }],
      interjectionsMap: [
            [interjectionJournee],
            [interjectionSoir]
      ],
      locale: "FR",
      /**
       * Point d'entrée
       */
      interjection: function () {
            // interjection retournée par défaut
            interjectionReturned = interjectionsMap[0].fullname;
            return interjectionReturned;
      }
});

var bonsoir = new Bonsoir();