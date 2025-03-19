
// script.js

let getPrice = function (inHours, isUrgent) {
    let rate = 1500;

    if (isUrgent) {
        inHours /= 2;
        rate *= 2.5;
    }

    if (inHours > 150) {
        rate -= 250;
    }

    return inHours * rate;
}

let getProfitableProject = function (inHours, profit) {
    let urgentProject = getPrice(inHours, true) - profit;
    let ordinaryProject = getPrice(inHours, false);
    let value;
    let expences;

    if (urgentProject < ordinaryProject) {
        value = 'срочный';
        expences = urgentProject;
    } else {
        value = 'обычный';
        expences = ordinaryProject;
    }

    return 'Выгодней ' + value + ' проект. Потратишь на него ' + expences;
};

getProfitableProject(200, 5000);