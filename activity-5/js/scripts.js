var data = [
    {
        name: 'SettingsSync',
        description:'Syncing synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines.',
        author: 'Shan Khan',
        url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
        downloads: 4033859,
        stars: 2345, 
        price: 10.50,
        selector: 'package-1'

    },

    {
        name: 'GitLens',
        description:'GitLens enables you to visualize code authorship within VS Code. You can browse and explore the history of a file, view a git blame annotation for each file line.',
        author: 'GitKraken',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 35735039,
        stars: 5372, 
        price: 4.50,
        selector: 'package-2'

    }

];

function Package(data){
    this.name = data.name; 
    this.description = data.description;
    this.author = data.author,
    this.url = data.url;
    this.downloads = data.downloads; 
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function(){
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function(){
    var today = new Date();
    return today.toDateString();    
};

var displayDate = function() {
    var dateElement = document.getElementById("date");
    dateElement.textContent = `Published on ${getTodaysDate()}`;
};

displayDate();

var getEl = function(id){
    return document.getElementById(id);
}
//fix 
//@param {Package} package
//@return {void} 

var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var init = function() {
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
}

var SettingsSync = new Package(data[0]);
var GitLens = new Package(data[1]);

for (var i = 0; i < data.length; i++) {
    var package = new Package(data[i]);
    writePackageInfo(package);
}

init();






