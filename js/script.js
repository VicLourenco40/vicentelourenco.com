const identityNameElements = document.getElementsByClassName('identity-name');
const identityNameOtherElements = document.getElementsByClassName('identity-name-other');
const identityImageElements = document.getElementsByClassName('identity-image');
const identitySwitchElements = document.getElementsByClassName('identity-switch');

const identities = {
    vicente: {
        name: 'Vicente Lourenço',
        imageSrc: './images/profile_vicente.jpg',
        style: 'identity-vicente'
    },
    viclourenco: {
        name: 'VicLourenco',
        imageSrc: './images/profile_viclourenco.png',
        style: 'identity-viclourenco'
    }
}

let identity = identities.vicente;

function switchIdentity() {
    const body = document.getElementsByTagName('body')[0];

    const oldIdentity = identity;
    
    identity = identity == identities.vicente ? identities.viclourenco : identities.vicente;

    body.addEventListener('transitionend', () => {
        document.title = identity.name;

        for (let name of identityNameElements) {
            name.textContent = identity.name;
        }

        for (let nameOther of identityNameOtherElements) {
            nameOther.textContent = oldIdentity.name;
        }
    
        for (let image of identityImageElements) {
            image.src = identity.imageSrc;
        }
    })

    body.classList.remove(oldIdentity.style);
    body.classList.add(identity.style);
}

const identitySwitch = identitySwitchElements[0];
identitySwitch.addEventListener('click', (event) => {
    event.preventDefault();
    switchIdentity();
});
