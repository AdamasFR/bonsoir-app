/**
 * Bonsoir ou Bonjour
 * - Renvoi la bonne salutation selon l'heure d'accès a l'API
 */

class Bonsoir {
      constructor(locale) {
            this.locale = locale;
      }

      /**
       * Entry Point
       */
      getCurrentSalutation() {
            var hourOfDay = new Date().getHours();
            var res;
            this.locale.salutations.forEach(element => {
                  if (element.timeStart <= hourOfDay && element.timeStop > hourOfDay) {
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
};