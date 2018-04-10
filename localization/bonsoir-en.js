/**
 * Bonsoir English
 * - Returns Good Evening or Good day
 */
class BonsoirEnglish extends Bonsoir {
    interjectionDay = [{
        fullname: "Good Day",
        abbrv: "gd day",
        startHour: "0600",
        endHour: "1800"
    }];
    interjectionNight = [{
        fullname: "Good Evening",
        abbrv: "gd ev",
        startHour: "1800",
        endHour: "0600"
    }];
    interjectionsMap = [
        [interjectionDay],
        [interjectionNight]
    ];
    locale = "EN";
};
var bonsoir = new BonsoirEnglish();