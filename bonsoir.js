/**
 * Bonsoir ou Bonjour
 * - Renvoi la bonne interjection selon l'heure d'accès a l'api
 */

/**
 * Default Salutation
 */
class Salutation {
      constructor(salutationFull, salutationShort, timeStart, timeStop) {
            this.salutationFull = salutationFull != null ? salutationFull : "Hello";
            this.salutationShort = salutationShort != null ? salutationShort : "hi";
            this.timeStart = timeStart != null ? timeStart : "0000";
            this.timeStop = timeStop != null ? timeStart : "0000";
      }
}

class Bonsoir {
      constructor() {
            this.salutationMorning = new Salutation("Bonjour", "bjr", "0600", "1100");
            this.salutationMidDay = new Salutation("Bonjour", "bjr", "1100", "1800");
            this.salutationTwilight = new Salutation("Bonsoir", "bsr", "1800", "0000");
            this.salutationNight = new Salutation("Bonne Nuit", "bnt", "0000", "0600");
            this.salutationMap = [this.salutationMorning, this.salutationMidDay, this.salutationTwilight, this.salutationNight];
            this.locale = "FR";
      }

      /**
       * Entry Point
       */
      salutation() {
            return this.salutationMap[0].salutationFull;
      };
};

var bonsoir = new Bonsoir();