/**
 * Bonsoir ou Bonjour
 * - Renvoi la bonne interjection selon l'heure d'accès a l'api
 */
class Bonsoir {
      interjectionSoir = ["Bonsoir", "bsr", "1800", "0600"];
      interjectionJournee = ["Bonjour", "bjr", "0600", "1800"];
      interjectionsMap = [interjectionJournee, interjectionSoir];
      locale = "FR";
      /**
       * Point d'entrée
       */
      interjection() {
            // interjection retournée par défaut
            interjectionReturned = interjectionsMap[0].fullname;
            return interjectionReturned;
      };
};

var bonsoir = new Bonsoir();

console.log(bonsoir.interjection());