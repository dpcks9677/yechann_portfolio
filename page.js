function introViewer() {
    var intro = document.querySelector('#introSection');
    var things = document.querySelector('#thingsSection');
    var contact = document.querySelector('#contactSection');

    intro.style.display = 'block';
    things.style.display = 'none';
    contact.style.display = 'none';
}

function thingsViewer() {
    var intro = document.querySelector('#introSection');
    var things = document.querySelector('#thingsSection');
    var contact = document.querySelector('#contactSection');

    intro.style.display = 'none';
    things.style.display = 'block';
    contact.style.display = 'none';
}

function contactViewer() {
    var intro = document.querySelector('#introSection');
    var things = document.querySelector('#thingsSection');
    var contact = document.querySelector('#contactSection');

    intro.style.display = 'none';
    things.style.display = 'none';
    contact.style.display = 'block';
}