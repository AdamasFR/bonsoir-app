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
            this.timeStart = timeStart != null ? timeStart : 0;
            this.timeStop = timeStop != null ? timeStop : 0;
      }
}

class Bonsoir {
      constructor() {
            this.salutationMorning = new Salutation("Bonjour", "bjr", 6, 11);
            this.salutationMidDay = new Salutation("Bonjour", "bjr", 11, 18);
            this.salutationTwilight = new Salutation("Bonsoir", "bsr", 18, 0);
            this.salutationNight = new Salutation("Bonne Nuit", "bnt", 0, 6);
            this.salutationMap = [this.salutationMorning, this.salutationMidDay, this.salutationTwilight, this.salutationNight];
            this.locale = "FR";
      }

      /**
       * Entry Point
       */
      getCurrentSalutation() {
            var hourOfDay = new Date().getHours();
            var res = new Salutation();
            this.salutationMap.forEach(element => {
                  if (element.timeStart <= hourOfDay && element.timeStop >= hourOfDay) {
                        res = element;
                  }
            });
            return res;
      };

      salutation() {
            return this.getCurrentSalutation().salutationFull;
      }

      salutationShort() {
            return this.getCurrentSalutation().salutationShort;
      }

      getLocale() {
            return this.locale;
      }
};

var bonsoir = new Bonsoir();